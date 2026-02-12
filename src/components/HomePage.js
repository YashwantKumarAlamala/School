import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        src="/schoolhero.mp4"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      />

      {/* Navbar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, md: 8 },
          py: 2,
          color: "#fff",
         // backdropFilter: "blur(6px)",
        //  backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/schoollo.png"
            alt="School Logo"
            sx={{
              height: { xs: 75, md: 85 },
              width: "auto",
              //filter: "drop-shadow(0px 3px 8px rgba(0,0,0,0.6))",
              //mixBlendMode: "multiply",

            }}
          />
        </Box>

        {/* Menu */}
        <Box sx={{ display: "flex", gap: 4 }}>
          <Typography sx={{ cursor: "pointer", fontWeight: 500 }}>
            Home
          </Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 500 }}>
            About
          </Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 500 }}>
            Admissions
          </Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 500 }}>
            Contact
          </Typography>
        </Box>
      </Box>

      {/* Hero Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2.2rem", md: "3.5rem" },
          }}
        >
          Welcome to Our School
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.3rem" },
            mb: 4,
            opacity: 0.9,
          }}
        >
          Shaping Future Leaders for Tomorrow
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffcc00",
            color: "#000",
            px: 5,
            py: 1.5,
            fontWeight: 600,
            borderRadius: "30px",
            boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#e6b800",
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
