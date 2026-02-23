import React from "react";
import { Box, Typography } from "@mui/material";

const MobileAboutUs = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
  {/* HERO SECTION */}
<Box
  sx={{
    position: "relative",
    backgroundColor: "#15253d",
    pt: 16,   // reduced from 8/10
    pb: 26,   // reduced height of dark bg
    px: 3,
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
      fontSize: "26px",
    }}
  >
    Best CBSE School
  </Typography>

  <Typography
    sx={{
      color: "rgba(255,255,255,0.85)",
      mt: 1,
      fontSize: "14px",
    }}
  >
    Nurturing Future Leaders in Anantapur
  </Typography>
</Box>

{/* HERO IMAGE */}
<Box
  sx={{
    position: "relative",
    height: "300px",  // slightly reduced
    mx: 3,
    mt: -14 ,           // move image more up
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
  }}
>
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/About/about1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0))",
    }}
  />
</Box>

      {/* WHY CBSE */}
      <Box sx={{ px: 3, py: 8 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 2, color: "#0f172a" }}
        >
          Why Choose CBSE?
        </Typography>

        <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
          CBSE curriculum focuses on conceptual clarity, analytical
          thinking, and strong academic foundations to prepare students
          for competitive environments.
        </Typography>
      </Box>

      {/* ABOUT SCHOOL */}
      <Box sx={{ px: 3, py: 8, backgroundColor: "#f8fafc" }}>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 2, color: "#0f172a" }}
        >
          About Horizon Valley School
        </Typography>

        <Typography sx={{ color: "#475569", lineHeight: 1.8, mb: 3 }}>
          We are committed to holistic development through innovative
          teaching, strong infrastructure, and experienced faculty.
        </Typography>

        <Box
          sx={{
            height: "240px",
            borderRadius: "18px",
            backgroundImage: "url('/Facilities/greencampus.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        />
      </Box>

      {/* FACILITIES */}
      <Box sx={{ px: 3, py: 10 }}>
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{ textAlign: "center", mb: 6 }}
        >
          Our Facilities
        </Typography>

        {[
          { title: "Smart Classrooms", img: "/Facilities/smart.jpg" },
          { title: "Modern Science Labs", img: "/Facilities/labs.jpg" },
          { title: "Computer Lab", img: "/Facilities/computer.jpg" },
          { title: "Green Campus", img: "/Facilities/greencampus.jpg" },
        ].map((item, index) => (
          <Box key={index} sx={{ mb: 5 }}>
            <Box
              sx={{
                height: "220px",
                borderRadius: "18px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
            />
            <Typography
              sx={{
                mt: 2,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* STUDENT CENTERED */}
      <Box sx={{ px: 3, py: 10, backgroundColor: "#f8fafc" }}>
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{ mb: 3, lineHeight: 1.3 }}
        >
          Student-Centered Approach
        </Typography>

        <Typography sx={{ color: "#475569", lineHeight: 1.8, mb: 3 }}>
          We nurture confident young leaders through personal attention,
          emotional growth, leadership training, and joyful learning.
        </Typography>

        <Box
          sx={{
            height: "260px",
            borderRadius: "20px",
            backgroundImage: "url('/Facilities/student.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        />
      </Box>
    </Box>
  );
};

export default MobileAboutUs;