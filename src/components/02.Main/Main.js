import React from "react";
import {
  MainBannerStyled,
  ContainersStyled,
  ContainerTextStyled,
  ContainerParagraphStyled,
  NameStyled,
  ParagraphStyled,
  ContainerIconStyled,
  AStyled,
  IconStyled,
  DownloadButtonStyled,
  AvatarContainerStyled,
  AvatarImgStyled,
} from "./Main.styled";
import { useTranslation } from "react-i18next";

const Main = () => {
  const [t] = useTranslation("global");
  const handleDownload = () => {
    const url = "assets/Main/LuciaNayeliAndradeLópezCv.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "LuciaNayeliAndradeLópezCv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MainBannerStyled id="home">
      <ContainersStyled>
        <ContainerTextStyled>
          <ContainerParagraphStyled>
            <NameStyled>Nayeli Andrade</NameStyled>
            <ParagraphStyled>
              {t("main.career")}
            </ParagraphStyled>
            <ParagraphStyled>
              {t("main.about")}
            </ParagraphStyled>
          </ContainerParagraphStyled>
          <ContainerIconStyled>
            <AStyled
              href="https://github.com/NayeliAndrade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconStyled
                src="assets/Main/iconGithub.svg"
                alt="icon github"
              />
            </AStyled>
            <AStyled
              href="https://www.linkedin.com/in/nayeli-andrade-11581b229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconStyled
                src="assets/Main/iconLn.svg"
                alt="icon linkedin"
              />
            </AStyled>
          </ContainerIconStyled>
          <DownloadButtonStyled
            onClick={handleDownload}
          >
            {t("main.cv")}
          </DownloadButtonStyled>
        </ContainerTextStyled>
        <AvatarContainerStyled>
          <AvatarImgStyled
            src="assets/Main/avatar.png"
            alt="avatar of me"
          />
        </AvatarContainerStyled>
      </ContainersStyled>
    </MainBannerStyled>
  );
};

export { Main as default };
