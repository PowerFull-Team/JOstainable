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
        productTd.setAttribute('class','prodName');
        tr.appendChild(productTd);
        
        let productQuantity = document.createElement('td');
        productQuantity.textContent = cartItems[i].quantity;
        productQuantity.setAttribute('class','prodQun');
        tr.appendChild(productQuantity);

        let priceTd = document.createElement('td');
        priceTd.setAttribute('class','prodPrice');
        priceTd.textContent = cartItems[i].price * cartItems[i].quantity;
        tr.appendChild(priceTd);


        let deleteTd = document.createElement('td');
        deleteTd.setAttribute('class','btn');
        deleteTd.textContent = 'REMOVE';
        deleteTd.id = i;
        tr.appendChild(deleteTd);

        counter += cartItems[i].price * cartItems[i].quantity;
        
        bigTotal.textContent = `Total: ${counter} JOD`;

        

    }
    if (cartItems.length==0){
      bigTotal.textContent=`Total: ${counter}`;
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
    console.log(parent);
    parent.textContent = '';
  
    
}




function removeItem (id){
  Swal.fire('Item Removed from the Cart!')

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

let purchaseForm=document.getElementById('purchaseForm');
purchaseForm.addEventListener('submit',purchaseConfirm);

function purchaseConfirm(event){
  event.preventDefault();
  localStorage.clear();
  Swal.fire({
    title: 'Confirm the order? ',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Yes`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Thank you for your purchase")
      counter = 0;
      bigTotal.textContent = counter;
      count1.textContent = counter;
      document.getElementById('purchaseForm').reset();
    
      clearCart();
    } else if (result.isDenied) {
      Swal.fire('Purchase Canceled! ')
    }
  })
}



