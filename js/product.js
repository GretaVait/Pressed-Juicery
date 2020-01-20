// ---------------------------------------------------------------------------------
// ------------------------------- VARIABLES ---------------------------------------
// ---------------------------------------------------------------------------------

const viewDetails = document.querySelector('#products--intro .btn'); //btn to show product
const productDesc = document.querySelector('.product--desc'); //product display
const productContent = productDesc.querySelector('.product--content'); //product content (inside product desc)
const title = document.querySelector('.title h1'); //product title
const desc = document.querySelector('.title p'); //product description
const usage = document.querySelector('.usage p'); //product usage
const ingredients = document.querySelector('.ingredients'); //product ingredients container
const nutritionalValue = document.querySelectorAll('.nutrition__value');
const moreBtn = document.querySelector('.btn--more'); //btn directs to website to that product

const ingredientsList = document.querySelector('.ingredients__list');

// ---------------------------------------------------------------------------------
// ---------------------------- PRODUCT DATA ---------------------------------------
// ---------------------------------------------------------------------------------

class Product {
    constructor(title, description, ingredients, nutrition) {
      this.title = title;
      this.description = description;
      this.ingredients = ingredients;
      this.nutrition = nutrition;
    }
}

const redJuice = new Product(
    'Beet and Carrot Juice', 
    'An earthy blend of beets, carrots & leafy greens, lightened up with the citrus taste of orange & lemon!',
    ['Carrot juice', 'Beet root juice', 'Orange juice', 'Cucumber Juice', 'Lemon juice', 'Spinach juice', 'Kale juice', 'Parsley leaf juice'],
    ['0G', '0G', '0G', '17G', '7G', '2G', '1.5G', '1G']
);

const yellowJuice = new Product(
    'Apple Pineapple Lemon Juice', 
    'A crisp, refreshing mix of cooling mint, lemon, and ripe golden pineapple. The ultimate healthy treat with 40% of your daily vitamin C.',
    ['Apple juice', 'Pineapple juice', 'Lemon juice', 'Mint juice (pressed leaves)'],
    ['0G', '0G', '0G', '29G', '24G', '1G', '0.01G', '2G']
);

const greenJuice = new Product(
    'Kale Spinach Cucumber Juice', 
    'Green spinach and kale, hydrating cucumber and other leafy veggies are balanced by apples and lemon. A perfect choice for those new to juicing.',
    ['Apple juice', 'Cucumber juice', 'Celery juice', 'Lemon juice', 'Spinach juice', 'Kale juice', 'Parsley leaf juice', 'Parsley'],
    ['0G', '0G', '0G', '6G', '1G', '1G', '0.45G', '1G']
);

const orangeJuice = new Product(
    'Orange Turmeric Apple Lemon Juice', 
    'Want to elevate your everday OJ? Add turmeric & black pepper! We choose to source our turmeric specifically from Fiji for the perfect vibrant color.',
    ['Orange juice', 'apple juice', 'aloe water (filtered water aloe vera)', 'turmeric juice (pressed root)', 'lemon juice', 'black pepper'],
    ['0G', '0G', '0G', '19G', '15G', '1G', '0.05G', '1G']
);

// ---------------------------------------------------------------------------------
// --------------------------------- FUNCTIONS -------------------------------------
// ---------------------------------------------------------------------------------


function openProduct(url, JuiceKind, productHide1, productHide2, productHide3, product) {
    moreBtn.setAttribute('href', url);

    title.innerHTML = JuiceKind.title;
    desc.innerHTML = JuiceKind.description;

    for (let i = 0; i < JuiceKind.ingredients.length; i++) {
        const ingredientsItem = document.createElement('LI');
        ingredientsList.appendChild(ingredientsItem);
        ingredientsItem.classList.add('ingredients__item');
        ingredientsItem.innerHTML = JuiceKind.ingredients[i];
    }

    for (let i = 0; i < JuiceKind.nutrition.length; i++) {
        nutritionalValue[i].innerHTML = JuiceKind.nutrition[i];
    }

    productHide1.style.display = 'none'; 
    productHide2.style.display = 'none';
    productHide3.style.display = 'none';
    product.style.backgroundAttachment = 'scroll';

    if (window.innerWidth >= 768) {
        product.style.backgroundSize = '500px 500px, 379px 0px';
        setTimeout(() => {
            product.style.transform  = 'translate(-30%, 0px)';
        }, 500);
    }

    if (window.innerWidth >= 1050) {
        product.style.backgroundSize = '550px 550px, 400px 0px';
        setTimeout(() => {
            product.style.transform  = 'translate(-25%, 0px)';
        }, 500);
    }

    if (window.innerWidth >= 1530) {
        product.style.backgroundSize = '650px 650px, 500px 0px';
        setTimeout(() => {
            product.style.transform  = 'translate(-25%, 0px)';
        }, 500);
    }
}

