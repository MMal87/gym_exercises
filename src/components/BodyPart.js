import React from 'react';
import { Stack, Typography } from '@mui/material';

// Import icons for each group
import allIcon from '../assets/icons/all.png';
import backIcon from '../assets/icons/back.png';
import cardioIcon from '../assets/icons/cardio.png';
import chestIcon from '../assets/icons/chest.png';
import lowerArmsIcon from '../assets/icons/lowerArms.png';
import lowerLegsIcon from '../assets/icons/lowerLegs.png';
import neckIcon from '../assets/icons/neck.png';
import shouldersIcon from '../assets/icons/shoulders.png';
import upperArmsIcon from '../assets/icons/upperArms.png';
import upperLegsIcon from '../assets/icons/upperLegs.png';
import coreIcon from '../assets/icons/core.png';

// Map body parts to their corresponding icons
const iconsMap = {
  all: allIcon,
  back: backIcon,
  cardio: cardioIcon,
  chest: chestIcon,
  'lower arms': lowerArmsIcon,
  'lower legs': lowerLegsIcon,
  neck: neckIcon,
  shoulders: shouldersIcon,
  'upper arms': upperArmsIcon,
  'upper legs': upperLegsIcon,
  core: coreIcon
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // Get the icon, fallback to 'all' if not found
  const icon = iconsMap[item.toLowerCase()] || allIcon;

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
      <img src={icon} alt={item} style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
