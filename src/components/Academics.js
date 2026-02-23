import React from "react";
import { Box, Typography, } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScienceIcon from "@mui/icons-material/Science";

const Academics = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#0f172a",
          pt: 24,
          pb: 13,
          px: 6,
          textAlign: "center",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{
            color: "#fff",
            lineHeight: 1.3,
            fontSize: { xs: "24px", md: "36px" },
          }}
        >
          Best CBSE School In Anantapur
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.85)",
            mt: 2,
            fontSize: { xs: "14px", md: "18px" },
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          Concept-Based, Future-Ready Learning at Horizon Valley School.
          Where academic excellence meets holistic development.
        </Typography>
      </Box>

      {/* CBSE CURRICULUM SECTION */}
      <Box
        sx={{
          px: { xs: 3, md: 8 },
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            gap: 6,
          }}
        >

          {/* LEFT SIDE */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 3 }}>
              About the CBSE Curriculum
            </Typography>

            <Typography sx={{ color: "#475569", lineHeight: 1.9, mb: 3 }}>
              The CBSE curriculum at Horizon Valley School is built to create
              confident thinkers, strong communicators, and problem-solvers
              ready for the future. Unlike traditional rote-learning systems,
              CBSE focuses on understanding, skill-building, and real-life
              application — making it one of the most trusted boards in India.
            </Typography>

            <Typography sx={{ color: "#475569", lineHeight: 1.9, mb: 4 }}>
              Our classrooms follow a clear principle:
              <strong> Teach for mastery, not memorization.</strong>
              Every concept, activity, and project is designed to help students
              think deeper and learn smarter.
            </Typography>

            {/* LEFT HIGHLIGHTS */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  md: "repeat(3, 1fr)",
                },
                gap: 2,
                maxWidth: "700px",
              }}
            >
              {[
                { title: "Concept Clarity", icon: "📘" },
                { title: "Future Skills", icon: "🚀" },
                { title: "Strong Academics", icon: "🎓" },
                { title: "National Recognition", icon: "🏆" },
                { title: "Continuous Learning", icon: "📚" },
                { title: "Competitive Exam Ready", icon: "📝" },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "14px",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ fontSize: "18px" }}>{item.icon}</Box>
                  <Typography fontSize="14px" fontWeight={500}>
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              pr: { md: 8 },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                p: { xs: 3, md: 4 },
                width: "100%",
                maxWidth: "420px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                component="img"
                src="/logo/logo.jpg"
                sx={{ height: 50, mb: 2 }}
              />

              <Typography variant="h6" fontWeight={800} sx={{ mb: 3 }}>
                Why CBSE at Horizon Valley?
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {[
                  "CBSE: India's Most Trusted Board",
                  "180+ Certifications",
                  "Global Delivery Model",
                  "End-to-End Development",
                  "Proven Expertise",
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#16a34a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </Box>

                    <Typography fontSize="15px" fontWeight={500}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>

      {/* WHY CHOOSE CBSE SECTION */}
      <Box
        sx={{
          px: { xs: 3, md: 8 },
          py: { xs: 8, md: 12 },
          backgroundColor: "#f8fafc",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
            Why Choose CBSE
          </Typography>
          <Typography sx={{ color: "#64748b" }}>
            Benefits of the CBSE Programme
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {[
            {
              title: "Strong Academic Foundation",
              desc: "Balanced syllabus aligned with NEET, JEE, Olympiads & NTSE for competitive success.",
            },
            {
              title: "Student-Friendly & Concept-Driven",
              desc: "Logical progression, simple language, and activity-based understanding for deeper learning.",
            },
            {
              title: "National & Global Recognition",
              desc: "Accepted across top Indian and international universities worldwide.",
            },
            {
              title: "Holistic Development",
              desc: "Covers sports, communication, values, leadership, and creativity for well-rounded growth.",
            },
            {
              title: "Stress-Free Assessments",
              desc: "Continuous evaluation for consistent growth without unnecessary pressure.",
            },
            {
              title: "Ideal for Competitive Exams",
              desc: "Curriculum mirrors national exam patterns for long-term academic advantage.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                p: 4,
                boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography fontWeight={700} sx={{ mb: 2 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.8 }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {/* COMPLETE ACADEMIC JOURNEY SECTION */}
      <Box
        sx={{
          px: { xs: 3, md: 8 },
          py: { xs: 8, md: 12 },
        }}
      >

        {/* Heading Area */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ mb: 2 }}
          >
            Complete Academic Journey
          </Typography>

        </Box>

        {/* 3 CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {[
            {
              title: "Primary (Grade 1 – 5)",
              desc: "Concept-building across Math, EVS, English, Art, General Knowledge, and Physical Education.",
              icon: <MenuBookIcon sx={{ fontSize: 50 }} />,
            },
            {
              title: "Middle School (Grade 6 – 8)",
              desc: "Strengthened academic depth across Science, Math, Social Sciences, Languages, ICT, and Life Skills.",
              icon: <SchoolIcon sx={{ fontSize: 50 }} />,
            },
            {
              title: "Secondary (Grade 9 – 10)",
              desc: "Labs, structured assessments, career guidance, and comprehensive board exam preparation.",
              icon: <ScienceIcon sx={{ fontSize: 50 }} />,
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "22px",
                p: 4,
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                },
              }}
            >
              {/* Icon Circle */}
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  mx: "auto",
                  mb: 3,
                  borderRadius: "50%",
                  backgroundColor: "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0f172a",
                }}
              >
                {item.icon}
              </Box>

              {/* Title */}
              <Typography
                fontWeight={700}
                sx={{ mb: 2, fontSize: "18px" }}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: 1.8,
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {/* THE MERIDIAN DIFFERENCE SECTION */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          px: { xs: 3, md: 8 },
          textAlign: "center",
          background: "linear-gradient(to bottom, #ffffff, #f8fafc)",
        }}
      >
        <Box
          sx={{
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "42px" },
              fontWeight: 900,
              mb: 4,
              color: "#0f172a",
            }}
          >
            The{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #2563eb, #06b6d4, #10b981, #f59e0b, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Horizon Valley Difference
            </Box>
          </Typography>

          {/* Line 1 */}
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              color: "#475569",
              mb: 4,
              lineHeight: 1.9,
              fontWeight: 500,
            }}
          >
            We don't ask children to sit still and listen.
          </Typography>

          {/* Line 2 with Highlighted Words */}
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              lineHeight: 2,
              fontWeight: 600,
            }}
          >
            We ask them to{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              imagine
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              build
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              question
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              explore
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              experiment
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              create
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              innovate
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              communicate
            </Box>
            , and{" "}
            <Box component="span" sx={{ color: "#2563eb", fontWeight: 800 }}>
              grow
            </Box>
            .
          </Typography>
        </Box>
        {/* GRADIENT STATEMENT CARDS */}
<Box
  sx={{
    px: { xs: 3, md: 8 },
    pb: { xs: 10, md: 14 },
  }}
>
  <Box
    sx={{
      maxWidth: "1100px",
      mx: "auto",
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        md: "repeat(3, 1fr)",
      },
      gap: 4,
    }}
  >
    {[
      {
        text: "This is learning that stays.",
        gradient: "linear-gradient(135deg, #2563eb, #7c3aed)",
      },
      {
        text: "This is understanding that lasts.",
        gradient: "linear-gradient(135deg, #06b6d4, #10b981)",
      },
      {
        text: "This is education for life — not just exams.",
        gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
      },
    ].map((item, index) => (
      <Box
        key={index}
        sx={{
          borderRadius: "24px",
          p: { xs: 4, md: 5 },
          color: "#ffffff",
          fontWeight: 700,
          fontSize: { xs: "18px", md: "20px" },
          lineHeight: 1.6,
          background: item.gradient,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          transition: "0.4s ease",
          textAlign: "center",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
          },
        }}
      >
        {item.text}
      </Box>
    ))}
  </Box>
</Box>
      </Box>
      
    </Box>
  );
};

export default Academics;