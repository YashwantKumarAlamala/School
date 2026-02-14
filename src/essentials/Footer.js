import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

/* ========================= */
/* DESKTOP FOOTER */
/* ========================= */

const FooterDesktop = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "#f3b407",
      color: "#000",
      pt: 10,
      pb: 6,
      px: 10,
    }}
  >
    {/* Contact Section */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
        mb: 12,
      }}
    >
      {/* Address */}
      <Box maxWidth="400px">
        <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.12em", mb: 3 }}>
          SCHOOL ADDRESS
        </Typography>

        <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
          Madhura Nagar Road No.3,<br />
          near Adarsha College of Nursing,<br />
          Kalyandurgam Road,<br />
          Anantapur - 515002
        </Typography>
      </Box>

      {/* Enquiry */}
      <Box maxWidth="400px">
        <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.12em", mb: 3 }}>
          ENQUIRY OFFICE
        </Typography>

        <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
          SV Degree & PG College,<br />
          12-3-415, Jesus Nagar,<br />
          Anantapur - 515001
        </Typography>
      </Box>

      {/* Contact */}
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.12em", mb: 3 }}>
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

    {/* Big Background Text */}
    <Box sx={{ textAlign: "center", mb: 8 }}>
      <Typography
        sx={{
          fontSize: "10vw",
          fontWeight: 100,
          letterSpacing: "-0.03em",
          opacity: 0.08,
        }}
      >
        HORIZON VALLEY
      </Typography>
    </Box>

    <Typography
      variant="caption"
      sx={{ display: "block", textAlign: "center", color: "gray", letterSpacing: 1 }}
    >
      © 2026 HORIZON VALLEY SCHOOL. ALL RIGHTS RESERVED.
    </Typography>
  </Box>
);

/* ========================= */
/* MOBILE FOOTER */
/* ========================= */

const FooterMobile = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "#f3b407",
      color: "#000",
      pt: 8,
      pb: 5,
      px: 4,
    }}
  >
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", mb: 2 }}>
          SCHOOL ADDRESS
        </Typography>
        <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "0.9rem" }}>
          Madhura Nagar Road No.3,<br />
          Kalyandurgam Road,<br />
          Anantapur - 515002
        </Typography>
      </Box>

  
      <Box maxWidth="400px">
        <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.12em", mb: 3 }}>
          ENQUIRY OFFICE
        </Typography>

        <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
          SV Degree & PG College,<br />
          12-3-415, Jesus Nagar,<br />
          Anantapur - 515001
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", mb: 2 }}>
          CONTACT
        </Typography>
        <Typography sx={{ color: "#555", fontSize: "0.9rem", mb: 1 }}>
          7075098989
        </Typography>
        <Typography sx={{ color: "#555", fontSize: "0.9rem", mb: 1 }}>
          7075198989
        </Typography>
        <Typography sx={{ color: "#555", fontSize: "0.9rem" }}>
          horizonvalleyatp@gmail.com
        </Typography>
      </Box>
    </Box>

   <Box sx={{ textAlign: "center", mt: 8 }}>
  <Typography
    sx={{
      fontFamily: "cursive",
      fontSize: "15vw",
      fontWeight: 200, // 120 is not valid, use 100–900
      opacity: 0.18,
      lineHeight: 0.99, // 🔥 reduce space between lines
      letterSpacing: "-0.02em",
    }}
  >
    Horizon 
    Valley
  </Typography>
</Box>

    <Typography
      variant="caption"
      sx={{
        display: "block",
        textAlign: "center",
        mt: 3,
        color: "gray",
      }}
    >
      © 2026 HORIZON VALLEY SCHOOL
    </Typography>
  </Box>
);

/* ========================= */
/* MAIN FOOTER SWITCH */
/* ========================= */

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
