let name = document.querySelector("#name");
let subtotal = document.querySelector("#subtotal");
let total = document.querySelector("#total");

const getfromStorage = () => {
  let cart;

  if (localStorage.getItem("cart") === null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  return cart;
};

const product = getfromStorage();

subtotal.innerHTML = product[0].price;
name.innerHTML = product[0].name;
total.innerHTML = product[0].price + 15;

document.querySelector("#buy").addEventListener("click", () => {
  alert("Order sucess");
});
