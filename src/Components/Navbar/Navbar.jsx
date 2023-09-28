import { Navbar, Container, Nav } from "react-bootstrap";
import style from "./Navbar.module.css";
import { useContext, useRef, useState } from "react";
import { getHeightContext } from "../../Context/getHeightContext";
function Navigation() {
  let [stateX, setStateX] = useState(false);

  function changestateX() {
    setStateX(!stateX);
  }

  let HeightContext = useContext(getHeightContext);

  const nav = useRef("");
  let scrollTop = window.scrollY;
  window.addEventListener("scroll", () => {
    if (HeightContext.height !== null) {
      if (window.scrollY > HeightContext.height + 150) {
        if ((scrollTop < window.scrollY) & (stateX === false)) {
          nav.current.style.transform = `translateY(-100px)`;
        } else {
          nav.current.style.transform = `translateY(0px)`;
        }
      }
    }
    scrollTop = window.scrollY;
  });

  return (
    <Navbar id="nav" ref={nav} className={style.nav} sticky="top" expand="lg">
      <Container>
        <Navbar.Brand className={style.navbarBrand} href="#index.html">
          Kerolos
        </Navbar.Brand>
        <Navbar.Toggle
          className={style.navbarToggler}
          aria-controls="navbarSupportedContent"
          onClick={() => {
            changestateX();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link
              href="#Main"
              data-dir="Home"
              className={`${style.item} nav-item`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#About"
              data-dir="About"
              className={`${style.item} nav-item`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#Works"
              data-dir="Works"
              className={`${style.item} nav-item`}
            >
              Works
            </Nav.Link>
            <Nav.Link
              href="#Skills"
              data-dir="Skills"
              className={`${style.item} nav-item`}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              data-dir="Contact"
              className={`${style.item} nav-item`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
