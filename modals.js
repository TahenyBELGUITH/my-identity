// create array of my all objects

const data = [{
  id: 1,
  name: 'project name goes here',
  tags: ['html/css', 'Ruby on Rails', 'javaScript'],
  img: './images/project-one.svg',
  description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
  live: 'https://tahenybelguith.github.io/my-identity/',
  source: 'https://github.com/TahenyBELGUITH/my-identity',
},
{
  id: 2,
  name: 'project name goes here',
  tags: ['html/css', 'Ruby on Rails', 'javaScript'],
  img: './images/project-two.svg',
  description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
  live: 'https://tahenybelguith.github.io/my-identity/',
  source: 'https://github.com/TahenyBELGUITH/my-identity',
},
{ 
  id: 3,
  name: 'project name goes here',
  tags: ['html/css', 'Ruby on Rails', 'javaScript'],
  img: './images/project-three.svg',
  description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
  live: 'https://tahenybelguith.github.io/my-identity/',
  source: 'https://github.com/TahenyBELGUITH/my-identity',
},
{
  id: 4,
  name: 'project name goes here',
  tags: ['html/css', 'Ruby on Rails', 'javaScript'],
  img: './images/project-four.svg',
  description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
  live: 'https://tahenybelguith.github.io/my-identity/',
  source: 'https://github.com/TahenyBELGUITH/my-identity',
},
{ id: 5,
  name: 'project name goes here',
  tags: ['html/css', 'Ruby on Rails', 'javaScript'],
  img: './images/project-five.svg',
  description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
  live: 'https://tahenybelguith.github.io/my-identity/',
  source: 'https://github.com/TahenyBELGUITH/my-identity',
},
{
  id: 6,
  name: 'project name goes here',
  tags: ['html/css', 'Ruby on Rails', 'javaScript'],
  img: './images/project-six.svg',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
  live: 'https://tahenybelguith.github.io/my-identity/',
  source: 'https://github.com/TahenyBELGUITH/my-identity',
},
];

const containerPopUp = document.querySelector('.popup-container');
const seeProjectBtns = document.querySelectorAll('#see-btn'); // output:array
// create createModal  fonction

const index = Object.keys(data);

function createModel({
name, tags, img, description, live, source,
}, index) {
  const div = document.createElement('div');
  div.id = 'popup';
  div.innerHTML = `
            <h1>${name}</h1> 
              <ul>
                <li>${tags[0]}</li>
                <li>${tags[1]}</li>
                <li>${tags[2]}</li>
              </ul>
            <img src="${img}" alt="project image">
             <p>${description}</p>
                <button type="button"><a href="${live}">see Live </a><i class="fa-solid fa-arrow-trend-up"></i></button>
                <button type="button"><a href="${source}">see source</a><i class="fa-brands fa-github"></i></button>`;
  containerPopUp.appendChild(div);
}

function closePopUp() {
  containerPopUp.classList.add('display-none');
}
function openPopUp() {
  containerPopUp.classList.remove('display-none');
}


data.forEach((element) => {
  for (let i = 0; i <= seeProjectBtns.length; i += 1) {
    seeProjectBtns[i].addEventListener('click', () => {
      openPopUp();
      createModel(element,i);
    });
  }
});

// tag close btn
const closeBtn = document.querySelector('.close-popup');
closeBtn.addEventListener('click', closePopUp);


const projectsBtns =[];
seeProjectBtns.forEach((element) => const {
  id,} = element )