import { FC } from "react";
import { CallToActionContainer, ActionInfo, ActionAddress, ActionInstallments, ActionButton } from "./styles"
// import { ReactComponent as Facebook } from "../../assets/images/facebook.svg"
// import { ReactComponent as Instagram } from "../../assets/images/instagram.svg"
// import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg"

interface ResidencyDescriptionProps {
  name: string;
  district: string;
  street: string;
  parcel: string;
}

const CallToAction:FC<ResidencyDescriptionProps> = ({ name, district, street, parcel }) => {
  const [price, cents] = parcel.split(".");
  return (
    <CallToActionContainer>
      <ActionInfo>
        <ActionAddress>
          <p>{name}</p>
          <h2> <span>{district}</span>{street}</h2>
        </ActionAddress>
        <ActionInstallments>
          <h3>
            Parcelas à partir de
            <strong>
              R${price}
              <span>
                ,{cents}
              </span>
            </strong>
          </h3>
        </ActionInstallments>
      </ActionInfo>
      <ActionButton>
        Call to Action
      </ActionButton>
    </CallToActionContainer>
  )
}

export default CallToAction