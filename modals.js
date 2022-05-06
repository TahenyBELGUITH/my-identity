// create array of my all objects
window.onload = () => {
  const data = [
    {
      id: "project-one",
      name: " Expo Dubai SUMMIT ",
      tags: ["html/css", "webpack", "javaScript"],
      img: "images/p1.jpg",
      description:
        " This project is based on an online website for EXPO DUBAI 2K20.",
      live: "https://tahenybelguith.github.io/conferencePage/",
      source: "https://github.com/TahenyBELGUITH/conferencePage",
    },
    {
      id: "project-two",
      name: "To-Do App",
      tags: ["html/css", "webpack", "javaScript"],
      img: "images/p5.jpg",
      description:
        "To-Do application is a web app that helps to organize your daily activities.",
      live: "https://tahenybelguith.github.io/to-Do-list/",
      source: "https://github.com/TahenyBELGUITH/to-Do-list",
    },
    {
      id: "project-three",
      name: "E-commerce product",
      tags: ["html/css", "webpack", "javaScript"],
      img: "./images/p3.jpg",
      description:
        "This is a solution to the E-commerce product page challenge on Frontend Mentor .",
      live: "https://tahenybelguith.github.io/E-commerce-product-page/",
      source:
        "https://github.com/TahenyBELGUITH/E-commerce-product-page/tree/mobile",
    },
    {
      id: "project-four",
      name: "Interactive rating ",
      tags: ["html/css", "webpack", "javaScript"],
      img: "./images/p4.jpg",
      description:
        "This is a solution to the E-commerce product page challenge on Frontend Mentor .",
      live: "https://tahenybelguith.github.io/interactive-rating-component/",
      source:
        "https://github.com/TahenyBELGUITH/interactive-rating-component/tree/solution",
    },
    {
      id: "project-five",
      name: "awesome Book ",
      tags: ["html/css", "webpack", "javaScript"],
      img: "./images/p2.jpg",
      description:
        "A Micro-verse pair programming project on book library where the user can store his reading books ",
      live: "https://tahenybelguith.github.io/Awesome_books_ES6/",
      source: "https://github.com/TahenyBELGUITH/Awesome_books_ES6",
    },
    {
      id: "project-six",
      name: "project name goes here",
      tags: ["html/css", "Ruby on Rails", "javaScript"],
      img: "./images/project-four.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ",
      live: "https://tahenybelguith.github.io/my-identity/",
      source: "https://github.com/TahenyBELGUITH/my-identity",
    },
  ];

  // create the portfolio section for mobile and desktop
  const portfolio = document.querySelector(".portfolio");
  portfolio.innerHTML = "";
  for (let i = 0; i < 6; i += 1) {
    portfolio.innerHTML += `
    <section class="projects-section hide" id="works">
      <div class="projects-section-container width-100">
        <div class="projects-header hide-in-mobile ${data[i].id}">
          <h1>Projects</h1>
        </div>
        <div class="all-projects-container width-100">

          <!-- project-one -->
          <div class="project-one-container width-100 display-flex">
            <div class="project-image width-100">
              <img class="project-image width-100" src="${data[i].img}" alt="project name">
            </div>
            <div class="project-body">
              <h2>${data[i].name}</h2>
              <ul class="display-flex">
                <li>${data[i].tags[0]}</li>
                <li>${data[i].tags[1]}</li>
                <li>${data[i].tags[2]}</li>
              </ul>
              <div class="btn-project-container display-flex">
                <button class="see-btn" type="button">see project <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
`;
  }

  document.querySelector(".project-one").classList.remove("hide-in-mobile");

  const desktop = document.querySelector(".portfolio-2");
  desktop.innerHTML = `
<div class= "project-part-one">
      <h1 class="hide-in-mobile show header-part-one" >Projects</h1>
      <img class="hide-in-mobile show" src="images/desktopdots.svg">
      <div class="deskprojfirst hide-in-mobile show">
            <img class="win1 hide-in-mobile show width-100" src="${data[0].img}" alt="project three">
            <div class="project-body-desk animate__animated animate__lightSpeedInLeft">
              <h3>${data[0].name}</h3>
              <ul class="display-flex">
                <li>${data[0].tags[0]}</li>
                <li>${data[0].tags[1]}</li>
                <li>${data[0].tags[2]}</li>
              </ul>
              <div class="btn-project-container-desk display-flex">
               <button class="see-btn desktop-btn" type="button">see project <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
          </div>
</div>          
      <!-- desktop shapes -->
      <div class="desktop-shapes">
        <div class="grp-one-container width-100">
          <div class="deskproj hide-in-mobile show">
            <img class="win1 hide-in-mobile show width-100" src="${data[1].img}" alt="project three">
            <div class="project-body-desk animate__animated animate__lightSpeedInLeft">
              <h3>${data[1].name}</h3>
              <ul class="display-flex">
                <li>${data[1].tags[0]}</li>
                <li>${data[1].tags[1]}</li>
                <li>${data[1].tags[2]}</li>
              </ul>
              <div class="btn-project-container-desk display-flex">
                <button class="see-btn desktop-btn" type="button">see project <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>


          <img class="win2 hide-in-mobile show" src="images/shapes-project-one.svg" alt="shape">


          <div class="deskproj hide-in-mobile show">
            <img class="win3 hide-in-mobile show width-100" src="${data[2].img}" alt="project three">
            <div class="project-body-desk animate__animated animate__lightSpeedInLeft">
              <h3>${data[2].name}</h3>
              <ul class="display-flex">
                <li>${data[2].tags[0]}</li>
                <li>${data[2].tags[1]}</li>
                <li>+1</li>
              </ul>
              <div class="btn-project-container-desk display-flex">
               <button class="see-btn desktop-btn" type="button">see project <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div class="grp-two-container width-100">

          <div class="deskproj hide-in-mobile show body-win-4">
            <img class="win4 hide-in-mobile show width-100" src="${data[3].img}" alt="project three">
            <div class="project-body-desk project-body-win4 animate__animated animate__lightSpeedInLeft">
              <h3>${data[3].name}</h3>
              <ul class="display-flex">
                <li>${data[3].tags[0]}</li>
                <li>${data[3].tags[1]}</li>
                <li>${data[3].tags[2]}</li>
              </ul>
              <div class="btn-project-container-desk display-flex">
               <button class="see-btn desktop-btn" type="button">see project <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>


          <img class="win6 hide-in-mobile show" src="images/shapes-project-two.svg" alt="shape">


          <div class="deskproj hide-in-mobile show">
            <img class="win5 hide-in-mobile show width-100" src="${data[4].img}" alt="project three">
            <div class="project-body-desk animate__animated animate__lightSpeedInLeft">
              <h3>${data[4].name}</h3>
              <ul class="display-flex">
                <li>${data[4].tags[0]}</li>
                <li>${data[4].tags[1]}</li>
                <li>+1</li>
              </ul>
              <div class="btn-project-container-desk display-flex">
                <button class="see-btn desktop-btn" type="button">see project <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>

        </div>
        <div class="grp-three-container width-100">
          <img class="win8 hide-in-mobile show" src="images/shape-project31.svg" alt="shape">
          <img class="win7 hide-in-mobile show" src="images/shape-project3.svg" alt="project five">

          <div class="deskproj hide-in-mobile show body-win-9">
            <img class="win9 hide-in-mobile show width-100" src="${data[5].img}" alt="project three">
            <div class="project-body-desk project-body-win9 animate__animated animate__lightSpeedInLeft">
              <h3>${data[5].name}</h3>
              <ul class="display-flex">
                <li>${data[5].tags[0]}</li>
                <li>${data[5].tags[1]}</li>
                <li>${data[5].tags[2]}</li>
              </ul>
              <div class="btn-project-container-desk display-flex">
               <button class="see-btn desktop-btn" type="button">see project <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end desktop shapes -->`;

  // the popup modals

  const popupContainer = document.querySelector(".popup-container");
  const seeProjectBtns = document.querySelectorAll(".see-btn"); // output:array
  const desktopBtn = document.querySelectorAll(".desktop-btn"); // output:array
  function openPopUp(index) {
    const div = document.createElement("div");
    div.className = "popup";
    div.innerHTML = `
        <h1>${data[index].name}</h1>
        <ul>
        <li>${data[index].tags[0]}</li>
        <li>${data[index].tags[1]}</li>
        <li>${data[index].tags[2]}</li>
        </ul>
        <img src="${data[index].img}" class="project-image" alt="project image">
        <p>${data[index].description}</p>
        <button type="button"><a href="${data[index].live}">see live </a><i class="fa-solid fa-arrow-trend-up"></i></button>
        <button type="button"><a href="${data[index].source}">see source </a><i class="fa-brands fa-github"></i></button>`;
    popupContainer.appendChild(div);
    popupContainer.classList.remove("display-none");
  }

  seeProjectBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      openPopUp(index);
    });
  });

  desktopBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      openPopUp(index);
    });
  });

  function closePopUp() {
    popupContainer.classList.add("display-none");
  }

  const closeBtnpop = document.querySelector(".close-popup");
  closeBtnpop.addEventListener("click", closePopUp);
};
