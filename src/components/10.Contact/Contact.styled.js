import styled from "@emotion/styled";
import { colors, fontWeight, fonts } from "../../variables.styled";

export const ContainerImgLeavesStyled = styled.div`
  border: 2px solid black;
  background-image: url(assets/Contact/leavesLeft.png),
    url(assets/Contact/leavesRight.png);
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: bottom left, bottom right;
`;

export const ContainerImgBlueStyled = styled.div`
  background-image: url(assets/Contact/bgContact.png);
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

export const ContainerBlackStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  padding: 2rem 1rem;
  background-color: ${colors.fourth_black};
  margin: 1rem;
  @media (min-width: 700px) {
    flex-direction: row;
    padding: 6rem 1rem;
  }
`;

export const ContainerMessageStyled = styled.div`
  max-width: 490px;
  color: ${colors.primary_white};
  font-size: 20px;
  font-weight: ${fontWeight.middle};
  font-family: ${fonts.secondary};
  @media (min-width: 700px) {
    max-width: 380px;
    padding-right: 1rem;
  }
`;

export const PStyled = styled.p`
  margin-top: 2rem;
`;

export const InputGeneralStyled = styled.input`
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  border: 2px solid ${colors.secondary_Pink};
  background-color: ${colors.fourth_black};
  color: ${colors.primary_white};
  @media (min-width: 700px) {
    width: 100%;
  }
`;

export const ContainerInputsStyled = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  @media (min-width: 700px) {
    width: 50%;
  }
`;

export const MessageStyled = styled.p`
  color: ${colors.primary_white};
  font-size: 55px;
  font-family: ${fonts.secondary};
  font-weight: 900;
  text-align:center;
`;

export const BoxMessageStyled = styled.div`
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
`

export const FormStyled = styled.form`
  max-width: 500px;
  margin-top: 1.5rem;
`;

export const ButtonStyled = styled.button`
  background-color: ${colors.secondary_Pink};
  font-family: ${fonts.secondary};
  border-radius: 0.5rem;
  color: white;
  padding: 1rem;
  width: 100%;
  margin-top: 0.5rem;
  text-align: center;
  cursor:pointer;
  border:none;
`;
