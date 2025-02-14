import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

import BodyPart from './BodyPart';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <IconButton 
      onClick={() => scrollPrev()} 
      sx={{ 
        backgroundColor: '#fff',
        position: 'fixed',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        '&:hover': { backgroundColor: '#f5f5f5' },
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)'
      }}
    >
      <ChevronLeft size={24} color="#FF2625" />
    </IconButton>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <IconButton 
      onClick={() => scrollNext()} 
      sx={{ 
        backgroundColor: '#fff',
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        '&:hover': { backgroundColor: '#f5f5f5' },
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)'
      }}
    >
      <ChevronRight size={24} color="#FF2625" />
    </IconButton>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box 
    position="relative" 
    width="100%" 
    sx={{ 
      overflow: 'hidden',
      padding: '0 40px'
    }}
  >
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
          sx={{
            minWidth: '270px',
            display: 'inline-block'
          }}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

export default HorizontalScrollbar;