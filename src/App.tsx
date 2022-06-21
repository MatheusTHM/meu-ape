import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import ResidencyDescription from './components/ResidencyDescription';

interface ResidencyValues {
  name: string;
  description: string;
  characteristic: string[];
  icons: { characteristic: string, icon: string }[];
  PropertiesAdresses: {
    adress: {
      district: string,
      street: string
    } 
  }[];
}

function App() {
  const [residencyValues, setResidencyValues] = useState<ResidencyValues>({
    name: "",
    description: "",
    characteristic: [],
    icons: [{ characteristic: "", icon: "" }],
    PropertiesAdresses: [{adress: {district: "", street: ""}}],
  })
  
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
      tertiary: "#FF895B",
    }
  };

  async function recieveResidencyValues() {
    const { data } = await axios.get("https://newapi.meuprimeiroape.com.br/mpa/properties/6f3c8042-4ea7-4ca2-a828-d4c79eca9f20?income=4000");
    setResidencyValues(data);
  }

  useEffect(() => {
    recieveResidencyValues()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ResidencyDescription 
        name={residencyValues.name}
        district={residencyValues.PropertiesAdresses[0].adress.district}
        street={residencyValues.PropertiesAdresses[0].adress.street}
        description={residencyValues.description} 
        icons={residencyValues.icons} 
        characteristic={residencyValues.characteristic}
        />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
