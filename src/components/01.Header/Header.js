import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";
import {
  TopHeaderStyled,
  NavBarStyled,
  ContainerLogoStyled,
  ContainerLogoMenuStyled,
  MenuImgStyled,
  LogoStyled,
  ContainerFlagStyled,
  FlagImgStyled,
  UlContainerStyled,
  LiStyled,
} from "./Header.styled";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [active, setActive] = useState(false);

  const newClass = () => {
    setActive(!active);

  };

  const flagM = "assets/Header/flagM.png";
  const flagEU = "assets/Header/flagEU.png";

  const changeLanguageEs = () => {
    i18n.changeLanguage("en");
  };

  const changeLanguageEn = () => {
    i18n.changeLanguage("es");
  };

  const [flag, setFlag] = useState(flagM);

  const changeFlag = () => {
    const newFlag = flag === flagM ? flagEU : flagM;
    setFlag(newFlag);

    newFlag === flagM ? changeLanguageEs() : changeLanguageEn();
  };
  return (
    <>
      <TopHeaderStyled />
      <NavBarStyled>
        <ContainerLogoStyled>
          <ContainerLogoMenuStyled>
            <MenuImgStyled
              src="assets/Header/menu.svg"
              onClick={newClass}
            />
            <LogoStyled>Nayeli</LogoStyled>
          </ContainerLogoMenuStyled>
          <ContainerFlagStyled>
            <FlagImgStyled
              onClick={changeFlag}
              src={flag}
              alt={t("flags.flag")}
            />
          </ContainerFlagStyled>
        </ContainerLogoStyled>
        <UlContainerStyled active={active}>
          <LiStyled>
            <Link
              smooth
              to="#home"
              className="linkA"
            >
              {t("menu.home")}
            </Link>
          </LiStyled>
          <LiStyled>
            <Link
              smooth
              to="#aboutMe"
              className="linkA"
            >
              {t("menu.aboutme")}
            </Link>
          </LiStyled>
          <LiStyled>
            <Link
              smooth
              to="#skills"
              className="linkA"
            >
              {t("menu.skills")}
            </Link>
          </LiStyled>
          <LiStyled>
            <Link
              smooth
              to="#experience"
              className="linkA"
            >
              {t("menu.experience")}
            </Link>
          </LiStyled>
          <LiStyled>
            <Link smooth
              to="#portfolio"
              className="linkA"
            >
              {t("menu.portfolio")}
            </Link>
          </LiStyled>
          <LiStyled>
            <Link
              smooth
              to="#contact"
              className="linkA"
            >
              {t("menu.contact")}
            </Link>
          </LiStyled>
          <FlagImgStyled
            onClick={changeFlag}
            src={flag}
            alt={t("flags.flag")}
          />
        </UlContainerStyled>
      </NavBarStyled>
    </>
  );
};

export { Header as default };
