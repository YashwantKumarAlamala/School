import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import AdmissionFormModal from "../AdmissionFormModal";

const floatY = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
`;
const floatYSlow = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50%       { transform: translateY(-14px) rotate(2deg); }
`;
const spinSlow = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;
const pulseRing = keyframes`
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(1.18); opacity: 0; }
`;
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
`;
const orbDrift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(20px, -15px) scale(1.05); }
  66%       { transform: translate(-15px, 10px) scale(0.97); }
`;
const shimmerLine = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const stats = [
  { value: "27+", label: "Years of Legacy" },
  { value: "CBSE", label: "Affiliated Board" },
  { value: "100%", label: "Holistic Focus" },
  { value: "2", label: "Campuses" },
];

const values = [
  { emoji: "🎯", title: "Academic Excellence", desc: "Concept-driven CBSE curriculum that builds thinkers, not just test-takers." },
  { emoji: "🌱", title: "Holistic Growth", desc: "Sports, arts, leadership and emotional development woven into every school day." },
  { emoji: "🤝", title: "Strong Community", desc: "A close-knit family of students, parents and educators working together." },
  { emoji: "🏆", title: "Proven Results", desc: "Students who go on to lead in competitive exams, careers and life." },
];

const facilities = [
  { title: "Smart Classrooms",            img: "/logo/child-image.jpg" },
  { title: "Modern Science Laboratories", img: "/logo/lab-image.jpg" },
  { title: "Computer & Digital Lab",      img: "/logo/innovation-image.jpg" },
  { title: "Lush Green Campus",           img: "/logo/school-2.jpeg" },
  { title: "Sports & Physical Training",  img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80" },
  { title: "Music & Arts Studio",         img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80" },
];

const pillars = [
  "Personal attention for every child",
  "Strong academic tracking & feedback",
  "Emotional and social development",
  "Leadership and communication skills",
  "A balanced, joyful school experience",
  "Safe, inclusive and nurturing campus",
];

export default function AboutUs() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AdmissionFormModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ── HERO ── */}
      <Box sx={{
        background: "linear-gradient(160deg, #15253d 0%, #1e3a5f 55%, #15253d 100%)",
        pt: { xs: 18, md: 22 }, pb: { xs: 16, md: 20 },
        px: { xs: 3, md: 6 }, textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* amber glow blobs */}
        <Box sx={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,142,30,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Extra animated orbs */}
        <Box sx={{ position: "absolute", top: "30%", left: "5%", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.08) 0%, transparent 70%)", animation: `${orbDrift} 10s ease-in-out infinite 1s`, pointerEvents: "none" }} />

        <Typography className="anim-fade-down" sx={{
          display: "inline-block", backgroundColor: "rgba(251,177,35,0.15)",
          color: "#fbb123", px: 2.5, py: 0.6, borderRadius: "30px",
          fontSize: "0.78rem", fontFamily: "'Nunito', sans-serif",
          fontWeight: 700, letterSpacing: "0.14em", mb: 3,
          border: "1px solid rgba(251,177,35,0.3)",
        }}>
          CBSE AFFILIATED · ANANTAPUR
        </Typography>

        <Typography variant="h1" className="anim-fade-up delay-1" sx={{
          fontFamily: "'Nunito', sans-serif", fontWeight: 900,
          color: "#fff", fontSize: { xs: "30px", md: "54px" },
          lineHeight: 1.15, mb: 3, maxWidth: "800px", mx: "auto",
        }}>
          Where Every Child is{" "}
          <Box component="span" sx={{ color: "#fbb123" }}>Destined to Shine</Box>
        </Typography>

        <Typography className="anim-fade-up delay-2" sx={{
          color: "rgba(255,255,255,0.72)", fontSize: { xs: "15px", md: "19px" },
          maxWidth: "600px", mx: "auto", lineHeight: 1.8,
          fontFamily: "'Playfair Display', serif", fontStyle: "italic", mb: 5,
        }}>
          "Education is not the filling of a pail, but the lighting of a fire."
          <Box component="span" sx={{ display: "block", fontSize: "0.8em", mt: 0.5, opacity: 0.7 }}>— W.B. Yeats</Box>
        </Typography>

        <Button className="anim-fade-up delay-3" variant="contained" onClick={() => setModalOpen(true)} sx={{
          backgroundColor: "#fbb123", color: "#15253d",
          px: 5, py: 1.6, fontWeight: 800,
          fontFamily: "'Nunito', sans-serif", borderRadius: "30px",
          textTransform: "none", fontSize: "1rem",
          boxShadow: "0 8px 25px rgba(251,177,35,0.4)",
          "&:hover": { backgroundColor: "#f68e1e", transform: "translateY(-2px)", boxShadow: "0 12px 30px rgba(246,142,30,0.4)" },
          transition: "all 0.3s ease",
        }}>
          Apply for Admission 2026–27
        </Button>
      </Box>

      {/* ── HERO IMAGE OVERLAP ── */}
      <Box className="scroll-reveal-scale" sx={{
        width: { xs: "90%", md: "82%" }, height: { xs: "260px", md: "500px" },
        mx: "auto", mt: { xs: "-80px", md: "-120px" },
        backgroundImage: "url('/logo/school-1.jpeg')",
        backgroundSize: "cover", backgroundPosition: "center",
        borderRadius: { xs: "24px", md: "34px" },
        boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
        border: "4px solid rgba(255,255,255,0.08)",
        position: "relative", zIndex: 2,
        overflow: "visible",
      }}>
        {/* Floating badge — 27+ Years */}
        <Box sx={{
          position: "absolute", top: { xs: -16, md: -22 }, left: { xs: 16, md: 40 },
          backgroundColor: "#fbb123", color: "#15253d",
          px: { xs: 2, md: 3 }, py: { xs: 1, md: 1.5 },
          borderRadius: "16px", boxShadow: "0 8px 30px rgba(251,177,35,0.5)",
          display: "flex", alignItems: "center", gap: 1,
          animation: `${floatY} 3s ease-in-out infinite`,
          zIndex: 10,
        }}>
          <Typography sx={{ fontSize: { xs: "1.2rem", md: "1.6rem" }, lineHeight: 1 }}>🏫</Typography>
          <Box>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: { xs: "1rem", md: "1.3rem" }, lineHeight: 1, color: "#15253d" }}>27+</Typography>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: { xs: "0.6rem", md: "0.7rem" }, color: "rgba(21,37,61,0.75)", letterSpacing: "0.05em" }}>YEARS OF LEGACY</Typography>
          </Box>
        </Box>

        {/* Floating badge — CBSE */}
        <Box sx={{
          position: "absolute", bottom: { xs: -16, md: -22 }, right: { xs: 16, md: 50 },
          backgroundColor: "#15253d", color: "#fff",
          px: { xs: 2, md: 3 }, py: { xs: 1, md: 1.5 },
          borderRadius: "16px", boxShadow: "0 8px 30px rgba(21,37,61,0.5)",
          display: "flex", alignItems: "center", gap: 1,
          animation: `${floatYSlow} 4s ease-in-out infinite`,
          zIndex: 10,
        }}>
          <Typography sx={{ fontSize: { xs: "1.2rem", md: "1.6rem" }, lineHeight: 1 }}>🎓</Typography>
          <Box>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: { xs: "1rem", md: "1.3rem" }, lineHeight: 1, color: "#fbb123" }}>CBSE</Typography>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: { xs: "0.6rem", md: "0.7rem" }, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>AFFILIATED</Typography>
          </Box>
        </Box>

        {/* Floating badge — 2 Campuses */}
        <Box sx={{
          position: "absolute", top: { xs: "40%", md: "38%" }, right: { xs: -14, md: -28 },
          backgroundColor: "#fff", color: "#15253d",
          px: { xs: 1.5, md: 2.5 }, py: { xs: 1, md: 1.5 },
          borderRadius: "16px", boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
          display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1,
          animation: `${floatY} 3.5s ease-in-out infinite 0.5s`,
          zIndex: 10,
        }}>
          <Typography sx={{ fontSize: "1.4rem", lineHeight: 1 }}>📍</Typography>
          <Box>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.2rem", lineHeight: 1, color: "#15253d" }}>2</Typography>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.65rem", color: "#867661", letterSpacing: "0.05em" }}>CAMPUSES</Typography>
          </Box>
        </Box>
      </Box>

      {/* ── STATS STRIP ── */}
      <Box sx={{ backgroundColor: "#fbb123", py: { xs: 4, md: 5 }, px: { xs: 3, md: 8 }, mt: 0 }}>
        <Box sx={{ maxWidth: "900px", mx: "auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, textAlign: "center" }}>
          {stats.map((s, i) => (
            <Box key={i} className={`scroll-reveal delay-${i + 1}`}>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: { xs: "22px", md: "32px" }, color: "#15253d", lineHeight: 1 }}>
                {s.value}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.7rem", md: "0.85rem" }, color: "rgba(21,37,61,0.7)", fontWeight: 600, mt: 0.5 }}>
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── OUR STORY ── */}
      <Box sx={{ backgroundColor: "#fff", py: { xs: 8, md: 14 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 6, md: 10 }, alignItems: "center" }}>
          <Box className="scroll-reveal-left">
            <Typography sx={{ color: "#f68e1e", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", mb: 1.5 }}>
              OUR STORY
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "26px", md: "38px" }, lineHeight: 1.2, mb: 3 }}>
              Built on{" "}
              <Box component="span" sx={{ color: "#fbb123" }}>27 Years of Educational Excellence</Box>
            </Typography>
            <Typography sx={{ color: "#867661", lineHeight: 1.9, mb: 3, fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}>
              Horizon Valley School was born from a vision — to create a place where every child feels seen, valued, and inspired. Rooted in 27 years of educational legacy since 1998, we bring together the best of academic rigour and human warmth.
            </Typography>
            <Typography sx={{ color: "#867661", lineHeight: 1.9, fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}>
              With visionary leadership, passionate faculty, and a community of engaged parents, we are building a generation of confident, compassionate, and capable young leaders — ready for the world.
            </Typography>
          </Box>
          {/* Our Story image with animated ring + stat overlay */}
          <Box className="scroll-reveal-right" sx={{ position: "relative", height: { xs: "280px", md: "460px" } }}>
            {/* Spinning amber ring */}
            <Box sx={{
              position: "absolute", inset: -14,
              borderRadius: "36px",
              border: "2.5px dashed rgba(251,177,35,0.35)",
              animation: `${spinSlow} 18s linear infinite`,
              pointerEvents: "none", zIndex: 0,
            }} />
            {/* Pulse ring */}
            <Box sx={{
              position: "absolute", inset: -6,
              borderRadius: "32px",
              border: "2px solid rgba(251,177,35,0.25)",
              animation: `${pulseRing} 2.4s ease-out infinite`,
              pointerEvents: "none", zIndex: 0,
            }} />
            {/* Image */}
            <Box sx={{
              height: "100%", width: "100%",
              backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80')",
              backgroundSize: "cover", backgroundPosition: "center",
              borderRadius: "28px", boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
              position: "relative", zIndex: 1,
              transition: "transform 0.5s ease",
              "&:hover": { transform: "scale(1.02)" },
            }} />
            {/* Floating stat card */}
            <Box sx={{
              position: "absolute", bottom: { xs: -18, md: -22 }, left: { xs: 16, md: -28 },
              backgroundColor: "#15253d", borderRadius: "18px",
              px: 3, py: 2, zIndex: 5,
              boxShadow: "0 12px 40px rgba(21,37,61,0.35)",
              animation: `${floatY} 4s ease-in-out infinite`,
              display: "flex", alignItems: "center", gap: 2,
            }}>
              <Box sx={{ width: 44, height: 44, borderRadius: "12px", backgroundColor: "#fbb123", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontSize: "1.4rem" }}>⭐</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fbb123", fontSize: "1.1rem", lineHeight: 1 }}>Since 1998</Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.7)", fontSize: "0.72rem", mt: 0.3 }}>Trusted by Families</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── OUR VALUES ── */}
      <Box sx={{ backgroundColor: "#f8f6f2", py: { xs: 8, md: 14 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Box className="scroll-reveal" sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <Typography sx={{ color: "#f68e1e", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", mb: 1 }}>
              WHAT WE STAND FOR
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "26px", md: "38px" } }}>
              Our Core Values
            </Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 3 }}>
            {values.map((v, i) => (
              <Box key={i} className={`scroll-reveal delay-${i + 1}`} sx={{
                backgroundColor: "#fff", borderRadius: "22px", p: { xs: 3, md: 4 },
                boxShadow: "0 8px 30px rgba(21,37,61,0.07)",
                border: "1px solid rgba(21,37,61,0.05)",
                transition: "all 0.3s ease",
                "&:hover": { transform: "translateY(-6px)", boxShadow: "0 20px 50px rgba(21,37,61,0.12)", borderColor: "#fbb123" },
              }}>
                <Box sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, mb: 2 }}>{v.emoji}</Box>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#15253d", fontSize: { xs: "0.95rem", md: "1rem" }, mb: 1 }}>
                  {v.title}
                </Typography>
                <Typography sx={{ color: "#867661", fontSize: "0.85rem", lineHeight: 1.7 }}>
                  {v.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── FACILITIES ── */}
      <Box sx={{ backgroundColor: "#15253d", py: { xs: 10, md: 16 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <Typography sx={{ color: "#fbb123", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", mb: 1 }}>
              INFRASTRUCTURE
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fff", fontSize: { xs: "26px", md: "40px" } }}>
              World-Class Facilities
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", mt: 2, maxWidth: "500px", mx: "auto", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Every space on our campus is designed to inspire curiosity and enable growth.
            </Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
            {facilities.map((f, i) => (
              <Box key={i} className={`scroll-reveal-zoom delay-${i + 1}`} sx={{
                height: { xs: "240px", md: "340px" },
                borderRadius: "24px", position: "relative", overflow: "hidden",
                backgroundImage: `url(${f.img})`, backgroundSize: "cover", backgroundPosition: "center",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
                "&:hover": {
                  transform: "translateY(-14px) scale(1.03)",
                  boxShadow: "0 0 0 3px #fbb123, 0 30px 70px rgba(0,0,0,0.55)",
                },
              }}>
                {/* shimmer overlay on hover */}
                <Box sx={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(251,177,35,0) 0%, rgba(251,177,35,0.08) 50%, rgba(251,177,35,0) 100%)",
                  backgroundSize: "200% 200%",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  ".MuiBox-root:hover &": { opacity: 1 },
                }} />
                {/* gradient overlay */}
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(21,37,61,0.88) 0%, transparent 55%)" }} />
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2.5 }}>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1rem" }}>
                    {f.title}
                  </Typography>
                  <Box sx={{ width: 30, height: 2, backgroundColor: "#fbb123", mt: 0.8, borderRadius: 1 }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── STUDENT-CENTERED ── */}
      <Box sx={{ backgroundColor: "#fff", py: { xs: 10, md: 16 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 6, md: 12 }, alignItems: "center" }}>
          {/* Student-Centered image with animated ring + achievement badge */}
          <Box sx={{
            position: "relative", height: { xs: "280px", md: "520px" },
            order: { xs: 2, md: 1 },
          }}>
            {/* Amber glow ring */}
            <Box sx={{
              position: "absolute", inset: -10,
              borderRadius: "36px",
              background: "radial-gradient(ellipse at center, rgba(251,177,35,0.18) 0%, transparent 70%)",
              animation: `${pulseRing} 3s ease-out infinite`,
              pointerEvents: "none", zIndex: 0,
            }} />
            {/* Image */}
            <Box sx={{
              height: "100%", width: "100%",
              backgroundImage: "url('/logo/teacher-image.jpg')",
              backgroundSize: "cover", backgroundPosition: "center",
              borderRadius: "28px", boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
              position: "relative", zIndex: 1,
              transition: "transform 0.5s ease",
              "&:hover": { transform: "scale(1.02)" },
            }} />
            {/* Floating achievement badge */}
            <Box sx={{
              position: "absolute", top: { xs: -18, md: -24 }, right: { xs: 16, md: -24 },
              backgroundColor: "#fbb123", borderRadius: "20px",
              px: 2.5, py: 1.5, zIndex: 5,
              boxShadow: "0 10px 35px rgba(251,177,35,0.45)",
              animation: `${floatYSlow} 4.5s ease-in-out infinite`,
              display: "flex", alignItems: "center", gap: 1.5,
            }}>
              <Typography sx={{ fontSize: "1.5rem", lineHeight: 1 }}>🌟</Typography>
              <Box>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: "1rem", lineHeight: 1 }}>100%</Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: "rgba(21,37,61,0.75)", fontSize: "0.62rem", letterSpacing: "0.05em" }}>HOLISTIC FOCUS</Typography>
              </Box>
            </Box>
            {/* Floating bottom badge */}
            <Box sx={{
              position: "absolute", bottom: { xs: -18, md: -22 }, left: { xs: 16, md: 24 },
              backgroundColor: "#15253d", borderRadius: "16px",
              px: 2.5, py: 1.5, zIndex: 5,
              boxShadow: "0 10px 35px rgba(21,37,61,0.4)",
              animation: `${floatY} 3.8s ease-in-out infinite 0.8s`,
              display: "flex", alignItems: "center", gap: 1.5,
            }}>
              <Typography sx={{ fontSize: "1.3rem", lineHeight: 1 }}>❤️</Typography>
              <Box>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fbb123", fontSize: "0.95rem", lineHeight: 1 }}>Student First</Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.65)", fontSize: "0.62rem", letterSpacing: "0.04em" }}>EVERY CHILD MATTERS</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ order: { xs: 1, md: 2 } }}>
            <Typography sx={{ color: "#f68e1e", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", mb: 1.5 }}>
              OUR PROMISE
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "24px", md: "36px" }, lineHeight: 1.25, mb: 3 }}>
              A Student-Centered Approach That Creates{" "}
              <Box component="span" sx={{ color: "#fbb123" }}>Confident Young Leaders</Box>
            </Typography>
            <Typography sx={{ color: "#867661", lineHeight: 1.9, mb: 4, fontFamily: "'Playfair Display', serif" }}>
              We believe every child is unique. Our approach respects individual learning styles and nurtures each student's strengths through a structured yet joyful environment.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 5 }}>
              {pillars.map((p, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: "#fbb123", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Typography sx={{ fontSize: "0.65rem", fontWeight: 900, color: "#15253d" }}>✓</Typography>
                  </Box>
                  <Typography sx={{ color: "#15253d", fontWeight: 600, fontSize: "0.95rem" }}>{p}</Typography>
                </Box>
              ))}
            </Box>
            <Button variant="contained" onClick={() => setModalOpen(true)} sx={{
              backgroundColor: "#15253d", color: "#fff",
              px: 4, py: 1.5, fontWeight: 700,
              fontFamily: "'Nunito', sans-serif", borderRadius: "12px",
              textTransform: "none", fontSize: "0.95rem",
              "&:hover": { backgroundColor: "#fbb123", color: "#15253d" },
              transition: "all 0.3s ease",
            }}>
              Enquire About Admissions
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ── CLOSING CTA ── */}
      <Box sx={{
        background: "linear-gradient(135deg, #fbb123 0%, #f68e1e 100%)",
        py: { xs: 8, md: 10 }, px: { xs: 3, md: 6 }, textAlign: "center",
      }}>
        <Typography variant="h3" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "22px", md: "36px" }, mb: 2 }}>
          Ready to Be Part of the Horizon Valley Family?
        </Typography>
        <Typography sx={{ color: "rgba(21,37,61,0.75)", mb: 4, fontSize: { xs: "15px", md: "18px" }, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          Give your child the foundation they deserve. Admissions are open for 2026–27.
        </Typography>
        <Button variant="contained" onClick={() => setModalOpen(true)} sx={{
          backgroundColor: "#15253d", color: "#fff",
          px: { xs: 4, md: 6 }, py: 1.8, fontWeight: 800,
          fontFamily: "'Nunito', sans-serif", borderRadius: "30px",
          textTransform: "none", fontSize: "1rem",
          boxShadow: "0 8px 25px rgba(21,37,61,0.3)",
          "&:hover": { backgroundColor: "#0f1e30", transform: "translateY(-2px)" },
          transition: "all 0.3s ease",
        }}>
          Apply Now — Seats Are Limited
        </Button>
      </Box>
    </>
  );
}
