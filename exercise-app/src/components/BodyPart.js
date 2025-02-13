import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

// Map body parts to their corresponding icon paths
const iconsMap = {
  all: '/icons/all.png',
  back: '/icons/back.png',
  cardio: '/icons/cardio.png',
  chest: '/icons/chest.png',
  'lower arms': '/icons/lowerArms.png',
  'lower legs': '/icons/lowerLegs.png',
  neck: '/icons/neck.png',
  shoulders: '/icons/shoulders.png',
  'upper arms': '/icons/upperArms.png',
  'upper legs': '/icons/upperLegs.png',
  core: '/icons/core.png'
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // Get the icon path, fallback to 'all' if not found
  const iconPath = iconsMap[item.toLowerCase()] || '/icons/all.png';

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <Image 
          src={iconPath}
          alt={item}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <Typography 
        fontSize="24px" 
        fontWeight="bold" 
        color="#3A1212" 
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;