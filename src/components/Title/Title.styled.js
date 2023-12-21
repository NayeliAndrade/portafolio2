import styled from "@emotion/styled";
import { colors, fontWeight, fonts, fontSize } from "../../variables.styled";

export const ContainerTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 1;
  width: 100%;

  @media (min-width: 744px) {
    max-width: ${({ maxWidthContainer }) => maxWidthContainer};
  }
  @media (min-width: 1180px) {
    width: ${({ width }) => width};
  }
`;
export const BarPinkStyled = styled.div`
  background-color: ${colors.secondary_Pink};
  height: 0.5rem;
  width: 100%;
  @media (min-width: 1180px) {
    :nth-of-type(2) {
      display: ${({ hideBar }) => (hideBar ? "none" : "block")};
    }
  }
`;

export const ContainerTitleLineStyled = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 1180px) {
    padding-left: ${({ display }) => (display === "block" ? "1rem" : "0")};
  }
`;

export const TitlePinkStyled = styled.span`
  padding: 1rem;
  color: ${colors.secondary_Pink};
  font-weight: ${fontWeight.bold};
  font-family: ${fonts.secondary};
  font-size: ${fontSize.fontSizeTitlePink};
  @media (min-width: 744px) {
    font-size: ${fontSize.fontSizeTitlePinkMq};
  }
`;

export const SubTitleStyled = styled.h3`
  color: ${colors.primary_white};
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.fontSizeSubtitle};
  @media (min-width: 744px) {
    font-size: ${({ isSpanish, fontSize }) => (isSpanish ? fontSize : "72px")};
  }
`;
