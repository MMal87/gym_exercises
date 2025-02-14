import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';


const HeroBanner = () => {
  return (
<Box sx={{
    mt: {lg: '212px', xs: '70px' }, 
    ml: {sm: '50px'}
}} position="relative" p="20px">
    <Typography color="#E06C75"
        fontWeight="600" fontSize="26px">
        Amplitude
    </Typography>
    <Typography fontWeight={700}
    sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
        
        
    Build Your Perfect Workout.  <br /> Your Way. <br /> Anytime.
    </Typography>
    <Typography fontSize="22px"
    LineHeight="35px" mb={4}>
        Create a workout that fits your goals. <br /> Choose from hundreds of exercises.
    </Typography>
    <Button variant="contained" href='#exercises'
    sx={{ backgroundColor: "#98C379", padding:"15px"}} >Explore Exercises</Button>
    <Typography fontWeight={600} color="#9CA3AF" sx={{
        opacity: 0.03, display: { lg: 'block', xs: 'none'}
    }}
    fontSize="200px" >
    Exercises
    </Typography>
    <div style={{ position: 'absolute', right: '40px', top: '0px', width: '700px', height: '900px', marginTop: '-330px' }}>
        <Image 
            src="/images/banner.png" 
            alt="banner" 
            fill
            style={{ objectFit: 'contain' }}
            priority  
        />
    </div>
</Box>
)
}

export default HeroBanner