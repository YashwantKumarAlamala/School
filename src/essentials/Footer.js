import React from "react";
import { Box, Typography, Grid, Divider, useMediaQuery, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";

const headingSx = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 800,
  fontSize: "0.78rem",
  letterSpacing: "0.14em",
  color: "#fbb123",
  mb: 1.5,
  textTransform: "uppercase",
};

const bodySx = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "0.88rem",
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.75,
};

const linkSx = {
  fontFamily: "'Nunito', sans-serif",
  fontSize: "0.88rem",
  color: "rgba(255,255,255,0.65)",
  cursor: "pointer",
  display: "block",
  mb: 0.9,
  transition: "color 0.2s ease",
  "&:hover": { color: "#fbb123" },
};

const iconRowSx = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1,
  mb: 1.4,
};

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Campuses", path: "/campuses" },
  { label: "Admissions", path: "/admissions" },
  { label: "Campus Life", path: "/campuslife" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <Box component="footer" sx={{ backgroundColor: "#15253d", pt: { xs: 6, md: 8 }, pb: 3, px: { xs: 3, md: 8 } }}>

      {/* ── MAIN GRID ── */}
      <Grid container spacing={{ xs: 4, md: 6 }} columnSpacing={{ md: 10 }} sx={{ mb: { xs: 4, md: 6 }, "& .MuiGrid-item": { pl: { md: "80px" } } }} justifyContent="center">

        {/* Col 1 — Brand */}
        <Grid item xs={12} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, textAlign: { xs: "center", md: "left" } }}>
          <Box sx={{ display: "inline-block", backgroundColor: "#fff", borderRadius: "16px", p: 1, mb: 1.5 }}>
            <Box component="img" src="/logo/logo.jpg" alt="Horizon Valley School" sx={{ height: 70, display: "block" }} />
          </Box>
          <Typography sx={{ ...bodySx, fontSize: "0.85rem", maxWidth: 220 }}>
            Nurturing confident, compassionate, and capable young leaders since 1998.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 0.8 }}>
            {[
              { icon: <FacebookIcon fontSize="small" />, href: "https://facebook.com/horizonvalleyatp" },
              { icon: <InstagramIcon fontSize="small" />, href: "https://instagram.com/horizonvalleyatp" },
              { icon: <TwitterIcon fontSize="small" />, href: "https://twitter.com" },
            ].map((s, i) => (
              <Box key={i} component="a" href={s.href} target="_blank" rel="noopener noreferrer" sx={{
                width: 34, height: 34, borderRadius: "10px",
                backgroundColor: "rgba(251,177,35,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fbb123", cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": { backgroundColor: "#fbb123", color: "#15253d" },
              }}>{s.icon}</Box>
            ))}
          </Box>
        </Grid>

        {/* Col 2 — Quick Links */}
        <Grid item xs={12} md={2} sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={headingSx}>Quick Links</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "1fr" }, gap: 0 }}>
            {quickLinks.map((l) => (
              <Typography key={l.label} sx={linkSx} onClick={() => { navigate(l.path); window.scrollTo(0, 0); }}>
                {l.label}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Col 3 — School Address */}
        <Grid item xs={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={headingSx}>School Address</Typography>
          <Box sx={iconRowSx}>
            <LocationOnIcon sx={{ fontSize: 18, color: "#fbb123", mt: 0.3, flexShrink: 0 }} />
            <Typography sx={bodySx}>
              Madhura Nagar Road No.3,<br />
              Near Adarsha College of Nursing,<br />
              Kalyandurgam Road,<br />
              Anantapur – 515002
            </Typography>
          </Box>
          <Typography sx={{ ...headingSx, mt: 1.5 }}>Enquiry Office</Typography>
          <Box sx={iconRowSx}>
            <LocationOnIcon sx={{ fontSize: 18, color: "#fbb123", mt: 0.3, flexShrink: 0 }} />
            <Typography sx={bodySx}>
              SV Degree & PG College,<br />
              12-3-415, Jesus Nagar,<br />
              Anantapur – 515001
            </Typography>
          </Box>
        </Grid>

        {/* Col 4 — Contact */}
        <Grid item xs={12} md={4}>
          <Typography sx={headingSx}>Get in Touch</Typography>
          <Box sx={iconRowSx}>
            <PhoneIcon sx={{ fontSize: 18, color: "#fbb123", mt: 0.3, flexShrink: 0 }} />
            <Box>
              <Typography sx={bodySx}>7075098989</Typography>
              <Typography sx={bodySx}>7075198989</Typography>
            </Box>
          </Box>
          <Box sx={iconRowSx}>
            <EmailIcon sx={{ fontSize: 18, color: "#fbb123", mt: 0.3, flexShrink: 0 }} />
            <Typography sx={bodySx}>horizonvalleyatp@gmail.com</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: "#fbb123", mb: 0.4 }}>
              🎓 Admissions Open 2026–27
            </Typography>
            <Typography sx={{ ...bodySx, fontSize: "0.82rem" }}>
              Seats are limited. Enquire today and secure your child's future.
            </Typography>
          </Box>

          <Box sx={{ mt: 2.5 }}>
            <Typography sx={headingSx}>Follow Us</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                { icon: <FacebookIcon />, label: "Facebook", href: "https://facebook.com/horizonvalleyatp" },
                { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com/horizonvalleyatp" },
                { icon: <TwitterIcon />, label: "Twitter", href: "https://twitter.com" },
              ].map((s, i) => (
                <Box key={i} component="a" href={s.href} target="_blank" rel="noopener noreferrer" sx={{
                  display: "flex", alignItems: "center", gap: 0.8,
                  px: 1.5, py: 0.8, borderRadius: "10px",
                  backgroundColor: "rgba(251,177,35,0.1)",
                  border: "1px solid rgba(251,177,35,0.2)",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  "&:hover": { backgroundColor: "#fbb123", color: "#15253d", borderColor: "#fbb123" },
                }}>
                  <Box sx={{ fontSize: "1rem", display: "flex" }}>{s.icon}</Box>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem" }}>{s.label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* ── DIVIDER ── */}
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />

      {/* ── BOTTOM BAR ── */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 1 }}>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em" }}>
          © 2026 Horizon Valley School. All rights reserved.
        </Typography>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em" }}>
          CBSE Affiliated · Anantapur, Andhra Pradesh
        </Typography>
      </Box>
    </Box>
  );
}
