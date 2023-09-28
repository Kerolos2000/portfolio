import React from "react";
import style from "./Contact.module.css";
import CenterText from "../CenterText/CenterText";
import MainBtn from "../MainBtn/MainBtn";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import useNotify from "../../hooks/useNotify";

export default function Contact() {
  let { ToastContainer, notify } = useNotify();
  function sendDataToapi(data, { resetForm }) {
    toast
      .promise(
        emailjs.send(
          "service_asq1jr9",
          "template_fq3cldx",
          data,
          "pPvI55oTnmo827Wf4"
        ),
        {
          pending: "Sending",
          success: "sent succesfully",
          error: "Something went wrong. Try again",
        }
      )
      .then(() => {
        // reset the form after successful submission
        resetForm();
      });
  }

  let myValidation = Yup.object({
    name: Yup.string()
      .required("Your Name is Required")
      .min(3, "Min Length is 3 Chars")
      .max(15, "Max Length is 15 Chars"),
    email: Yup.string()
      .required("Your Email is Required")
      .email("Your Email inValid"),
    subject: Yup.string()
      .required("Your Subject is Required")
      .min(10, "Min Length is 10 Chars")
      .max(50, "Max Length is 50 Chars"),
    message: Yup.string()
      .required("Your message is Required")
      .min(50, "Min Length is 50 Chars")
      .max(100, "Max Length is 100 Chars"),
  });

  let formik = useFormik({
    initialValues: {
      subject: "",
      email: "",
      name: "",
      message: "",
    },
    validationSchema: myValidation,
    onSubmit: sendDataToapi,
    enableReinitialize: true, // to clear the form on submission
  });

  return (
    <>
      <ToastContainer position="bottom-left" theme="dark" />
      <section id="Contact" className={style.Contact}>
        <CenterText
          text1={"Contact Me"}
          text2={"Contact"}
          className="center-text-dark "
        />
        <div className={`${style.container} container`}>
          <form
            id="form"
            className={`needs-validation ${style.form}`}
            onSubmit={formik.handleSubmit}
          >
            <div className={`row ${style.row}`}>
              <div
                className={`${style.formOutline} form-outline col-12 col-md-6`}
              >
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Your Name"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="alert">{formik.errors.name}</div>
                ) : null}
              </div>
              <div
                className={`${style.formOutline} form-outline col-12 col-md-6`}
              >
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Your Email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={style.formOutline}>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Subject"
                  id="subject"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.subject && formik.touched.subject ? (
                  <div className="alert">{formik.errors.subject}</div>
                ) : null}
              </div>
              <div className={style.formOutline}>
                <textarea
                  type="text"
                  className={`form-control form-control-lg ${style.textarea}`}
                  placeholder="message For Me"
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.message && formik.touched.message ? (
                  <div className="alert">{formik.errors.message}</div>
                ) : null}
              </div>
              <div className={`${style.load} mb-3`}>
                <MainBtn
                  type="submit"
                  className={`btn button-text ${style.visit}`}
                  target="_blank"
                  text={"Send message"}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
