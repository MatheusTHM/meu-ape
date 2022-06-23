import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ActionsList from "./components/ActionsList";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResidencyDescription from "./components/ResidencyDescription";
import ResidencyImages from "./components/ResidencyImages";
import ResidencyPricing from "./components/ResidencyPricing";
import ResidencyProximities from "./components/ResidencyProximities";
import ResidencyVariants from "./components/ResidencyVariants";
import { GalleryContainer } from "./styles";

interface ResidencyValues {
  name: string;
  description: string;
  characteristic: string[];
  icons: { characteristic: string; icon: string }[];
  district: string;
  street: string;
  parcel: string;
  proximities: {};
  variants: object[];
  value: string;
  media: { media: string; type: string }[];
  construtionStatus: string;
  financed: string;
  registry: string;
  itbi: string;
  signal: string;
  constructionDeadline: {
    day: number | string;
    month: string;
  };
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
    media: [{ media: "", type: "" }],
    construtionStatus: "",
    financed: "",
    registry: "",
    itbi: "",
    signal: "",
    constructionDeadline: { day: "", month: "" },
  });

  const theme = {
    text: {
      primary: "#353535",
      secondary: "#FFA640",
      tertiary: "#494949",
      quaternary: "#4B166B",
      quinary: "#FFFFFF",
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#F5F1E9",
      tertiary: "#FF895B",
      quaternary: "#F6F6F6",
    },
    border: {
      primary: "#353535",
      secondary: "#B6B6B6",
    },
  };

  function formatValue(value: number | string) {
    // Maybe create a function to process this value so it works for values with any lengths
    // If the value is a number it'll become a string
    // Else verify if it has a '.' separating the cents
    const stringValue = typeof value === "number" ? value.toString() : value;
    const [price, cents] = stringValue.split(".");
    const formatedValue = `${price.substring(
      0,
      price.length - 3
    )}.${price.substring(price.length - 3, price.length)}.${
      cents ? cents : "00"
    }`;
    return formatedValue;
  }

  async function recieveResidencyValues() {
    const { data } = await axios.get("https://newapi.meuprimeiroape.com.br/mpa/properties/d70e5e1f-9d13-49f7-beeb-d41f43560d60?income=4000");
    // https://newapi.meuprimeiroape.com.br/mpa/properties/d70e5e1f-9d13-49f7-beeb-d41f43560d60?income=4000"

    const {
      name,
      description,
      characteristic,
      icons,
      proximities,
      value,
      financed,
      parcel,
      registry,
      itbi,
      construtionStatus,
      constructionEndDate,
      PropertiesFinancial,
      PropertiesAdresses,
      PropertiesVariants,
      PropertiesMedia,
    } = data;

    const { district, street } = PropertiesAdresses[0].adress;
    const { signal } = PropertiesFinancial[0];
    const signalPrice = value * signal;

    // More information required to know if the timezone should be considered or not
    const deadlineDate = new Date(constructionEndDate);
    const deadline = {
      day: deadlineDate.getDate(),
      month: deadlineDate.toLocaleString("default", { month: "long" }),
    };

    const variants = PropertiesVariants.map(
      ({ value, suite, PropertiesVariantsCharacteristics }: any) => {
        if (PropertiesVariantsCharacteristics.length) {
          return {
            value: formatValue(value),
            suite,
            firstCharacteristic:
              PropertiesVariantsCharacteristics[0].characteristic,
            secondCharacteristic:
              PropertiesVariantsCharacteristics[1].characteristic,
          };
        }
        return null;
      }
    );

    const filteredVariants = variants.filter(
      (variant: object | null) => variant !== null
    );

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
      media: PropertiesMedia,
      construtionStatus,
      value: formatValue(value),
      financed: formatValue(financed),
      registry: formatValue(registry),
      itbi: formatValue(itbi),
      signal: formatValue(signalPrice),
      constructionDeadline: deadline,
    };
    setResidencyValues(filteredValues);
  }

  useEffect(() => {
    recieveResidencyValues();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GalleryContainer>
        <ResidencyImages media={residencyValues.media} />
        <ActionsList media={residencyValues.media} />
      </GalleryContainer>
      <ResidencyDescription
        name={residencyValues.name}
        district={residencyValues.district}
        street={residencyValues.street}
        description={residencyValues.description}
        icons={residencyValues.icons}
        characteristic={residencyValues.characteristic}
      />
      <ResidencyPricing
        value={residencyValues.value}
        construtionStatus={residencyValues.construtionStatus}
        financed={residencyValues.financed}
        registry={residencyValues.registry}
        itbi={residencyValues.itbi}
        signal={residencyValues.signal}
        parcel={residencyValues.parcel}
        constructionDeadline={residencyValues.constructionDeadline}
      />
      <ResidencyVariants
        icons={residencyValues.icons}
        variants={residencyValues.variants}
        value={residencyValues.value}
      />
      <ResidencyProximities proximities={residencyValues.proximities} />
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
