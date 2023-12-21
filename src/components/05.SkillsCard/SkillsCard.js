import React, { useState } from "react";
import {
  SkillsCardStyled,
  ImgSkillsStyled,
  TitleSkillsStyled,
  ParagraphSkillsStyled,
} from "./SkillsCard.styled";

import PropTypes from "prop-types";
import CardExtra from "../5.1CardExtra/CardExtra";

const SkillsCard = ({ title, icon, description, id }) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <SkillsCardStyled
        onClick={handleVisible}
      >
        <ImgSkillsStyled
          src={icon}
          alt={title}
        />
        <TitleSkillsStyled>
          {title}
        </TitleSkillsStyled>
        <ParagraphSkillsStyled>
          {description}
        </ParagraphSkillsStyled>
      </SkillsCardStyled>
      {visible && <CardExtra
        id={id}
        closeModal={handleVisible}
      />}
    </>
  );
};

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
};
export default SkillsCard;
