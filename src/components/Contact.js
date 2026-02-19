import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Contact = () => {
  return (
    <Box
      sx={{
        pt: { xs: 22, md: 26 },
        pb: 10,
        px: { xs: 3, md: 6 },
        backgroundColor: "#f8fafc",
      }}
    >
      <Grid
        container
        spacing={6}
        maxWidth="1300px"
        mx="auto"
        alignItems="flex-start"
      >
        {/* ================= LEFT SIDE ================= */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" fontWeight={800} mb={3}>
            Contact Us
          </Typography>

          <Typography variant="h6" fontWeight={700} mb={2}>
            Horizon Valley School
          </Typography>

          {/* Address */}
          <Box display="flex" alignItems="flex-start" mb={3}>
            <LocationOnIcon sx={{ color: "#1e3a8a", mr: 1, mt: 0.5, fontSize: 28 }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem" }}
              color="text.secondary"
              lineHeight={1.8}
            >
              Madhura Nagar Road No.3,

              Near Adarsha College of Nursing,
              <br />
              Kalyandurgam Road,

              Anantapur - 515002
            </Typography>
          </Box>

          {/* Phone */}
          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ color: "#1e3a8a", mr: 1, fontSize: 26 }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem" }}
              component="a"
              color="text.secondary"
              textDecoration="none"
            >
              7075098989, 7075198989
            </Typography>
          </Box>

          {/* Email */}
          <Box display="flex" alignItems="center" mb={3}>
            <EmailIcon sx={{ color: "#1e3a8a", mr: 1, fontSize: 26 }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem" }}
              component="a"
              color="text.secondary"
              textDecoration="none"
            >
              horizonvalleyatp@gmail.com
            </Typography>
          </Box>

          {/* Working Hours */}
          <Box display="flex" alignItems="flex-start">
            <AccessTimeIcon sx={{ color: "#1e3a8a", mr: 1, mt: 0.5, fontSize: 26 }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem" }}
              color="text.secondary"
              lineHeight={1.8}
            >
              Mon–Fri : 9am to 7pm
              <br />
              Sat : 9am to 3pm
              <br />
              Sun : Closed
            </Typography>
          </Box>
        </Grid>
        {/* ================= RIGHT SIDE (AESTHETIC PREMIUM) ================= */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            ml: { md: 15 },
          }}
        >
          <Card
            sx={{
              width: { xs: "100%", md: "125%" },
              p: { xs: 4, md: 6 },
              borderRadius: "28px", // softer rounded edges
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 25px 60px rgba(30,58,138,0.08)",
              border: "1px solid rgba(30,58,138,0.08)",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={800}
              mb={4}
              sx={{
                letterSpacing: "0.5px",
              }}
            >
              Admission Enquiry
            </Typography>

            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField
                  fullWidth
                  label="Child's Name"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  label="Parent / Guardian Name"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  label="Parent's Email"
                  type="email"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  label="Class Applying For"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  label="Phone Number"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
              </Grid>

              <Grid item>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    py: 1.8,
                    fontWeight: 700,
                    borderRadius: "14px",
                    textTransform: "none",
                    fontSize: "1rem",
                    background: "linear-gradient(135deg, #1e3a8a, #1e40af)",
                    boxShadow: "0 8px 20px rgba(30,58,138,0.25)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 25px rgba(30,58,138,0.35)",
                    },
                  }}
                >
                  Submit Enquiry
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
       {/* MAP */}
<Box sx={{ mt: 4 }}>
  <Card
    sx={{
      height: { xs: 300, sm: 350, md: 418 },
      width: { xs: "136%", md: 1260 },
      maxWidth: "120%",
      mx: "auto",
      borderRadius: 6,
      overflow: "hidden",
      boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    }}
  >
    <iframe
      title="Horizon Valley School Location"
      src="https://www.google.com/maps?q=14.672444,77.551778&z=18&t=k&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    />
  </Card>
</Box>

      </Grid>
    </Box>
  );
};

export default Contact;
