'use strict';

function incript(val){
  let newOne = '';
  for(let i=0; i<val.length;i++){
    if(val[i]===' '){
      continue;
    }
    newOne+=val[i];
  }
  return newOne;
  }

let cart = [];
let names=[];
// let table=document.getElementById('cart');
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
    // this.quantity =0;
   

    ProductForm.allProduct.push(this);


}


// array that save every products inside it .. 
ProductForm.allProduct = [];
let productsData;
// if(!JSON.parse(localStorage.getItem('Products'))){

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

let oldVersionArray = [... ProductForm.allProduct];

console.log(oldVersionArray);



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
//=========================== Filter ==========================================  

let parent = document.getElementById('category');

let choices = document.getElementById('productCategories');





 parent.addEventListener('click', fillNextSelect);
 let select = document.createElement('select');
 select.addEventListener('change',itemFilter)
    choices.appendChild(select);

 function itemFilter(event){
  document.getElementById(event.target.value).scrollIntoView();
 }
 function fillNextSelect(event){
    select.textContent = '';


    let count = -1
    for( let i = 0 ; i < oldVersionArray.length ; i++){
        count++;

        if(event.target.value === 'unique'  ){
          if(arrunique.length === count){
            break;
          }
            
            let option = document.createElement('option');
            select.appendChild(option);
            option.value = incript(arrunique[i]);
            option.textContent = arrunique[i];
          
            
        } else if ( event.target.value === 'ecoFriendly'){
          if(arrEco.length === count){
            break;
          }

            let option = document.createElement('option');
            select.appendChild(option);
            option.value = incript(arrEco[i]);
            option.textContent =arrEco[i];
            
        } else if ( event.target.value === 'handmadeFashion'){
          if(arrHand.length === count){
            break;
          }
            let option = document.createElement('option');
            select.appendChild(option);
            option.value = incript(arrHand[i]);
            option.textContent =arrHand[i];
            
        } else {
            let option = document.createElement('option');
            select.appendChild(option);
            option.value = incript(oldVersionArray[i].name);
            option.textContent = oldVersionArray[i].name;


        }
    
      
    }
    

    

}




