import styled from "@emotion/styled";
import { colors, fontWeight, fonts, fontSize } from "../../variables.styled";

// GRADIENT CONTAINER
export const TopHeaderStyled = styled.div`
  background: linear-gradient(
    90deg,
    #d206e4 0%,
    #7c19ed 41.88%,
    #7c19ed 57.78%,
    #d206e4 101.78%
  );
  height: 45px;
`;

// NAV BAR
export const NavBarStyled = styled.nav`
  z-index: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: black;
  position: sticky;
  top: 0;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.fontSizeP};
  font-family: ${fonts.primary};
  color: ${colors.primary_white};

  @media (min-width: 1080px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerLogoStyled = styled.div`
  padding: 0.5rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 1080px) {
    width: 60px;
  }
`;

export const ContainerLogoMenuStyled = styled.div`
  display: flex;
`;

export const ImgStyled = styled.img`
  width: 35px;
  border-radius: 5px;
`;

export const MenuImgStyled = styled(ImgStyled)`
  width: 30px;
  @media (min-width: 1080px) {
    display: none;
  }
`;

export const LogoStyled = styled.h2`
  margin: 0.5rem 0;
  font-weight: ${fontWeight.bold};
  padding: 0 1rem;
  @media (min-width: 1080px) {
    padding: 0 2rem;
  }
`;

export const ContainerFlagStyled = styled.div`
  @media (min-width: 1080px) {
    display: none;
  }
`;

export const FlagImgStyled = styled(ImgStyled)`
  width: 50px;
`;

export const UlContainerStyled = styled.ul`
  display: none;
  flex-direction: column;
  align-items: stretch;
  padding: 0 0 1rem 1rem;
  img {
    margin-left: 1rem;
    display: none;
  }
  display: ${({ active }) => (active ? "none" : "block")};
  @media (min-width: 1080px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 2rem 0 0;

    img {
      display: flex;
    }
  }
`;

export const LiStyled = styled.li`
  margin: 1rem;
  list-style-type: none;
  .linkA {
    color: ${colors.primary_white};
    text-decoration: none;
    margin-right: 1.5rem;

    :hover {
      color: ${colors.secondary_Pink};
    }
  }
`;
