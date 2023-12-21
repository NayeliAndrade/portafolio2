import styled from "@emotion/styled";
import { colors, fontWeight, fonts, fontSize } from "../../variables.styled";

export const AboutmeContainerStyled = styled.div`
  background-image: url(assets/About/about.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  object-fit: contain;
  backgrond-position: center center;
  margin: 5rem 1rem;
  max-width: 1210px;
  border: 2px solid black;
  @media (min-width: 1054px) {
    margin: 5rem auto;
  }
`;

export const BgcBlackStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  padding: 4rem 1rem;
  background-color: ${colors.fourth_black};
  margin: 1rem;
  @media (min-width: 1180px) {
    flex-direction: row-reverse;
  }
`;

export const ContainerTextStyled = styled.div`
  color: ${colors.primary_white};
  order: 2;
  padding-top: 1rem;

  @media (min-width: 744px) {
    width: 662px;
    padding-right: 2rem;
  }
`;

export const ParagraphStyled = styled.p`
  font-weight: ${fontWeight.bold};
  font-family: ${fonts.secondary};
  font-size: ${fontSize.fontSizeP};
  padding-bottom: 1rem;

  @media (min-width: 744px) {
    font-size: ${fontSize.fontSizePMq};
  }
`;
