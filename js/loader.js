const loader = document.querySelector('.loader--wrapper');
window.addEventListener('load', () => {
    setTimeout(()=>{
        loader.style.opacity = '0';
    }, 1500);
    setTimeout(()=>{
        loader.style.display = 'none';
    }, 2000);
});