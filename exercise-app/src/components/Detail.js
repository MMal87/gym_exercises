import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import Image from "next/image";

const extraDetailIcons = {
  bodyPart: "/icons/body-part.png",
  target: "/icons/target.png",
  equipment: "/icons/equipment.png",
};

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: extraDetailIcons.bodyPart,
      name: bodyPart,
    },
    {
      icon: extraDetailIcons.target,
      name: target,
    },
    {
      icon: extraDetailIcons.equipment,
      name: equipment,
    },
  ];

  return (
  

<Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
    <div style={{ position: 'relative', width: '729px', height: '742px' }}>
        <Image 
            src={gifUrl} 
            alt={name}
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="detail-image"
            unoptimized 
        />
    </div>

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3">
          {name}
        </Typography>
        <Typography variant="h5">
          Exercise helps you to become stronger and more flexible. {name} will
          target your {bodyPart}.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <div
                style={{ position: "relative", width: "50px", height: "50px" }}
              >
                {" "}
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
