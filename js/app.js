'use strict';

let table=document.getElementById('cart');
let butt= document.createElement('button');

// function constructer to get all data from the form .. 
let counter = 0;
 let father = document.getElementById('father');
 let count = document.getElementById('count');
 father.appendChild(count);
 counter = count;



function ProductForm(name, category, price,  path, discreption) {

    this.name = name;
    this.category = category;
    this.price = price;
    this.path=path;
    this.discreption=discreption;
    this.quantity = 0;
   

    ProductForm.allProduct.push(this);
    //  updateStorage();

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




let arrunique = [];
let arrEco = [];
let arrHand = [];


     
for(let i = 0 ; i < ProductForm.allProduct.length ; i++){

    if(ProductForm.allProduct[i].category == 'Unique'){
        arrunique.push(ProductForm.allProduct[i].name);
    } else if(ProductForm.allProduct[i].category == 'Eco-friendly'){
        arrEco.push(ProductForm.allProduct[i].name);
    }else if (ProductForm.allProduct[i].category == 'Handmade Fashion'){
        arrHand.push(ProductForm.allProduct[i].name);
    }
}

console.log(arrunique);
let parent = document.getElementById('category');

let choices = document.getElementById('productCategories');





 parent.addEventListener('click', fillNextSelect);
 let select = document.createElement('select');
    choices.appendChild(select);

 
 function fillNextSelect(event){
    select.textContent = '';

    for( let i = 0 ; i < ProductForm.allProduct.length ; i++){
        

console.log('before if',event.target.value);
        if(event.target.value === 'unique'  ){
            
            let option = document.createElement('option');
            select.appendChild(option);
            option.textContent = arrunique[i];
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




// ================================= ( render Function) =================================================

let cart = [];

function renderImages(){

    let firstDiv= document.getElementById('uniqueImages');
    let first = document.getElementById('firstCategory');
    let secound = document.getElementById('secoundCategory');
    let third = document.getElementById('ThirdCategory');
    
     firstDiv.appendChild(first);
 
    let h2unique = document.createElement('h2');
    first.appendChild(h2unique);
    h2unique.textContent = 'Unique';
     
       
     firstDiv.appendChild(secound);
  
   let h2Eco = document.createElement('h2');
   secound.appendChild(h2Eco);
   h2Eco.textContent = 'Eco-friendly';

     firstDiv.appendChild(third);
  
  let h2Hand = document.createElement('h2');
  third.appendChild(h2Hand);


  h2Hand.textContent = 'Handmade Fashion';

  

    for(let i=0; i<ProductForm.allProduct.length; i++){

       if (ProductForm.allProduct[i].category==='Unique'){
       

        let h3= document.createElement('h3');
        first.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        first.appendChild(image);
         
        image.src = ProductForm.allProduct[i].path;
        let Src = image.src;
        image.textContent = Src;
        
        
        let p= document.createElement('p');
        first.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        first.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        first.appendChild(butt);
        butt.textContent = 'addToCart';

        butt.addEventListener('click', submit);
        function submit(event){
            alert('Added To Cart');

            
       console.log(ProductForm.allProduct[i]);
       console.log(cart);
            if(event.target.textContent === 'addToCart' && cart.includes(ProductForm.allProduct[i])){
           
                console.log(ProductForm.allProduct);
                ProductForm.allProduct[i].quantity++;

                let arrayString = JSON.stringify(cart);
    
  
                localStorage.setItem('Products', arrayString);
                

                setQuantity();
                

            }
                

              else {
                ProductForm.allProduct[i].quantity = 1;

                cart.push(ProductForm.allProduct[i]);

                count.textContent = ` : ${Number(cart.length)} `;

                let arrayString = JSON.stringify(cart);
    
  
                localStorage.setItem('Products', arrayString);
              
                console.log(cart);
              }

              
         
            }
         


        }
      


        

    
       

       if (ProductForm.allProduct[i].category==='Eco-friendly'){
       

        let h3= document.createElement('h3');
        secound.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        secound.appendChild(image);
        image.src = ProductForm.allProduct[i].path;
        let Src = image.src;
        image.textContent = Src;
        
        let p= document.createElement('p');
        secound.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        secound.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        secound.appendChild(butt);
        butt.textContent = 'addToCart';

        butt.addEventListener('click', submit);
        function submit(event){
            alert('Added To Cart');

            if(event.target.textContent === 'addToCart' && cart.includes(ProductForm.allProduct[i])){


                ProductForm.allProduct[i].quantity++;
                let arrayString = JSON.stringify(cart);
    
  
                localStorage.setItem('Products', arrayString);
               

                setQuantity();
                

            }
                

              else {
                ProductForm.allProduct[i].quantity = 1;

                cart.push(ProductForm.allProduct[i]);

                count.textContent = ` : ${Number(cart.length)}  `;

                let arrayString = JSON.stringify(cart);
    
  
                localStorage.setItem('Products', arrayString);
                
               

                console.log(cart);
              }

           
         
            

        }
       

      
       }

       if (ProductForm.allProduct[i].category==='Handmade Fashion'){
     

        let h3= document.createElement('h3');
        third.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        third.appendChild(image);
        image.src = ProductForm.allProduct[i].path;
        let Src = image.src;
        image.textContent = Src;
        
        
        let p= document.createElement('p');
        third.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        third.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        third.appendChild(butt);
        butt.textContent = 'addToCart';
        butt.addEventListener('click', submit);
        function submit(event){
            alert('Added To Cart');

            if(event.target.textContent === 'addToCart' && cart.includes(ProductForm.allProduct[i])){


                ProductForm.allProduct[i].quantity++;
                let arrayString = JSON.stringify(cart);
    
  
                localStorage.setItem('Products', arrayString);
                

                setQuantity();
                

            }
                

              else {
                ProductForm.allProduct[i].quantity = 1;

                cart.push(ProductForm.allProduct[i]);

                count.textContent = ` : ${Number(cart.length)}  `;

                let arrayString = JSON.stringify(cart);
    
  
                localStorage.setItem('Products', arrayString);
              
                
                console.log(cart);
              }

         
         
        }
    

       
       }

       

    }

    

} 
        


   
    
renderImages();



  function getproducts (){

//    let data = localStorage.getItem('Products');
  
//    let productsData = JSON.parse(data);
  
//     if(productsData !== null){
  
//      cart = productsData;
//      }
 
      cart = JSON.parse(localStorage.getItem('Products')) || [];

      for( let i =0 ; i < cart.length ; i++){
         new ProductForm(cart[i].name, cart[i].category, cart[i].price,  cart[i].path, cart[i].discreption);

      }
      }


      function setQuantity(){

        let arrayString = JSON.stringify(ProductForm.allProduct);
        
      
        localStorage.setItem('Items', arrayString);
          }
    
    
      function getQuantity (){
    
       let data = localStorage.getItem('Items');
      
       let productsData = JSON.parse(data);
        console.log(productsData);
      
        if(productsData !== null){
      
           ProductForm.allProducts = productsData;
         }
          }

      getproducts();
      getQuantity ();










  
  
  
  