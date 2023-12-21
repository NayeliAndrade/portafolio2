import styled from "@emotion/styled";
import { colors, fontSize, fontWeight, fonts } from "../../variables.styled";

export const SkillsCardStyled = styled.div`
  color: ${colors.primary_white};
  width: 320px;
  text-align: center;
  cursor: pointer;
`;
export const ImgSkillsStyled = styled.img`
  width: 96px;
  margin: 1rem;
`;
export const TitleSkillsStyled = styled.h3`
  color: ${colors.primary_white};
  text-align: center;
  font-weight: ${fontWeight.bold};
  font-size: 32px;
  font-family: ${fonts.secondary};
  line-height: 25.88px;
  margin: 1rem;
`;

export const ParagraphSkillsStyled = styled.p`
  color: ${colors.primary_white};
  text-align: center;
  font-weight: ${fontWeight.middle};
  font-size: ${fontSize.fontSizeP};
  font-family: ${fonts.secondary};
  line-height: 25.88px;
  margin: 1rem;
  @media (min-width: 744px) {
    font-size: ${fontSize.fontSizePMq};
  }
`;
