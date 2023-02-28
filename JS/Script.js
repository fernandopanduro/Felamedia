

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

/* const form      = document.querySelector('.form');
const fullName  = document.querySelector('#full-name');
const email     = document.querySelector('#email');
const phone     = document.querySelector('#phone');
const subject   = document.querySelector('#subject');
const message   = document.querySelector('#message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setError = (element, menssage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = menssage;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = (element, menssage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}
        
const validateInputs = () => {
    const nameValue = fullName.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const subjectValue = subject.value.trim()
    const messageValue = message.value.trim()

    if (nameValue === '') {
        setError(nameValue, 'Name is required')
    } else {
        setSuccess(nameValue)
    }
}

console.log(email.value) */