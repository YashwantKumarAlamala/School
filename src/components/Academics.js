import { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { keyframes } from "@mui/system";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const orbDrift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(22px, -16px) scale(1.05); }
  66%       { transform: translate(-16px, 12px) scale(0.96); }
`;
const shimmerLine = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ── Grade stage data ───────────────────────────────────────────────────────
const stages = [
  {
    id: "early",
    label: "Early Years",
    range: "Nursery – Grade 2",
    icon: <StarIcon />,
    color: "#fbb123",
    headline: "Where Curiosity Comes Alive",
    description:
      "Our early years programme nurtures natural curiosity through play, exploration, and storytelling. Every child is seen as a unique learner — we build confidence, creativity, and a love for discovery from day one.",
    pillars: ["Play-Based Learning", "Emotional Intelligence", "Creative Expression", "Language & Literacy"],
  },
  {
    id: "primary",
    label: "Primary",
    range: "Grade 3 – 5",
    icon: <AutoStoriesIcon />,
    color: "#f68e1e",
    headline: "Building Strong Foundations",
    description:
      "Primary years are about building the habits of a lifelong learner. We blend structured academics with hands-on activities, ensuring every concept is understood deeply — not just memorised.",
    pillars: ["Conceptual Clarity", "Critical Thinking", "Collaborative Projects", "Values & Character"],
  },
  {
    id: "middle",
    label: "Middle School",
    range: "Grade 6 – 8",
    icon: <LightbulbIcon />,
    color: "#867661",
    headline: "Expanding Horizons",
    description:
      "Middle school is where students begin to discover who they are. We challenge them with deeper inquiry, real-world problem solving, and opportunities to lead — inside and outside the classroom.",
    pillars: ["Inquiry-Based Learning", "Leadership Opportunities", "STEM Exploration", "Social Awareness"],
  },
  {
    id: "secondary",
    label: "Secondary",
    range: "Grade 9 – 10",
    icon: <TrendingUpIcon />,
    color: "#15253d",
    headline: "Preparing for Excellence",
    description:
      "Our secondary programme equips students with the academic rigour, exam readiness, and life skills needed to thrive beyond school. Expert mentorship and personalised guidance ensure every student reaches their potential.",
    pillars: ["Board Exam Mastery", "Career Counselling", "Competitive Exam Prep", "Mentorship & Guidance"],
  },
];

// ── Why HV section cards ───────────────────────────────────────────────────
const whyCards = [
  { icon: <SchoolIcon />, title: "CBSE Affiliated", desc: "A nationally recognised curriculum that opens doors to every top institution in India and beyond." },
  { icon: <PsychologyIcon />, title: "Concept-First Teaching", desc: "We teach children to think, not just answer. Every lesson is designed for deep understanding." },
  { icon: <EmojiEventsIcon />, title: "Beyond the Classroom", desc: "Sports, arts, clubs, and competitions — because real education happens everywhere." },
  { icon: <GroupsIcon />, title: "Expert Faculty", desc: "Passionate, trained educators who know every child by name and invest in their growth." },
  { icon: <LightbulbIcon />, title: "Innovation & Technology", desc: "Smart classrooms, labs, and digital tools that make learning immersive and future-ready." },
  { icon: <TrendingUpIcon />, title: "Proven Results", desc: "Consistent academic excellence with students going on to top colleges and careers." },
];

// ── Main Component ─────────────────────────────────────────────────────────
export default function Academics() {
  const [activeStage, setActiveStage] = useState("early");

  const active = stages.find((s) => s.id === activeStage);

  return (
    <Box sx={{ overflow: "hidden" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <Box sx={{
        background: "linear-gradient(135deg, #0d1b2e 0%, #15253d 55%, #1a3050 100%)",
        pt: { xs: 20, md: 26 }, pb: { xs: 10, md: 14 },
        px: { xs: 3, md: 6 }, textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Decorative orbs */}
        <Box sx={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.12) 0%, transparent 70%)", animation: `${orbDrift} 9s ease-in-out infinite`, pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: -60, left: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,142,30,0.1) 0%, transparent 70%)", animation: `${orbDrift} 12s ease-in-out infinite 2s`, pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", top: "40%", left: "8%", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.07) 0%, transparent 70%)", animation: `${orbDrift} 15s ease-in-out infinite 4s`, pointerEvents: "none" }} />

        <Typography className="anim-fade-down" sx={{
          display: "inline-block", backgroundColor: "rgba(251,177,35,0.15)",
          color: "#fbb123", px: 2.5, py: 0.6, borderRadius: "30px",
          fontSize: "0.75rem", fontFamily: "'Nunito', sans-serif", fontWeight: 700,
          letterSpacing: "0.16em", mb: 3, border: "1px solid rgba(251,177,35,0.3)",
        }}>
          CBSE AFFILIATED · ANANTAPUR
        </Typography>

        <Typography variant="h1" className="anim-fade-up delay-1" sx={{
          fontFamily: "'Nunito', sans-serif", fontWeight: 900,
          color: "#fff", fontSize: { xs: "30px", md: "54px" },
          lineHeight: 1.15, mb: 2.5, maxWidth: "860px", mx: "auto",
        }}>
          An Education That{" "}
          <Box component="span" sx={{
            background: "linear-gradient(90deg, #fbb123, #f68e1e)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Shapes Futures
          </Box>
        </Typography>

        <Typography className="anim-fade-up delay-2" sx={{
          color: "rgba(255,255,255,0.68)", fontSize: { xs: "15px", md: "19px" },
          maxWidth: "680px", mx: "auto", lineHeight: 1.85,
          fontFamily: "'Playfair Display', serif", fontStyle: "italic", mb: 6,
        }}>
          At Horizon Valley, academics go beyond textbooks. We build thinkers, leaders, and compassionate human beings — ready for a world that demands more.
        </Typography>

        <Box className="anim-scale-in delay-3" sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button href="/admissions" variant="contained" sx={{
            backgroundColor: "#fbb123", color: "#15253d",
            px: 4, py: 1.6, fontWeight: 800, fontFamily: "'Nunito', sans-serif",
            borderRadius: "30px", textTransform: "none", fontSize: "0.95rem",
            boxShadow: "0 8px 28px rgba(251,177,35,0.4)",
            "&:hover": { backgroundColor: "#f68e1e", transform: "translateY(-2px)" },
            transition: "all 0.3s",
          }}>
            Apply for 2026–27
          </Button>
          <Button href="/contact" variant="outlined" sx={{
            borderColor: "rgba(255,255,255,0.35)", color: "#fff",
            px: 4, py: 1.6, fontWeight: 700, fontFamily: "'Nunito', sans-serif",
            borderRadius: "30px", textTransform: "none", fontSize: "0.95rem",
            "&:hover": { borderColor: "#fbb123", color: "#fbb123", backgroundColor: "transparent" },
            transition: "all 0.3s",
          }}>
            Talk to Us
          </Button>
        </Box>
      </Box>

      {/* ── LEARNING PHILOSOPHY ──────────────────────────────────────────── */}
      <Box sx={{ backgroundColor: "#fff", py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="scroll-reveal-left">
                <Typography sx={{ color: "#f68e1e", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.16em", mb: 1.5 }}>
                  OUR PHILOSOPHY
                </Typography>
                <Typography variant="h2" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "26px", md: "40px" }, lineHeight: 1.2, mb: 3 }}>
                  Learning That Lasts a Lifetime
                </Typography>
                <Typography sx={{ color: "#867661", fontSize: { xs: "15px", md: "17px" }, lineHeight: 1.9, fontFamily: "'Playfair Display', serif", mb: 3 }}>
                  We believe every child is born curious. Our role is to protect that curiosity, channel it, and give it wings. At Horizon Valley, we don't teach children what to think — we teach them how to think.
                </Typography>
                <Typography sx={{ color: "#867661", fontSize: { xs: "15px", md: "17px" }, lineHeight: 1.9, fontFamily: "'Playfair Display', serif" }}>
                  Our CBSE curriculum is enriched with experiential learning, values education, and real-world application — so students don't just pass exams, they grow into capable, confident individuals.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="scroll-reveal-right" sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                {[
                  { label: "Curiosity-Led", sub: "Questions are celebrated" },
                  { label: "Concept-Deep", sub: "Understanding over rote" },
                  { label: "Child-Centred", sub: "Every learner matters" },
                  { label: "Future-Ready", sub: "Skills for tomorrow" },
                ].map((item, i) => (
                  <Box key={i} sx={{
                    backgroundColor: i % 2 === 0 ? "#15253d" : "#fbb123",
                    borderRadius: "20px", p: 3,
                    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
                    "&:hover": { transform: "translateY(-8px) scale(1.03)", boxShadow: i % 2 === 0 ? "0 16px 40px rgba(21,37,61,0.35)" : "0 16px 40px rgba(251,177,35,0.4)" },
                  }}>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1rem", color: i % 2 === 0 ? "#fbb123" : "#15253d", mb: 0.5 }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.82rem", color: i % 2 === 0 ? "rgba(255,255,255,0.65)" : "rgba(21,37,61,0.7)" }}>
                      {item.sub}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ── INTERACTIVE STAGE EXPLORER ───────────────────────────────────── */}
      <Box sx={{ backgroundColor: "#f8f6f2", py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 7 }} className="scroll-reveal">
            <Typography sx={{ color: "#f68e1e", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.16em", mb: 1.5 }}>
              ACADEMIC JOURNEY
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "26px", md: "40px" } }}>
              A Path Built for Every Stage
            </Typography>
          </Box>

          {/* Stage selector tabs */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap", mb: 6 }}>
            {stages.map((s) => (
              <Box key={s.id} onClick={() => setActiveStage(s.id)} sx={{
                px: { xs: 2.5, md: 3.5 }, py: 1.4,
                borderRadius: "40px", cursor: "pointer",
                backgroundColor: activeStage === s.id ? "#15253d" : "#fff",
                color: activeStage === s.id ? "#fbb123" : "#867661",
                fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                fontSize: { xs: "0.82rem", md: "0.9rem" },
                border: `2px solid ${activeStage === s.id ? "#15253d" : "rgba(134,118,97,0.25)"}`,
                boxShadow: activeStage === s.id ? "0 8px 24px rgba(21,37,61,0.2)" : "none",
                transition: "all 0.3s ease",
                "&:hover": { borderColor: "#15253d", color: activeStage === s.id ? "#fbb123" : "#15253d" },
              }}>
                {s.label}
                <Box component="span" sx={{ display: "block", fontSize: "0.68rem", fontWeight: 600, opacity: 0.7, mt: 0.2 }}>
                  {s.range}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Active stage card */}
          <Box sx={{
            backgroundColor: "#fff", borderRadius: "28px",
            p: { xs: 4, md: 6 }, boxShadow: "0 20px 60px rgba(21,37,61,0.08)",
            borderTop: `5px solid ${active.color}`,
            transition: "all 0.4s ease",
          }}>
            <Grid container spacing={5} alignItems="flex-start">
              <Grid item xs={12} md={7}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: "14px", backgroundColor: active.color, display: "flex", alignItems: "center", justifyContent: "center", color: active.color === "#15253d" ? "#fbb123" : "#fff", fontSize: "1.4rem" }}>
                    {active.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: { xs: "20px", md: "26px" }, color: "#15253d", lineHeight: 1.1 }}>
                      {active.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#867661", fontWeight: 600 }}>{active.range}</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: active.color === "#fbb123" ? "#f68e1e" : active.color, fontSize: "1.1rem", mb: 2 }}>
                  "{active.headline}"
                </Typography>
                <Typography sx={{ color: "#867661", fontSize: { xs: "15px", md: "16px" }, lineHeight: 1.9, fontFamily: "'Playfair Display', serif" }}>
                  {active.description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.78rem", color: "#15253d", letterSpacing: "0.1em", mb: 2 }}>
                  LEARNING PILLARS
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {active.pillars.map((p, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.8, borderRadius: "14px", backgroundColor: "#f8f6f2", transition: "all 0.25s", "&:hover": { backgroundColor: active.color, "& .pillar-text": { color: active.color === "#15253d" ? "#fbb123" : "#fff" }, "& .pillar-icon": { color: active.color === "#15253d" ? "#fbb123" : "#fff" } } }}>
                      <CheckCircleOutlineIcon className="pillar-icon" sx={{ color: active.color, fontSize: "1.1rem", transition: "color 0.25s" }} />
                      <Typography className="pillar-text" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#15253d", transition: "color 0.25s" }}>
                        {p}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* ── WHY HORIZON VALLEY ───────────────────────────────────────────── */}
      <Box sx={{ backgroundColor: "#15253d", py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 8 }} className="scroll-reveal">
            <Typography sx={{ color: "#fbb123", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.16em", mb: 1.5 }}>
              THE HV DIFFERENCE
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fff", fontSize: { xs: "26px", md: "40px" } }}>
              Why Families Choose Horizon Valley
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {whyCards.map((card, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box className={`scroll-reveal-zoom delay-${i + 1}`} sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: "22px", p: 4,
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: "100%",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    backgroundColor: "#fbb123",
                    borderColor: "#fbb123",
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 50px rgba(251,177,35,0.25)",
                    "& .why-icon": { color: "#15253d", backgroundColor: "rgba(21,37,61,0.15)" },
                    "& .why-title": { color: "#15253d" },
                    "& .why-desc": { color: "rgba(21,37,61,0.8)" },
                  },
                }}>
                  <Box className="why-icon" sx={{ width: 52, height: 52, borderRadius: "14px", backgroundColor: "rgba(251,177,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fbb123", mb: 2.5, transition: "all 0.35s" }}>
                    {card.icon}
                  </Box>
                  <Typography className="why-title" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1rem", mb: 1, transition: "color 0.35s" }}>
                    {card.title}
                  </Typography>
                  <Typography className="why-desc" sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.75, transition: "color 0.35s" }}>
                    {card.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ── PROMISE STRIP ────────────────────────────────────────────────── */}
      <Box sx={{ backgroundColor: "#fff", py: { xs: 8, md: 10 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "center" }} className="scroll-reveal">
        
          <Typography variant="h2" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "24px", md: "38px" }, lineHeight: 1.3, mb: 3 }}>
            Every Child Deserves to{" "}
            <Box component="span" sx={{ color: "#fbb123" }}>Shine</Box>
          </Typography>
          <Typography sx={{ color: "#867661", fontSize: { xs: "15px", md: "17px" }, lineHeight: 1.9, fontFamily: "'Playfair Display', serif", mb: 5 }}>
            We don't measure success by marks alone. We measure it by the confidence in a child's eyes, the questions they ask, and the kindness they carry. That is the Horizon Valley promise.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            {["Nurturing Environment", "Expert Mentorship", "Holistic Growth", "Lifelong Values"].map((tag, i) => (
              <Box key={i} sx={{ px: 2.5, py: 1, borderRadius: "30px", border: "2px solid #fbb123", color: "#15253d", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.82rem", transition: "all 0.25s", "&:hover": { backgroundColor: "#fbb123" } }}>
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── EXPERIENTIAL LEARNING ───────────────────────────────────────── */}
      <Box sx={{ backgroundColor: "#15253d", py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1100px", mx: "auto" }}>

          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 8 }} className="scroll-reveal">
          
            <Typography variant="h2" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fff", fontSize: { xs: "26px", md: "42px" }, lineHeight: 1.2, mb: 2 }}>
              Experiential Learning —{" "}
              <Box component="span" sx={{ background: "linear-gradient(90deg, #fbb123, #f68e1e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                From Grade 1
              </Box>
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.68)", fontSize: { xs: "15px", md: "17px" }, lineHeight: 1.9, fontFamily: "'Playfair Display', serif", fontStyle: "italic", maxWidth: "700px", mx: "auto" }}>
              We believe children learn best by doing. That's why we've introduced a full experiential learning lab from Grade 1 — giving every child the chance to explore, build, and discover.
            </Typography>
          </Box>

          {/* Big feature row — image left, text right */}
          <Grid container spacing={5} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Box className="scroll-reveal-left" sx={{ position: "relative", borderRadius: "24px", overflow: "hidden" }}>
                <Box component="img" src="/About/cogno-1.jpeg" alt="Experiential Learning Lab"
                  sx={{ width: "100%", height: { xs: 260, md: 380 }, objectFit: "cover", display: "block" }} />
                {/* Overlay badge */}
                <Box sx={{ position: "absolute", bottom: 20, left: 20, backgroundColor: "#fbb123", borderRadius: "14px", px: 2.5, py: 1.2 }}>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.3rem", color: "#15253d", lineHeight: 1 }}>220+</Typography>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "#15253d" }}>Simulation Models</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="scroll-reveal-right">
                <Typography sx={{ color: "#f68e1e", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.16em", mb: 1.5 }}>
                  HANDS-ON FROM DAY ONE
                </Typography>
                <Typography variant="h3" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fff", fontSize: { xs: "22px", md: "32px" }, lineHeight: 1.3, mb: 2.5 }}>
                  A Lab Where Every Child Becomes a Maker
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.68)", fontSize: { xs: "15px", md: "16px" }, lineHeight: 1.9, fontFamily: "'Playfair Display', serif", mb: 3 }}>
                  Our state-of-the-art Composite Skill Lab —  brings over 220 simulation models to life. From science experiments to robotics and design thinking, students don't just read about concepts — they live them.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {["600+ curriculum-aligned activities", "STEAM integration across all grades", "Robotics, Engineering & Design Thinking", "AR/VR-enhanced modules", "Proprietary kits with lab manuals"].map((item, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Box sx={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: "rgba(251,177,35,0.15)", border: "1px solid rgba(251,177,35,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Typography sx={{ fontSize: "0.6rem", color: "#fbb123", fontWeight: 900 }}>✓</Typography>
                      </Box>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Two image cards side by side */}
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <Box className="scroll-reveal" sx={{ borderRadius: "22px", overflow: "hidden", position: "relative", "&:hover img": { transform: "scale(1.05)" } }}>
                <Box component="img" src="/About/cogno-2.jpeg" alt="Students doing simulation"
                  sx={{ width: "100%", height: { xs: 220, md: 280 }, objectFit: "cover", display: "block", transition: "transform 0.5s ease" }} />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(21,37,61,0.85) 0%, transparent 55%)", display: "flex", alignItems: "flex-end", p: 3 }}>
                  <Box>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fbb123", fontSize: "1rem", mb: 0.5 }}>Science & STEM Simulations</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", fontFamily: "'Playfair Display', serif" }}>Hands-on experiments that make abstract concepts tangible</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="scroll-reveal" sx={{ borderRadius: "22px", overflow: "hidden", position: "relative", "&:hover img": { transform: "scale(1.05)" } }}>
                <Box component="img" src="/About/cogno-3.jpeg" alt="Robotics and innovation"
                  sx={{ width: "100%", height: { xs: 220, md: 280 }, objectFit: "cover", display: "block", transition: "transform 0.5s ease" }} />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(21,37,61,0.85) 0%, transparent 55%)", display: "flex", alignItems: "flex-end", p: 3 }}>
                  <Box>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fbb123", fontSize: "1rem", mb: 0.5 }}>Robotics & Design Thinking</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", fontFamily: "'Playfair Display', serif" }}>Building tomorrow's innovators, one project at a time</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Module highlights strip */}
          <Box className="scroll-reveal" sx={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", p: { xs: 3, md: 4 } }}>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.14em", color: "#fbb123", mb: 3, textAlign: "center" }}>
              WHAT'S IN THE LAB
            </Typography>
            <Grid container spacing={2}>
              {[
                { icon: "🔬", label: "Science Experiments" },
                { icon: "🤖", label: "Robotics & Coding" },
                { icon: "🎨", label: "Arts & Life Skills" },
                { icon: "🧮", label: "Maths Simulations" },
                { icon: "🥽", label: "AR / VR Modules" },
                { icon: "🛠️", label: "Design Thinking" },
                { icon: "📱", label: "Tablets & Workstations" },
                { icon: "🏆", label: "Competition Support" },
              ].map((item, i) => (
                <Grid item xs={6} sm={3} key={i}>
                  <Box sx={{ textAlign: "center", p: 2, borderRadius: "16px", transition: "background 0.25s", "&:hover": { backgroundColor: "rgba(251,177,35,0.1)" } }}>
                    <Typography sx={{ fontSize: "1.8rem", mb: 0.8 }}>{item.icon}</Typography>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "rgba(255,255,255,0.8)" }}>{item.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

        </Box>
      </Box>

      {/* ── AI TUTORING ──────────────────────────────────────────────────── */}
      <Box sx={{ backgroundColor: "#f8f6f2", py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1100px", mx: "auto" }}>

          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 8 }} className="scroll-reveal">
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, backgroundColor: "rgba(251,177,35,0.12)", border: "1px solid rgba(251,177,35,0.35)", px: 2.5, py: 0.7, borderRadius: "30px", mb: 2 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#fbb123", animation: "glowPulse 2s ease-in-out infinite" }} />
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.16em", color: "#f68e1e" }}>
                COMING SOON · AI-POWERED LEARNING
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "26px", md: "40px" }, lineHeight: 1.2, mb: 2 }}>
              Introducing AI Tutoring at{" "}
              <Box component="span" sx={{ background: "linear-gradient(90deg, #fbb123, #f68e1e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Horizon Valley
              </Box>
            </Typography>
            <Typography sx={{ color: "#867661", fontSize: { xs: "15px", md: "17px" }, lineHeight: 1.9, fontFamily: "'Playfair Display', serif", maxWidth: "680px", mx: "auto" }}>
              We're bringing intelligent, personalised learning to every student — connecting children, parents, and teachers in one seamless experience.
            </Typography>
          </Box>

          {/* Feature cards */}
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {[
              {
                icon: "🎓",
                audience: "For Students",
                title: "Interactive AI Courses",
                desc: "Adaptive lessons that respond to each child's pace and learning style — making every session engaging, personalised, and effective.",
                color: "#15253d",
                textColor: "#fff",
                accentColor: "#fbb123",
              },
              {
                icon: "📊",
                audience: "For Teachers",
                title: "Smart Student Evaluation",
                desc: "AI-assisted assessments that surface insights on student progress, identify learning gaps, and free teachers to focus on what matters most — teaching.",
                color: "#fbb123",
                textColor: "#15253d",
                accentColor: "#15253d",
              },
              {
                icon: "👨‍👩‍👧",
                audience: "For Parents",
                title: "Real-Time Progress Reports",
                desc: "Stay connected to your child's academic journey with live dashboards, milestone alerts, and detailed performance summaries — anytime, anywhere.",
                color: "#fff",
                textColor: "#15253d",
                accentColor: "#f68e1e",
                border: "2px solid rgba(21,37,61,0.1)",
              },
            ].map((card, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box className="scroll-reveal" sx={{
                  backgroundColor: card.color,
                  border: card.border || "none",
                  borderRadius: "24px", p: { xs: 3.5, md: 4.5 }, height: "100%",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  "&:hover": { transform: "translateY(-8px)", boxShadow: "0 24px 60px rgba(21,37,61,0.14)" },
                }}>
                  <Typography sx={{ fontSize: "2.2rem", mb: 2 }}>{card.icon}</Typography>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.14em", color: card.accentColor, mb: 1 }}>
                    {card.audience}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: { xs: "1.05rem", md: "1.15rem" }, color: card.textColor, mb: 1.5, lineHeight: 1.3 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", lineHeight: 1.85, color: card.textColor === "#fff" ? "rgba(255,255,255,0.7)" : "rgba(21,37,61,0.65)" }}>
                    {card.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Feature pills row */}
          <Box className="scroll-reveal" sx={{ backgroundColor: "#15253d", borderRadius: "24px", p: { xs: 3, md: 5 } }}>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.12em", color: "#fbb123", mb: 3, textAlign: "center" }}>
              WHAT'S INCLUDED
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
              {[
                "Personalised Learning Paths",
                "Live Progress Dashboards",
                "AI-Powered Doubt Solving",
                "Parent Notification Alerts",
                "Teacher Analytics Panel",
                "Gamified Assessments",
                "Attendance & Behaviour Insights",
                "Weekly Performance Reports",
              ].map((pill, i) => (
                <Box key={i} sx={{
                  px: 2.5, py: 1, borderRadius: "30px",
                  backgroundColor: "rgba(251,177,35,0.1)",
                  border: "1px solid rgba(251,177,35,0.25)",
                  color: "#fff", fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700, fontSize: "0.8rem",
                  transition: "all 0.25s",
                  "&:hover": { backgroundColor: "#fbb123", color: "#15253d", borderColor: "#fbb123" },
                }}>
                  {pill}
                </Box>
              ))}
            </Box>
          </Box>

        </Box>
      </Box>

      {/* ── CLOSING CTA ──────────────────────────────────────────────────── */}
      <Box sx={{
        background: "linear-gradient(135deg, #fbb123 0%, #f68e1e 100%)",
        py: { xs: 8, md: 10 }, px: { xs: 3, md: 6 }, textAlign: "center",
      }}>
        <Typography variant="h2" className="anim-fade-up" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "22px", md: "38px" }, mb: 2 }}>
          Ready to Begin the Journey?
        </Typography>
        <Typography className="anim-fade-up delay-1" sx={{ color: "rgba(21,37,61,0.72)", mb: 4.5, fontSize: { xs: "15px", md: "18px" }, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          Admissions are open for 2026–27. Give your child the foundation they deserve.
        </Typography>
        <Box className="anim-fade-up delay-2" sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button href="/admissions" variant="contained" sx={{
            backgroundColor: "#15253d", color: "#fff",
            px: { xs: 4, md: 6 }, py: 1.8, fontWeight: 800,
            fontFamily: "'Nunito', sans-serif", borderRadius: "30px",
            textTransform: "none", fontSize: "1rem",
            boxShadow: "0 8px 28px rgba(21,37,61,0.3)",
            "&:hover": { backgroundColor: "#0f1e30", transform: "translateY(-2px)" },
            transition: "all 0.3s",
          }}>
            Apply Now
          </Button>
          <Button href="/contact" variant="outlined" sx={{
            borderColor: "#15253d", color: "#15253d",
            px: { xs: 4, md: 6 }, py: 1.8, fontWeight: 700,
            fontFamily: "'Nunito', sans-serif", borderRadius: "30px",
            textTransform: "none", fontSize: "1rem",
            "&:hover": { backgroundColor: "rgba(21,37,61,0.08)" },
            transition: "all 0.3s",
          }}>
            Contact Us
          </Button>
        </Box>
      </Box>

    </Box>
  );
}
