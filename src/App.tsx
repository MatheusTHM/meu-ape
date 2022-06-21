import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ActionsList from './components/ActionsList';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Header from './components/Header';
import ResidencyDescription from './components/ResidencyDescription';
import ResidencyImages from './components/ResidencyImages';
import ResidencyProximities from './components/ResidencyProximities';
import ResidencyVariants from './components/ResidencyVariants';
import { GalleryContainer } from './styles';

interface ResidencyValues {
  name: string;
  description: string;
  characteristic: string[];
  icons: { characteristic: string, icon: string }[];
  district: string; 
  street: string;
  parcel: string;
  proximities: {}
  variants: object[]
  value: string;
  media: object[];
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
    variants: [{}],
    value: "",
    media: [{}]
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
      quaternary: "#F6F6F6",
    },
    border: {
      primary: "#353535",
      secondary: "#B6B6B6"
    }
  };

  function formatValue(value:number) {
    // Maybe create a function to process this value so it works for values with any lengths
    const stringValue = value.toString()
    const formatedValue = `${stringValue.substring(0, stringValue.length - 3)}.${stringValue.substring(stringValue.length - 3, stringValue.length)}`;
    return formatedValue;
  }

  async function recieveResidencyValues() {
    const { data } = await axios.get("https://newapi.meuprimeiroape.com.br/mpa/properties/6f3c8042-4ea7-4ca2-a828-d4c79eca9f20?income=4000");
    // https://newapi.meuprimeiroape.com.br/mpa/properties/d70e5e1f-9d13-49f7-beeb-d41f43560d60?income=4000"

    const { name, description, characteristic, icons, PropertiesAdresses, PropertiesVariants, parcel, proximities, value, PropertiesMedia } = data;

    const { district, street } = PropertiesAdresses[0].adress;

    const variants = PropertiesVariants.map(({ value, suite, PropertiesVariantsCharacteristics }:any) => {
      if(PropertiesVariantsCharacteristics.length) {
        return { 
          value: formatValue(value),
          suite,
          firstCharacteristic: PropertiesVariantsCharacteristics[0].characteristic, 
          secondCharacteristic: PropertiesVariantsCharacteristics[1].characteristic,
        }
      }
      return null
    })

    const filteredVariants = variants.filter((variant: object | null) => variant !== null);

    const filteredValues = {
      name, 
      description, 
      characteristic, 
      icons, 
      district, 
      street,
      parcel,
      proximities,
      variants: filteredVariants,
      value: formatValue(value),
      media: PropertiesMedia
    };
    setResidencyValues(filteredValues);
  }

  useEffect(() => {
    recieveResidencyValues()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GalleryContainer>
        <ResidencyImages media={residencyValues.media}/>
        <ActionsList />
      </GalleryContainer>
      <ResidencyDescription 
        name={residencyValues.name}
        district={residencyValues.district}
        street={residencyValues.street}
        description={residencyValues.description} 
        icons={residencyValues.icons} 
        characteristic={residencyValues.characteristic}
        />
      <ResidencyVariants 
        icons={residencyValues.icons}
        variants={residencyValues.variants}  
        value={residencyValues.value}
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
