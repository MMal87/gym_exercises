import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

// Map body parts to their corresponding icon paths
const iconsMap = {
  all: "/icons/all.png",
  back: "/icons/back.png",
  cardio: "/icons/cardio.png",
  chest: "/icons/chest.png",
  "lower arms": "/icons/lowerArms.png",
  "lower legs": "/icons/lowerLegs.png",
  neck: "/icons/neck.png",
  shoulders: "/icons/shoulders.png",
  "upper arms": "/icons/upperArms.png",
  "upper legs": "/icons/upperLegs.png",
  core: "/icons/core.png",
};
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const iconPath = iconsMap[item.toLowerCase()] || "/icons/all.png";

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        backgroundColor: "#2A2A2A",
        borderRadius: "12px", // More rounded corners
        padding: "20px",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        "&:hover": {
          backgroundColor: "#323232",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        },
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div style={{ position: "relative", width: "40px", height: "40px" }}>
        <Image
          src={iconPath}
          alt={item}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#E2E8F0" // Changed to light grey
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
