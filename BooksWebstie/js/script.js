
/*Opening and Closing Login Window by toggling classes*/

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

/*Opening and Closing Checkout Window by toggling classes*/
let checkoutForm = document.querySelector('.checkout-form-container');

document.querySelector('.checkout-btn').onclick = () =>{
  checkoutForm.classList.toggle('active');
}

document.querySelector('#close-checkout-btn').onclick = () =>{
  checkoutForm.classList.remove('active');
}

