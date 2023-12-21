import {
    CardVisibleStyled,
    CardStyled,
    TitleSkillsStyled,
    UlStyled,
    ListStyled,
} from "./CardExtra.styled";

import { objectSkills } from "./objectSkills";
import { useTranslation } from "react-i18next";

const CardExtra = ({ id, closeModal }) => {
    const [t] = useTranslation("global");
    return objectSkills.map((item) => (
        <CardVisibleStyled
            key={item.id}
            style={{ display: item.id == id ? "flex" : "none" }}
        >
            <CardStyled>
                <TitleSkillsStyled>
                    {t(item.title)}
                    {' '}
                    {t("skillsFrameworks.de")}
                    {' '}
                    {item.tecnology}
                </TitleSkillsStyled>
                <img
                    onClick={closeModal}
                    src={"assets/Skills/close.svg"}
                />
            </CardStyled>
            <UlStyled>
                {item.text.map((text, index) => (
                    <ListStyled
                        key={index}
                    >
                        {t(text)}
                    </ListStyled>
                ))}
            </UlStyled>
        </CardVisibleStyled>
    ));
};

export default CardExtra;
