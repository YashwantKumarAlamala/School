import React, { useState } from "react";
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
  Slide,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

/* ================= DESKTOP NAVBAR ================= */

const NavbarDesktop = ({ menuItems }) => (
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
      backdropFilter: "blur(20px) saturate(180%)",
      WebkitBackdropFilter: "blur(20px) saturate(180%)",
      background: "rgba(255, 255, 255, 0.4)",
      borderRadius: "40px",
      border: "1px solid rgba(255,255,255,0.7)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    }}
  >
    <Box component="img" src="/schoollo.png" sx={{ height: 65 }} />

    <Box sx={{ display: "flex", gap: 4 }}>
      {menuItems.map((item) => (
        <Typography
          key={item}
          sx={{
            cursor: "pointer",
            fontWeight: 500,
            color: "#111",
            transition: "0.3s",
            "&:hover": { opacity: 0.7 },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  </Box>
);


/* ================= MOBILE NAVBAR ================= */

const NavbarMobile = ({ menuItems, mobileOpen, toggleDrawer }) => {
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
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "40px",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Box component="img" src="/schoollo.png" sx={{ height: 50 }} />

        <IconButton onClick={toggleDrawer} sx={{ color: "#111" }}>
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

      {/* Apple Luxury Floating Panel */}
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
            {menuItems.map((item, index) => (
              <Box key={index}>
                <ListItem disablePadding>
                  <ListItemText
                    primary={item}
                    onClick={toggleDrawer}
                    primaryTypographyProps={{
                      sx: {
                        textAlign: "center",
                        py: 2,
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#111",
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
            ))}
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

  const menuItems = [
    "Home",
    "About Us",
    "Academics",
    "Campuses",
    "Admissions",
    "Campus Life",
    "Contact",
  ];

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return isMobile ? (
    <NavbarMobile
      menuItems={menuItems}
      mobileOpen={mobileOpen}
      toggleDrawer={toggleDrawer}
    />
  ) : (
    <NavbarDesktop menuItems={menuItems} />
  );
};

export default Navbar;
