import React, { useEffect, useRef } from "react";
import img0 from "../../img/layer_0.png";
import img1 from "../../img/layer_1.png";
import img2 from "../../img/layer_2.png";
import img3 from "../../img/layer_3.png";
import img4 from "../../img/layer_4.png";
import img5 from "../../img/layer_5.png";
import img6 from "../../img/layer_6.png";
import img7 from "../../img/x2.png";
import img8 from "../../img/x3.png";
import style from "./MainSection.module.css";
import Typed from "typed.js";
export default function MainSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Kerolos Magdy", "FrontEnd Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };
    typedRef.current = new Typed("#typed", options);
    return () => {
      typedRef.current.destroy();
    };
  }, []);

  let i1 = useRef();
  let i2 = useRef();
  let i3 = useRef();
  let i4 = useRef();
  let i5 = useRef();
  let i6 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;
      i1.current.style.bottom = `${-scroll * 1.3}px`;
      i2.current.style.bottom = `${-scroll * 1.1}px`;
      i3.current.style.bottom = `${-scroll * 0.9}px`;
      i4.current.style.bottom = `${-scroll * 0.7}px`;
      i5.current.style.bottom = `${-scroll * 0.5}px`;
      i6.current.style.bottom = `${-scroll * 0.3}px`;
      x2.current.style.top = `${scroll * 0.8 + 100}px`;
      x2.current.style.left = `${scroll * 2 - 150}px`;
      x3.current.style.top = `${scroll * 0.2 + 100}px`;
      x3.current.style.left = `${scroll * 1 - 150}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="Main" className={style.main}>
        <img alt="..." className={style.x3} ref={x3} src={img8} />
        <h1 className={`${style.text} type`}>Hello I'm</h1>
        <h1 className={`${style.text} type`}>
          <span className="type" id="typed"></span>
        </h1>
        <img alt="..." className={style.x2} ref={x2} src={img7} />
        <img
          className={style.img}
          loading="lazy"
          alt="..."
          ref={i1}
          src={img0}
        />
        <img
          className={style.img}
          loading="lazy"
          alt="..."
          ref={i2}
          src={img1}
        />
        <img
          className={style.img}
          loading="lazy"
          alt="..."
          ref={i3}
          src={img2}
        />
        <img
          className={style.img}
          loading="lazy"
          alt="..."
          ref={i4}
          src={img3}
        />
        <img
          className={style.img}
          loading="lazy"
          alt="..."
          ref={i5}
          src={img4}
        />
        <img
          className={style.img}
          loading="lazy"
          alt="..."
          ref={i6}
          src={img5}
        />
        <img
          className={style.img}
          loading="lazy"
          alt="..."
          id="i7"
          src={img6}
        />
      </div>
    </>
  );
}
