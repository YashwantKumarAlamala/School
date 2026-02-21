import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutUs = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* ===== DARK HERO SECTION ===== */}
      <Box
        sx={{
          minHeight: "70vh",
          pt: { xs: 18, md: 22 },
          pb: { xs: 12, md: 16 },
          backgroundColor: "#15253d",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{ color: "#ffffff" }}
        >
          Best CBSE School in Anantapur
        </Typography>
      </Box>

      {/* ===== OVERLAPPING IMAGE ===== */}
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          height: { xs: "350px", md: "500px" },
          margin: "0 auto",
          marginTop: { xs: "-120px", md: "-180px" },
          backgroundImage: "url('/About/about1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "34px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
        }}
      />

      {/* ===== WHY CBSE SECTION ===== */}
      <Box
        sx={{
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
          px: 3,
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Box maxWidth="900px" mx="auto">
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mb: 3, color: "#15253d" }}
          >
            Why Choose a CBSE School?
          </Typography>

          <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
            The Central Board of Secondary Education (CBSE) curriculum is
            nationally recognized for its structured and student-friendly
            approach. It emphasizes conceptual understanding, analytical
            thinking, and strong foundational knowledge across all subjects.
          </Typography>
        </Box>
      </Box>

      {/* ===== ABOUT SCHOOL SECTION ===== */}
      <Box
        sx={{
          backgroundColor: "#f8fafc",
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            gap: 6,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* LEFT CONTENT */}
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ color: "#15253d", mb: 3 }}
            >
              About Horizon Valley School, Anantapur
            </Typography>

            <Typography
              sx={{ color: "#475569", mb: 3, lineHeight: 1.8 }}
            >
              Our school is committed to academic excellence through
              innovative teaching practices and a nurturing learning
              environment. We focus on holistic development, ensuring every
              student grows intellectually, socially, and morally.
            </Typography>

            <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
              With modern infrastructure, experienced faculty, and a
              curriculum aligned with CBSE standards, we prepare students
              to excel in competitive environments while fostering
              leadership, discipline, and global awareness.
            </Typography>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              height: { xs: "280px", md: "400px" },
              backgroundImage: "url('/Facilities/greencampus.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
            }}
          />
        </Box>
      </Box>

      {/* ===== FACILITIES SECTION ===== */}
      <Box
        sx={{
          backgroundColor: "#867661",
          py: { xs: 10, md: 14 },
          px: { xs: 3, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            mb: 10,
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ color: "#ffffff" }}
          >
            Our World-Class Facilities
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 5,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            { title: "Smart Classrooms", img: "/Facilities/smart.jpg" },
            { title: "Modern Science Laboratories", img: "/Facilities/labs.jpg" },
            { title: "Computer & Digital Lab", img: "/Facilities/computer.jpg" },
            { title: "Lush Green Campus", img: "/Facilities/greencampus.jpg" },
            { title: "Sports & Physical Training", img: "/Facilities/sports.jpg" },
            { title: "Music & Arts Studio", img: "/Facilities/music.jpg" },
          ].map((facility, index) => (
            <Box
              key={index}
              sx={{
                height: { xs: "320px", md: "380px" },
                borderRadius: "28px",
                position: "relative",
                overflow: "hidden",
                backgroundImage: `url(${facility.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
                transition: "all 0.5s ease",
                animation: `${fadeUp} 0.8s ease forwards`,
                opacity: 0,
                animationDelay: `${index * 0.2}s`,
                "&:hover": {
                  transform: "translateY(-12px) scale(1.03)",
                  boxShadow:
                    "0 0 0 2px #d4af37, 0 0 25px rgba(212,175,55,0.6)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  pb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    color: "#ffffff",
                    px: 4,
                    py: 1.5,
                    borderRadius: "12px",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(212,175,55,0.7)",
                  }}
                >
                  {facility.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ===== STUDENT-CENTERED SECTION (PREMIUM) ===== */}
      <Box
        sx={{
          backgroundColor: "#f8fafc",
          py: { xs: 12, md: 16 },
          px: { xs: 3, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
            alignItems: "center",
            gap: 10,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* LEFT CONTENT */}
          <Box>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                color: "#0f172a",
                mb: 4,
                lineHeight: 1.3,
              }}
            >
              A Student-Centered Approach That Creates Confident Young Leaders
            </Typography>

            <Typography sx={{ color: "#475569", mb: 4, lineHeight: 1.9 }}>
              We respect the individuality of every learner and nurture their
              strengths through a structured yet joyful academic environment.
            </Typography>

            <Box sx={{ mb: 5 }}>
              {[
                "Personal attention",
                "Strong academic tracking",
                "Emotional and social development",
                "Leadership and communication skills",
                "A balanced, joyful school experience",
              ].map((point, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#1e293b",
                    mb: 2,
                    fontWeight: 500,
                    position: "relative",
                    pl: 3,
                    "&::before": {
                      content: '"•"',
                      position: "absolute",
                      left: 0,
                      color: "#d4af37",
                      fontSize: "20px",
                    },
                  }}
                >
                  {point}
                </Typography>
              ))}
            </Box>

            <Typography sx={{ color: "#475569", lineHeight: 1.9 }}>
              Horizon Valley School is a promise — a promise to give your child
              an education that is academically strong, emotionally supportive,
              and personally empowering. Through the CBSE framework, students
              learn to dream big, think boldly, and grow confidently.
            </Typography>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              height: { xs: "320px", md: "520px" },
              backgroundImage: "url('/Facilities/student.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "30px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
              transition: "transform 0.6s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
    
  );
};


export default AboutUs;