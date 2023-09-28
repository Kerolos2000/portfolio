import React from "react";
import style from "./CenterText.module.css";
export default function CenterText({ text1, text2, className }) {
  return (
    <>
      <div className={`position-relative ${style.centerText} ${className}`}>
        <h2 className={style.backH2}>{text1}</h2>
        <p>{text2}</p>
      </div>
    </>
  );
}
