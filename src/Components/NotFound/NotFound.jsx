import React from "react";
import notFound from "../../img/404 Error-rafiki (1).svg";
import MainBtn from "../MainBtn/MainBtn";
import { useNavigate } from "react-router-dom";
import style from './NotFound.module.css'
export default function NotFound() {
  let navigate = useNavigate();
  function goToHome() {
    navigate("/portfolio/");
  }
  return (
    <>
      <div className={`container d-flex flex-column align-items-center ${style.NotFound}`}>
        <img src={notFound} className="w-50" alt="Not Found" />
        <p className="h1 fw-bold text-center text-white">
          OOPS! this page not found
        </p>
        <MainBtn
          functions={goToHome}
          text={"Go To Home"}
          theam={"main-btn my-2"}
        />
      </div>
    </>
  );
}
