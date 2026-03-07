import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { keyframes } from "@mui/system";
import { Box } from "@mui/material";

const fadeOut = keyframes`
  0%   { opacity: 1; }
  70%  { opacity: 1; }
  100% { opacity: 0; pointer-events: none; }
`;
const logoPulse = keyframes`
  0%   { transform: scale(0.8) rotate(-4deg); opacity: 0.4; }
  50%  { transform: scale(1.08) rotate(2deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;
const ringExpand = keyframes`
  0%   { transform: scale(0.6); opacity: 0.8; }
  100% { transform: scale(1.8); opacity: 0; }
`;
const shimmerBar = keyframes`
  0%   { width: 0%; }
  60%  { width: 80%; }
  100% { width: 100%; }
`;

export default function PageLoader() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 750);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <Box sx={{
      position: "fixed", inset: 0,
      backgroundColor: "#fff",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      zIndex: 9999,
      animation: `${fadeOut} 0.75s ease forwards`,
    }}>
      {/* Pulse ring */}
      <Box sx={{
        position: "absolute",
        width: 180, height: 180,
        borderRadius: "50%",
        border: "3px solid rgba(251,177,35,0.5)",
        animation: `${ringExpand} 0.75s ease-out forwards`,
      }} />

      {/* Logo */}
      <Box component="img" src="/logo/Final Logo_Icon.png" alt="Loading..."
        sx={{ width: 120, height: 120, objectFit: "contain", animation: `${logoPulse} 0.75s ease forwards`, position: "relative", zIndex: 1 }} />

      {/* Progress bar */}
      <Box sx={{ position: "absolute", bottom: 0, left: 0, height: 3, background: "linear-gradient(90deg, #fbb123, #f68e1e)", animation: `${shimmerBar} 0.7s ease forwards`, borderRadius: "0 2px 2px 0" }} />
    </Box>
  );
}
