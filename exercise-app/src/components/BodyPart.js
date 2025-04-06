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
  const iconPath = iconsMap[item.toLowerCase()] || '/icons/all.png';

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #9CA3AF' : '', // Changed from red to grey
        backgroundColor: '#2D3748', // Dark slate grey for card background
        borderRadius: '20px', // Added top radius too
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
        transition: 'all 0.3s ease', // Smooth transition for hover effects
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Initial shadow
        '&:hover': {
          transform: 'translateY(-10px)', // Lift effect on hover
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
          backgroundColor: '#3A4757', // Slightly lighter on hover
        }
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
        color="#E2E8F0" // Changed to light grey
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;