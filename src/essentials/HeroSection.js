import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AdmissionFormModal from "../components/AdmissionFormModal";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AdmissionFormModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <Box sx={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        {/* Background Video */}
        <Box
          component="video"
          autoPlay loop muted playsInline
          src="/videos/schoolhero.mp4"
          sx={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            objectFit: "cover", zIndex: -2,
          }}
        />

        {/* Dark overlay */}
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(21,37,61,0.55) 0%, rgba(21,37,61,0.3) 50%, rgba(21,37,61,0.7) 100%)", zIndex: -1 }} />

        {/* Amber glow orb */}
        <Box sx={{ position: "absolute", top: "20%", right: "10%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.18) 0%, transparent 70%)", pointerEvents: "none", animation: "floatY 4s ease-in-out infinite" }} />

        {/* Hero Content */}
        <Box sx={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center", color: "#fff", px: 2, width: "100%", maxWidth: "860px",
        }}>
          {/* Badge */}
          <Box className="anim-fade-down delay-1" sx={{ display: "inline-block", backgroundColor: "rgba(251,177,35,0.18)", color: "#fbb123", px: 2.5, py: 0.6, borderRadius: "30px", fontSize: "0.75rem", fontFamily: "'Nunito', sans-serif", fontWeight: 700, letterSpacing: "0.14em", mb: 3, border: "1px solid rgba(251,177,35,0.35)" }}>
            CBSE AFFILIATED · ANANTAPUR
          </Box>

          <Typography variant="h1" className="anim-fade-up delay-2" sx={{
            fontWeight: 900, mb: 2,
            fontSize: { xs: "2.2rem", md: "3.8rem" },
            fontFamily: "'Nunito', sans-serif",
            lineHeight: 1.15,
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}>
            Welcome to
          </Typography>
          <Typography variant="h1" className="anim-fade-up delay-2" sx={{
            fontWeight: 700, mb: 2,
            fontSize: { xs: "2rem", md: "3.4rem" },
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.15,
            color: "#fbb123",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}>
            Horizon Valley Future School
          </Typography>

          <Typography className="anim-fade-up delay-3" sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            mb: 5, opacity: 0.88,
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}>
            Infinite Possibilities. Inspired Minds.
          </Typography>

          <Box className="anim-fade-up delay-4" sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              onClick={() => setModalOpen(true)}
              sx={{
                backgroundColor: "#fbb123", color: "#15253d",
                px: 5, py: 1.6, fontWeight: 800,
                fontFamily: "'Nunito', sans-serif",
                borderRadius: "30px", fontSize: "1rem",
                boxShadow: "0 8px 28px rgba(251,177,35,0.45)",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "#f68e1e", transform: "translateY(-3px)", boxShadow: "0 14px 36px rgba(246,142,30,0.5)" },
              }}
            >
              Apply Now — 2026–27
            </Button>
            <Button
              variant="outlined"
              href="#about"
              sx={{
                borderColor: "rgba(255,255,255,0.6)", color: "#fff",
                px: 4, py: 1.6, fontWeight: 700,
                fontFamily: "'Nunito', sans-serif",
                borderRadius: "30px", fontSize: "1rem",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": { borderColor: "#fbb123", color: "#fbb123", backgroundColor: "rgba(251,177,35,0.08)", transform: "translateY(-3px)" },
              }}
            >
              Explore School
            </Button>
          </Box>
        </Box>

        {/* Bottom scroll indicator */}
        <Box sx={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5, opacity: 0.7, animation: "floatY 2s ease-in-out infinite" }}>
          <Typography sx={{ fontSize: "0.7rem", color: "#fff", fontFamily: "'Nunito', sans-serif", letterSpacing: "0.12em" }}>SCROLL</Typography>
          <Box sx={{ width: 1.5, height: 36, backgroundColor: "#fbb123", borderRadius: 1 }} />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
