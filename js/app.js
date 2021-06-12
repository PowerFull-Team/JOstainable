'use strict';


// function constructer to get all data from the form .. 



function ProductForm(name, category, price) {

    this.name = name;
    this.category = category;
    this.price = price;

    ProductForm.allProduct.push(this);

}

// array that save every products inside it .. 
ProductForm.allProduct = [];


new ProductForm('product1', 'latest', 15);
new ProductForm('product2', 'latest', 35);
new ProductForm('product3', 'latest', 50);
new ProductForm('product4', 'latest', 70);
new ProductForm('product5', 'latest', 100);

new ProductForm('product6', 'popular', 15);
new ProductForm('product7', 'popular', 35);
new ProductForm('product8', 'popular', 50);
new ProductForm('product9', 'popular', 70);
new ProductForm('product10', 'popular', 100);

new ProductForm('product11', 'sales', 15);
new ProductForm('product12', 'sales', 35);
new ProductForm('product13', 'sales', 50);
new ProductForm('product14', 'sales', 70);
new ProductForm('product15', 'sales', 100);

//console.log(ProductForm.allProduct);
let categoryChocies = document.getElementById('category');

function addChocies(){
    let span = document.getElementById('productCategories');
    let select = document.createElement('select');
    if(Option.value === 'latest'){
            
            span.appendChild(select);

            for (let i = 0 ; i < ProductForm.allProduct.length ; i++){
                
                let products = document.createElement('option');
                select.appendChild(products);
                products.textContent = ProductForm.allProduct[i].name;

            }

    } else if(Option.value === 'popular'){

        for (let i = 0 ; i < ProductForm.allProduct.length ; i++){
                
            let products = document.createElement('option');
            select.appendChild(products);
            products.textContent = ProductForm.allProduct[i].name;

        }



    } else {

        for (let i = 0 ; i < ProductForm.allProduct.length ; i++){
                
            let products = document.createElement('option');
            select.appendChild(products);
            products.textContent = ProductForm.allProduct[i].name;

        }
    }


}

addChocies();