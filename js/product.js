const descriptionItem = main.querySelectorAll('.description--item');

const viewDetails = document.querySelector('#products--intro .btn');

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

const productDesc = document.querySelector('.product--desc');
const productContent = productDesc.querySelector('.product--content');
const title = document.querySelector('.title h1');
const desc = document.querySelector('.title p');
const usage = document.querySelector('.usage p');
const ingredients = document.querySelector('.ingredients p');

const headlines = document.querySelectorAll('.description--item .display1');

const ingredientsList = document.querySelector('.ingredients__list');

const nutritionalValue = document.querySelectorAll('.nutrition__value');

const moreBtn = document.querySelector('.btn--more');

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
        moreBtn.setAttribute('href', 'https://pressedjuicery.com/products/beet-carrot-juice');

        title.innerHTML = redJuice.title;
        desc.innerHTML = redJuice.description;

        for (let i = 0; i < redJuice.ingredients.length; i++) {
            const ingredientsItem = document.createElement('LI');
            ingredientsList.appendChild(ingredientsItem);
            ingredientsItem.classList.add('ingredients__item');
            ingredientsItem.innerHTML = redJuice.ingredients[i];
        }

        for (let i = 0; i < redJuice.nutrition.length; i++) {
            nutritionalValue[i].innerHTML = redJuice.nutrition[i];
        }

        productYellow.style.display = 'none';
        productGreen.style.display = 'none';
        productOrange.style.display = 'none';
        productRed.style.backgroundAttachment = 'scroll';

        if (window.innerWidth >= 768) {
            productRed.style.backgroundSize = '500px 500px, 379px 0px';
            setTimeout(() => {
                productRed.style.transform  = 'translate(-30%, 0px)';
            }, 500);
        }

        if (window.innerWidth >= 1050) {
            productRed.style.backgroundSize = '550px 550px, 400px 0px';
            setTimeout(() => {
                productRed.style.transform  = 'translate(-25%, 0px)';
            }, 500);
        }

        if (window.innerWidth >= 1530) {
            productRed.style.backgroundSize = '650px 650px, 500px 0px';
            setTimeout(() => {
                productRed.style.transform  = 'translate(-25%, 0px)';
            }, 500);
        }
    }

    if (activeProduct === 1) {
        moreBtn.setAttribute('href', 'https://pressedjuicery.com/products/apple-pineapple-lemon-juice');

        title.innerHTML = yellowJuice.title;
        desc.innerHTML = yellowJuice.description;
        
        for (let i = 0; i < yellowJuice.ingredients.length; i++) {
            const ingredientsItem = document.createElement('LI');
            ingredientsList.appendChild(ingredientsItem);
            ingredientsItem.classList.add('ingredients__item');
            ingredientsItem.innerHTML = yellowJuice.ingredients[i];
        }

        for (let i = 0; i < yellowJuice.nutrition.length; i++) {
            nutritionalValue[i].innerHTML = yellowJuice.nutrition[i];
        }

        productRed.style.display = 'none';
        productGreen.style.display = 'none';
        productOrange.style.display = 'none';
        productYellow.style.backgroundAttachment = 'scroll';

        if (window.innerWidth >= 768) {
            setTimeout(() => {
                productYellow.style.transform  = 'translate(-30%, 0px)';
            }, 500);
            productYellow.style.backgroundSize = '500px 500px, 379px 0px';
        }

        if (window.innerWidth >= 1050) {
            setTimeout(() => {
                productYellow.style.transform  = 'translate(-25%, 0px)';
            }, 500);
            productYellow.style.backgroundSize = '550px 550px, 0px 400px';
        }

        if (window.innerWidth >= 1530) {
            setTimeout(() => {
                productYellow.style.transform  = 'translate(-25%, 0px)';
            }, 500);
            productYellow.style.backgroundSize = '650px 650px, 500px 0px';
        }
        
    }

    if (activeProduct === 2) {
        moreBtn.setAttribute('href', 'https://pressedjuicery.com/products/kale-spinach-juice');

        title.innerHTML = greenJuice.title;
        desc.innerHTML = greenJuice.description;
        
        for (let i = 0; i < greenJuice.ingredients.length; i++) {
            const ingredientsItem = document.createElement('LI');
            ingredientsList.appendChild(ingredientsItem);
            ingredientsItem.classList.add('ingredients__item');
            ingredientsItem.innerHTML = greenJuice.ingredients[i];
        }

        for (let i = 0; i < greenJuice.nutrition.length; i++) {
            nutritionalValue[i].innerHTML = greenJuice.nutrition[i];
        }

        productRed.style.display = 'none';
        productYellow.style.display = 'none';
        productOrange.style.display = 'none';
        productGreen.style.backgroundAttachment = 'scroll';

        if (window.innerWidth >= 768) {
            setTimeout(() => {
                productGreen.style.transform  = 'translate(-30%, 0px)';
            }, 500);
            productGreen.style.backgroundSize = '500px 500px, 379px 0px';
        }

        if (window.innerWidth >= 1050) {
            setTimeout(() => {
                productGreen.style.transform  = 'translate(-25%, 0px)';
            }, 500);
            productGreen.style.backgroundSize = '550px 550px, 400px 0px';
        }

        if (window.innerWidth >= 1530) {
            setTimeout(() => {
                productGreen.style.transform  = 'translate(-25%, 0px)';
            }, 500);
            productGreen.style.backgroundSize = '650px 650px, 500px 0px';
        }
    }

    if (activeProduct === 3) {
        moreBtn.setAttribute('href', 'https://pressedjuicery.com/products/orange-turmeric-apple-lemon-juice');

        title.innerHTML = orangeJuice.title;
        desc.innerHTML = orangeJuice.description;
        
        for (let i = 0; i < orangeJuice.ingredients.length; i++) {
            const ingredientsItem = document.createElement('LI');
            ingredientsList.appendChild(ingredientsItem);
            ingredientsItem.classList.add('ingredients__item');
            ingredientsItem.innerHTML = orangeJuice.ingredients[i];
        }

        for (let i = 0; i < orangeJuice.nutrition.length; i++) {
            nutritionalValue[i].innerHTML = orangeJuice.nutrition[i];
        }

        productRed.style.display = 'none';
        productYellow.style.display = 'none';
        productGreen.style.display = 'none';
        productOrange.style.backgroundAttachment = 'scroll';

        if (window.innerWidth >= 768) {
            setTimeout(() => {
                productOrange.style.transform  = 'translate(-30%, 0px)';
            }, 500);
            productOrange.style.backgroundSize = '500px 500px, 379px 0px';
        }

        if (window.innerWidth >= 1050) {
            setTimeout(() => {
                productOrange.style.transform  = 'translate(-25%, 0px)';
            }, 500);
            productOrange.style.backgroundSize = '550px 550px, 400px 0px';
        }

        if (window.innerWidth >= 1530) {
            setTimeout(() => {
                productOrange.style.transform  = 'translate(-25%, 0px)';
            }, 500);
            productOrange.style.backgroundSize = '650px 650px, 500px 0px';
        }
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
        goBack.setAttribute('href', '#red');
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
        goBack.setAttribute('href', '#yellow');
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
        goBack.setAttribute('href', '#green');
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
        goBack.setAttribute('href', '#orange');
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