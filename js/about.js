// ---------------------------------------------------------------------------------
// --------------------------------- VERIABLES -------------------------------------
// ---------------------------------------------------------------------------------

const aboutLink = document.querySelector('.about--link');
const about = document.querySelector('.about');
const aboutParagraph = about.querySelectorAll('p');
const moreInfo = about.querySelector('.more-info');
const productLink = document.querySelector('.product--link');

// ---------------------------------------------------------------------------------
// --------------------------------- FUNCTIONS -------------------------------------
// ---------------------------------------------------------------------------------

function openAbout(productHide1, productHide2, productHide3, product) {
    productHide1.style.display = 'none';
    productHide2.style.display = 'none';
    productHide3.style.display = 'none';
    product.style.backgroundAttachment = 'scroll';

    if (window.innerWidth >= 768) {
        product.style.backgroundSize = '500px 500px, 379px 0px';
        setTimeout(() => {
            product.style.transform  = 'translate(30%, 0px)';
        }, 500);
    }

    if (window.innerWidth >= 1050) {
        product.style.backgroundSize = '550px 550px, 400px 0px';
        setTimeout(() => {
            product.style.transform  = 'translate(25%, 0px)';
        }, 500);
    }

    if (window.innerWidth >= 1530) {
        product.style.backgroundSize = '650px 650px, 500px 0px';
        setTimeout(() => {
            product.style.transform  = 'translate(25%, 0px)';
        }, 500);
    }
}

function closeAbout(href, productShow1, productShow2, productShow3, product) {
    productLink.setAttribute('href', href);
    productShow1.style.display = 'block';
    productShow2.style.display = 'block';
    productShow3.style.display = 'block';
    product.style.backgroundAttachment = 'fixed';

    setTimeout(() => {
        if (window.innerWidth >= 768) {
            product.style.transform  = 'translate(0px, 0px)';
            setTimeout(() => {
                product.style.backgroundSize = '500px 500px, 379px 379px';
            }, 500);
        }

        if (window.innerWidth >= 1050) {
            setTimeout(() => {
                product.style.backgroundSize = '550px 550px, 400px 400px';
            }, 500);
        }

        if (window.innerWidth >= 1530) {
            setTimeout(() => {
                product.style.backgroundSize = '650px 650px, 500px 500px';
            }, 500);
        }
    }, 1000);
}

// ---------------------------------------------------------------------------------
// ---------------------------- FUNCTIONS END HERE ---------------------------------
// ---------------------------------------------------------------------------------

aboutLink.addEventListener('click', () => {
    setTimeout(() => {
        var allElements = document.getElementsByTagName("*");
        for (var i = 0; i < allElements.length; i++) {
            allElements[i].style.scrollBehavior = 'auto';
        }
    }, 100);
    mainPage = false;
    const sideNav = document.querySelector('.side--nav');

    if (window.innerWidth <= 767) {
        about.style.transform = 'translate(0, 0)';
        for (let i = 0; i < aboutParagraph.length; i++) {
            setTimeout(()=>{
                aboutParagraph[i].style.opacity = '1';
                moreInfo.style.opacity = '1';
            }, 600);
        }
    }

    if (window.innerWidth >= 767) {
        sideNav.style.transform = 'translate(130%, -50%)';
        viewDetails.style.transform = 'translate(-50%, 100%)';
        setTimeout(() => {
            about.style.transform = 'translate(0, 0)';
            for (let i = 0; i < aboutParagraph.length; i++) {
            setTimeout(()=>{
                aboutParagraph[i].style.opacity = '1';
                moreInfo.style.opacity = '1';
            }, 600);
        }
        }, 1000);
    }

    setTimeout(() => {
        about.style.transform = 'translate(0, 0)';
        for (let i = 0; i < aboutParagraph.length; i++) {
        setTimeout(()=>{
            aboutParagraph[i].style.opacity = '1';
            moreInfo.style.opacity = '1';
        }, 600);
    }
    }, 1000);

    if (activeProduct === 0) {
        openAbout(productYellow, productGreen, productOrange, productRed);
    }

    if (activeProduct === 1) {
        openAbout(productRed, productGreen, productOrange, productYellow);
    }

    if (activeProduct === 2) {
        openAbout(productRed, productYellow, productOrange, productGreen);
    }

    if (activeProduct === 3) {
        openAbout(productRed, productYellow, productGreen, productOrange);
    }
});

productLink.addEventListener('click', () => {
    mainPage = true;

    for (let i = 0; i < aboutParagraph.length; i++) {
        aboutParagraph[i].style.opacity = '0';
    }
    moreInfo.style.opacity = '0';

    setTimeout(()=>{
        about.style.transform = 'translate(-100%, 0)';
    }, 600);

    if (window.innerWidth >= 767) {
        setTimeout(() => {
            viewDetails.style.transform = 'translate(-50%, -50%)';
            sideNav.style.transform = 'translate(0px, -50%)';
        }, 1200);
    }

    if (activeProduct === 0) {
        closeAbout('#red', productYellow, productGreen, productOrange, productRed);
    }

    if (activeProduct === 1) {
        closeAbout('#yellow', productRed, productGreen, productOrange, productYellow);
    }   

    if (activeProduct === 2) {
        closeAbout('#green', productRed, productYellow, productOrange, productGreen);
    }

    if (activeProduct === 3) {
        closeAbout('#orange', productRed, productYellow, productGreen, productOrange);
    }
    
    setTimeout(() => {
        var allElements = document.getElementsByTagName("*");
        for (var i = 0; i < allElements.length; i++) {
            allElements[i].style.scrollBehavior = 'smooth';
        }
    }, 200);
});