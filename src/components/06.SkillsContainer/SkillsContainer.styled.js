import styled from "@emotion/styled";
export const ContainerStyled = styled.div`
  @media (min-width: 1180px) {
    .reverse {
      flex-direction: row-reverse;
    }
  }
`;

export const SkillsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  @media (min-width: 1180px) {
    flex-direction: row;
  }
  .leaveTop {
    background-image: url(assets/Skills/titleBgTop.png);
  }
  .leaveBottom {
    background-image: url(assets/Skills/titleBgBottom.png);
    background-position: right;
  }
`;

export const SkillsTitleStyled = styled.div`
  background-repeat: no-repeat;
  background-size: 70% 100%;
  object-fit: contain;
  background-position: unset;
  padding: 5rem 0;
  @media (min-width: 1180px) {
    background-size: 100% 100%;
    background-position: center center;
    width: 910px;
    .positionLeft {
      left: 8rem;
      width: 395px;
    }
  }
  @media (min-width: 1300px) {
    .positionLeft {
      left: 15rem;
    }
    .positionRight {
      width: 522px;
    }
  }
  @media (min-width: 1400px) {
    .positionLeft {
      left: 20rem;
    }
    .positionRight {
      left: 2rem;
    }
  }
`;

export const ContainerTitleStyled = styled.div`
  @media (min-width: 1180px) {
    position: relative;
    top: 8rem;
  }
`;
