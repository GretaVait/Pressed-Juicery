const actionsNav = document.querySelector('.actions--nav');
const productRed = document.querySelector('.product--red');
const productYellow = document.querySelector('.product--yellow');
const productGreen = document.querySelector('.product--green');
const productOrange = document.querySelector('.product--orange');

const sideNav = document.querySelector('.side--nav');
const navDot = sideNav.querySelectorAll('.nav--dot');
const activeDot = sideNav.querySelectorAll('.active--dot');

let activeProduct = 0;
let mainPage = true;

for (let i = 0; i < navDot.length; i++) {
    navDot[i].addEventListener('click', () => {
        if (navDot[i].classList.contains('red--dot')) {
            window.scrollTo(0, 0);
        } else if (navDot[i].classList.contains('yellow--dot')) {
            window.scrollTo(0, window.innerHeight);
        } else if (navDot[i].classList.contains('green--dot')) {
            window.scrollTo(0, window.innerHeight*2);
        } else if (navDot[i].classList.contains('orange--dot')) {
            window.scrollTo(0, window.innerHeight*3);
        }
    });
}

const main = document.querySelector('main');

const viewBtn = main.querySelector('#products--intro .btn');
window.addEventListener('scroll', () => {
    if (mainPage === true) {
        let midHeight = window.innerHeight / 2;
        if (midHeight >= window.pageYOffset) {
            activeDot[0].classList.add('red--active');
            activeDot[1].classList.remove('yellow--active');
            activeProduct = 0;
            viewBtn.classList.add('btn--red');
            viewBtn.classList.remove('btn--yellow');
        } else if ((midHeight + window.innerHeight) >= window.pageYOffset) {
            activeDot[0].classList.remove('red--active');
            activeDot[1].classList.add('yellow--active');
            activeDot[2].classList.remove('green--active');
            activeDot[3].classList.remove('orange--active');
            activeProduct = 1;
            viewBtn.classList.remove('btn--red');
            viewBtn.classList.add('btn--yellow');
            viewBtn.classList.remove('btn--green');
            viewBtn.classList.remove('btn--orange');
        } else if ((midHeight + window.innerHeight*2) >= window.pageYOffset) {
            activeDot[0].classList.remove('red--active');
            activeDot[1].classList.remove('yellow--active');
            activeDot[2].classList.add('green--active');
            activeDot[3].classList.remove('orange--active');
            activeProduct = 2;
            viewBtn.classList.remove('btn--red');
            viewBtn.classList.remove('btn--yellow');
            viewBtn.classList.add('btn--green');
            viewBtn.classList.remove('btn--orange');
        } else {
            activeDot[0].classList.remove('red--active');
            activeDot[1].classList.remove('yellow--active');
            activeDot[2].classList.remove('green--active');
            activeDot[3].classList.add('orange--active');
            activeProduct = 3;
            viewBtn.classList.remove('btn--red');
            viewBtn.classList.remove('btn--yellow');
            viewBtn.classList.remove('btn--green');
            viewBtn.classList.add('btn--orange');
        }
        // console.log(midHeight + window.innerHeight);
        // console.log(midHeight);
        console.log(window.innerHeight);
        console.log(window.pageYOffset);
    }
});