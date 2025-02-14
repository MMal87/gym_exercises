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
    background: {
      default: '#1A1A1A',    // Very dark grey background
      paper: '#2A2A2A',      // Slightly lighter grey for cards
    },
    primary: {
      main: '#9EA3AF',       // Mid grey for buttons/accents
    },
    text: {
      primary: '#E5E7EB',    // Light grey for main text
      secondary: '#9EA3AF',  // Mid grey for secondary text
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

