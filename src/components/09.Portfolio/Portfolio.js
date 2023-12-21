import Title from "../Title/Title";
import {
  CardStyled,
  ContainerTitleStyled,
  CardPorfolioStyled,
  ContainerImgStyled,
  ContainerTextStyled,
  TitlePortfolioStyled,
  TecnologiesStyled,
  DescriptionStyled,
} from "./Portfolio.styled";

import { useTranslation } from "react-i18next";
import { portfolioObject } from "./portfolioObject.js";

const Portfolio = () => {
  const [t] = useTranslation("global");

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <ContainerTitleStyled
        id="portfolio"
      >
        <Title
          fontSize="68px"
          maxWidthContainer="380px"
          width="380px"
          title={t("portfolio.title")}
          subtitle={t("portfolio.subtitle")}
        />
      </ContainerTitleStyled>
      <CardStyled>
        {portfolioObject.map((item) => (
          <CardPorfolioStyled
            key={item.id}
            onClick={() => openLink(item.link)}
          >
            <ContainerImgStyled>
              <img
                src={item.img}
                alt={t(item.titleCard)}
              />
            </ContainerImgStyled>
            <ContainerTextStyled>
              <TitlePortfolioStyled>
                {t(item.titleCard)}
              </TitlePortfolioStyled>
              <TecnologiesStyled>
                {t(item.technology)}
              </TecnologiesStyled>
              <DescriptionStyled>
                {t(item.description)}
              </DescriptionStyled>
            </ContainerTextStyled>
          </CardPorfolioStyled>
        ))}
      </CardStyled>
    </>
  );
};

export default Portfolio;
