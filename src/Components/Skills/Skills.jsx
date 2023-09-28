import React from "react";
import "swiper/css";
import CenterText from "../CenterText/CenterText";
import style from "./Skills.module.css";

import { imgs } from "../../img/skills";
import Atropos from "atropos/react";
export default function Skills() {
  return (
    <>
      <section id="Skills">
        <div className="container">
          <CenterText text1={"My Skills"} text2={"skills"} />
          <div className="row g-3">
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.html} alt=".." className={style.img} />
                <p className={style.p}>HTML5</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.css} alt=".." className={style.img} />
                <p className={style.p}>CSS3</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.js} alt=".." className={style.img} />
                <p className={style.p}>javaScript</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.bootstrap} alt=".." className={style.img} />
                <p className={style.p}>Bootstrap</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.sass} alt=".." className={style.img} />
                <p className={style.p}>Sass</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.jQuery} alt=".." className={style.img} />
                <p className={style.p}>jQuery</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.react} alt=".." className={style.img} />
                <p className={style.p}>React</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.redux} alt=".." className={style.img} />
                <p className={style.p}>redux</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.Typescript} alt=".." className={style.img} />
                <p className={style.p}>typeScript</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.json} alt=".." className={style.img} />
                <p className={style.p}>Json</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.Git} alt=".." className={style.img} />
                <p className={style.p}>Git</p>
              </Atropos>
            </div>
            <div
              className={`col-6 col-sm-4  col-lg-3 col-xl-2 ${style.allCard}`}
            >
              <Atropos
                className="my-atropos"
                rotateTouch={false}
                shadowScale={0.9}
              >
                <img src={imgs.github} alt=".." className={style.img} />
                <p className={style.p}>GitHub</p>
              </Atropos>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
