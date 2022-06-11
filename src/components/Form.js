import React, {useRef} from 'react';
import {useEffect, useState} from "react"
import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "./Modal";
import styled from "styled-components";

const schema = yup.object().shape({
    to_name: yup.string().required("name is a required field").min(3),
    user_email: yup.string().email().required("email is a required field"),
    message: yup.string().required().min(20)
});


const Form = () => {

    const form = useRef();
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    });

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowModal(false), 3000);
        return () => clearTimeout(timer);
    }, [showModal]);

    const sendEmail = () => {

        emailjs.sendForm('service_58436a6', 'template_ug6iawl', form.current, 'LV0f4BZc_NAinb2u-')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                setShowModal(true);
                reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <ContactForm>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <input {...register("to_name")} placeholder="name" name="to_name"/>
                <ErrorMsg>{errors.to_name?.message}</ErrorMsg>
                <input {...register("user_email")} placeholder="email" name="user_email"/>
                <ErrorMsg>{errors.user_email?.message}</ErrorMsg>
                <textarea {...register("message")} placeholder="message" name="message"/>
                <ErrorMsg>{errors.message?.message}</ErrorMsg>
                <div className="bottom-wrapper">
                    <input type="submit" value="Send"/>
                    {showModal && <Modal>Your message has been send</Modal>}
                </div>
            </form>
        </ContactForm>
    );
};

export default Form;


const ContactForm = styled.div`
  width: 400px;
  width: 22vw;
  height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      background-color: #d9cab7;
      height: 35px;
      padding: 7px;
      outline: none;
      border: none;
      border-bottom: 1px solid rgb(31, 30, 30);

      &:focus {
        border-bottom: 2px solid rgb(26, 26, 26);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border: none;
      background-color: #d9cab7;
      border-bottom: 1px solid rgb(31, 30, 30);

      &:focus {
        border-bottom: 2px solid rgb(21, 21, 21);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 1.8vw;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: transparent;
      transition: all ease-in-out 0.6s;
      -webkit-appearance: none;
      border-radius: 0;

      &:hover {
        border: 1px solid #000;
        background-color: transparent;
        color: rgb(249, 105, 14);
      }
    }

    .bottom-wrapper {
      width: 100%;
    }
  }
`;

const ErrorMsg = styled.p`
  color: #f50404;
  display: inline-block;
  margin-bottom: 20px;
  font-size: 12px;
`;
