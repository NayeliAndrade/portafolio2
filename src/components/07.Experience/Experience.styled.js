import styled from "@emotion/styled";
import { colors, fontWeight, fonts } from "../../variables.styled";

export const ContainerStyled = styled.div`
  overflow: hidden;
  margin: 1rem;
  padding-bottom:6rem;
`;
export const ContainerTitleStyled = styled.div`
  padding-top: 3rem;
  margin: 0rem auto;
  max-width: 550px;
  h3 {
    font-size: ${({ isSpanish, fontSize }) => (isSpanish ? fontSize : "60px")};
  }
`;

export const ContainerAirplaneLineStyled = styled.div`
  margin: 3rem 2rem;
  @media (min-width: 1200px) {
    margin: 1rem auto;
    max-width: 1200px;
    .horizontal {
      background-image: url(assets/Experience/lineHorizontal.png);
      background-repeat: no-repeat;
      background-size: 100%;
      object-fit: contain;
      width: 1000px;
      height: 200px;
      position: relative;
    }
    .airplaneMq {
      position: relative;
      left: 990px;
    }
  }
`;

export const ContainerAirplaneStyled = styled.div`
  background-image: url(assets/Experience/plane.png);
  background-repeat: no-repeat;
  background-size: 100%;
  backgrond-position: center center;
  object-fit: contain;
  width: 150px;
  height: 90px;
`;

export const ContainerLineStyled = styled.div`
  background-image: url(assets/Experience/lineVertical.png);
  background-repeat: no-repeat;
  background-size: 40%;
  object-fit: contain;
  width: 200px;
  height: 500px;
  margin: 0 1.5rem;
  .circle1 {
    top: 4.5rem;
  }
  .circle2 {
    top: 16rem;
  }
  @media (min-width: 1200px) {
    .circle1 {
      top: 3.8rem;
      left: 36rem;
      width: 26px;
    }
    .circle2 {
      top: -0.2rem;
      left: 12rem;
      width: 26px;
    }
  }
`;

export const ContainerTitleCardsStyled = styled.div`
  position: relative;
  @media (min-width: 1200px) {
    .container1 {
      position: relative;
      top: -6rem;
      right: 6rem;
    }
    .container2 {
      position: relative;
      top: -6rem;
      right: 7rem;
    }
  }
`;

export const ContainerLeavesStyled = styled.div`
  @media (min-width: 400px) {
    background-image: url(assets/Experience/leaves.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    height: 300px;
    z-index: -1;
    position: relative;
    bottom: 11rem;
  }
`;

export const CircleStyled = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${colors.primary_white};
  &.active {
    background-color: ${colors.secondary_Pink};
  }
`;

export const ContainerTextExperienceStyled = styled.div`
  width: 300px;
`;

export const ExperienceTitleStyled = styled.h3`
  color: ${colors.primary_white};
  padding: 0 0 0.5rem 4rem;
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.bold};
  font-size: 24px;
  @media (min-width: 1200px) {
    font-size: 26px;
  }
`;

export const DateTitleStyled = styled.p`
  color: ${colors.secondary_Pink};
  padding: 0 0 0.5rem 4rem;
  font-family: ${fonts.secondary};
  font-weight: ${fontWeight.middle};
  font-size: 16px;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
