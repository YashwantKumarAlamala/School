import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 0 },
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        color: "black",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
          }}
        >
          About Horizon Valley School
        </Typography>

        {/* Quote */}
        <Typography
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "1.2rem",
            mb: 5,
            opacity: 0.9,
          }}
        >
          “Education breeds Confidence. Confidence breeds Hope. And Hope breeds Peace.”
        </Typography>

        {/* Paragraphs */}
        <Typography sx={{ lineHeight: 1.9, mb: 3, textAlign: "justify" }}>
          Horizon Valley School is a brand new institution built with a vision
          to redefine modern education. We focus on creating a balanced
          environment where academic excellence meets sporting spirit and
          holistic development.
        </Typography>

        <Typography sx={{ lineHeight: 1.9, mb: 3, textAlign: "justify" }}>
          Inspired by 23 years of excellence in education since 2002, our
          journey reflects dedication to academics, sports, and extracurricular
          achievements that shape confident individuals prepared for global
          opportunities.
        </Typography>

        <Typography sx={{ lineHeight: 1.9, mb: 5, textAlign: "justify" }}>
          With visionary leadership, committed faculty, and strong parental
          support, we continue to build a legacy of innovation and excellence
          for generations to come.
        </Typography>

        {/* Button */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffcc00",
              color: "#000",
              px: 5,
              py: 1.5,
              fontWeight: 600,
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: "#e6b800",
              },
            }}
          >
            Learn More
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default AboutUs;
