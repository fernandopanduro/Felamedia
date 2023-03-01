

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


/* Form */

const form      = document.querySelector('.form');
const inputs    = document.querySelectorAll('.form input')

const expressions = {
	fullName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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

form.addEventListener('submit', (e) => {
    console.log('Se envio el formulario');
    

});

