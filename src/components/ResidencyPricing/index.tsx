import {
  CompletionDeadline,
  CompletionStatus,
  DocumentName,
  DocumentPrice,
  PriceCard,
  PricingContainer,
  PricingContent,
  ResidencyCompletion,
  ResidencyDocumentation,
  ResidencyPrices,
} from "./styles";
import { ReactComponent as DocumentFigure } from "../../assets/images/documentation-figure.svg";
import { FC } from "react";

interface PricingProps {
  value: string;
  construtionStatus: string;
  financed: string;
  registry: string;
  itbi: string;
  signal: string;
  parcel: string;
  constructionDeadline: {
    day: number | string;
    month: string;
  };
}

const ResidencyPricing: FC<PricingProps> = ({
  value,
  construtionStatus,
  financed,
  parcel,
  registry,
  itbi,
  signal,
  constructionDeadline,
}) => {
  return (
    <PricingContainer>
      <PricingContent>
        <ResidencyPrices>
          <PriceCard>
            Valor do Imóvel:
            <p>R$ {value}</p>
          </PriceCard>
          <PriceCard>
            Financie até:
            <p>R$ {financed}</p>
          </PriceCard>
          <PriceCard>
            Parcelamos a partir de:
            <p>R$ {parcel}</p>
          </PriceCard>
        </ResidencyPrices>
        <ResidencyCompletion>
          <CompletionStatus>{construtionStatus}</CompletionStatus>
          <CompletionDeadline>
            Previsão
            <p>{`${constructionDeadline.day} ${constructionDeadline.month}`}</p>
          </CompletionDeadline>
        </ResidencyCompletion>
        <ResidencyDocumentation>
          <div>
            <DocumentName>Entrada:</DocumentName>
            <DocumentPrice highlight={true}>R$ {signal}</DocumentPrice>
          </div>
          <div>
            <DocumentName>Documentação (ITBI):</DocumentName>
            <DocumentPrice>R$ {itbi}</DocumentPrice>
          </div>
          <div>
            <DocumentName>Documentação (Registro):</DocumentName>
            <DocumentPrice>R$ {registry}</DocumentPrice>
          </div>
          <DocumentFigure />
        </ResidencyDocumentation>
      </PricingContent>
    </PricingContainer>
  );
};

export default ResidencyPricing;
