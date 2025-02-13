import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import BodyPart from './BodyPart';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <Image 
        src="/icons/left-arrow.png" 
        alt="left-arrow" 
        width={50}  // adjust these values
        height={50} // to match your arrow size
      />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <Image 
        src="/icons/right-arrow.png" 
        alt="right-arrow" 
        width={50}  // adjust these values
        height={50} // to match your arrow size
      />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;