const email = document.querySelector('.email')
const password = document.querySelector('.password')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')


window.onclick = function(element){
  email.style.border = '1px solid rgba(0,0,0,.1)'
  password.style.border = '1px solid rgba(0,0,0,.1)'
  emailInput.classList.remove('placeholder')
  passwordInput.classList.remove('placeholder')

  if(element.srcElement == emailInput){
    email.style.border = '1px solid rgba(29, 161,242,1)'
    emailInput.classList.add('placeholder')
  }

  if(element.srcElement == passwordInput){
    password.style.border = '1px solid rgba(29, 161,242,1)'
    passwordInput.classList.add('placeholder')
  }
}
