import React, { useState } from "react";
import { Box, Typography, Container, Button, useTheme, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import AdmissionFormModal from "./AdmissionFormModal";

const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;
const orbDrift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(22px, -16px) scale(1.06); }
  66%       { transform: translate(-16px, 12px) scale(0.95); }
`;
const shimmerLine = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const imageReveal = keyframes`
  from { opacity: 0; transform: scale(1.08); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ================= DESKTOP VERSION ================= */
const HomeDesktop = ({ onOpenModal }) => (
  <>
    {/* FIRST SECTION */}
    <Box sx={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", px: 2, py: 10, overflow: "hidden" }}>

      <Box sx={{ position: "absolute", inset: 0, backgroundImage: "url('/School9.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.6) blur(1px)", transform: "scale(1.05)", animation: `${imageReveal} 1.2s ease forwards` }} />

      <Box sx={{ position: "absolute", top: "10%", right: "6%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.18) 0%, transparent 70%)", animation: `${orbDrift} 9s ease-in-out infinite`, pointerEvents: "none", zIndex: 1 }} />
      <Box sx={{ position: "absolute", bottom: "15%", left: "4%", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,142,30,0.14) 0%, transparent 70%)", animation: `${orbDrift} 13s ease-in-out infinite 2s`, pointerEvents: "none", zIndex: 1 }} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ backdropFilter: "blur(25px) saturate(180%)", WebkitBackdropFilter: "blur(25px) saturate(180%)", background: "rgba(255,255,255,0.47)", borderRadius: "28px", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.45)", p: { xs: 4, md: 6 }, animation: `${float} 8s ease-in-out infinite`, color: "#111" }}>

          <Box sx={{ width: 50, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #fbb123, #f68e1e, #fbb123)", backgroundSize: "200% 100%", animation: `${shimmerLine} 3s linear infinite`, mx: "auto", mb: 3 }} />

          <Typography variant="h3" className="anim-fade-down" sx={{ fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: "#15253d", mb: 4, textAlign: "center", letterSpacing: 1 }}>
            About Our School
          </Typography>

          <Box className="img-hover-zoom" sx={{ borderRadius: "18px", mb: 3, overflow: "hidden", boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}>
            <Box component="img" src="/School9.jpg" alt="School" sx={{ width: "100%", height: "380px", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }} />
          </Box>

          <Typography className="anim-fade-up delay-1" sx={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", textAlign: "center", fontSize: "1.1rem", mb: 4, opacity: 0.9, color: "#15253d" }}>
            "Education breeds Confidence. Confidence breeds Hope. And Hope breeds Peace."
          </Typography>

          <Typography className="anim-fade-up delay-2" sx={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.8, mb: 3, color: "#15253d" }}>
            Horizon Valley School is a brand new institution built with a progressive vision to blend academic excellence with sporting achievement and holistic development.
          </Typography>

          <Typography className="anim-fade-up delay-3" sx={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.8, mb: 3, color: "#15253d" }}>
            Inspired by 23 years of educational excellence since 2002, we are committed to nurturing confident individuals prepared for global opportunities and future leadership.
          </Typography>

          <Typography className="anim-fade-up delay-4" sx={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.8, mb: 5, color: "#15253d" }}>
            With visionary leadership, passionate faculty, and strong parental collaboration, we continue building a legacy rooted in innovation, discipline, and excellence.
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <Button onClick={onOpenModal} className="btn-ripple" sx={{ px: 5, py: 1.4, borderRadius: "30px", background: "rgba(255,255,255,0.25)", backdropFilter: "blur(10px)", color: "#fff", fontFamily: "'Nunito', sans-serif", fontWeight: 700, border: "1px solid rgba(255,255,255,0.4)", textTransform: "none", transition: "all 0.3s ease", "&:hover": { background: "rgba(255,255,255,0.35)", transform: "translateY(-3px)", boxShadow: "0 10px 28px rgba(251,177,35,0.3)" } }}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>

    {/* SECOND SECTION */}
    <Box sx={{ position: "relative", backgroundImage: "url('/bg01.jpg')", backgroundSize: "cover", backgroundPosition: "center", py: 12, px: 2, overflow: "hidden" }}>
      <Box sx={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.6)", backdropFilter: "blur(3px)" }} />
      <Box sx={{ position: "absolute", bottom: -60, right: -60, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.12) 0%, transparent 70%)", animation: `${orbDrift} 11s ease-in-out infinite`, pointerEvents: "none", zIndex: 1 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ display: "flex", gap: 4, justifyContent: "space-between", flexWrap: "nowrap" }}>
          {[
            { title: "Horizon Valley Society", text: "Horizon Valley Society is dedicated to educational excellence, character development, and leadership growth. We aim to build responsible individuals prepared to contribute positively to society." },
            { title: "Vision", text: "Our vision is to inspire young minds to achieve beyond boundaries by fostering confidence and global awareness." },
            { title: "Mission", text: "Our mission is to provide a dynamic learning environment that promotes academic excellence and holistic growth." },
          ].map((card, i) => (
            <Box key={i} className={`scroll-reveal delay-${i + 1}`} sx={{ flex: 1, p: 5, borderRadius: "28px", backdropFilter: "blur(20px) saturate(160%)", background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)", "&:hover": { transform: "translateY(-10px) scale(1.02)", boxShadow: "0 20px 50px rgba(0,0,0,0.2), 0 0 0 2px rgba(251,177,35,0.4)" } }}>
              <Box sx={{ width: 40, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #fbb123, #f68e1e)", mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: "#15253d", mb: 2 }}>{card.title}</Typography>
              <Box sx={{ height: "2px", width: "60px", background: "linear-gradient(to right, #15253d, transparent)", mb: 3 }} />
              <Typography sx={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.8, color: "#15253d" }}>{card.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  </>
);

/* ================= MOBILE VERSION ================= */
const HomeMobile = ({ onOpenModal }) => (
  <>
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", px: 2, py: 8, backgroundImage: "url('/School9.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflow: "hidden" }}>
      <Box sx={{ position: "absolute", top: "8%", right: "4%", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.2) 0%, transparent 70%)", animation: `${orbDrift} 9s ease-in-out infinite`, pointerEvents: "none" }} />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ backdropFilter: "blur(25px)", background: "rgba(255,255,255,0.49)", borderRadius: "26px", p: 5, boxShadow: "0 10px 40px rgba(0,0,0,0.25)", animation: `${float} 8s ease-in-out infinite` }}>
          <Box sx={{ width: 40, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #fbb123, #f68e1e)", mx: "auto", mb: 2.5 }} />

          <Typography variant="h5" className="anim-fade-down" sx={{ fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: "#15253d", mb: 3, textAlign: "center" }}>
            About Our School
          </Typography>

          <Box className="img-hover-zoom" sx={{ borderRadius: "18px", mb: 3, overflow: "hidden", boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}>
            <Box component="img" src="/School9.jpg" alt="School" sx={{ width: "100%", height: "280px", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }} />
          </Box>

          <Typography className="anim-fade-up delay-1" sx={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.9, mb: 3, color: "#15253d" }}>
            Horizon Valley School nurtures confident individuals prepared for global opportunities and leadership.
          </Typography>

          <Typography className="anim-fade-up delay-2" sx={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.9, mb: 4, color: "#15253d" }}>
            We focus on academic excellence, moral values, discipline, and holistic development. Our environment encourages creativity, innovation, and strong character building from an early age.
          </Typography>

          <Button fullWidth onClick={onOpenModal} className="btn-ripple" sx={{ py: 1.3, borderRadius: "28px", background: "rgba(255,255,255,0.3)", backdropFilter: "blur(10px)", color: "#fff", fontFamily: "'Nunito', sans-serif", fontWeight: 700, textTransform: "none", fontSize: "1rem", transition: "all 0.3s ease", "&:hover": { background: "rgba(255,255,255,0.4)", transform: "translateY(-2px)" } }}>
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>

    <Box sx={{ backgroundImage: "url('/bg01.jpg')", backgroundSize: "cover", backgroundPosition: "center", py: 10, px: 2, position: "relative", overflow: "hidden" }}>
      <Box sx={{ position: "absolute", bottom: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.12) 0%, transparent 70%)", animation: `${orbDrift} 11s ease-in-out infinite`, pointerEvents: "none" }} />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {[
            { title: "Horizon Valley Society", text: "Horizon Valley Society is committed to building a strong educational foundation rooted in discipline, leadership, and excellence. We aim to develop responsible citizens who contribute positively to society.", bg: "rgba(255,255,255,0.39)" },
            { title: "Vision", text: "Our vision is to empower students with confidence, knowledge, and global awareness so they can achieve beyond boundaries and lead with integrity in the future.", bg: "rgba(255,255,255,0.60)" },
            { title: "Mission", text: "Our mission is to create a dynamic learning atmosphere that promotes academic excellence, character development, and holistic growth for every child.", bg: "rgba(255,255,255,0.55)" },
          ].map((card, i) => (
            <Box key={i} className={`scroll-reveal delay-${i + 1}`} sx={{ p: 5, borderRadius: "26px", backdropFilter: "blur(25px)", background: card.bg, boxShadow: "0 10px 40px rgba(0,0,0,0.2)", transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)", "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 45px rgba(0,0,0,0.25)" } }}>
              <Box sx={{ width: 36, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #fbb123, #f68e1e)", mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: "#15253d", mb: 2 }}>{card.title}</Typography>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.9, color: "#15253d" }}>{card.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  </>
);

/* ================= WRAPPER ================= */
const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AdmissionFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {isMobile
        ? <HomeMobile onOpenModal={() => setModalOpen(true)} />
        : <HomeDesktop onOpenModal={() => setModalOpen(true)} />
      }
    </>
  );
};

export default HomePage;
