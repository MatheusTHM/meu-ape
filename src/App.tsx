import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Header from './components/Header';
import ResidencyDescription from './components/ResidencyDescription';
import ResidencyProximities from './components/ResidencyProximities';

interface ResidencyValues {
  name: string;
  description: string;
  characteristic: string[];
  icons: { characteristic: string, icon: string }[];
  district: string; 
  street: string;
  parcel: string;
  proximities: {}
  // PropertiesAdresses: {
  //   adress: {
  //     district: string,
  //     street: string
  //   } 
  // }[];
}

function App() {
  const [residencyValues, setResidencyValues] = useState<ResidencyValues>({
    name: "",
    description: "",
    characteristic: [],
    icons: [{ characteristic: "", icon: "" }],
    district: "",
    street: "",
    parcel: "",
    proximities: {},
    // PropertiesAdresses: [{adress: {district: "", street: ""}}],
  })
  
  const theme = {
    text: {
      primary: '#353535',
      secondary: '#FFA640',
      tertiary: '#494949',
      quaternary: '#4B166B',
      quinary: '#FFFFFF',
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#F5F1E9",
      tertiary: "#FF895B",
    }
  };

  async function recieveResidencyValues() {
    const { data } = await axios.get("https://newapi.meuprimeiroape.com.br/mpa/properties/6f3c8042-4ea7-4ca2-a828-d4c79eca9f20?income=4000");
    const { name, description, characteristic, icons, PropertiesAdresses, parcel, proximities } = data;
    const { district, street } = PropertiesAdresses[0].adress;

    const filteredValues = {
      name, 
      description, 
      characteristic, 
      icons, 
      district, 
      street,
      parcel,
      proximities,
    };
    setResidencyValues(filteredValues);
  }

  useEffect(() => {
    recieveResidencyValues()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ResidencyDescription 
        name={residencyValues.name}
        district={residencyValues.district}
        street={residencyValues.street}
        description={residencyValues.description} 
        icons={residencyValues.icons} 
        characteristic={residencyValues.characteristic}
        />
      <ResidencyProximities proximities={residencyValues.proximities}/>
      <CallToAction 
        name={residencyValues.name}
        district={residencyValues.district}
        street={residencyValues.street}
        parcel={residencyValues.parcel}
        />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
