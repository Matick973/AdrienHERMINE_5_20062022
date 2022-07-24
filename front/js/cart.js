function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
};

function getCart(){
    let cart = localStorage.getItem('cart');
    if (cart == null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
    // Récupère le panier
    // Créer un panier Vide si panier = 0
    // Sinon retour objet
}

//----------------------------------------------- Récupération panier + API : ----------------------------------------------------//
let cart = getCart()

cart.forEach((product) => { 
    fetch("http://localhost:3000/api/products/")                           //accès API par produit et ciblage avec  "+ id" 
    .then((response) => response.json())
    .then((data) => {    
        
        let oneProduct = {}
        for (let g = 0, h = data.length; g < h; g++) {
            if (data[g]._id == product.id) {
            
                oneProduct = {
                "id" : product.id,
                "color" : product.color,
                "quantity": product.quantity,
                "price" : data[g].price,
                "name" : data[g].name,
                "img" : data[g].imageUrl,
                "alt" : data[g].altTxt,}
            
                console.log(oneProduct)
            
            }
        }
        //displayProduct(oneProduct)

    })

    .catch((err) => {
        document.getElementById('cart__items').innerHTML = "<h1>Erreur d'accès au Panier</h1>";
        console.log(err);                                              // Si Erreur afficher en HTML ET console
    });

    function displayProduct(oneProduct) {                //fonction pour afficher les données API
    
        let productInCart = document.querySelector("#cart__items");
        productInCart.innerHTML +=`<article class="cart__item" data-id="${product.id}" data-color="${product.color}">
        <div class="cart__item__img">
          <img src="${data.imageUrl}" alt="${data.altTxt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${data.name}</h2>
            <p>${product.color}</p>
            <p>${data.price}</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article> `;
    }
})


//----------------------------------------------- Fonction du Panier : ----------------------------------------------------//

function removeFromCart(product) {
    let cart = getCart()
    cart = cart.filter(p => p.id !== product.id && p.color == product.color)
    saveCart(cart)
}

function changeQuantity(product, quantity){
    let cart = getCart()
    let foundProduct = cart.find(p => p.id == product.id && p.color == product.color);
    if (foundProduct != undefined || foundProduct <= 100) {
        foundProduct.quantity += quantity;
    }if(foundProduct.quantity <= 0){
        removeFromCart(foundProduct)
    }else{
        saveCart(cart)
    }
}

function getTotalProduct() {     
        let cart = getCart()                           
        totalProduct = 0;
        for (let product of cart) { 
            totalProduct += product.quantity;
        }
        return totalProduct;
}
    // Génère le nombre produit total
    // Pour tout les produit de panier : Addition
    
    function getTotalPrice() {
        let cart = getCart()                                                                                         
        totalPrice = 0;
        for (let product of cart) { 
            totalPrice += product.quantity * product.price;
        }
        return totalPrice;
    }
    
    // Génrère le prix total
    // Pour tout les produis du panier Addition X Prix
    
    function clearCart() {
        let cart = getCart()
        document.getElementById("order").addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.clear();
            cart = [];
            customerInfo = [];
            window.location.reload();
        localStorage.removeItem();
    }
)}
    // Vide le panier

//----------------------------------------------- Gestion du Formulaire : ----------------------------------------------------//

let customerInfo = []

customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || [];

document.getElementById('firstName').addEventListener('input', (data) =>{
    let firstName = data.target.value; 
    customerInfo.firstName = firstName
    console.log(firstName)
})

document.getElementById('lastName').addEventListener('input', (data) =>{
    let lastName = data.target.value;
    customerInfo.lastName = lastName
    console.log(lastName)
})

document.getElementById('address').addEventListener('input', (data) =>{
    let address = data.target.value;
    customerInfo.address = address
    console.log(address)
})

document.getElementById('city').addEventListener('input', (data) =>{
    let city = data.target.value; 
    customerInfo.city = city
    console.log(city)
})

document.getElementById('email').addEventListener('input', (data) =>{
    let email = data.target.value; 
    customerInfo.email = email
    console.log(email)
})



/*

let cart = getCart()
    
    let matchCart = cart.filter(p => p.id == product.id && product.id == data_id);
   
    console.log(matchCart)

function addCart(product) {
    let cart = getCart()
    let foundProduct = cart.find(p => p.id == product.id && p.color == product.color) ;
   if (foundProduct != undefined || foundProduct< 100) {
         foundProduct.quantity++;
   } else {
    product.quantity = 1;
    cart.push(product)
   }
   saveCart(cart)
}

function SaveDataCustomerToLocalStorage (customerInfo){
customerInfo.push()
localStorage.setItem('customerInfo', JSON.stringify(customerInfo));

return SaveDataCustomerToLocalStorage()}

    let data_color = product.color
    let data_quantity= product.quantity
    let data_price = product.price
    let data_name = product.name;
    let data_img = product.imageUrl
    let data_alt = product.altTxt;
    

 let products = { "id": product.id, "color": product.color, "quantity": product.quantity, "price": data.price, "name": data.name, "img": data.imageUrl, "alt": data.altTxt }
    console.log(products)     


    cart = {
        "color" : product.color,
        "quantity": product.quantity,
        "price" : product.price,
        "name" : product.name,
        "img" : product.imageUrl,
        "alt" : product.altTxt,

    }

    let data_id = product.id
    let data_color = product.color
    let data_quantity= product.quantity
    let data_price = product.price
    let data_name = product.name;
    let data_img = product.imageUrl
    let data_alt = product.altTxt;
*/