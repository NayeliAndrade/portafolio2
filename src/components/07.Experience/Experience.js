import React, { useState } from "react";
import {
  ContainerStyled,
  ContainerTitleStyled,
  ContainerAirplaneLineStyled,
  ContainerAirplaneStyled,
  ContainerLineStyled,
  ContainerTitleCardsStyled,
  ContainerLeavesStyled,
  CircleStyled,
  ContainerTextExperienceStyled,
  ExperienceTitleStyled,
  DateTitleStyled,
} from "./Experience.styled";
import Title from "../Title/Title";
import ExperienceCard from "../08.ExperienceCard/ExperienceCard";
import { experienceObject } from "./experienceObject";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const Experience = () => {
  const [t] = useTranslation("global");
  const [info, setInfo] = useState(experienceObject[0]);
  const handleClick = (id) => {
    const selectObj = experienceObject.find((obj) => obj.id === id);
    setInfo(selectObj);
  };
  const { i18n } = useTranslation();
  return (
    <ContainerStyled id="experience">
      <ContainerTitleStyled
        fontSize="50px"
        isSpanish={i18n.language.startsWith("es")}
      >
        <Title
          fontSize="50px"
          maxWidthContainer="427px"
          width="427px"
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />
      </ContainerTitleStyled>
      <ContainerAirplaneLineStyled>
        <ContainerAirplaneStyled
          className="airplaneMq"
        />
        <ContainerLineStyled
          className="horizontal"
        >
          <ContainerTitleCardsStyled
            className="circle1"
          >
            <CircleStyled
              className={info.id === 1 ? "active" : ""}
              onClick={() => handleClick(1)}
            ></CircleStyled>
            <ContainerTextExperienceStyled
              className="container1"
            >
              <ExperienceTitleStyled>
                {t("experience.titleAirplane2")}
              </ExperienceTitleStyled>
              <DateTitleStyled>
                {t("experience.yearAirplane2")}
              </DateTitleStyled>
            </ContainerTextExperienceStyled>
          </ContainerTitleCardsStyled>

          <ContainerTitleCardsStyled
            className="circle2"
          >
            <CircleStyled
              className={info.id === 2 ? "active" : ""}
              onClick={() => handleClick(2)}
            ></CircleStyled>
            <ContainerTextExperienceStyled
              className="container2"
            >
              <ExperienceTitleStyled>
                {t("experience.titleAirplane1")}
              </ExperienceTitleStyled>
              <DateTitleStyled>
                {t("experience.yearAirplane1")}
              </DateTitleStyled>
            </ContainerTextExperienceStyled>
          </ContainerTitleCardsStyled>
        </ContainerLineStyled>
      </ContainerAirplaneLineStyled>
      {info && (
        <ExperienceCard
          key={info.id}
          rol={info.rol}
          company={info.company}
          startDate={info.startDate}
          locationTitle={info.locationTitle}
          location={info.location}
          endDate={info.endDate}
          activity1={info.activity1}
          activity2={info.activity2}
          activity3={info.activity3}
          activity4={info.activity4}
          activity5={info.activity5}
        />
      )}
      <ContainerLeavesStyled />
    </ContainerStyled>
  );
};

ExperienceCard.propTypes = {
  object: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rol: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      locationTitle: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      activity1: PropTypes.string.isRequired,
      activity2: PropTypes.string.isRequired,
      activity3: PropTypes.string.isRequired,
      activity4: PropTypes.string.isRequired,
      activity5: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Experience;
