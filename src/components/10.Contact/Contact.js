import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../Title/Title";
import {
  ContainerImgLeavesStyled,
  ContainerImgBlueStyled,
  ContainerBlackStyled,
  ContainerMessageStyled,
  ContainerInputsStyled,
  InputGeneralStyled,
  PStyled,
  ButtonStyled,
  FormStyled,
  MessageStyled,
} from "./Contact.styled";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation("global");
  const [send, setSend] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true);

    emailjs
      .sendForm(
        "service_thh0lrw",
        "template_8q2nm0h",
        form.current,
        "kkZHwfoXGhNuJIItW"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContainerImgLeavesStyled
      id="contact"
    >
      <ContainerImgBlueStyled>
        <ContainerBlackStyled>
          <ContainerMessageStyled>
            <Title
              fontSize="65.5px"
              hideBar={false}
              display="none"
              maxWidthContainer="370px"
              width="348px"
              title={t("contact.title")}
              subtitle={t("contact.subtitle")}
            />
            <PStyled>
              {t("contact.message")}
            </PStyled>
          </ContainerMessageStyled>
          <ContainerInputsStyled>
            <FormStyled
              ref={form}
              onSubmit={sendEmail}
            >
              <InputGeneralStyled
                type="text"
                name="user_name"
                placeholder={t("contact.inputName")}
                required
              />
              <InputGeneralStyled
                type="email"
                name="user_email"
                placeholder={t("contact.inputEmail")}
                required
              />
              <InputGeneralStyled
                as="textarea"
                name="message"
                placeholder={t("contact.inputMessage")}
                required
              />
              <ButtonStyled
                type="submit"
                value={t("contact.buttonSend")}
              >
                {t("contact.buttonSend")}
              </ButtonStyled>
            </FormStyled>
            {send && <MessageStyled>
              {t("contact.messageSend")}
            </MessageStyled>}
          </ContainerInputsStyled>
        </ContainerBlackStyled>
      </ContainerImgBlueStyled>
    </ContainerImgLeavesStyled>
  );
};

export default Contact;