function closeProduct(href, productShow1, productShow2, productShow3, product, JuiceKind) {
    goBack.setAttribute('href', href);
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
        for (let i = 0; i < JuiceKind.ingredients.length; i++) {
            ingredientsList.removeChild(ingredientsList.childNodes[0]);
        }
    }, 1000);
}

// ---------------------------------------------------------------------------------
// ----------------------------- FUNCTIONS END HERE --------------------------------
// ---------------------------------------------------------------------------------

viewDetails.addEventListener('click', () => {
    setTimeout(() => {
        var allElements = document.getElementsByTagName("*");
        for (var i = 0; i < allElements.length; i++) {
            allElements[i].style.scrollBehavior = 'auto';
        }
    }, 100);
    mainPage = false;
    const sideNav = document.querySelector('.side--nav');

    if (window.innerWidth <= 767) {
        productDesc.style.transform = 'translate(0, 0)';
        setTimeout(()=>{
            productContent.style.opacity = '1';
        }, 600);
    }

    if (window.innerWidth >= 767) {
        sideNav.style.transform = 'translate(130%, -50%)';
        viewDetails.style.transform = 'translate(-50%, 100%)';
        setTimeout(() => {
            productDesc.style.transform = 'translate(0, 0)';
            setTimeout(()=>{
                productContent.style.opacity = '1';
            }, 600);
        }, 1000);
    }

    if (activeProduct === 0) {
        openProduct('https://pressedjuicery.com/products/beet-carrot-juice', redJuice, productYellow, productGreen, productOrange, productRed);
    }

    if (activeProduct === 1) {
        openProduct('https://pressedjuicery.com/products/apple-pineapple-lemon-juice', yellowJuice, productRed, productGreen, productOrange, productYellow);
    }

    if (activeProduct === 2) {
        openProduct('https://pressedjuicery.com/products/kale-spinach-juice', greenJuice, productRed, productYellow, productOrange, productGreen);
    }

    if (activeProduct === 3) {
        openProduct('https://pressedjuicery.com/products/orange-turmeric-apple-lemon-juice', orangeJuice, productRed, productYellow, productGreen, productOrange);
    }
});

const goBack = document.querySelector('.go-back');

goBack.addEventListener('click', () => {
    mainPage = true;

    if (window.innerWidth >= 767) {
        setTimeout(() => {
            viewDetails.style.transform = 'translate(-50%, -50%)';
            sideNav.style.transform = 'translate(0px, -50%)';
        }, 1200);
    }

    productContent.style.opacity = '0';
    setTimeout(() => {
        productDesc.style.transform = 'translate(100%, 0)';
    }, 600);

    if (activeProduct === 0) {
        closeProduct('#red', productYellow, productGreen, productOrange, productRed, redJuice);
    }

    if (activeProduct === 1) {
        closeProduct('#yellow', productRed, productGreen, productOrange, productYellow, yellowJuice);
    }

    if (activeProduct === 2) {
        closeProduct('#green', productRed, productYellow, productOrange, productGreen, greenJuice);
    }

    if (activeProduct === 3) {
        closeProduct('#orange', productRed, productYellow, productGreen, productOrange, orangeJuice);
    }

    setTimeout(() => {
        var allElements = document.getElementsByTagName("*");
        for (var i = 0; i < allElements.length; i++) {
            allElements[i].style.scrollBehavior = 'smooth';
        }
    }, 200);
});