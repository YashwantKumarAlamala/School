import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <img
        src="/logo/Final Logo_Icon.png"
        alt="Loading..."
        style={styles.logo}
      />
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    animation: "fadeOut 0.7s ease forwards",
  },
  logo: {
    width: 200,
    height: 200,
    objectFit: "contain",
    animation: "pulse 0.7s ease",
  },
};
