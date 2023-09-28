import React, { useEffect, useRef, useState } from "react";
import CenterText from "../CenterText/CenterText";
import MainBtn from "../MainBtn/MainBtn";
import style from "./Work.module.css";
import axios from "axios";
import "aos/dist/aos.css";
import Loader from "../Loader/Loader";
// Atropos 3d
import Atropos from "atropos/react";
export default function Work() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const card3d = useRef(null);
  const cardX = useRef([]);
  const btnx = useRef([]);

  function callApi() {
    setLoader(true);
    axios
      .get("https://api.github.com/users/kerolos2000/repos")
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
      });
  }

  useEffect(() => {
    callApi();
  }, []);

  let currentCard = 10;
  function loadMore() {
    let cards = document.querySelectorAll(".card");
    for (let i = currentCard; i < currentCard + 10; i++) {
      if (cards[i]) {
        cards[i].style.position = "relative";
        cards[i].style.transform = "scale(1)";
      }
    }
    currentCard += 10;
    if (currentCard >= cards.length) {
      btnx.current.style.display = "none";
      console.log(currentCard, cards.length);
    }
  }

  let body = document.querySelector("body");
  if (loader) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "auto";
  }

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section id="Works" className={style.Works}>
          <CenterText
            text1={"My Works"}
            text2={"Portfolio"}
            className="center-text-dark "
          />
          <div className={`${style.container} container`}>
            <div className={`${style.row} row g-3`} id="gitID">
              {data.map((el, i) => (
                <div
                  key={i}
                  id="card3d"
                  className={`${style.card} card col-xl-3 col-lg-4 col-md-6 col-sm-6`}
                  ref={card3d}
                >
                  <Atropos
                    className="my-atropos"
                    rotateTouch={false}
                    shadowScale={0.9}
                  >
                    <div
                      className={`${style.cardX} cardX`}
                      ref={(el) => (cardX.current[i] = el)}
                    >
                      <div className={style.front}>
                        <div className={style.cardBody}>
                          <h3 className="mb-2">{el.name.replace(/-/g, " ")}</h3>
                          <h6 className="mb-2">
                            NO. of Stars {el.stargazers_count}
                            <i className="fa-regular fa-star"></i>
                          </h6>
                          <div className="mb-2">
                            <h5>Show code</h5>
                            <MainBtn
                              a={true}
                              className={`${style.visit} btn`}
                              target="_blank"
                              text={"Show Now"}
                              href={el.html_url}
                            />
                          </div>
                          <div className="mb-2">
                            <h5>Show live demo</h5>
                            <MainBtn
                              a={true}
                              className={`btn button-text ${style.visit}`}
                              target="_blank"
                              text={"Live Demo"}
                              href={`https://kerolos2000.github.io/${el.name}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Atropos>
                </div>
              ))}
            </div>
            <div ref={btnx} className={`${style.load} mb-3`}>
              <MainBtn text={"Load More"} functions={loadMore} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