// ================================= ( render Function) =================================================



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

  
    console.log(ProductForm.allProduct);
    for(let i=0; i<ProductForm.allProduct.length; i++){
      // let newDiv = document.createElement('div');
       if (ProductForm.allProduct[i].category==='Unique'){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class','unique');
        newDiv.setAttribute('id',incript(ProductForm.allProduct[i].name));
        
        let h3= document.createElement('h3');
        
        newDiv.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        newDiv.appendChild(image);
         
        image.src = ProductForm.allProduct[i].path;
        let Src = image.src;
        image.textContent = Src;
        
        
        let p= document.createElement('p');
        newDiv.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        newDiv.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        newDiv.appendChild(butt);
        butt.textContent = 'addToCart';
        first.appendChild(newDiv);
        butt.addEventListener('click', submit);
        function submit(event){
            alert('Added To Cart');

           
            
      
            if(event.target.textContent === 'addToCart' && names.includes(ProductForm.allProduct[i].name)){
           
              for (let j=0; j<cart.length; j++){
                if (cart[j].name==(ProductForm.allProduct[i]).name){
                  cart[j].quantity++;
              

  
                  let arrayString = JSON.stringify(cart);
      
    
                  localStorage.setItem('Products', arrayString);
                 
  
                  setQuantity();
                  names.push( ProductForm.allProduct[i].name)
                }
              }
                

            } else {
                ProductForm.allProduct[i]['quantity']=1

                cart.push(ProductForm.allProduct[i]);

                counter = cart.length
                count.textContent = ` : (${counter}) `;
                

                let arrayString = JSON.stringify(cart);
    
  
                localStorage.setItem('Products', arrayString);
                names.push( ProductForm.allProduct[i].name)

              
              }

              
         
            }
            



        }
      


        

    
       

       if (ProductForm.allProduct[i].category==='Eco-friendly'){
       
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class','ecoFriendly');
        newDiv.setAttribute('id',incript(ProductForm.allProduct[i].name));
        let h3= document.createElement('h3');
        newDiv.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        newDiv.appendChild(image);
        image.src = ProductForm.allProduct[i].path;
        let Src = image.src;
        image.textContent = Src;
        
        let p= document.createElement('p');
        newDiv.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        newDiv.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        newDiv.appendChild(butt);
        butt.textContent = 'addToCart';
        secound.appendChild(newDiv);
        butt.addEventListener('click', submit);
        function submit(event){
         
            alert('Added To Cart');
            if(event.target.textContent === 'addToCart' && names.includes(ProductForm.allProduct[i].name)){
              // console.log('the item that you added', ProductForm.allProduct[i].name)
              for (let j=0; j<cart.length; j++){
                  // console.log(cart[j],  ProductForm.allProduct[i])
                  if (cart[j].name==(ProductForm.allProduct[i]).name){
                    // console.log('cart',cart)
                    cart[j].quantity++;
                   
                  

                    // console.log('not first time', cart[j].quantity)
    
                    let arrayString = JSON.stringify(cart);
        
      
                    localStorage.setItem('Products', arrayString);
                   
    
                    setQuantity();
                    names.push( ProductForm.allProduct[i].name)
                  }
                }
          
                
                
            }
            
            
            else {
                ProductForm.allProduct[i]['quantity']=1
                
                cart.push(ProductForm.allProduct[i]);
                
                counter = cart.length
                count.textContent = ` : (${counter}) `;
                
             
                let arrayString = JSON.stringify(cart);
                
                
                localStorage.setItem('Products', arrayString);
                
                names.push( ProductForm.allProduct[i].name)


            }
            
            
         
            

        }
       

      
       }

       if (ProductForm.allProduct[i].category==='Handmade Fashion'){
     
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class','handmadeFashion');
        newDiv.setAttribute('id',incript(ProductForm.allProduct[i].name));
        let h3= document.createElement('h3');
        newDiv.appendChild(h3);
        h3.textContent = ProductForm.allProduct[i].name;

        let image= document.createElement('img');
        newDiv.appendChild(image);
        image.src = ProductForm.allProduct[i].path;
        let Src = image.src;
        image.textContent = Src;
        
        
        let p= document.createElement('p');
        newDiv.appendChild(p);
        p.textContent = ProductForm.allProduct[i].discreption;

         
        let price= document.createElement('p');
        newDiv.appendChild(price);
        price.textContent =`Price: ${ProductForm.allProduct[i].price} JOD`;

         
        let butt= document.createElement('button');
        newDiv.appendChild(butt);
        butt.textContent = 'addToCart';
        third.appendChild(newDiv);
        butt.addEventListener('click', submit);
        function submit(event){
            alert('Added To Cart');

            if(event.target.textContent === 'addToCart' && names.includes(ProductForm.allProduct[i].name)){

              for (let j=0; j<cart.length; j++){
                if (cart[j].name==(ProductForm.allProduct[i]).name){
                  cart[j].quantity++;
            
                
  
                  let arrayString = JSON.stringify(cart);
      
    
                  localStorage.setItem('Products', arrayString);
                 
  
                  setQuantity();
                  names.push( ProductForm.allProduct[i].name)
                }
              }
                

            }
                

              else {
                ProductForm.allProduct[i]['quantity']=1

                cart.push(ProductForm.allProduct[i]);
                
                
                
                counter = cart.length
                count.textContent = ` : (${counter}) `;
                
              
                
            
               let arrayString = JSON.stringify(cart);
    
  
                localStorage.setItem('Products', arrayString);

                names.push( ProductForm.allProduct[i].name)

              
                
            }
            
            
        }
        
        
        
    }
    
       

    }

    

} 
        


   
    
renderImages();

let filter = document.getElementById('category');
filter.addEventListener('change',filterCategories)
function filterCategories(event){
  let value = event.target.value;
  if(value === 'unique'){
    
    document.querySelector('#firstCategory').style.display = "block";
    document.querySelector('#secoundCategory').style.display = "none";
    document.querySelector('#ThirdCategory').style.display = "none";
  }
  else if(value === 'ecoFriendly'){
    
    document.querySelector('#firstCategory').style.display = "none";
    document.querySelector('#secoundCategory').style.display = "block";
    document.querySelector('#ThirdCategory').style.display = "none";
  }
  if(value === 'handmadeFashion'){
    
    document.querySelector('#firstCategory').style.display = "none";
    document.querySelector('#secoundCategory').style.display = "none";
    document.querySelector('#ThirdCategory').style.display = "block";
  }
  if(value === 'all'){
    
    document.querySelector('#firstCategory').style.display = "block";
    document.querySelector('#secoundCategory').style.display = "block";
    document.querySelector('#ThirdCategory').style.display = "block";
  }  
}
  function getproducts (){

//    let data = localStorage.getItem('Products');
  
//    let productsData = JSON.parse(data);
  
//     if(productsData !== null){
  
//      cart = productsData;
//      }
 
      cart = JSON.parse(localStorage.getItem('Products')) || [];


      for( let i =0 ; i < cart.length ; i++){
         new ProductForm(cart[i].name, cart[i].category, cart[i].price,  cart[i].path, cart[i].discreption);
        names.push(cart[i].name)
      }
      }


      function setQuantity(){

        let arrayString = JSON.stringify(ProductForm.allProduct);
        
      
        localStorage.setItem('Items', arrayString);
          }
    
    
      function getQuantity (){
    
       let data = localStorage.getItem('Items');
      
        productsData = JSON.parse(data);
      
        if(productsData !== null){
      
           ProductForm.allProducts = productsData;
         }
          }

      getproducts();
      getQuantity ();










  
  
  
  