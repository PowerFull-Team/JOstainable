'use strict';


// function constructer to get all data from the form .. 


function ProductForm(name, category, price,  path) {

    this.name = name;
    this.category = category;
    this.price = price;
    this.path=path;

    ProductForm.allProduct.push(this);
    updateStorage();

}
// 
// array that save every products inside it .. 
ProductForm.allProduct = [];


new ProductForm('Camera', 'Unique', 15, '../img/camera1.jpeg');
new ProductForm('Compass', 'Unique', 35, '../img/compass.jpeg');
new ProductForm('Phonograph', 'Unique', 50, '../img/gramophone.jpg');
new ProductForm('Radio', 'Unique', 70, '../img/radio1.jpg');
new ProductForm('Typewriter', 'Unique', 100, '../img/typeWriter2.jpg');

new ProductForm('Green Bag ', 'Eco-friendly', 15, '../img/greenBag1.jpeg');
new ProductForm('Recycling Trash', 'Eco-friendly', 35, '../img/greenBox.jpeg');
new ProductForm('Recycled Notebook', 'Eco-friendly', 50, '../img/notebook.jpeg');
new ProductForm('Toothbrush', 'Eco-friendly', 70, '../img/toothbrush.jpeg');
new ProductForm('Bottle Light',' Eco-friendly', 100, '../img/waterBottleLight.jpg');

new ProductForm('Baby Set', 'Handmade Fashion', 15, '../img/babyClothing.jpeg');
new ProductForm('Handmade Bag', 'Handmade Fashion', 35, '../img/bag.jpeg');
new ProductForm('Handmade Bracelet ', 'Handmade Fashion', 50, '../img/bracelet.jpeg');
new ProductForm('Handmade Scarf', 'Handmade Fashion', 70, '../img/scarf.jpeg');
new ProductForm('Socks', 'Handmade Fashion', 100, '../img/socks.jpeg');

// let categoryLatest = document.getElementById('latest').value;
// let categoryPopular = document.getElementById('popular').value;
// let categorySales = document.getElementById('sales').value;



function updateStorage(){

    let arrayString = JSON.stringify(ProductForm.allProduct);
    
  
    localStorage.setItem('Products', arrayString);
      }


  function getproducts (){

   let data = localStorage.getItem('Products');
  
   let productsData = JSON.parse(data);
    //console.log(productsData);
  
    if(productsData !== null){
  
       ProductForm.allProducts = productsData;
     }
      }
      getproducts ();


let arrUnique = ['Camera','Compass','Phonograph','Radio','Typewriter'];
let arrEco = ['Green Bag','Recycling Trash','Recycled Notebook','Toothbrush','Bottle Light'];
let arrHand = ['Baby Set','Handmade Bag','Handmade Bracelet','Handmade Scarf','Socks'];

let parent = document.getElementById('category');

let choices = document.getElementById('productCategories');

let category = ProductForm.allProduct.category;

 parent.addEventListener('click', fillNextSelect);
 let select = document.createElement('select');
    choices.appendChild(select);


 function fillNextSelect(event){


    select.textContent = '';

    for( let i = 0 ; i < ProductForm.allProduct.length ; i++){
        
//console.log('before if',event.target.value);
        if(event.target.value === 'unique' ){
            
            let option = document.createElement('option');
            select.appendChild(option);
            option.textContent = arrUnique[i];
           // console.log('after if',event.target.value);
            
            
        } else if ( event.target.value === 'ecoFriendly'){

            let option = document.createElement('option');
            select.appendChild(option);
            option.textContent =arrEco[i];
            
        } else if ( event.target.value === 'handmadeFashion'){

            let option = document.createElement('option');
            select.appendChild(option);
            option.textContent =arrHand[i];
            
        } else {
            let option = document.createElement('option');
            select.appendChild(option);
            option.textContent = ProductForm.allProduct[i].name;


        }
    
      
    }
    

    

}


// ================================== ( button function) ==================================================



let btn = document.getElementsByClassName('sellButton');
//console.log(btn);

for(let i = 0 ; i < btn.length ; i++){
 btn[i].addEventListener('click' , addToCart);

}

function addToCart(event){
if(event.target.value === 'add'){
  
alert('added');


}



}

// ================================= ( render Function) =================================================

function render(){

   





}






 








  
  
  
  