import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './_app'
import { useRouter } from 'next/router'
import { Box, Typography, Button, Stack } from '@mui/material'
import { supabase } from '@/utils/supabaseClient'

export default function Profile() {
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()
  const [savedWorkouts, setSavedWorkouts] = useState([])
  
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])
  
  // Add functionality to load saved workouts here
  
  if (loading) return <div>Loading...</div>
  
  if (!user) return null
  
  return (
    <Box sx={{ mt: '100px', p: '20px' }}>
      <Typography variant="h4" color="#E5E7EB" mb={4}>Your Profile</Typography>
      
      <Box sx={{ 
        backgroundColor: '#2A2A2A', 
        borderRadius: '12px',
        padding: '20px',
        mb: 4
      }}>
        <Typography variant="h6" color="#E5E7EB" mb={2}>Account Information</Typography>
        <Typography color="#9EA3AF">Email: {user.email}</Typography>
      </Box>
      
      <Box sx={{ 
        backgroundColor: '#2A2A2A', 
        borderRadius: '12px',
        padding: '20px'
      }}>
        <Typography variant="h6" color="#E5E7EB" mb={2}>Saved Workouts</Typography>
        
        {savedWorkouts.length === 0 ? (
          <Typography color="#9EA3AF">You haven&apos;t saved any workouts yet.</Typography>
        ) : (
          // Display saved workouts here
          <Typography color="#9EA3AF">Your workouts will appear here.</Typography>
        )}
      </Box>
    </Box>
  )
}