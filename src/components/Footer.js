import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "#f3b407",
      color: "#000",
      pt: 10,
      pb: 6,
      px: { md: 10, xs: 4 },
    }}
  >
    {/* Contact Section */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: 8,
        mb: 12,
      }}
    >
      {/* Left Side - School Address */}
      <Box sx={{ maxWidth: { md: "400px", xs: "100%" } }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            mb: 3,
          }}
        >
          SCHOOL ADDRESS
        </Typography>

        <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
          Madhura Nagar Road No.3,
          <br />
          near Adarsha College of Nursing,
          <br />
          Kalyandurgam Road,
          <br />
          Anantapur - 515002
        </Typography>
      </Box>

      {/* Middle - Enquiry Office */}
      <Box sx={{ maxWidth: { md: "400px", xs: "100%" } }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            mb: 3,
          }}
        >
          ENQUIRY OFFICE
        </Typography>

        <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
          SV Degree & PG College,
          <br />
          12-3-415, Jesus Nagar,
          <br />
          Anantapur - 515001
        </Typography>
      </Box>

      {/* Right Side - Contact */}
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            mb: 3,
          }}
        >
          CONTACT
        </Typography>

        <Typography sx={{ mb: 1.5, color: "#555", fontSize: "0.95rem" }}>
          Phone: 7075098989
        </Typography>
        <Typography sx={{ mb: 1.5, color: "#555", fontSize: "0.95rem" }}>
          Phone: 7075198989
        </Typography>
        <Typography sx={{ color: "#555", fontSize: "0.95rem" }}>
          Mail: horizonvalleyatp@gmail.com
        </Typography>
      </Box>
    </Box>

    {/* Premium Background Text */}
    <Box
      sx={{
        position: "relative",
        mt: 16,
        mb: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      {/* Soft Glow Layer */}
      <Typography
        sx={{
          position: "absolute",
          fontSize: { md: "11vw", xs: "14vw" },
          fontWeight: 100,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          px: { md: 4, xs: 2 },
          color: "#000000",
          opacity: 0.05,
          filter: "blur(6px)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        HORIZON VALLEY
      </Typography>

      {/* Main Striped Layer */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { md: "11vw", xs: "14vw" },
          fontWeight: 100,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          px: { md: 4, xs: 2 },
          whiteSpace: "nowrap",
          background: `repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.8) 1px,
            transparent 1px,
            transparent 3px
          )`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: 0.5,
        }}
      >
        HORIZON VALLEY
      </Typography>
    </Box>

    {/* Footer / Caption */}
    <Typography
      variant="caption"
      sx={{
        display: "block",
        textAlign: "center",
        mt: 4,
        color: "gray",
        letterSpacing: 1,
      }}
    >
      © 2026 HORIZON VALLEY SCHOOL. ALL RIGHTS RESERVED.
    </Typography>
  </Box>
);

export default Footer;
