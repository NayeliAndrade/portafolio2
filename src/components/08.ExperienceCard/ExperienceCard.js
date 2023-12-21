import React from "react";
import {
  ContainerCardStyled,
  TitlePinkStyled,
  ParagraghStyled,
  ContainerHorizontalStyled,
  ContainerTitleParagraghStyled,
  ContainerUlExperienceStyled,
  ExperienceLiStyled,
} from "./ExperienceCard.styled";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({
  rol,
  company,
  startDate,
  location,
  endDate,
  activity1,
  activity2,
  activity3,
  activity4,
  activity5,
}) => {
  const [t] = useTranslation("global");

  return (
    <>
      <ContainerCardStyled>
        <TitlePinkStyled className="align">
          {t(rol)}
        </TitlePinkStyled>
        <ParagraghStyled className="align">
          {t(company)}
        </ParagraghStyled>
        <ContainerHorizontalStyled>
          <ContainerTitleParagraghStyled>
            <TitlePinkStyled>
              {t("experience.startTitle")}
            </TitlePinkStyled>
            <ParagraghStyled>
              {t(startDate)}
            </ParagraghStyled>
          </ContainerTitleParagraghStyled>
          <ContainerTitleParagraghStyled>
            <TitlePinkStyled>
              {t("experience.locationTitle")}
            </TitlePinkStyled>
            <ParagraghStyled>
              {t(location)}
            </ParagraghStyled>
          </ContainerTitleParagraghStyled>
          <ContainerTitleParagraghStyled>
            <TitlePinkStyled>
              {t("experience.endTitle")}
            </TitlePinkStyled>
            <ParagraghStyled>
              {t(endDate)}
            </ParagraghStyled>
          </ContainerTitleParagraghStyled>
        </ContainerHorizontalStyled>
        <ContainerUlExperienceStyled>
          <ExperienceLiStyled>
            {t(activity1)}
          </ExperienceLiStyled>
          <ExperienceLiStyled>
            {t(activity2)}
          </ExperienceLiStyled>
          <ExperienceLiStyled>
            {t(activity3)}
          </ExperienceLiStyled>
          <ExperienceLiStyled>
            {t(activity4)}
          </ExperienceLiStyled>
          <ExperienceLiStyled>
            {t(activity5)}
          </ExperienceLiStyled>
        </ContainerUlExperienceStyled>
      </ContainerCardStyled>
    </>
  );
};

ExperienceCard.propTypes = {
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
};
export default ExperienceCard;
