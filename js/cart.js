'use strict'

let count1 = document.getElementById('count1');
let bigTotal = document.getElementById('totalCart');
let counter1 = 0;

function updateCounter(){

  cart = JSON.parse(localStorage.getItem('Products')) || [];
  let itemsheader = 0;
  console.log(cart.length);
  for( let i =0 ; i < cart.length ; i++){
    console.log(cart[i].quantity);
    itemsheader += cart[i].quantity;
    
  }
  count1.textContent = itemsheader;
}

 updateCounter();



let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

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



function loadCart(){
    cartItems = JSON.parse(localStorage.getItem('Products')) || [];
   console.log(cartItems);
}
loadCart();


function showCart() {
   
    let parent = document.getElementsByTagName('tbody')[0];
  console.log('cart', cartItems)
    for (let i = 0; i <cartItems.length; i++) {
        let tr = document.createElement('tr');
        parent.appendChild(tr);

        let imageSrc = document.createElement('td');
        tr.appendChild(imageSrc);
        let image= document.createElement('img');
        
        image.src = cartItems[i].path;
        let Src = image.src;
        imageSrc.appendChild(image);
        image.textContent = Src;
        
        let productTd = document.createElement('td');
        productTd.textContent =cartItems[i].name;
        tr.appendChild(productTd);
        
        let productQuantity = document.createElement('td');
        productQuantity.textContent = cartItems[i].quantity;
        tr.appendChild(productQuantity);

        let priceTd = document.createElement('td');
        priceTd.textContent = `${cartItems[i].price * cartItems[i].quantity} JOD`;
        tr.appendChild(priceTd);


        let deleteTd = document.createElement('td');
        deleteTd.textContent = 'X';
        deleteTd.id = i;
        tr.appendChild(deleteTd);

        counter += cartItems[i].price * cartItems[i].quantity;
        
        bigTotal.textContent = counter;

        

    }
    if (cartItems.length==0){
      bigTotal.textContent=0
    }
    
}
showCart();



function removeItemFromCart(event) {
  counter = 0;
  console.log(event.target.id);
  if (event.target.id ) {
    removeItem(event.target.id);
    

    console.log(event.target.textContent); 
    }
      
  
      
  }
 
function clearCart() {

    let parent = document.getElementsByTagName('tbody')[0];
    parent.textContent = '';
    
}




function removeItem (id){
  
  cartItems.splice(id,1);
  localStorage.setItem('Products',JSON.stringify(cartItems));
  updateCounter();

  renderCart();
}
  


function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

let finalSubmit = document.getElementById('confirm');
finalSubmit.addEventListener('submit', purchaseConfirm);
function purchaseConfirm(event){
  event.preventDefault();
  localStorage.clear();
  
 alert('Thank you for your purchas');
  
  location.reload();
 
  clearCart();
 
  

}



