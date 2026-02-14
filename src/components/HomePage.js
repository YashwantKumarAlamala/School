import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { keyframes } from "@mui/system";

/* ================= FLOAT ANIMATION ================= */

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

/* ================= DESKTOP VERSION ================= */

const HomeDesktop = () => {
  return (
    <>
     {/* FIRST SECTION */}
<Box
  sx={{
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 2,
    py: 10,
    overflow: "hidden",
  }}
>
  {/* 🔥 Background Image Layer (Blur + Light Control) */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/School9.jpg')",
      backgroundSize: "standard",
      backgroundPosition: "center",
      filter: "brightness(0.6) blur(1px)",
      transform: "scale(1.05)", // prevents white edges from blur
    }}
  />

  {/* 🔥 Content Layer */}
  <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
    <Box
      sx={{
        backdropFilter: "blur(25px) saturate(180%)",
        WebkitBackdropFilter: "blur(25px) saturate(180%)",
        background: "rgba(255, 255, 255, 0.47)",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.45)",
        p: { xs: 4, md: 6 },
        animation: `${float} 8s ease-in-out infinite`,
        color: "#111",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 600, mb: 4, textAlign: "center", letterSpacing: 1 }}
      >
        About Our School
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src="/School9.jpg"
        alt="School"
        sx={{
          width: "100%",
          height: "380px",
          objectFit: "standard",
          borderRadius: "18px",
          mb: 3,
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        }}
      />

      <Typography
        sx={{
          fontStyle: "italic",
          textAlign: "center",
          fontSize: "1.1rem",
          mb: 4,
          opacity: 0.9,
        }}
      >
        “Education breeds Confidence. Confidence breeds Hope. And Hope breeds Peace.”
      </Typography>

      <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
        Horizon Valley School is a brand new institution built with a progressive vision to blend academic excellence with sporting achievement and holistic development.
      </Typography>

      <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
        Inspired by 23 years of educational excellence since 2002, we are committed to nurturing confident individuals prepared for global opportunities and future leadership.
      </Typography>

      <Typography sx={{ lineHeight: 1.8, mb: 5 }}>
        With visionary leadership, passionate faculty, and strong parental collaboration, we continue building a legacy rooted in innovation, discipline, and excellence.
      </Typography>

      <Box sx={{ textAlign: "center" }}>
        <Button
          sx={{
            px: 5,
            py: 1.4,
            borderRadius: "30px",
            background: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.4)",
            textTransform: "none",
            "&:hover": {
              background: "rgba(255,255,255,0.35)",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  </Container>
</Box>


      {/* SECOND SECTION */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/bg01.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 12,
          px: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(3px)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "space-between",
              flexWrap: "nowrap",
            }}
          >
            {[
              {
                title: "Horizon Valley Society",
                text: "Horizon Valley Society is dedicated to educational excellence, character development, and leadership growth.     We aim to build responsible individuals prepared to contribute positively to society.",
              },
              {
                title: "Vision",
                text: "Our vision is to inspire young minds to achieve beyond boundaries by fostering confidence and global awareness.",
              },
              {
                title: "Mission",
                text: "Our mission is to provide a dynamic learning environment that promotes academic excellence and holistic growth.",
              },
            ].map((card, i) => (
              <Box
                key={i}
                sx={{
                  flex: 1,
                  p: 5,
                  borderRadius: "28px",
                  backdropFilter: "blur(20px) saturate(160%)",
                  background: "rgba(255, 255, 255, 0.25)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  {card.title}
                </Typography>

                <Box
                  sx={{
                    height: "2px",
                    width: "60px",
                    background: "linear-gradient(to right, #111, transparent)",
                    mb: 3,
                  }}
                />

                <Typography sx={{ lineHeight: 1.8 }}>
                  {card.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};


/* ================= MOBILE VERSION ================= */

const HomeMobile = () => {
  return (
    <>
      {/* FIRST SECTION */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: 8,
          backgroundImage: "url('/School9.jpg')",
          backgroundSize: "standard",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              backdropFilter: "blur(25px)",
              background: "rgba(255, 255, 255, 0.49)",
              borderRadius: "26px",
              p: 5,
              boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
              animation: `${float} 8s ease-in-out infinite`,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
            >
              About Our School
            </Typography>
            {/* IMAGE ADDED HERE */}
            <Box
              component="img"
              src="/School9.jpg"
              alt="School"
              sx={{
                width: "100%",
                height: "280px",
                objectFit: "standard",
                borderRadius: "18px",
                mb: 3,
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
              }}
            />
            <Typography sx={{ lineHeight: 1.9, mb: 3 }}>
              Horizon Valley School nurtures confident individuals prepared for
              global opportunities and leadership.
            </Typography>

            <Typography sx={{ lineHeight: 1.9, mb: 4 }}>
              We focus on academic excellence, moral values, discipline, and
              holistic development. Our environment encourages creativity,
              innovation, and strong character building from an early age.
            </Typography>

            <Button
              fullWidth
              sx={{
                py: 1.3,
                borderRadius: "28px",
                background: "rgba(255,255,255,0.3)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  background: "rgba(255,255,255,0.4)",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SECOND SECTION STACKED */}
      <Box
        sx={{
          backgroundImage: "url('/bg01.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 10,
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>

            {/* CARD 1 */}
            <Box
              sx={{
                p: 5,
                borderRadius: "26px",
                backdropFilter: "blur(25px)",
                background: "rgba(255, 255, 255, 0.39)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Horizon Valley Society
              </Typography>
              <Typography sx={{ lineHeight: 1.9 }}>
                Horizon Valley Society is committed to building a strong
                educational foundation rooted in discipline, leadership, and
                excellence. We aim to develop responsible citizens who
                contribute positively to society.
              </Typography>
            </Box>

            {/* CARD 2 */}
            <Box
              sx={{
                p: 5,
                borderRadius: "26px",
                backdropFilter: "blur(25px)",
                background: "rgba(255,255,255,0.60)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Vision
              </Typography>
              <Typography sx={{ lineHeight: 1.9 }}>
                Our vision is to empower students with confidence, knowledge,
                and global awareness so they can achieve beyond boundaries and
                lead with integrity in the future.
              </Typography>
            </Box>

            {/* CARD 3 */}
            <Box
              sx={{
                p: 5,
                borderRadius: "26px",
                backdropFilter: "blur(25px)",
                background: "rgba(255,255,255,0.55)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Mission
              </Typography>
              <Typography sx={{ lineHeight: 1.9 }}>
                Our mission is to create a dynamic learning atmosphere that
                promotes academic excellence, character development, and
                holistic growth for every child.
              </Typography>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
};


/* ================= WRAPPER ================= */

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

export default HomePage;
