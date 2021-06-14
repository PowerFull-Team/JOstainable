'use strict';

let table=document.getElementById('cart');
let butt= document.createElement('button');

// function constructer to get all data from the form .. 
function ProductForm(name, category, price,  path, discreption) {

    this.name = name;
    this.category = category;
    this.price = price;
    this.path=path;
    this.discreption=discreption;

    ProductForm.allProduct.push(this);
    updateStorage();

}


// array that save every products inside it .. 
ProductForm.allProduct = [];


new ProductForm('Camera', 'Unique', 15, '../img/camera1.jpeg', 'This camera was made in 1980 to commemorate the Moscow Olympic Games.');
new ProductForm('Compass', 'Unique', 35, '../img/compass.jpeg', ' Vintage Navigation compass Pocket Watch Style Case ');
new ProductForm('Phonograph', 'Unique', 50, '../img/gramophone.jpg','Antique Phonograph');
new ProductForm('Radio', 'Unique', 70, '../img/radio1.jpg','Antique Radio');
new ProductForm('Typewriter', 'Unique', 100, '../img/typeWriter2.jpg','Anitque typewriter since world war II');

new ProductForm('Green Bag ', 'Eco-friendly', 15, '../img/greenBag1.jpeg','A resusable bag for your shopping ');
new ProductForm('Recycling Trash', 'Eco-friendly', 35, '../img/greenBox.jpeg',' A set of 4-boxes for paper, glass, plastic, & metal trash ');
new ProductForm('Recycled Notebook', 'Eco-friendly', 50, '../img/notebook.jpeg','A set of recycled strings and notebook ');
new ProductForm('Toothbrush', 'Eco-friendly', 70, '../img/toothbrush.jpeg','A set of 5 recycled based toothbrushes and recycled bath accessories ');
new ProductForm('Bottle Light','Eco-friendly', 100, '../img/waterBottleLight.jpg','A set of 3-recycled bottles used with lighting art ');

new ProductForm('Baby Set', 'Handmade Fashion', 15, '../img/babyClothing.jpeg','A set of 3-pieces for youe kid ');
new ProductForm('Handmade Bag', 'Handmade Fashion', 35, '../img/bag.jpeg','A handmade bedouin style bag ');
new ProductForm('Handmade Bracelet ', 'Handmade Fashion', 50, '../img/bracelet.jpeg','A handmade colorful bracelet');
new ProductForm('Handmade Scarf', 'Handmade Fashion', 70, '../img/scarf.jpeg','Handmade wool scarf ');
new ProductForm('Socks', 'Handmade Fashion', 100, '../img/socks.jpeg','Handmade wool socks');

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
    console.log(productsData);
  
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
        
      console.log('before if',event.target.value);
        if(event.target.value === 'unique' ){
            
            let option = document.createElement('option');
            select.appendChild(option);
            option.textContent = arrUnique[i];
            console.log('after if',event.target.value);
            
            
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
console.log(btn);

for(let i = 0 ; i < btn.length ; i++){
 btn[i].addEventListener('click' , addToCart);

}

function addToCart(event){
if(event.target.value === 'add'){
  
alert('added');


}


}

// ================================= ( render Function) =================================================

//let renderArr=[];
function renderImages(){

    let firstDiv= document.getElementById('uniqueImages');

    for(let i=0; i<ProductForm.allProduct.length; i++){

       if (ProductForm.allProduct[i].category==='Unique'){
        let h2 = document.createElement('h2');
        firstDiv.appendChild(h2);
        h2.textContent = 'Unique';

        let h3= document.createElement('h3');
        firstDiv.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        firstDiv.appendChild(image);
        let Src = image.src = ProductForm.allProduct[i].path;
        image.textContent = Src;
        
        
        let p= document.createElement('p');
        firstDiv.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        firstDiv.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        firstDiv.appendChild(butt);
        butt.textContent = 'addToCart';

      //  renderArr.push(ProductForm.allProduct[i]);
       }

       if (ProductForm.allProduct[i].category==='Eco-friendly'){
        let h2 = document.createElement('h2');
        firstDiv.appendChild(h2);
        h2.textContent = 'Eco-friendly';

        let h3= document.createElement('h3');
        firstDiv.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        firstDiv.appendChild(image);
        let Src = image.src = ProductForm.allProduct[i].path;
        image.textContent = Src;
        
        
        let p= document.createElement('p');
        firstDiv.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        firstDiv.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        firstDiv.appendChild(butt);
        butt.textContent = 'addToCart';

       // renderArr.push(ProductForm.allProduct[i]);
       }

       if (ProductForm.allProduct[i].category==='Handmade Fashion'){
        let h2 = document.createElement('h2');
        firstDiv.appendChild(h2);
        h2.textContent = 'Handmade Fashion';

        let h3= document.createElement('h3');
        firstDiv.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        firstDiv.appendChild(image);
        let Src = image.src = ProductForm.allProduct[i].path;
        image.textContent = Src;
        
        
        let p= document.createElement('p');
        firstDiv.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        firstDiv.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        firstDiv.appendChild(butt);
        butt.textContent = 'addToCart';

       // renderArr.push(ProductForm.allProduct[i]);
       }

        // let P= document.createElement('p');
        // P.setAttribute('class', `${arr[i]} unique`)
        // div.appendChild(P);
        // P.textContent=arr[i]
        }


   
    }

renderImages();

let filterBut= document.getElementById('pressButton');

filterBut.addEventListener('click', filteration);

function filteration(event){

  
}










  
  
  
  