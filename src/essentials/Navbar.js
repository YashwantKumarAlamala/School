import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";

/* ================= DESKTOP NAVBAR ================= */

const NavbarDesktop = ({ menuItems, navigate, currentPath }) => (
  <Box
    sx={{
      position: "fixed",
      top: 20,
      left: "50%",
      transform: "translateX(-50%)",
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      px: 6,
      py: 1.5,
      zIndex: 1300,
      backdropFilter: "none",
      WebkitBackdropFilter: "none",
      background: "#ffffff",
      borderRadius: "40px",
      border: "1px solid rgba(21,37,61,0.08)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    }}
  >
    <Box
      component="img"
      src="/logo/logo.jpg"
      alt="Horizon Valley School"
      sx={{ height: 110, cursor: "pointer" }}
      onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
    />

    <Box sx={{ display: "flex", gap: 4 }}>
      {menuItems.map((item) => {
        const isActive = currentPath === item.path;
        return (
          <Typography
            key={item.label}
            onClick={() => navigate(item.path)}
            sx={{
              cursor: "pointer",
              fontWeight: isActive ? 800 : 700,
              color: isActive ? "#fbb123" : "#15253d",
              borderBottom: isActive ? "2px solid #fbb123" : "2px solid transparent",
              pb: 0.3,
              transition: "0.3s",
              "&:hover": { opacity: 0.7 },
            }}
          >
            {item.label}
          </Typography>
        );
      })}
    </Box>
  </Box>
);

/* ================= MOBILE NAVBAR ================= */

const NavbarMobile = ({
  menuItems,
  mobileOpen,
  toggleDrawer,
  navigate,
  currentPath,
}) => {
  return (
    <>
      {/* Floating Glass Navbar */}
      <Box
        sx={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 1.2,
          zIndex: 1400,
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          background: "#ffffff",
          borderRadius: "40px",
          border: "1px solid rgba(21,37,61,0.08)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          component="img"
          src="/logo/logo.jpg"
          alt="Horizon Valley School"
          sx={{ height: 65, cursor: "pointer" }}
          onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
        />

        <IconButton onClick={toggleDrawer} sx={{ color: "#15253d" }} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </IconButton>
      </Box>

      {/* Background Blur Overlay */}
      <Fade in={mobileOpen}>
        <Box
          onClick={toggleDrawer}
          sx={{
            position: "fixed",
            inset: 0,
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(0,0,0,0.15)",
            zIndex: 1200,
          }}
        />
      </Fade>

      {/* Floating Panel */}
      <Fade in={mobileOpen} timeout={250}>
        <Box
          sx={{
            position: "fixed",
            top: 95,
            left: "50%",
            transform: mobileOpen
              ? "translateX(-50%) scale(1)"
              : "translateX(-50%) scale(0.95)",
            opacity: mobileOpen ? 1 : 0,
            transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
            width: "92%",
            zIndex: 1300,
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "35px",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
            py: 2,
          }}
        >
          <List sx={{ px: 3 }}>
            {menuItems.map((item, index) => {
              const isActive = currentPath === item.path;
              return (
                <Box key={item.label}>
                  <ListItem disablePadding>
                    <ListItemText
                      primary={item.label}
                      onClick={() => {
                        navigate(item.path);
                        toggleDrawer();
                      }}
                      primaryTypographyProps={{
                        sx: {
                          textAlign: "center",
                          py: 2,
                          fontSize: "1.2rem",
                          fontWeight: isActive ? 700 : 600,
                          color: isActive ? "#fbb123" : "#15253d",
                          cursor: "pointer",
                          borderRadius: "18px",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.6)",
                            transform: "scale(1.03)",
                          },
                        },
                      }}
                    />
                  </ListItem>
                  {index !== menuItems.length - 1 && (
                    <Divider sx={{ opacity: 0.3 }} />
                  )}
                </Box>
              );
            })}
          </List>
        </Box>
      </Fade>
    </>
  );
};

/* ================= MAIN NAVBAR ================= */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Campuses", path: "/campuses" },
    { label: "Admissions", path: "/admissions" },
    { label: "Campus Life", path: "/campuslife" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return isMobile ? (
    <NavbarMobile
      menuItems={menuItems}
      mobileOpen={mobileOpen}
      toggleDrawer={toggleDrawer}
      navigate={navigate}
      currentPath={location.pathname}
    />
  ) : (
    <NavbarDesktop menuItems={menuItems} navigate={navigate} currentPath={location.pathname} />
  );
};

export default Navbar;
