const navBar = document.querySelector('nav');
const menuIcon = document.getElementById('menu')
const navLinks = document.getElementById('tabs')
const linkTabs = document.querySelectorAll('.tab-links');
const container = document.querySelector('.container');
// const closeIcon = document.querySelector('.fa-xmark')
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    navBar.classList.add('navBg')
  }
  else {
    navBar.classList.remove('navBg')
  }
});

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('navdisplay');
  menuIcon.classList.toggle('fa-xmark');
});

linkTabs.forEach(tabs => {
  tabs.addEventListener('click', () => {
    navLinks.classList.remove('navdisplay')
    menuIcon.classList.remove('fa-xmark');
  })
})