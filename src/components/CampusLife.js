import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const campusData = [
  {
    title: "Sports",
    image: "/Facilities/sports.jpg",
  },
  {
    title: "Green Campus",
    image: "/Facilities/greencampus.jpg",
  },
  {
    title: "Science Labs",
    image: "/Facilities/labs.jpg",
  },
  {
    title: "Smart Classes",
    image: "/Facilities/smart.jpg",
  },
   {
    title: "Music",
    image: "/Facilities/music.jpg",
  },
];

const CampusLife = () => {
  return (
    <Box
      sx={{
        pt: { xs: 18, md: 20 },
        pb: 10,
        px: { xs: 3, md: 6 },
        backgroundColor: "#f8fafc",
        textAlign: "center",
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h3"
        fontWeight={800}
        mb={8}
        sx={{ fontSize: { xs: "26px", md: "38px" } }}
      >
        Campus Life
      </Typography>

      {/* Circular Image Grid */}
      <Grid container spacing={6} justifyContent="center">
        {campusData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Circular Image */}
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />

              {/* Title */}
              <Typography
                mt={3}
                variant="h6"
                fontWeight={700}
                sx={{ color: "#1e3a8a" }}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
           {/* Campus Life Description */}
<Box
  sx={{
    mt: 12,
    display: "flex",
    justifyContent: "center",
  }}
>
  <Box
    sx={{
      maxWidth: "900px",
      px: { xs: 3, md: 6 },
      py: { xs: 5, md: 6 },
      borderRadius: "20px",
      background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    }}
  >
    <Typography
      variant="h5"
      fontWeight={700}
      mb={3}
      sx={{
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      Experience a Vibrant Campus Life
    </Typography>

    <Typography
      variant="body1"
      sx={{
        color: "#e0f2fe",
        lineHeight: 1.8,
        textAlign: "center",
        fontSize: { xs: "15px", md: "17px" },
      }}
    >
      Our campus provides a dynamic environment where students grow
      academically, socially, and creatively. From competitive sports
      and modern science laboratories to smart classrooms and cultural
      activities, every experience is designed to inspire excellence.
      Surrounded by a green and eco-friendly campus, students enjoy
      a balanced atmosphere that nurtures innovation, leadership,
      and holistic development.
    </Typography>
  </Box>
</Box>
    </Box>
  );
};

export default CampusLife;