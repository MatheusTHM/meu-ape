import { FC } from "react";

import {
  ProximitiesContainer,
  ProximitiesContent,
  ProximitiesType,
  ProximitiesPlace,
  ValuesContainer,
  ProximitiesNames,
  ProximitiesDistance,
} from "./styles";

interface ProximitiesProps {
  proximities: Record<
    string,
    {
      name: string;
      category: string;
      relevance: number;
      distance: string;
      duration: string;
      address: string;
      order: number;
    }[]
  >;
}

const ResidencyProximities: FC<ProximitiesProps> = ({ proximities }) => {
  const proximitiesKeys = Object.keys(proximities);

  if (!proximitiesKeys.length) return null;

  return (
    <ProximitiesContainer>
      <ProximitiesContent>
        {proximitiesKeys.map((proximity, index) => {
          return (
            <ProximitiesType key={index}>
              <ProximitiesPlace>
                <figcaption>{proximity}</figcaption>
                {/* Type "Outros" doesn't have an unique icon */}
                {/* Utilizing onError as a fallback to bring a default icon */}
                <img
                  src={`icons/info-${proximity}.svg`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "icons/info-local.svg";
                  }}
                  alt={proximity}
                />
              </ProximitiesPlace>
              <ValuesContainer>
                <ProximitiesNames>
                  <p>{proximities[proximity][0].name}</p>
                  <p>{proximities[proximity][1].name}</p>
                  <p>{proximities[proximity][2].name}</p>
                </ProximitiesNames>
                <ProximitiesDistance>
                  <p>{proximities[proximity][0].duration}</p>
                  <p>{proximities[proximity][1].duration}</p>
                  <p>{proximities[proximity][2].duration}</p>
                </ProximitiesDistance>
              </ValuesContainer>
            </ProximitiesType>
          );
        })}
      </ProximitiesContent>
    </ProximitiesContainer>
  );
};

export default ResidencyProximities;
