import React from "react";
import { Box } from "@mui/material";

const Admissions = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        component="video"
        src="/comingsoon.mp4"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Admissions;
