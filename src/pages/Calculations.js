
import React, { useState } from 'react';
import { Box } from '@mui/material';


const Calculations = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <Box>

           <Calculations />
    </Box>
  )
}

export default Calculations