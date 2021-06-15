'use strict'

//=======================Exchange Page==================

function NewProductForm(name, category, price,  path, discreption) {

    this.name = name;
    this.price = price;
   // this.path=path;
    this.discreption=discreption;
    this.category=category;
    this.path=path;
    
    NewProductForm.allProduct.push(this);

}
NewProductForm.allProduct=[];


let form  = document.getElementById("exchangeProductForm");

form.addEventListener('submit', ExchangeConfirm);


function getting() {
    let data=localStorage.getItem('newProducts');
    let parsedData=JSON.parse(data)||[];

    NewProductForm.allProduct=parsedData

}

getting()
// localStorage.setItem('NewProduct',JSON.stringify(NewProductForm.allProduct));

// name, category, price,  path, discreption
function ExchangeConfirm(event){
    event.preventDefault();

//    alert ('hey');
   let name=event.target.pName.value;
   console.log(name);

   let price=event.target.pPrice.value;
   
   let image=event.target.pImage.value;

   let category=event.target.category.value;

   let discreption=event.target.pDiscreption.value;
//    name, category, price,  path, discreption

   new NewProductForm(name,category,price,image,discreption);
   console.log(NewProductForm.allProduct);

   localStorage.setItem('newProducts',JSON.stringify(NewProductForm.allProduct));

   Swal.fire({
    title: 'YOUR PRODUCT ADDED, & READY TO EXCHANGE',
    width: 600,
    padding: '3em',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  })


}
