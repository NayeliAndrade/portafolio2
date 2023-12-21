import React from "react";
import { useTranslation } from "react-i18next";
import { SkillsRightStyled } from "./SkillsCardContainer.styled";
import SkillsCard from "../05.SkillsCard/SkillsCard";
import PropTypes from "prop-types";

const SkillsCardContainer = ({ object }) => {
  const [t] = useTranslation("global");

  return (
    <SkillsRightStyled>
      {object.map((object) => (
        <SkillsCard
          id={object.id}
          key={object.id}
          title={object.title}
          icon={object.icon}
          description={t(object.description)}
        />
      ))}
    </SkillsRightStyled>
  );
};

SkillsCardContainer.propTypes = {
  object: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillsCardContainer;
