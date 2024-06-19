const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    navBar.classList.add('navBg')
  }
  else {
    navBar.classList.remove('navBg')
  }
});

const menuIcon = document.getElementById('menu')
const navLinks = document.getElementById('tabs')

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('navdisplay');
  menuIcon.classList.toggle('fa-xmark');
});

const linkTabs = document.querySelectorAll('.tab-links');

linkTabs.forEach(tabs => {
  tabs.addEventListener('click', () => {
    navLinks.classList.remove('navdisplay')
    menuIcon.classList.remove('fa-xmark');

    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(" active", "");
    tabs.className += " active";
  })
});

// HOME BUTTON FUNCTIONS

const homeButton = document.getElementById('homebtn');

homeButton.addEventListener('click', () => {
  alert("It's Demo Page not ready for fully Fuctionally");
  alert('Thanks for come to the Website 🙏')
});
