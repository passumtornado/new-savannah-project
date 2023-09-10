let closeTag = document.querySelector('#close-tag');
let Hamburger = document.querySelector('#hamburgerIcon');
let menu = document.querySelector('.nav-menu');
let sideRightLink = document.querySelectorAll('.sidebar-right-links')
let accordionBtn = document.querySelectorAll('.accordion-btn-section')
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


 accordionBtn.forEach(accordion =>{
 
    accordion.addEventListener('click',()=>{
        this.classList.toggle('active');
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      if (accordionTitle) {
        accordionTitle.style.marginBottom = '0';
        accordionBtnOpen.classList.remove('active');
        accordionBtnClose.classList.remove('active');
        accordionSection.classList.remove('active');
        
      }

    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      if (accordionTitle) accordionTitle.style.marginBottom = '25px';
      accordionBtnOpen.addClass = 'active';
      accordionBtnClose.addClass = 'active';
      accordionSection.classList.add('active');

    }
    })
 })