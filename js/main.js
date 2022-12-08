let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let input3 = document.querySelector(".input3")
let input4 = document.querySelector(".textarea")
let invalid = document.querySelectorAll(".invalid-feedback")
function clear() {
  input1.value = ""
  input2.value = ""
  input3.value = ""
  input4.value = ""
  // for (let i = 0; i < invalid.length; i++) {
  //   invalid[i].style.display = "none"
  // }
}
let skills = [
  {
      "sName":"HTML",
      "sClass":"fa-brands fa-html5 fa-fw",
      "sPercent":"95"
  },
  {
      "sName":"CSS",
      "sClass":"fa-brands fa-css3-alt",
      "sPercent":"90"
  },
  {
      "sName":"JavaScript",
      "sClass":"fa-brands fa-js",
      "sPercent":"85"
  },
  {
      "sName":"React",
      "sClass":"fa-brands fa-react",
      "sPercent":"65"
  },
  {
      "sName":"Bootstrap",
      "sClass":"fa-brands fa-bootstrap",
      "sPercent":"90"
  },
  {
      "sName":"SCSS",
      "sClass":"fa-brands fa-sass",
      "sPercent":"85"
  },
  {
      "sName":"Git",
      "sClass":"fa-brands fa-git-alt",
      "sPercent":"90"
  },
  {
      "sName":"GitHub",
      "sClass":"fa-brands fa-github",
      "sPercent":"85"
  }
]
// skills api
let skillsX = document.querySelector(".skillsX");

    for (let i = 0; i < skills.length; i++) {
      skillsX.innerHTML += `
        <div class="card col-xl-4 col-md-6 col-sm-6 col-6" data-aos="zoom-in-down" data-aos-duration="1000">
            <div class="cardX1">
            <div class="front">
                <div class="card-img">
                <i class="${skills[i].sClass} fa-fw"></i>
                </div>
                <div class="card-bodr">
                <h3>${skills[i].sName}</h3>
                </div>
            </div>
            <div class="back">
                <label for="skillpro">${skills[i].sPercent}%</label>
                <div id="skillpro" class="progress aos-init aos-animate" data-aos="fade-right">
                <div class="progress-bar"
                    role="progressbar" style="width: ${skills[i].sPercent}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            </div>
        </div>
        `;
    }


// loaader
let loader = document.getElementById("loader");
let NAV = document.getElementById("NAV");
let toUp = document.querySelector("#toUp");
document.body.style.maxHeight = "100vh";
document.body.style.overflow = "hidden";
setTimeout(loaderNone, 2000);
function loaderNone() {
  document.body.style.maxHeight = "auto";
  document.body.style.overflow = "auto";
  loader.style.zIndex = "-1";
  loader.style.opacity = "0";
  NAV.style.opacity = "1";
  toUp.style.zIndex = "99999999";
}

// github api
gitID = document.querySelector("#gitID");
fetch("https://api.github.com/users/kerolos2000/repos")
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);
    for (let i = 0; i < response.length; i++) {
      gitID.innerHTML += `
		<div id="card3d"  class="card col-xl-4 col-md-6 col-sm-6 col-6" data-aos="zoom-in-down" data-aos-duration="1000">
		<div class="cardX">
		  <div class="front">
			<div class="card-body">
			  <h3>${response[i].name}</h3>
			  <h6>NO. of Stars ${response[i].stargazers_count}<i class="fa-regular fa-star"></i></h6>
			  <div class="mb-3">
				<h5>Show code</h5>
				<a id="mouse-cursor-gradient-tracking" class="btn visit" target="_blank" href="${response[i].html_url}">Show Now</a> 
			  </div>
			  <div class="mt-3 mb-2">
			  	<h5>Show live demo</h5>
			  <a id="mouse-cursor-gradient-tracking" class="btn button-text visit" target="_blank" href="https://kerolos2000.github.io/${response[i].name}">Live Demo</a>	   
			  </div>
			</div>
		  </div>
		</div>
	  </div>
		`;
      let card3d = document.querySelectorAll("#card3d");
      let cardX = document.querySelectorAll(".cardX");
      for (let i = 0; i < card3d.length; i++) {
        card3d[i].onmousemove = function (e) {
          let half = cardX[i].offsetHeight / 2;
          cardX[i].style.transform = `rotateX(${
            -(e.offsetY - half) / 10
          }deg) rotateY(${(e.offsetX - half) / 10}deg)`;
        };
        card3d[i].onmouseleave = function () {
          cardX[i].style.transform = `rotateX(0deg) rotateY(0deg)`;
        };
      }

      let btn = document.querySelectorAll("#mouse-cursor-gradient-tracking");
      for (let j = 0; j < btn.length; j++) {
        btn[j].addEventListener("mousemove", (mouse) => {
          let rect = mouse.target.getBoundingClientRect();
          let x = mouse.clientX - rect.left;
          let y = mouse.clientY - rect.top;
          btn[j].style.setProperty("--x", x + "px");
          btn[j].style.setProperty("--y", y + "px");
        });
      }
    }
  });

// to up
window.onscroll = function () {
  if (window.scrollY > 100) {
    toUp.style.display = "block";
    toUp.addEventListener("click", function () {
      window.scrollTo(0, 0);
    });
  } else {
    toUp.style.display = "none";
  }
  sessionStorage.setItem("scrollY", window.scrollY);
};
window.scrollTo(0, sessionStorage.getItem("scrollY"));

// form validation
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          Swal.fire(
            "Done!",
            "Your message has been sent successfully",
            "success"
          );
          clear()
        }
        form.classList.add("was-validated");
        event.preventDefault();
      },
      false
    );
  });
})();

// preventDefault
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  // if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
  //   return false;
  // }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
