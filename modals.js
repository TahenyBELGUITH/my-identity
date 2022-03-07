// create array of my all objects

const data = [{
  project1: {
    name: 'Tonic',
    tags: ['html', 'css', 'javaScript'],
    img: './images/project-one.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live: 'https://tahenybelguith.github.io/my-identity/',
    source: 'https://github.com/TahenyBELGUITH/my-identity',
  },
  project2: {
    name: 'Tonic',
    tags: ['html', 'css', 'javaScript'],
    img: './images/project-two.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live: 'https://tahenybelguith.github.io/my-identity/',
    source: 'https://github.com/TahenyBELGUITH/my-identity',
  },
  project3: {
    name: 'Tonic',
    tags: ['html', 'css', 'javaScript'],
    img: './images/project-three.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live: 'https://tahenybelguith.github.io/my-identity/',
    source: 'https://github.com/TahenyBELGUITH/my-identity',
  },
  project4: {
    name: 'Tonic',
    tags: ['html', 'css', 'javaScript'],
    img: './images/project-four.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live: 'https://tahenybelguith.github.io/my-identity/',
    source: 'https://github.com/TahenyBELGUITH/my-identity',
  },
  project5: {
    name: 'Tonic',
    tags: ['html', 'css', 'javaScript'],
    img: './images/project-five.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live: 'https://tahenybelguith.github.io/my-identity/',
    source: 'https://github.com/TahenyBELGUITH/my-identity',
  },
  project6: {
    name: 'Tonic',
    tags: ['html', 'css', 'javaScript'],
    img: './images/project-six.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live: 'https://tahenybelguith.github.io/my-identity/',
    source: 'https://github.com/TahenyBELGUITH/my-identity',
  }
}];

const containerPopUp = document.querySelector('.popup-container');
const seeProjectBtns = document.querySelectorAll('#see-btn'); // output:array
// create create  fonction
function createModel({
  name, tags, img, description, live, source,
}, index) {
  const div = document.createElement('div');
  div.id = 'popup';
  div.innerHTML = `
            <h1>${name}</h1> 
              <ul>
                <li>HTML/CSS</li>
                <li>Ruby on Rails</li>
                <li>javaScript</li>
              </ul>
            <img src="./images/${img}" alt="project three">
            <p>${description}</p>
                <button type="button"><a href="${live}">see Live </a><i class="fa-solid fa-arrow-trend-up"></i></button>
                <button type="button"><a href="${source}">see source </a><i class="fa-brands fa-github"></i></button>`;
  containerPopUp.appendChild(div);
}

function openPopUp() {
  containerPopUp.classList.remove('display-none');
}

function closePopUp() {
  containerPopUp.classList.add('display-none');
}
// tag all btns

data.forEach((element) => {
  for (let i = 1; i <= seeProjectBtns.length; i++) {
    seeProjectBtns[i].addEventListener('click', () => {
      openPopUp();
      createModel(element, i);
    });
  }
});

// tag close btn
closeBtn.addEventListener('click', closePopUp);
