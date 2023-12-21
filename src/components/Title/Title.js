import React from "react";
import {
  ContainerTitleStyled,
  ContainerTitleLineStyled,
  BarPinkStyled,
  TitlePinkStyled,
  SubTitleStyled,
} from "./Title.styled";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Title = ({
  title,
  subtitle,
  maxWidthContainer,
  width,
  hideBar,
  display,
  fontSize,
}) => {
  const { i18n } = useTranslation();
  return (
    <ContainerTitleStyled maxWidthContainer={maxWidthContainer} width={width}>
      <ContainerTitleLineStyled display={display}>
        <BarPinkStyled />
        <TitlePinkStyled>
          {title}
        </TitlePinkStyled>
        <BarPinkStyled hideBar={hideBar} />
      </ContainerTitleLineStyled>
      <SubTitleStyled
        fontSize={fontSize}
        isSpanish={i18n.language.startsWith("es")}
      >
        {subtitle}
      </SubTitleStyled>
    </ContainerTitleStyled>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  maxWidthContainer: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  hideBar: PropTypes.bool,
  display: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Title;
