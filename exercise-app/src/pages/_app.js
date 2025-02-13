import { Box } from '@mui/material';
import '@/styles/globals.css';
import '@/styles/App.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9CA3AF', // Your existing red accent
    },
    background: {
      default: '#1A202C', // Dark slate grey
      paper: '#2D3748',  // Slightly lighter slate grey for cards/surfaces
    },
    text: {
      primary: '#E2E8F0',   // Pale grey for main text
      secondary: '#A0AEC0', // Slightly darker grey for secondary text
    }
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* This normalizes styles and applies background */}
      <Box width="400px" sx={{ width: {xl: '1488px' }}} m="auto">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

