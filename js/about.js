// const about = document.querySelector('.about');

// setTimeout(()=>{
//     about.style.backgroundSize = '100% 100%';
// }, 2000);

const aboutLink = document.querySelector('.about--link');
const about = document.querySelector('.about');
const aboutParagraph = about.querySelectorAll('p');
const moreInfo = about.querySelector('.more-info');
const productLink = document.querySelector('.product--link');

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
        productYellow.style.display = 'none';
        productGreen.style.display = 'none';
        productOrange.style.display = 'none';
        productRed.style.backgroundAttachment = 'scroll';

        if (window.innerWidth >= 768) {
            productRed.style.backgroundSize = '500px 500px, 379px 0px';
            setTimeout(() => {
                productRed.style.transform  = 'translate(30%, 0px)';
            }, 500);
        }

        if (window.innerWidth >= 1050) {
            productRed.style.backgroundSize = '550px 550px, 400px 0px';
            setTimeout(() => {
                productRed.style.transform  = 'translate(25%, 0px)';
            }, 500);
        }

        if (window.innerWidth >= 1530) {
            productRed.style.backgroundSize = '650px 650px, 500px 0px';
            setTimeout(() => {
                productRed.style.transform  = 'translate(25%, 0px)';
            }, 500);
        }
    }

    if (activeProduct === 1) {
        productRed.style.display = 'none';
        productGreen.style.display = 'none';
        productOrange.style.display = 'none';
        productYellow.style.backgroundAttachment = 'scroll';

        if (window.innerWidth >= 768) {
            setTimeout(() => {
                productYellow.style.transform  = 'translate(30%, 0px)';
            }, 500);
            productYellow.style.backgroundSize = '500px 500px, 379px 0px';
        }

        if (window.innerWidth >= 1050) {
            setTimeout(() => {
                productYellow.style.transform  = 'translate(25%, 0px)';
            }, 500);
            productYellow.style.backgroundSize = '550px 550px, 0px 400px';
        }

        if (window.innerWidth >= 1530) {
            setTimeout(() => {
                productYellow.style.transform  = 'translate(25%, 0px)';
            }, 500);
            productYellow.style.backgroundSize = '650px 650px, 500px 0px';
        }
        
    }

    if (activeProduct === 2) {
        productRed.style.display = 'none';
        productYellow.style.display = 'none';
        productOrange.style.display = 'none';
        productGreen.style.backgroundAttachment = 'scroll';

        if (window.innerWidth >= 768) {
            setTimeout(() => {
                productGreen.style.transform  = 'translate(30%, 0px)';
            }, 500);
            productGreen.style.backgroundSize = '500px 500px, 379px 0px';
        }

        if (window.innerWidth >= 1050) {
            setTimeout(() => {
                productGreen.style.transform  = 'translate(25%, 0px)';
            }, 500);
            productGreen.style.backgroundSize = '550px 550px, 400px 0px';
        }

        if (window.innerWidth >= 1530) {
            setTimeout(() => {
                productGreen.style.transform  = 'translate(25%, 0px)';
            }, 500);
            productGreen.style.backgroundSize = '650px 650px, 500px 0px';
        }
    }

    if (activeProduct === 3) {
        productRed.style.display = 'none';
        productYellow.style.display = 'none';
        productGreen.style.display = 'none';
        productOrange.style.backgroundAttachment = 'scroll';

        if (window.innerWidth >= 768) {
            setTimeout(() => {
                productOrange.style.transform  = 'translate(30%, 0px)';
            }, 500);
            productOrange.style.backgroundSize = '500px 500px, 379px 0px';
        }

        if (window.innerWidth >= 1050) {
            setTimeout(() => {
                productOrange.style.transform  = 'translate(25%, 0px)';
            }, 500);
            productOrange.style.backgroundSize = '550px 550px, 400px 0px';
        }

        if (window.innerWidth >= 1530) {
            setTimeout(() => {
                productOrange.style.transform  = 'translate(25%, 0px)';
            }, 500);
            productOrange.style.backgroundSize = '650px 650px, 500px 0px';
        }
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
        productLink.setAttribute('href', '#red');
        productYellow.style.display = 'block';
        productGreen.style.display = 'block';
        productOrange.style.display = 'block';
        productRed.style.backgroundAttachment = 'fixed';

        setTimeout(() => {
            if (window.innerWidth >= 768) {
                productRed.style.transform  = 'translate(0px, 0px)';
                setTimeout(() => {
                    productRed.style.backgroundSize = '500px 500px, 379px 379px';
                }, 500);
            }

            if (window.innerWidth >= 1050) {
                setTimeout(() => {
                    productRed.style.backgroundSize = '550px 550px, 400px 400px';
                }, 500);
            }

            if (window.innerWidth >= 1530) {
                setTimeout(() => {
                    productRed.style.backgroundSize = '650px 650px, 500px 500px';
                }, 500);
            }
        }, 1000);
    }

    if (activeProduct === 1) {
        productLink.setAttribute('href', '#yellow');
        productRed.style.display = 'block';
        productGreen.style.display = 'block';
        productOrange.style.display = 'block';
        productYellow.style.backgroundAttachment = 'fixed';

        setTimeout(() => {
            if (window.innerWidth >= 768) {
                productYellow.style.transform  = 'translate(0px, 0px)';
                setTimeout(() => {
                    productYellow.style.backgroundSize = '500px 500px, 379px 379px';
                }, 500);
            }

            if (window.innerWidth >= 1050) {
                setTimeout(() => {
                    productYellow.style.backgroundSize = '550px 550px, 400px 400px';
                }, 500);
            }

            if (window.innerWidth >= 1530) {
                setTimeout(() => {
                    productYellow.style.backgroundSize = '650px 650px, 500px 500px';
                }, 500);
            }
        }, 1000);
    }   

    if (activeProduct === 2) {
        productLink.setAttribute('href', '#green');
        productRed.style.display = 'block';
        productYellow.style.display = 'block';
        productOrange.style.display = 'block';
        productGreen.style.backgroundAttachment = 'fixed';

        setTimeout(() => {
            if (window.innerWidth >= 768) {
                productGreen.style.transform  = 'translate(0px, 0px)';
                setTimeout(() => {
                    productGreen.style.backgroundSize = '500px 500px, 379px 379px';
                }, 500);
            }

            if (window.innerWidth >= 1050) {
                setTimeout(() => {
                    productGreen.style.backgroundSize = '550px 550px, 400px 400px';
                }, 500);
            }

            if (window.innerWidth >= 1530) {
                setTimeout(() => {
                    productGreen.style.backgroundSize = '650px 650px, 500px 500px';
                }, 500);
            }
        }, 1000);
    }

    if (activeProduct === 3) {
        productLink.setAttribute('href', '#orange');
        productRed.style.display = 'block';
        productYellow.style.display = 'block';
        productGreen.style.display = 'block';
        productOrange.style.backgroundAttachment = 'fixed';

        setTimeout(() => {
            if (window.innerWidth >= 768) {
                productOrange.style.transform  = 'translate(0px, 0px)';
                setTimeout(() => {
                    productOrange.style.backgroundSize = '500px 500px, 379px 379px';
                }, 500);
            }

            if (window.innerWidth >= 1050) {
                setTimeout(() => {
                    productOrange.style.backgroundSize = '550px 550px, 400px 400px';
                }, 500);
            }

            if (window.innerWidth >= 1530) {
                setTimeout(() => {
                    productOrange.style.backgroundSize = '650px 650px, 500px 500px';
                }, 500);
            }
        }, 1000);
    }
    setTimeout(() => {
        var allElements = document.getElementsByTagName("*");
        for (var i = 0; i < allElements.length; i++) {
            allElements[i].style.scrollBehavior = 'smooth';
        }
    }, 200);
});