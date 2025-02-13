import { Box } from '@mui/material';
import '@/styles/globals.css';
import '@/styles/App.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px' }}} m="auto">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Box>
  );
}