import styled from "@emotion/styled";
import { colors, fontWeight, fonts } from "../../variables.styled";
export const ContainerCardStyled = styled.div`
  border: 3px solid ${colors.secondary_Pink};
  border-radius: 1rem;
  background-color: ${colors.fourth_black};
  margin: 2rem;
  padding: 1.5rem;
  @media (min-width: 1200px) {
    width: 1100px;
    margin: 2rem auto;
    .align {
      text-align: center;
    }
  }
`;

export const TitlePinkStyled = styled.p`
  color: ${colors.secondary_Pink};
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.bold};
  font-size: 18px;
  padding-top: 1.5rem;
  @media (min-width: 1200px) {
    font-size: 26px;
  }
`;

export const ParagraghStyled = styled.p`
  color: ${colors.primary_white};
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.middle};
  font-size: 16px;
  padding-top: 0.5rem;
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const ContainerHorizontalStyled = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContainerTitleParagraghStyled = styled.div`
  @media (min-width: 1200px) {
    text-align: center;
  }
`;

export const ContainerUlExperienceStyled = styled.ul`
  color: ${colors.primary_white};
  padding-top: 1rem;
  margin: 1rem;
`;

export const ExperienceLiStyled = styled.li`
  color: ${colors.primary_white};
  list-style: decimal;
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.middle};
  font-size: 18px;
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
