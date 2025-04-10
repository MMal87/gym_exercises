import React, {useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import {exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        
        // Check if bodyPartsData is an array and has items
        if (Array.isArray(bodyPartsData)) {
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          console.error('Expected array from API, received:', bodyPartsData);
          setBodyParts(['all']); // Fallback to at least having 'all'
        }
      } catch (error) {
        console.error('Error fetching body parts:', error);
        setBodyParts(['all']); // Fallback in case of error
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if(search) {
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions);
        
        if (!Array.isArray(exercisesData)) {
          console.error('Expected array from exercises API, received:', exercisesData);
          return;
        }

        console.log('Full exercise data received:', exercisesData);
        
        const searchedExercises = exercisesData.filter((exercise) => 
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
        );

        setSearch('');
        setExercises(searchedExercises);

        window.scrollTo({ 
          top: document.getElementById('exercises').offsetTop,
          behavior: 'smooth'
        });
      } catch (error) {
        console.error('Error searching exercises:', error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize:{ lg: '44px', xs: '30px' }}} mb="50px" textAlign='center'>
        Choose Your Exercises<br /> Below
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{ 
            input: { 
              fontWeight:'700', 
              border: 'none', 
              borderRadius:'4px' 
            },
            width: {lg: '800px', xs: '350px'},
            backgroundColor:'#fff', 
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button 
          className="search-btn"
          sx={{
            bgcolor: '#A0AEC0',
            color: '#fff',
            textTransform: 'none',
            width: {lg:'175px', xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'},
            height:'56px',
            position: "absolute",
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;