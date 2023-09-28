import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer id="footer" className={style.footer}>
        <div
          className={`container text-center text-md-start py-5 ${style.container}`}
        >
          <div className="row">
            <div className={`col-md-4 ${style.left}`}>
              <h2>KEROLOS MAGDY</h2>
              <p className=" mt-4">
                I work hard to complete projects with the highest quality and as
                quickly as possible.
              </p>
              <p>created in 2023.</p>
            </div>
            <div className="col-md-2 mid">
              <div className="links">
                <h5 className="fw-bold">Links</h5>
                <ul className="lh-lg">
                  <a href="#Home">
                    <li>Home</li>
                  </a>
                  <a href="#About">
                    <li>About</li>
                  </a>
                  <a href="#Works">
                    <li>Works</li>
                  </a>
                  <a href="#Skills">
                    <li>Skills</li>
                  </a>
                  <a href="#Contact">
                    <li>Contact</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-md-4 right">
              <h5 className="fw-bold">Contact Us</h5>
              <p className="mt-4">
                Contact me via phone or e-mail, waiting for your call or message
              </p>
              <p className={style.Gmail}>kerolos1410@gmail.com</p>
              <ul className="d-flex mt-4 list-unstyled gap-4">
                <a
                  href="https://www.linkedin.com/in/kerolos-magdy-314644212/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`${style.svg} fa-brands fa-linkedin-in`}></i>
                </a>
                <a
                  href="https://github.com/Kerolos2000"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`${style.svg} fa-brands fa-github`}></i>
                </a>
                <a
                  href="mailto:kerolos1410@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`${style.svg} fa-brands fa-google`}></i>
                </a>
                <a href="https://wa.me/01205224238" target="_blank" rel="noreferrer">
                  <i className={`${style.svg} fa-brands fa-whatsapp`}></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100085254521149"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`${style.svg} fa-brands fa-facebook`}></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
