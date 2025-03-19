import Auth from '@/components/Auth'
import { useContext, useEffect } from 'react'
import { AuthContext } from './_app'
import { useRouter } from 'next/router'

export default function AuthPage() {
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()
  
  useEffect(() => {
    if (!loading && user) {
      router.push('/')
    }
  }, [user, loading, router])
  
  if (loading) return <div>Loading...</div>
  
  return !user ? <Auth /> : null
}