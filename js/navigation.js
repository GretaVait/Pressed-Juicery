const nav = document.querySelector('nav');

const navContainer = document.createElement('DIV');
nav.appendChild(navContainer);
navContainer.classList.add('nav--container');



const navList = document.createElement('UL');
navContainer.appendChild(navList);
navList.classList.add('nav--list');

navItemArray = ['Products', 'About'];
navLinkArray = ['index.html', 'about.html'];
for (let i = 0; i < 2; i++) {
    const navItem = document.createElement('LI');
    navList.appendChild(navItem);
    navItem.classList.add('nav--item');

    const navLink = document.createElement('A');
    navItem.appendChild(navLink);
    navLink.setAttribute('href', navLinkArray[i]);
    navLink.classList.add('nav--link');
    navLink.innerHTML = navItemArray[i];

    const underline = document.createElement('SPAN');
    navLink.appendChild(underline);
    underline.classList.add('underline');
}

const mediaList = document.createElement('DIV');
navContainer.appendChild(mediaList);
mediaList.classList.add('media--list');

const mediaLinksArray = ['Facebook', 'Instagram'];
for (let i = 0; i < 2; i++) {
    const mediaLinks = document.createElement('A');
    mediaList.appendChild(mediaLinks);
    mediaLinks.setAttribute('href', '#');
    mediaLinks.classList.add('media--link');
    mediaLinks.innerHTML = mediaLinksArray[i];
}

const form = document.createElement('FORM');
navContainer.appendChild(form);

const emailInput = document.createElement('INPUT');
form.appendChild(emailInput);
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('id', 'email-sub');
emailInput.setAttribute('placeholder', 'Your Email');

const hamburger = nav.querySelector('.hamburger');
const hamburgerBtn = nav.querySelector('.hamburger--button');
const lines = hamburger.querySelectorAll('.line');
const logo = nav.querySelector('.logo');

hamburgerBtn.addEventListener('click', () => {
    navContainer.classList.toggle('nav--container-active');
    lines[0].classList.toggle('first-line--active');
    lines[1].classList.toggle('second-line--active');
    lines[2].classList.toggle('third-line--active');
});