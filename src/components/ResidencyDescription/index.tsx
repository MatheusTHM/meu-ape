import { FC } from "React"
import { DescriptionContainer, DescriptionContent, IconsContainer, ResidencyTitle, DescriptionIcons, DescriptionIcon, DescriptionCharacteristics, DescriptionItem, DescriptionText } from "./styles"

interface ResidencyDescriptionProps {
  name: string;
  description: string;
  characteristic: string[];
  icons: { characteristic:string, icon:string }[];
  district: string;
  street: string;
}

const ResidencyDescription:FC<ResidencyDescriptionProps> = ({ name, district, street, description, characteristic, icons }) => {

  return (
    <DescriptionContainer>
      <DescriptionContent>
        <ResidencyTitle>
          <p>{name}</p>
          <h1> <span>{district}</span>{street}</h1>
        </ResidencyTitle>
        <IconsContainer>
          <DescriptionIcons>
            {icons.map((icon, index) => (
              <DescriptionIcon key={index}>
                <img src={`icons/${icon.icon}`} alt={icon.characteristic} />
                {icon.characteristic}
              </DescriptionIcon>
            ))}
          </DescriptionIcons>
        </IconsContainer>
        <DescriptionCharacteristics>
          {characteristic.map((item, index) => (
            <DescriptionItem key={index}>
              {item}
            </DescriptionItem>
          ))}
        </DescriptionCharacteristics>
        <DescriptionText>
          <h2>Descrição</h2>
          {description}
        </DescriptionText>
      </DescriptionContent>
    </DescriptionContainer>
  )
}

export default ResidencyDescription