

/* Menu Hamburguesa */

const bars = document.querySelector('.bars');
const responsiveMenu = document.querySelector('.responsiveMenu')

const lineBar1 = bars.querySelector('.bars__lineBar1');
const lineBar2 = bars.querySelector('.bars__lineBar2');
const lineBar3 = bars.querySelector('.bars__lineBar3');

bars.addEventListener('click', animateBars);

function animateBars() {
    lineBar1.classList.toggle('bars__lineBar1--active');
    lineBar2.classList.toggle('bars__lineBar2--active');
    lineBar3.classList.toggle('bars__lineBar3--active');
    responsiveMenu.classList.toggle('responsiveMenu--active')
}