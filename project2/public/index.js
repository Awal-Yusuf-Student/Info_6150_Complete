// eslint-disable-next-line func-call-spacing
'use strict';
// eslint-disable-next-line no-unexpected-multiline
(function () {
  const menu = document.querySelector('.menu')
  //const menuItems = document.querySelectorAll('.menuitem')
  const hamburger = document.querySelector('.hamburger')

  hamburger.addEventListener('click', () => {  
    console.log('Testing')
    hamburger.classList.toggle('change')  
    menu.classList.toggle('menu-change')  
  }) 
}
)()