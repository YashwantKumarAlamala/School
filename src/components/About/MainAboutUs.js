import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import AboutUs from "./AboutUs";
import MobileAboutUs from "./MobileAboutUs";

const MainAboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <MobileAboutUs /> : <AboutUs />;
};

export default MainAboutUs;