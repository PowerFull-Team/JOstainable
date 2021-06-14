'use strict'

//let arr1=[];

let cartList = document.getElementById('cart');
cartList.addEventListener('click', removeItemFromCart);
let cart;

// let Cart = function (items) {
//     // this.items is an array of CartItem instances.
//     this.items = items;
//   };

let cartItems=[];

let Cart = function (name, category, price, path){
    this.name= name;
    this.category= category;
    this.price=price;
    this.path=path;

    Cart.allCart.push(this);
    cartItems.push(this);
}

Cart.allCart=[];

new Cart('product1', 'latest', 15,'../img/antiques-in-bundaberg.jpg');
new Cart('product2', 'latest', 35,'../img/antiques-royalty-free-image-619763658-1551374656_720.jpg');

// save to local Storage
localStorage.setItem('cart',JSON.stringify(Cart.allCart));

function loadCart(){
    cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   //cart = new Cart(cartItems);
   console.log(cartItems);
   console.log(cart);  
}
loadCart();

// render cart
function showCart() {

    let parent = document.getElementsByTagName('tbody')[0];

    for (let i = 0; i <Cart.allCart.length; i++) {
        let tr = document.createElement('tr');
        parent.appendChild(tr);

        let imageSrc = document.createElement('td');
        imageSrc.textContent = Cart.allCart[i].path;
        tr.appendChild(imageSrc);

        
        let productTd = document.createElement('td');
        productTd.textContent = Cart.allCart[i].name;
        tr.appendChild(productTd);

        let priceTd = document.createElement('td');
        priceTd.textContent = Cart.allCart[i].price;
        tr.appendChild(priceTd);

        let deleteTd = document.createElement('td');
        deleteTd.textContent = 'X';
        tr.appendChild(deleteTd);

    }
}
showCart();

// remove item

function removeItemFromCart(event) {
  if (event.target.textContent === 'X') {
    cartList.removeItem(event.target.id);
    console.log(event.target.textContent); 
    }
      
  localStorage.setItem('cart',JSON.stringify(Cart.allCart));
      renderCart();
  }
 
// function clearCart() {

//     let parent = document.getElementsByTagName('tbody')[0];
//     parent.textContent = '';
// }


// Cart.prototype.saveToLocalStorage = function () {
//    // save the contents of the cart to localStorage
//     localStorage.setItem('cart',JSON.stringify(this.items))
//   };
  
Cart.prototype.removeItem = function (item) {
    //remove one item from the cart.
    // // Note: You will have to decide what kind of parameter to pass in here!
    this.items.splice(item, 1);
    //  localStorage.removeItem(item);
  };
  


// function renderCart() {
//     loadCart();
//     clearCart();
//     showCart();
// }

