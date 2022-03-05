// menu btn js
let menuBtn= document.querySelector('#humb-btn');
let closeBtn= document.querySelector('#close');
let menuList =document.querySelector('.menu-list');
let menuItem =document.querySelectorAll('.menu-items');//output : array 
let container = document.querySelector('.humb-container');

// fonction open the nav
function openNav(){
  container.classList.remove('display-none');
}

// fonction close the nav 
function closeNav(){
 container.classList.add('display-none');
}

 // open the navbar
menuBtn.addEventListener('click', openNav);

//close the container when the items are selected
menuItem.forEach((element) =>{
 element.addEventListener('click',closeNav)
})

// close the navbar
closeBtn.addEventListener('click', closeNav);