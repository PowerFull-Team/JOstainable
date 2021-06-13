'use strict'

let cartList = document.getElementById('cart');
cartList.addEventListener('click', removeItemFromCart);
let cart;

// let Cart = function (items) {

//     // this.items is an array of CartItem instances.
//     this.items = items;
//   };

let Cart = function (name, category, price, path){
    this.name= name;
    this.category= category;
    this.price=price;
    this.path=path;

    arr1.push(this);
}


function loadCart() {
  //  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // cart = new Cart(cartItems);

   new Cart('product1', 'latest', 15,'../img/antiques-in-bundaberg.jpg');

   new Cart('product2', 'latest', 35,'../img/antiques-royalty-free-image-619763658-1551374656_720.jpg');

  
}


function clearCart() {

    let parent = document.getElementsByTagName('tbody')[0];
    parent.textContent = '';
}

let arr1=[];
function showCart() {
    let parent = document.getElementsByTagName('tbody')[0];

    for (let i = 0; i < arr1.length; i++) {
        let tr = document.createElement('tr');
        parent.appendChild(tr);

        let imageSrc = document.createElement('td');
        imageSrc.textContent = arr1[i].path;
        tr.appendChild(imageSrc);

        
        let productTd = document.createElement('td');
        productTd.textContent = arr1[i].name;
        tr.appendChild(productTd);

        let priceTd = document.createElement('td');
        priceTd.textContent = arr1[i].price;
        tr.appendChild(priceTd);

        let deleteTd = document.createElement('td');
        deleteTd.textContent = 'X';
        tr.appendChild(deleteTd);

    }
}


function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

function removeItemFromCart(event) {

  if (event.target.textContent === 'X') {
    cart.removeItem(event.target.id);
    console.log(event.target.textContent); 
    }
      
  localStorage.setItem('cart',JSON.stringify(cart.items));
      renderCart();
  
  }
  
  renderCart();