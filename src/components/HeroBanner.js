import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
<Box sx={{
    mt: {lg: '212px', xs: '70px' }, ml: {sm: '50px'}
}} position = "relative" p="20px">
    <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
        Get Strong Club
    </Typography>
    <Typography fontWeight={700}
    sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
        
        
    Build Your Perfect Workout.  <br /> Your Way. <br /> Anytime.
    </Typography>
    <Typography fontSize="22px"
    LineHeight="35px" mb={4}>
        Create a workout that fits your goals. <br /> Choose from hundreds of exercises.
    </Typography>
    <Button variant="contained" color='error' href='#exercises'
    sx={{ backgroundcolor: "#ff2625", padding:"15px"}} >Explore Exercises</Button>
    <Typography fontWeight={600} color="#FF2625" sx={{
        opacity: 0.1, display: { lg: 'block', xs: 'none'}
    }}
    fontSize="200px" >
    Exercises
    </Typography>
<img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
</Box>
)
}

export default HeroBanner