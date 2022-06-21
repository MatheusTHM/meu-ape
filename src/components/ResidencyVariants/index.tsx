import { VariantsContainer, VariantsContent, VariantsTitle, VariantsUnit, UnitIcons, UnitFigure, UnitType, UnitPrice, SelectedUnit, UnitInfo, NotSelectedUnit, VariantsSubTitle, DiferentUnit } from './styles'
import { ReactComponent as Eye } from "../../assets/images/eye-icon.svg"
import { FC } from 'react';

interface ResidencyVariantsProps {
  icons: { characteristic: string, icon: string }[];
  variants: object[];
  value: string;
}

const ResidencyVariants:FC<ResidencyVariantsProps> = ({ icons, variants, value }) => {
  const suite = icons.some(icon => icon.icon === "info-suite.svg");
  const existVariants = variants.length > 0;
  
  return (
    <VariantsContainer>
      <VariantsContent>
        <VariantsTitle>
          Unidades
        </VariantsTitle>


        <VariantsUnit active={true}>
          <UnitIcons>
          {icons.map(({ characteristic, icon }, index) => {
            if(index < 2) {
              return (
                <UnitFigure key={index}>
                <img src={`/icons/${icon}`} alt={characteristic} />
                <figcaption>{characteristic}</figcaption>
              </UnitFigure>
            )
          }
          return null
          })}
          </UnitIcons>
          <UnitInfo>
            <UnitType>
              {suite ? "Suíte" : "Área Privativa"}
            </UnitType>
            <UnitPrice>
              R$ {value}
            </UnitPrice>
          </UnitInfo>
          <SelectedUnit>
            <p>
              Você está vendo esta unidade!
            </p>
            <div />
          </SelectedUnit>
        </VariantsUnit>

        <DiferentUnit active={existVariants}>
          <VariantsSubTitle>
            Outras Unidades
          </VariantsSubTitle>

          {variants.map(({ value, suite, firstCharacteristic, secondCharacteristic }:any, index) => {
            return (
              <VariantsUnit key={index} active={false}>
                <UnitIcons>
                  <UnitFigure>
                    <img src={`/icons/${firstCharacteristic?.icon}`} alt={firstCharacteristic?.name} />
                    <figcaption>{firstCharacteristic?.name}</figcaption>
                  </UnitFigure>
                  <UnitFigure>
                    <img src={`/icons/${secondCharacteristic?.icon}`} alt={secondCharacteristic?.name} />
                    <figcaption>{secondCharacteristic?.name}</figcaption>
                  </UnitFigure>
                </UnitIcons>
                <UnitInfo>
                  <UnitType>
                    {suite ? "Suíte" : "Área Privativa"}
                  </UnitType>
                  <UnitPrice>
                    R$ {value}
                  </UnitPrice>
                </UnitInfo>
                <NotSelectedUnit>
                  <p>
                    Você poderá ver esta unidade
                  </p>
                  <button>
                    <Eye />
                    Ver Unidade
                  </button>
                </NotSelectedUnit>
              </VariantsUnit>
            )
          })}
          
          
        </DiferentUnit>
      </VariantsContent>
    </VariantsContainer>
  )
}

export default ResidencyVariants