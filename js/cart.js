'use strict'

//let arr1=[];

let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cartSelect;

let SelectedCart = function (items) {
    // this.items is an array of CartItem instances.
    this.items = items;
  };

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

new Cart('product1', 'latest', 15,'../img/scarf.jpeg');
new Cart('product2', 'latest', 35,'../img/gramophone.jpg');

// save to local Storage
localStorage.setItem('cart',JSON.stringify(Cart.allCart));

function loadCart(){
    cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   cartSelect = new SelectedCart(cartItems);
   console.log(cartSelect);
   console.log(cart);  
}
loadCart();


// render cart
function showCart() {

    let parent = document.getElementsByTagName('tbody')[0];

    for (let i = 0; i <cartSelect.items.length; i++) {
        let tr = document.createElement('tr');
        parent.appendChild(tr);

        let imageSrc = document.createElement('td');
        tr.appendChild(imageSrc);
        let image= document.createElement('img');
        
        image.src = cartSelect.items[i].path;
        let Src = image.src;
        imageSrc.appendChild(image);
        image.textContent = Src;
        
        let productTd = document.createElement('td');
        productTd.textContent =cartSelect.items[i].name;
        tr.appendChild(productTd);

        let priceTd = document.createElement('td');
        priceTd.textContent = cartSelect.items[i].price;
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
    cartSelect.removeItem(event.target.id);
    console.log(event.target.textContent); 
    }
      
  localStorage.setItem('cart',JSON.stringify(cartSelect.items));
      renderCart();
  }
 
function clearCart() {

    let parent = document.getElementsByTagName('tbody')[0];
    parent.textContent = '';
}


// Cart.prototype.saveToLocalStorage = function () {
//    // save the contents of the cart to localStorage
//     localStorage.setItem('cart',JSON.stringify(this.items))
//   };
  
SelectedCart.prototype.removeItem = function (item) {
    //remove one item from the cart.
    this.items.splice(item, 1);
    //  localStorage.removeItem(item);
  };
  


function renderCart() {
    loadCart();
    clearCart();
    showCart();
}


function purchaseConfirm(){

  alert("Thank you for your purchas");
  clearCart();
}

// var img = document.createElement("img");
 
// img.src = "../img/Antiques-in-Bundaberg.jpg";
// var src = document.getElementById("x");
 
// src.appendChild(img);