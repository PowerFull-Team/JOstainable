'use strict';


// function constructer to get all data from the form .. 


function ProductForm(name, category, price, CatClass, path) {

    this.name = name;
    this.category = category;
    this.price = price;
    this.CatClass= CatClass;
    this.path=path;

    ProductForm.allProduct.push(this);
    updateStorage();

}
// 
// array that save every products inside it .. 
ProductForm.allProduct = [];


new ProductForm('product1', 'latest', 15, "latestCat",'../img/antiques-in-bundaberg.jpg');
new ProductForm('product2', 'latest', 35, "latestCat",'../img/antiques-royalty-free-image-619763658-1551374656_720.jpg');
new ProductForm('product3', 'latest', 50, "latestCat",'../img/istockphoto-121025448-612x612.jpg');
new ProductForm('product4', 'latest', 70, "latestCat");
new ProductForm('product5', 'latest', 100, "latestCat");

new ProductForm('product6', 'popular', 15, "popularCat");
new ProductForm('product7', 'popular', 35, "popularCat");
new ProductForm('product8', 'popular', 50, "popularCat");
new ProductForm('product9', 'popular', 70, "popularCat");
new ProductForm('product10', 'popular', 100, "popularCat");

new ProductForm('product11', 'sales', 15, "salesCat");
new ProductForm('product12', 'sales', 35, "salesCat");
new ProductForm('product13', 'sales', 50, "salesCat");
new ProductForm('product14', 'sales', 70, "salesCat");
new ProductForm('product15', 'sales', 100, "salesCat");

//console.log(ProductForm.allProduct);
// let categoryChocies = document.getElementById('category').value;
/*
let categoryLatest = document.getElementById('latest').value;

let categoryPopular = document.getElementById('popular').value;

let categorySales = document.getElementById('sales').value;*/
// let arrCat=[];

// let valueCat=categoryChocies.selectElement.options[categoryChocies.selectedIndex].value;// get selected option value
// let textCat=categoryChocies.options[categoryChocies.selectedIndex].text;

// for (let z=0;z<categoryChocies.selectedIndex;z++){
// if (categoryChocies.selectedIndex == ProductForm.allProduct[z].id)
// {
//   arrCat.push(ProductForm.allProduct[z].name);
// }
// }
// console.log(arrCat);
/*
function selectCat()
{
    let proCat = document.getElementById('productCategories');
    let selectedCateg = document.createElement('select');

   
}

function addChocies(){
    let span = document.getElementById('productCategories');
    let select = document.createElement('select');

    for (let i = 0 ; i < ProductForm.allProduct.length ; i++){
     if(categoryLatest){
            
            span.appendChild(select);

           // for (let i = 0 ; i < ProductForm.allProduct.length ; i++){
            
                let products = document.createElement('option');
                select.appendChild(products);
                products.textContent = ProductForm.allProduct[i].name;

            

    } else if(categoryPopular){

       // for (let i = 0 ; i < ProductForm.allProduct.length ; i++){
                
            let products = document.createElement('option');
            select.appendChild(products);
            products.textContent = ProductForm.allProduct[i].name;

        //}
    


    } else if (categorySales) {

       // for (let i = 0 ; i < ProductForm.allProduct.length ; i++){
                
            let products = document.createElement('option');
            select.appendChild(products);
            products.textContent = ProductForm.allProduct[i].name;

        //}
    }
    }

}

addChocies();
*/

function updateStorage(){

    let arrayString = JSON.stringify(ProductForm.allProduct);
    
  
    localStorage.setItem('Products', arrayString);
    console.log(arrayString); 
  
  }


  function getproducts (){

   
    let data = localStorage.getItem('Products');
  
    let productsData = JSON.parse(data);
    console.log(productsData);
  
    if(productsData !== null){
  
       ProductForm.allProducts = productsData;
      
      }
     
  
  }

  getproducts();

  
  
  let btn = document.getElementsByClassName('sellButton');
  let total = 0;
  let price = 0;
//   for( let i = 0 ; i < btn.length ; i++){
    // btn.addEventListener('click' , addToCart );

//   }



    function addToCart (event){
    //   for(let i = 0 ; i < btn.length ; i++){
      
         btn.addEventListener('onClick',addToCart);
        // if(event.target.id == "img1"){
            price = ProductForm.allProduct[0].price;
            total += price;
            // } 
        
            
    
    // }
    console.log(total);
    }
  