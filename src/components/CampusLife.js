import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Slider from "react-slick";

const campusData = [
  { title: "Sports", image: "/Facilities/sports.jpg" },
  { title: "Green Campus", image: "/Facilities/greencampus.jpg" },
  { title: "Science Labs", image: "/Facilities/labs.jpg" },
  { title: "Smart Classes", image: "/Facilities/smart.jpg" },
  { title: "Music", image: "/Facilities/music.jpg" },
];

const eventsData = [
  { title: "Annual Day", image: "/Events/events.jpg" },
  { title: "Art & Craft", image: "/Events/art.jpg" },
  { title: "Yoga Day", image: "/Events/yoga.jpg" },
  { title: "Science Exhibition", image: "/Events/events1.jpg" },
  { title: "Sports Day", image: "/Facilities/sports.jpg" },
];

const CampusLife = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        pt: { xs: 26, md: 25 },
        pb: 12,
        px: { xs: 3, md: 6 },
        backgroundColor: "#f8fafc",
        textAlign: "center",
      }}
    >
      {/* SECTION HEADING */}
      <Typography
        variant="h3"
        fontWeight={800}
        mb={8}
        sx={{ fontSize: { xs: "26px", md: "38px" } }}
      >
        Campus Life
      </Typography>

      {/* CIRCULAR GRID */}
      <Grid container spacing={6} justifyContent="center">
        {campusData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
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
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
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

      {/* DESCRIPTION SECTION */}
      <Box mt={12} display="flex" justifyContent="center">
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
            sx={{ color: "#ffffff" }}
          >
            Experience a Vibrant Campus Life
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#e0f2fe",
              lineHeight: 1.8,
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

      {/* ANNUAL EVENTS CAROUSEL */}
      <Box mt={14}>
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          sx={{ fontSize: { xs: "24px", md: "34px" } }}
        >
          Annual Events & Celebrations
        </Typography>

        <Slider {...sliderSettings}>
          {eventsData.map((event, index) => (
            <Box key={index} px={2}>
              <Box
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={event.image}
                  alt={event.title}
                  sx={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    transition: "0.4s",
                    "&:hover": { transform: "scale(1.08)" },
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: "#ffffff" }}
                  >
                    {event.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CampusLife;