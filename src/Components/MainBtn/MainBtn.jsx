import React, { useRef } from "react";
import style from "./MainBtn.module.css";
export default function MainBtn({
  a,
  href,
  target,
  className,
  text,
  functions,
  type
}) {
  let btn = useRef("");

  function mouseEffect(mouse) {
    let rect = mouse.target.getBoundingClientRect();
    let x = mouse.clientX - rect.left;
    let y = mouse.clientY - rect.top;
    btn.current.style.setProperty("--x", x + "px");
    btn.current.style.setProperty("--y", y + "px");
  }

  return (
    <>
      {a ? (
        <a
          ref={btn}
          onMouseMove={mouseEffect}
          className={`${style.mouseCursor} btn px-3 ${className}`}
          target={target}
          href={href}
        >
          {text}
        </a>
      ) : (
        <button
        type={type}
          ref={btn}
          onMouseMove={mouseEffect}
          id="mouse-cursor-gradient-tracking"
          className={`${style.mouseCursor} btn px-3`}
          onClick={functions}
        >
          {text}
        </button>
      )}
    </>
  );
}
