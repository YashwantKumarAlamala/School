import { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import AdmissionFormModal from "../components/AdmissionFormModal";

const orbDrift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(24px, -18px) scale(1.06); }
  66%       { transform: translate(-18px, 12px) scale(0.95); }
`;
const orbDrift2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(-20px, 16px) scale(1.04); }
  66%       { transform: translate(14px, -10px) scale(0.97); }
`;
const scrollBounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
  50%       { transform: translateX(-50%) translateY(8px); opacity: 1; }
`;
const shimmerText = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  // Subtle parallax on video as user scrolls
  useEffect(() => {
    const onScroll = () => {
      if (videoRef.current) {
        const y = window.scrollY * 0.3;
        videoRef.current.style.transform = `translateY(${y}px) scale(1.08)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AdmissionFormModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <Box sx={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>

        {/* Background Video with parallax */}
        <Box ref={videoRef} component="video" autoPlay loop muted playsInline src="/videos/schoolhero.mp4"
          sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -2, transform: "scale(1.08)", transition: "transform 0.1s linear" }} />

        {/* Gradient overlay — animated */}
        <Box sx={{
          position: "absolute", inset: 0, zIndex: -1,
          background: "linear-gradient(160deg, rgba(21,37,61,0.65) 0%, rgba(21,37,61,0.25) 50%, rgba(21,37,61,0.75) 100%)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 14s ease infinite",
        }} />

        {/* Floating amber orbs */}
        <Box sx={{ position: "absolute", top: "18%", right: "8%", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.2) 0%, transparent 70%)", animation: `${orbDrift} 9s ease-in-out infinite`, pointerEvents: "none", zIndex: 0 }} />
        <Box sx={{ position: "absolute", bottom: "22%", left: "6%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,142,30,0.15) 0%, transparent 70%)", animation: `${orbDrift2} 12s ease-in-out infinite 1.5s`, pointerEvents: "none", zIndex: 0 }} />
        <Box sx={{ position: "absolute", top: "55%", right: "25%", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.1) 0%, transparent 70%)", animation: `${orbDrift} 16s ease-in-out infinite 3s`, pointerEvents: "none", zIndex: 0 }} />

        {/* Hero Content */}
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "#fff", px: 2, width: "100%", maxWidth: "880px", zIndex: 1 }}>

          {/* Badge */}
          <Box className="anim-fade-down delay-1" sx={{ display: "inline-block", backgroundColor: "rgba(251,177,35,0.18)", color: "#fbb123", px: 2.5, py: 0.6, borderRadius: "30px", fontSize: "0.75rem", fontFamily: "'Nunito', sans-serif", fontWeight: 700, letterSpacing: "0.14em", mb: 3, border: "1px solid rgba(251,177,35,0.35)" }}>
            CBSE AFFILIATED · ANANTAPUR
          </Box>

          <Typography variant="h1" className="anim-fade-up delay-1" sx={{
            fontWeight: 900, mb: 1.5,
            fontSize: { xs: "2.2rem", md: "3.8rem" },
            fontFamily: "'Nunito', sans-serif",
            lineHeight: 1.15,
            textShadow: "0 4px 24px rgba(0,0,0,0.35)",
          }}>
            Welcome to
          </Typography>

          {/* Shimmer school name — wrapper handles fade-in, inner span handles shimmer */}
          <Box className="anim-fade-up delay-2" sx={{ mb: 2.5 }}>
            <Typography variant="h1" sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3.4rem" },
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.15,
              background: "linear-gradient(90deg, #fbb123 0%, #f68e1e 30%, #ffe08a 50%, #f68e1e 70%, #fbb123 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: `${shimmerText} 4s linear infinite`,
              textShadow: "none",
            }}>
              Horizon Valley Future School
            </Typography>
          </Box>

          <Typography className="anim-fade-up delay-3" sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            mb: 5, opacity: 0.9,
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}>
            Infinite Possibilities. Inspired Minds.
          </Typography>

          <Box className="anim-fade-up delay-4" sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="contained" onClick={() => setModalOpen(true)} sx={{
              backgroundColor: "#fbb123", color: "#15253d",
              px: 5, py: 1.6, fontWeight: 800,
              fontFamily: "'Nunito', sans-serif",
              borderRadius: "30px", fontSize: "1rem",
              boxShadow: "0 8px 28px rgba(251,177,35,0.5)",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#f68e1e", transform: "translateY(-4px) scale(1.03)", boxShadow: "0 16px 40px rgba(246,142,30,0.55)" },
            }}>
              Apply Now — 2026–27
            </Button>
            <Button variant="outlined" href="#about" sx={{
              borderColor: "rgba(255,255,255,0.6)", color: "#fff",
              px: 4, py: 1.6, fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
              borderRadius: "30px", fontSize: "1rem",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": { borderColor: "#fbb123", color: "#fbb123", backgroundColor: "rgba(251,177,35,0.1)", transform: "translateY(-4px)" },
            }}>
              Explore School
            </Button>
          </Box>
        </Box>

        {/* Scroll indicator */}
        <Box sx={{ position: "absolute", bottom: 32, left: "50%", display: "flex", flexDirection: "column", alignItems: "center", gap: 0.8, animation: `${scrollBounce} 2s ease-in-out infinite`, zIndex: 1 }}>
          <Typography sx={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.8)", fontFamily: "'Nunito', sans-serif", letterSpacing: "0.18em" }}>SCROLL</Typography>
          {/* Animated mouse icon */}
          <Box sx={{ width: 22, height: 34, borderRadius: "11px", border: "2px solid rgba(255,255,255,0.6)", display: "flex", justifyContent: "center", pt: "5px" }}>
            <Box sx={{ width: 3, height: 8, borderRadius: 2, backgroundColor: "#fbb123", animation: "floatY 1.5s ease-in-out infinite" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
