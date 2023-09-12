let closeTag = document.querySelector('#close-tag');
let Hamburger = document.querySelector('#hamburgerIcon');
let menu = document.querySelector('.nav-menu');
let sideRightLink = document.querySelectorAll('.sidebar-right-links')
let accordionBtn = document.querySelectorAll('.accordion-btn-section')
let accordionPanel = document.querySelector('.accordion-panel')
let middleCardBtn = document.querySelectorAll(".first-card-buttons .btn")

console.log(accordionPanel )
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
})
 sideRightLink.forEach((link)=>{
    link.addEventListener('click',()=>{
     sideRightLink.forEach(link =>{
        link.classList.remove('active')
     });
     link.classList.add('active')
    })
 })

middleCardBtn.forEach(btn=>{
  btn.addEventListener('click',()=>{
    middleCardBtn.forEach(btn=>{
      btn.classList.remove('active')
    });
    btn.classList.add('active')
  })
})

 accordionBtn.forEach(accordion =>{
    accordion.addEventListener('click',()=>{
      accordionBtn.forEach(accordion=>{
        accordion.classList.remove('active')
      })
      accordion.classList.add('active')
      let accordionPanel = accordion.nextElementSibling
      console.log(accordionPanel)
      if (accordionPanel.style.maxHeight) {
        accordionPanel.style.maxHeight = null;
        accordion.classList.remove('active')
        accordionPanel.classList.remove('active')
        if (accordion) {
          accordion.style.marginBottom = '0';
          // accordionBtnOpen.classList.remove('active');
          // accordionBtnClose.classList.remove('active');
          // accordionSection.classList.remove('active');
          
        }
  
      } else {
         accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`
         accordionPanel.classList.add('active')
        // accordionBtnOpen.addClass = 'active';
        // accordionBtnClose.addClass = 'active';
        // accordionSection.classList.add('active');
  
      }
    })
 })