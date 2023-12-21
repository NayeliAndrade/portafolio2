import React from "react";
import SkillsCardContainer from "../04.SkillsCardContainer/SkillsCardContainer";
import Title from "../Title/Title";
import {
  ContainerStyled,
  SkillsContainerStyled,
  SkillsTitleStyled,
  ContainerTitleStyled,
} from "../06.SkillsContainer/SkillsContainer.styled";
import { complementary, tecnology } from "./skillsObject";
import { useTranslation } from "react-i18next";

const SkillsContainer = () => {
  const [t] = useTranslation("global");
  return (
    <ContainerStyled
      id="skills"
    >
      <SkillsContainerStyled>
        <SkillsTitleStyled
          className="leaveTop"
        >
          <ContainerTitleStyled
            className="positionLeft"
          >
            <Title
              fontSize="100px"
              hideBar={true}
              display="block"
              maxWidthContainer="1162px"
              width="390px"
              title={t("skillsTitle.titleTecnology")}
              subtitle={t("skillsTitle.subtitleTecnology")}
            />
          </ContainerTitleStyled>
        </SkillsTitleStyled>

        <SkillsCardContainer
          object={tecnology}
        />
      </SkillsContainerStyled>
      <SkillsContainerStyled
        className="reverse"
      >
        <SkillsTitleStyled
          className="leaveBottom"
        >
          <ContainerTitleStyled
            className="positionRight"
          >
            <Title
              fontSize="66px"
              hideBar={true}
              display="block"
              maxWidthContainer="1162px"
              width="520px"
              title={t("skillsTitle.titleComplementary")}
              subtitle={t("skillsTitle.subtitleComplementary")}
            />
          </ContainerTitleStyled>
        </SkillsTitleStyled>
        <SkillsCardContainer
          object={complementary}
        />
      </SkillsContainerStyled>
    </ContainerStyled>
  );
};

export default SkillsContainer;
