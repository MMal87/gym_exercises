import { useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { Box, TextField, Button, Typography, Stack, Alert, slotProps } from '@mui/material'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      if (isSignUp) {
        // Sign up flow
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error
        
        // Show confirmation message
        setError({ message: 'Check your email for the confirmation link!', severity: 'success' })
      } else {
        // Sign in flow
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      }
    } catch (error) {
      setError({ message: error.message, severity: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box 
      sx={{ 
        maxWidth: '400px', 
        margin: '100px auto',
        padding: '20px',
        backgroundColor: '#2A2A2A',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }}
    >
      <Typography variant="h4" mb={3} color="#E5E7EB">
        {isSignUp ? 'Create Account' : 'Sign In'}
      </Typography>
      
      {error && (
        <Alert severity={error.severity || 'error'} sx={{ mb: 3 }}>
          {error.message}
        </Alert>
      )}
      
      <form onSubmit={handleAuth}>
        <Stack spacing={3}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            slotProps={{
              inputLabel: { style: { color: '#9EA3AF' } 
            }
          }}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#3A3A3A' },
                '&:hover fieldset': { borderColor: '#4A4A4A' },
                '&.Mui-focused fieldset': { borderColor: '#98C379' }
              },
              '& .MuiInputBase-input': { color: '#E5E7EB' }
            }}
          />
          
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            slotProps={{
              inputLabel: {
               style: { color: '#9EA3AF' } }
            }}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#3A3A3A' },
                '&:hover fieldset': { borderColor: '#4A4A4A' },
                '&.Mui-focused fieldset': { borderColor: '#98C379' }
              },
              '& .MuiInputBase-input': { color: '#E5E7EB' }
            }}
          />
          
          <Button
            type="submit"
            disabled={loading}
            sx={{ 
              backgroundColor: '#98C379',
              color: '#fff',
              padding: '10px',
              '&:hover': { backgroundColor: '#88B369' }
            }}
          >
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </Stack>
      </form>
      
      <Typography 
        textAlign="center" 
        mt={3} 
        color="#9EA3AF" 
        sx={{ cursor: 'pointer' }}
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </Typography>
    </Box>
  )
}