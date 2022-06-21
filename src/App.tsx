import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const theme = {
    text: {
      primary: '#353535',
      secondary: '#FFA640',
      tertiary: '#494949',
      quaternary: '#4B166B',
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#F5F1E9",
      terceary: "#FF895B",
    }
  };
  return (
    <ThemeProvider theme={theme}>
     <Header />
     <Footer />
    </ThemeProvider>
  );
}

export default App;
