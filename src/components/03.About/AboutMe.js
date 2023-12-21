import React from "react";
import {
  AboutmeContainerStyled,
  BgcBlackStyled,
  ContainerTextStyled,
  ParagraphStyled,
} from "./AboutMe.styled";
import PropTypes from "prop-types";
import Title from "../Title/Title";
import { useTranslation } from "react-i18next";

const AboutMe = ({ p1, p2 }) => {
  const [t] = useTranslation("global");

  return (
    <AboutmeContainerStyled
      id="aboutMe"
    >
      <BgcBlackStyled>
        <ContainerTextStyled>
          <ParagraphStyled>
            {p1}
          </ParagraphStyled>
          <ParagraphStyled>
            {p2}
          </ParagraphStyled>
        </ContainerTextStyled>
        <Title
          fontSize="80px"
          maxWidthContainer="662px"
          width="330px"
          hideBar={true}
          display="block"
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />
      </BgcBlackStyled>
    </AboutmeContainerStyled>
  );
};

AboutMe.propTypes = {
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
};

export default AboutMe;
