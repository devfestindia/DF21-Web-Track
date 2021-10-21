/*Opening and Closing Checkout Window by toggling classes*/
let checkoutForm = document.querySelector(".checkout-form-container");

document.querySelector(".checkout-btn").onclick = () => {
  checkoutForm.classList.toggle("active");
};

document.querySelector("#close-checkout-btn").onclick = () => {
  checkoutForm.classList.remove("active");
};
