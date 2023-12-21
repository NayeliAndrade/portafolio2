import styled from "@emotion/styled";
import { colors, fontWeight, fonts } from "../../variables.styled";

export const CardVisibleStyled = styled.div`
  color: ${colors.primary_white};
  width: 320px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CardStyled = styled.div`
  width: 300px;
  display: flex;
`;

export const TitleSkillsStyled = styled.h3`
  color: ${colors.primary_white};
  font-weight: ${fontWeight.bold};
  font-size: 32px;
  font-family: ${fonts.secondary};
  margin: 1rem 0.5rem;
`;

export const UlStyled = styled.ul`
  width: 300px;
`;

export const ListStyled = styled.li`
  font-family: ${fonts.secondary};
  font-size: 22px;
  text-align: left;
  padding: 0.5rem;
`;
