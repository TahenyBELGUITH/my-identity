//create array of my all objects

const data = [{
  project1: {
    name:'Tonic',
    tags:['html', 'css', 'javaScript'],
    img:'./images/project-one.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live:'https://tahenybelguith.github.io/my-identity/',
    source:'https://github.com/TahenyBELGUITH/my-identity'
  },
  project2: {
    name:'Tonic',
    tags:['html', 'css', 'javaScript'],
    img:'./images/project-two.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live:'https://tahenybelguith.github.io/my-identity/',
    source:'https://github.com/TahenyBELGUITH/my-identity'
  },
  project3: {
    name:'Tonic',
    tags:['html', 'css', 'javaScript'],
    img:'./images/project-three.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live:'https://tahenybelguith.github.io/my-identity/',
    source:'https://github.com/TahenyBELGUITH/my-identity'
  },
  project4: {
    name:'Tonic',
    tags:['html', 'css', 'javaScript'],
    img:'./images/project-four.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live:'https://tahenybelguith.github.io/my-identity/',
    source:'https://github.com/TahenyBELGUITH/my-identity'
  },
  project5: {
    name:'Tonic',
    tags:['html', 'css', 'javaScript'],
    img:'./images/project-five.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live:'https://tahenybelguith.github.io/my-identity/',
    source:'https://github.com/TahenyBELGUITH/my-identity'
  },
  project6: {
    name:'Tonic',
    tags:['html', 'css', 'javaScript'],
    img:'./images/project-six.svg',
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    live:'https://tahenybelguith.github.io/my-identity/',
    source:'https://github.com/TahenyBELGUITH/my-identity'
  }
}]

const container=document.querySelector('.popup-container');
const seeProjectBtns = document.querySelectorAll('#see-btn') //output:array
//create dynamic fonction : createModel()
function createModel()
{
 const div=document.createElement('div')
 div.id='popup';
 div.innerHTML=`
            <h1>project name goes here</h1>
              <ul class="display-flex">
                <li>HTML/CSS</li>
                <li>Ruby on Rails</li>
                <li>javaScript</li>
              </ul>
            <img src="images/project-four.svg" alt="project three">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                <button type="button">see Live <i class="fa-solid fa-arrow-trend-up"></i></button>
                <button type="button">see source <i class="fa-brands fa-github"></i></button>`
         container.appendChild(div);     
}

function openPopUp()
{
 container.classList.remove('display-none');
}
//tag all btns
for(let i=0 ; i<=seeProjectBtns.length;i++){
 seeProjectBtns[i].addEventListener('click', ()=>{
  openPopUp();
  createModel();
 })
}
