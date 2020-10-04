let tableBody = document.querySelector("#content-body");
let subtotal = document.querySelector("#subtotal");
let tax = document.querySelector("#tax");
let pTotal = document.querySelector("#total");

const getfromStorage = () => {
  let cart;

  if (localStorage.getItem("cart") === null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  return cart;
};

let products = getfromStorage();

const getProductTotal = () => {
  let sum = 0;
  products.map((pdt) => {
    sum = sum + pdt.price ;
  });

  return sum;
};

for (let i = 0; i < products.length; i++) {
  const row = document.createElement("tr");

  const total = products[i].price;

  row.innerHTML = `
                 <tr>
                  <td>${products[i].name}</td>
                  <td>${products[i].price}</td>
                  <td> 1 </td>
                  <td>${total}</td>
                 </tr>
   `;

  tableBody.appendChild(row);
}

subtotal.innerHTML = getProductTotal();
let totalAmount = getProductTotal() + 15;
pTotal.innerHTML = totalAmount;
