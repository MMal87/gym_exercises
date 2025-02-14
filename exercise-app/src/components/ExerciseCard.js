import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Button, Stack, Typography} from '@mui/material'; 

const ExerciseCard = ({exercise}) => {
  return (
    <Link 
      className="exercise-card" 
      href={`/exercise/${exercise.id}`}
      style={{ 
        textDecoration: 'none',
        display: 'block'
      }}
    >
      <Stack
        sx={{
          backgroundColor: '#2A2A2A',
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: '#323232',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)'
          }
        }}
      >
        <Image 
  src={exercise.gifUrl} 
  alt={exercise.name} 
  width={400}  
  height={400}
  style={{
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px'
  }}
/>
        <Stack direction="row" spacing={1} sx={{ padding: '16px' }}>
          <Button 
            sx={{ 
              color: '#E5E7EB',
              background: '#98C379',
              fontSize: '14px',
              borderRadius: '8px',
              textTransform: 'capitalize',
              '&:hover': {
                background: '#404040'
              }
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button 
            sx={{ 
              color: '#E5E7EB',
              background: '#E06C75',
              fontSize: '14px',
              borderRadius: '8px',
              textTransform: 'capitalize',
              '&:hover': {
                background: '#404040'
              }
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography 
          sx={{
            color: '#E5E7EB',
            fontWeight: 600,
            padding: '0 16px 16px 16px',
            textTransform: 'capitalize',
            fontSize: '20px'
          }}
        >
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  )
}

export default ExerciseCard