import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
} from "@mui/material";

const Admissions = () => {
  return (
    <Box
      sx={{
        pt: { xs: 14, md: 18 },
        pb: 10,
        px: { xs: 3, md: 6 },
        backgroundColor: "#f8fafc",
      }}
    >
      {/* ================= TOP CTA SECTION ================= */}
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          mb: 10,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(135deg, #1e3a8a, #1e40af)",
            color: "#fff",
            borderRadius: "32px",
            py: { xs: 6, md: 8 },
            px: { xs: 4, md: 8 },
            boxShadow: "0 25px 60px rgba(30,58,138,0.25)",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              mb: 2,
              fontSize: { xs: "22px", md: "34px" },
              lineHeight: 1.3,
            }}
          >
            Ready to Give Your Child the Best CBSE Education?
          </Typography>

          <Typography
            sx={{
              opacity: 0.9,
              fontSize: { xs: "15px", md: "18px" },
              maxWidth: "750px",
              mx: "auto",
            }}
          >
            Schedule a campus visit and discover why Horizon Valley is the
            top choice for CBSE education in Anantapur.
          </Typography>
        </Box>
      </Box>

      {/* ================= ADMISSION FORM ================= */}
      <Box display="flex" justifyContent="center">
        <Card
          sx={{
            width: { xs: "100%", md: "700px" },
            p: { xs: 4, md: 6 },
            borderRadius: "28px",
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
            sx={{ letterSpacing: "0.5px" }}
          >
            Admission Enquiry
          </Typography>

          <Grid container spacing={3} direction="column">
            <Grid item>
              <TextField fullWidth label="Child's Name" />
            </Grid>

            <Grid item>
              <TextField fullWidth label="Parent / Guardian Name" />
            </Grid>

            <Grid item>
              <TextField fullWidth label="Parent's Email" type="email" />
            </Grid>

            <Grid item>
              <TextField fullWidth label="Class Applying For" />
            </Grid>

            <Grid item>
              <TextField fullWidth label="Phone Number" />
            </Grid>

            <Grid item>
              <TextField fullWidth label="Message" multiline rows={4} />
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
      </Box>
    </Box>
  );
};

export default Admissions;