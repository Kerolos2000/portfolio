import React, { useContext, useEffect, useRef } from "react";
import CenterText from "../CenterText/CenterText";
import { getHeightContext } from "../../Context/getHeightContext";
import style from "./About.module.css";
export default function About() {
  let HeightContext = useContext(getHeightContext);
  let Height = useRef("");
  useEffect(() => {
    HeightContext.setHeight(Height.current.offsetTop);
  }, [HeightContext]);

  return (
    <>
      <section id="About" ref={Height} className={`dFlex ${style.About}`}>
        <div className={`container dFlex ${style.container}`}>
          <div className={`${style.row} row`}>
            <CenterText text1={"About Me"} text2={"Know Me More"} />
            <div className={style.aboutText}>
              <div className={`${style.row} row`}>
                <div
                  className={`${style.textX} col-md-8 col-sm-12`}
                  data-aos="fade-right"
                >
                  <h2 className={style.h2}>
                    I'm <span className={style.span}>Kerolos Magdy,</span>
                  </h2>
                  <h2>Front-End Developer</h2>
                  <p className={style.p}>
                    Bachelor's degree, Faculty of Commerce Alexandria University
                  </p>
                  <p className={style.p}>
                    Department of Management Information Systems I graduated
                    with a very good grade with honors
                  </p>
                  <p className={style.p}>2018 - 2022</p>
                  <p className={style.p}>
                    BM Enterprises Management, Frontend Developer
                  </p>
                  <p className={style.p}>2023 - Present</p>
                </div>
                <div
                  className={`col-md-4 col-sm-12 ${style.textX2}`}
                  data-aos="fade-left"
                >
                  <div className={`${style.Allinfo} dFlex`}>
                    <div className={style.info}>
                      <h6 className={style.h6}>Name:</h6>
                      <p className={style.p}>Kerolos Magdy</p>
                    </div>
                    <div className={style.hr}></div>
                  </div>
                  <div className={`${style.Allinfo} dFlex`}>
                    <div className={style.info}>
                      <h6 className={style.h6}>Email:</h6>
                      <a
                        className={style.a}
                        href="mailto:kerolos1410@gmail.com"
                      >
                        kerolos1410@gmail.com
                      </a>
                    </div>
                    <div className={style.hr}></div>
                  </div>
                  <div className={`${style.Allinfo} dFlex`}>
                    <div className={style.info}>
                      <h6 className={style.h6}>Age:</h6>
                      <p className={style.p}>{new Date().getFullYear() - new Date('2000-10-01').getFullYear()}</p>
                    </div>
                    <div className={style.hr}></div>
                  </div>
                  <div className={`${style.Allinfo} dFlex`}>
                    <div className={style.info}>
                      <h6 className={style.h6}>From:</h6>
                      <p className={style.p}>Alexandria, Egypt</p>
                    </div>
                    <div className={style.hr}></div>
                  </div>
                  <div className={style.btnX}>
                    <button className={style.learnMore}>
                      <span className={style.circle} aria-hidden="true">
                        <span className={`${style.icon} ${style.arrow}`}></span>
                      </span>
                      <a
                        className={style.buttonText}
                        target={'_blank'}
                        href={'https://flowcv.com/resume/652bhdl1vr'} rel="noreferrer"
                      >
                        Download CV
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
