

/* Menu Hamburguesa */

const bars           = document.querySelector('.bars');
const responsiveMenu = document.querySelector('.responsiveMenu')

const lineBar1 = bars.querySelector('.bars__lineBar1');
const lineBar2 = bars.querySelector('.bars__lineBar2');
const lineBar3 = bars.querySelector('.bars__lineBar3');

bars.addEventListener('click', animateBars);
bars.addEventListener('blur', animateBars);

function animateBars() {
    lineBar1.classList.toggle('bars__lineBar1--active');
    lineBar2.classList.toggle('bars__lineBar2--active');
    lineBar3.classList.toggle('bars__lineBar3--active');
    responsiveMenu.classList.toggle('responsiveMenu--active')
}


/* Contador - About */
addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.description__contador');
    const velocidad  = 1100;

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizarContador = () => {
                let cantidadMax = +contador.dataset.cantidadTotal;
                let valorActual = +contador.innerText;
                let incremento  = cantidadMax / velocidad;

                if (valorActual < cantidadMax) {
                    contador.innerText = Math.ceil(valorActual + incremento);
                    setTimeout(actualizarContador, 5)    
                } else {
                    contador.innerText = cantidadMax;
                }
            }
            actualizarContador()
        }
    }
    animarContadores()
})





/* Form */

const form      = document.querySelector('.form');
const inputs    = document.querySelectorAll('.form input')

const expressions = {
	fullName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Email
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
    subject: /^[a-zA-Z0-9\_\-]{4,40}$/, // Letras, numeros, guion y guion_bajo
};

const inputValidate = (expresion, name, campo) => {
    
    if (expresion.test(name.value)) {
        document.querySelector(`.group__${campo} .form__input-error`).classList.remove('form__input-error-active');                
        document.querySelector(`.group__${campo} .input`).classList.add('success');                
        document.querySelector(`.group__${campo} .input`).classList.remove('error');                
    } else {
        document.querySelector(`.group__${campo} .form__input-error`).classList.add('form__input-error-active');
        document.querySelector(`.group__${campo} .input`).classList.remove('success');                
        document.querySelector(`.group__${campo} .input`).classList.add('error');                
    }

}

const formValidate = (e) => {
    switch (e.target.name) {
        case 'full-name':
            inputValidate(expressions.fullName, e.target, 'name')
            break;

        case 'email':
            inputValidate(expressions.email, e.target, 'email')
            break;

        case 'phone':
            inputValidate(expressions.phone, e.target, 'phone')
            break;

        case 'subject':
            inputValidate(expressions.subject, e.target, 'subject')
            break;
    
        default:
            break;
    }
    
}

inputs.forEach((input) => {
    input.addEventListener('blur', formValidate);
    input.addEventListener('keyup', formValidate);
})

/* Efecto Fade */

const title             = document.querySelector('.home__title');
const homeBtn           = document.querySelector('.home__btn');
const arrows            = document.querySelector('.arrows');
const list              = document.querySelector('.list-benefits');
const pictureBenefits   = document.querySelector('.picture-benefits');
const groupName         = document.querySelector('.group__name');
const groupEmail        = document.querySelector('.group__email');
const groupPhone        = document.querySelector('.group__phone');
const groupSubject      = document.querySelector('.group__subject');
const groupMenssage     = document.querySelector('.group__menssage');
const btnForm           = document.querySelector('.btn__form');
const generated         = document.querySelector('.generated'); 
const installations     = document.querySelector('.installations');
const customers         = document.querySelector('.customers');
const card1             = document.querySelector('#card1');
const card2             = document.querySelector('#card2');
const card3             = document.querySelector('#card3');
const footer            = document.querySelector('.footer');

const cargarImagen = (entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('show'); // Muestra el elemento
        } else {
            entrada.target.classList.remove('show'); // /oculta el elemento
        }
    });  
}

const observer = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '20px',
    threshold: 0.2
});

observer.observe(title);
observer.observe(homeBtn);
observer.observe(arrows);
observer.observe(list);
observer.observe(pictureBenefits);
observer.observe(card1);
observer.observe(card2);
observer.observe(card3);
observer.observe(footer);
observer.observe(generated);
observer.observe(installations);
observer.observe(customers);
observer.observe(groupName);
observer.observe(groupEmail);
observer.observe(groupPhone);
observer.observe(groupSubject);
observer.observe(groupMenssage);
observer.observe(btnForm);
