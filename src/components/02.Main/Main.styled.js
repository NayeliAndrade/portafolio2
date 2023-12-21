import styled from "@emotion/styled";
import { colors, fontSize, fontWeight, fonts } from "../../variables.styled";

// MAIN CONTAINER
export const MainBannerStyled = styled.div`
  color:${colors.primary_white};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.fontSizeP};
  font-family: ${fonts.primary};
  background-image: url(assets/Main/mainBgGreen.jpg);

  @media (min-width: 744px){
    font-size: ${fontSize.fontSizePMq};
    justify-content: center;
    display: flex;
    height: 87vh;
   } 
}
`;

export const ContainersStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 744px) {
    flex-direction: row;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContainerTextStyled = styled.div`
  margin-right: 0rem;

  @media (min-width: 874px) {
    margin-right: 8rem;
  }
`;

export const ContainerParagraphStyled = styled.div`
  @media (min-width: 744px) {
    max-width: 705px;
  }
`;

export const NameStyled = styled.h1`
  padding: 1rem 0 1rem 0;
  font-size: ${fontSize.fontSizeH1};
  margin-bottom: 0.5rem;
  font-family: ${fonts.secondary};

  @media (min-width: 744px) {
    padding: 0rem 0 1rem 0;
    font-size: ${fontSize.fontSizeH1Mq};
  }
`;
export const ParagraphStyled = styled.p`
  line-height: 1.5;
  :nth-of-type(1) {
    padding-bottom: 1rem;
    font-weight: ${fontWeight.middle};
    color: ${colors.secondary_Pink};
  }
`;
export const ContainerIconStyled = styled.div`
  margin: 1.5rem 0;
`;

export const AStyled = styled.a``;
export const IconStyled = styled.img`
  padding: 0 0.5rem;
  :hover {
    background-color: #22ded3;
  }
`;

export const DownloadButtonStyled = styled.button`
  margin: 0;
  background-color: ${colors.third_blue};
  padding: 1rem 2rem;
  color: ${colors.primary_white};
  border: none;
  border-radius: 5px;
`;

export const AvatarContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

export const AvatarImgStyled = styled.img`
  width: 100%;
`;
