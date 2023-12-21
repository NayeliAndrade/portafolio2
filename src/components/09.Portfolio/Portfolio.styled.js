import styled from "@emotion/styled";
import { colors, fontWeight, fonts } from "../../variables.styled";

export const CardStyled = styled.div`
  max-width: 1400px;
  margin: 3rem auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerTitleStyled = styled.div`
  margin: -7rem 0 1rem 0;
  display: flex;
  justify-content: center;
`;

export const CardPorfolioStyled = styled.div`
  cursor: pointer;
  width: 300px;
  margin: 1rem;
  border-radius: 1rem;
`;
export const ContainerImgStyled = styled.div`
  img {
    width: 100%;
    height: 200px;
    border-radius: 1rem;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const ContainerTextStyled = styled.div`
  border-radius: 0 0 1rem 1rem;
  height: 230px;
  padding: 0 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(108, 0, 67, 0) 0%,
    rgba(108, 0, 67, 0.5) 52.08%,
    #6c0043 100%
  );
`;
export const TitlePortfolioStyled = styled.h3`
  color: ${colors.primary_white};
  font-size: 28px;
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.bold};
  padding: 1rem 0;
`;
export const TecnologiesStyled = styled.p`
  color: ${colors.primary_white};
  font-size: 20px;
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.bold};
  padding: 0.5rem 0;
`;
export const DescriptionStyled = styled.p`
  color: ${colors.primary_white};
  font-size: 16px;
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.middle};
  padding: 0.5rem 0;
`;

export const ContainerPrevNextStyled = styled.div`
  cursor: pointer;
  margin: 0rem auto;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
