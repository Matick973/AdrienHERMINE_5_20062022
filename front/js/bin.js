/*

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
};

function getCart(){
    let cart = localStorage.getItem('cart');
    if (cart == null || cart == undefined || cart ==0) {
        document.getElementById('cartAndFormContainer').innerHTML = "<h1>Votre Panier est vide</h1>";
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
 
fetch("http://localhost:3000/api/products/")                           //accès API par produit et ciblage avec  "+ id" 
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })

    .catch((err) => {
        document.getElementById('cart__items').innerHTML = "<h1>Erreur d'accès au Panier</h1>";
        console.log(err);                                              // Si Erreur afficher en HTML ET console
    });
//----------------------------------------------- Récupération panier + API : ----------------------------------------------------//

let oneProduct = []
    for (let g = 0, h = cart.length; g < h; g++) {
        console.log(cart.length)
    if (data[g]._id == product.id) {
        
        oneProduct = {
            "id" : product.id,
            "color" : product.color,
            "quantity": product.quantity,
            "price" : data[g].price,
            "name" : data[g].name,
            "img" : data[g].imageUrl,
            "alt" : data[g].altTxt,
        }
        
        console.log(oneProduct)

    }
}

//----------------------------------------------fonction pour afficher les données API--------------------------------------------//


    function displayProduct(data) {       
        let cart = getCart()
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
                "alt" : data[g].altTxt,
            }
        
            console.log(oneProduct)

        }
    }
    
        let productInCart = document.querySelector("#cart__items");
        productInCart.innerHTML +=`<article class="cart__item" data-id="${product.id}" data-color="${product.color}">
            <div class="cart__item__img">
            <img src="${oneProduct.img}" alt="${oneProduct.altTxt}">
            </div>
            <div class="cart__item__content">
            <div class="cart__item__content__description">
            <h2>${oneProduct.name}</h2>
            <p>${oneProduct.color}</p>
            <p>${oneProduct.price}€</p>
            </div>
            <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
            </div>
            <div class="cart__item__content__settings__delete">
            <p class="deleteItem"><button class="btn-delete"> Supprimer </button></p>
            </div>
            </div>
            </div>
            </article>`;
    }
      
        


//----------------------------------------------- Fonction du Panier : ----------------------------------------------------//
function getTotalProduct() {     
    let cart = getCart()                           
    totalProduct = 0;
    for (let product of cart) { 
        totalProduct += product.quantity;
    }
    return parseInt(totalProduct);
}
document.getElementById('totalQuantity').insertAdjacentHTML("afterbegin", getTotalProduct());
// Génère le nombre produit total
// Pour tout les produit de panier : Addition

/*function getTotalPrice() {                                                                                     
    totalPrice = 0;
    for (let oneProduct of cart) { 
       
        totalPrice = oneProduct.price * oneProduct.quantity;
    }
    return totalPrice;
}  
document.getElementById('totalPrice').insertAdjacentHTML("afterbegin", getTotalPrice());   
// Génrère le prix total
// Pour tout les produis du panier Addition X Prix
*/

/*let dltBtn = document.querySelectorAll("btn-delete")
    console.log(dltBtn)
        dltBtn.addEventListener("click", (e) => {
        //e.stopPropagation();
        console.log(e);
        //let cart = getCart()
        //cart = cart.filter(p => p.id !== product.id && p.color !== product.color)
        //saveCart(cart)   
        
        })

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
      
      function removeFromCart(product) {
          let cart = getCart()
          cart = cart.filter(p => p.id !== product.id && p.color == product.color)
          saveCart(cart)
      }
      
      
      //----------------------------------------------- Gestion du Formulaire : ----------------------------------------------------//
      function SaveDataCustomerToLocalStorage (customerInfo){
      
      customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || [];
       
      document.getElementById('firstName').addEventListener('input', (data) =>{
          let firstName = data.target.value; 
          customerInfo.firstName = firstName
          firstName.insertRow
          console.log(firstName)
      })
      
      document.getElementById('lastName').addEventListener('input', (data) =>{
          let lastName = data.target.value;
          customerInfo.lastName = lastName
          lastName.insertRow
          console.log(lastName)
      })
      
      document.getElementById('address').addEventListener('input', (data) =>{
          let address = data.target.value;
          customerInfo.address = address
          address.insertRow
          console.log(address)
      })
      
      document.getElementById('city').addEventListener('input', (data) =>{
          let city = data.target.value; 
          customerInfo.city = city
          city.insertRow
          console.log(city)
      })
      
      document.getElementById('email').addEventListener('input', (data) =>{
          let email = data.target.value; 
          customerInfo.email = email
          email.insertRow
          console.log(email)
      })
      
      localStorage.setItem('customerInfo', JSON.stringify(customerInfo))
      return SaveDataCustomerToLocalStorage()
      }
      
      
      /*
      
      function removeFromCart(product) {
          let cart = getCart()
          console.log(cart, "panier en cour")
          //for (i = 0; i < cart.length; i++){
          cart = cart.filter(p => p.id !== product.id && p.color == product.color)
          console.log(cart, "filtrer")
          //}
          //let dltBtn = document.querySelectorAll(".btn-delete")
          
          saveCart(cart)
          window.location.reload()
      }
      
      
      
      function getTotalPrice() {
          let cart = getCart()                                                                                         
          totalPrice = 0;
          for (let product of cart) { 
              console.log(product)
              totalPrice += product.quantity * oneTotalPrice;
          }
          return totalPrice;
      }
      
//    function save(_id, _color, _quantity) {
  //forCart.push(choosenProduct);
 // return (localStorage.forCart = JSON.stringify(forCart))  
// }

    
let Cart= getCart()
    saveCart()

    function SaveDataToLocalStorage(choosenProduct){
        var a = [];
        // Parse the serialized data back into an aray of objects
        a = JSON.parse(localStorage.getItem('session')) || [];
        // Push the new data (whether it be an object or anything else) onto the array
        a.push(choosenProduct);
        // Alert the array value
        alert(a);  // Should be something like [Object array]
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('session', JSON.stringify(a));
    } 
    
fetch("http://localhost:3000/api/products/")
//Accès aux objet placé dans l'Api                           
.then((response) => response.json())
.then((Cart) => {
  console.log(Cart);                                                        
  selectedProduct(Cart);
//log un objet du tableau
})
  
.catch((err) => {
  document.querySelector('#cartAndFormContainer').innerHTML = '<h1>Erreur LocalStorage</h1>';
  console.log('Erreur' + err);
// Si Erreur afficher en HTML ET console                                             
});


// Couleur
  let productColor = document.getElementById('colors').addEventListener("input", (data) => {
    
    let chosenColor = data.target.value;                                   // récupère la valeur sélectionné
    
    chosenProduct.color = chosenColor
    
    console.log(chosenColor);
    
  });

// Quantité
  let productQuantity = document.getElementById('quantity').addEventListener('input', (data) =>{
    
    let chosenQuantity = data.target.value;
    
    chosenProduct.quantity = chosenQuantity
    
    console.log(chosenQuantity)
    
  });


function add2Cart(productId, color, qty) {
  if (qty <= 0 || color == "") {
    return;
  }
  let items = getCart();
  if (items.length == 0) {
    items = [[productId, color, qty]];
  } else {
    let found = false;
    for (let i = 0; i < items.length; i++) {
      if (productId === items[i][0] && color === items[i][1]) {
        found = true;
        items[i][2] += qty;
      }
    }
    if (found == false) {
      let item = [productId, color, qty];
      items.push(item);
    }
  }
  localStorage.setItem("panier", JSON.stringify(items));
}


function removeFromCart(product) {
    let cart = getCart()
    cart = cart.filter(p => p.id !== product.id && p.color == product.color)
    saveCart(cart)
}



class Cart {

    constructor() {

        let cart = localStorage.getItem('cart');
        if (cart == null) {
            this.cart = [];
        } else {
            this.cart = JSON.parse('cart');
        }
        // Récupère le panier
        // Créer un panier Vide si panier = 0
        // Sinon retour objet
    }
        save() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        };
        // Sauvegarde le panier et retour en chaine de charactères 

        add(product) {
            let foundProduct = this.cart.find(p => p._id == product._id && p.color == product.color);
            if (foundProduct != undefined || foundProduct <= 100) {
                foundProduct.quantity++;
            } else {
                product.quantity = 1;
                this.cart.push(product);
            }
            this.save();
        }
        // Insert le produit dans le tableau (panier)

        remove(product) {
            this.cart = this.cart.filter(p => p._id != product._id || p.color != product.color);
            this.save();
        }

        changeQuantity(product, quantity) { 
            let foundProduct = this.cart.find(p => p._id == product._id && p.color == product.color);
            if (foundProduct != undefined) { 
                foundProduct.quantity += quantity;
            } if (foundProduct.quantity <= 0) { 
                this.remove(product);
            } else {
                this.save();
            }
        }
        // Récupère le Panier
        // Si produit non-trouvé i++
        // Si produit inférieur ou égal à produit supprimé


        
    //Credit  tuto suivi sur : https://www.training-dev.fr/Cours/Gerer-un-panier-avec-le-localStorage */


    /*
        let cart = getCart()
        cart = cart.filter(p => p.id !== product.id && p.color !== product.color)
        saveCart(cart)   
        console.log('click');
        })
        
        
        for (let l = 0; l < dltBtn.length; l++){
    dltBtn.addEventListener("click", (e) => {
        e.preventDefault()
        //e.stopPropagation()
        console.log('click')
        })

        
    
    }
        


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



    let oneTotalPrice = product.quantity * oneProduct.price
        console.log(oneTotalPrice)
        
        function getTotalPrice() {                                                                                     
            totalPrice = 0;

            for (let pro of cart) { 
                console.log("oneProduct", oneProduct)
                console.log("pro", pro)  
                
                pro = oneProduct  
                totalPrice = parseInt(oneProduct.price) * parseInt(oneProduct.quantity);
            }
            return totalPrice;
        }  document.getElementById('totalPrice').insertAdjacentHTML("afterbegin", getTotalPrice());

  //let oneTotalPrice = oneProduct.price * oneProduct.quantity
    //console.log(oneTotalPrice)

/*
const getLengthOfCustomerInfo = (customerInfo) => { 
    let lengthOfObject = Object.keys(customerInfo).length; 
    console.log(lengthOfObject);
}
getLengthOfCustomerInfo()

const testViability = products.length !== 0 && Object.values(contact).every(x => x !== null && x !== '' && x !== undefined)


function changeQuantity(){
    let changeInput = document.querySelectorAll('.itemQuantity')

    for (let q = 0; q < changeInput.length; q++){

        let quantityInInput = cart[q].quantity;
        
        let changeInputValue = changeInput[q].value;

        changeInput[q].addEventListener("change" , (event) => {
            
            cart = cart.find(p => quantityInInput !== changeInputValue);
 
            console.log(cart)
            console.log(changeInput[q].value)
            console.log('quantityInInput',quantityInInput)
            console.log('changeInputValue',changeInputValue)

            if (changeInputValue != undefined || changeInputValue <= 100) {
                changeInputValue = quantityInInput;
            }if(foundProduct.quantity <= 0){
                removeFromCart()
                location.reload()
            }else{
                saveCart(cart)
                location.reload()
            }
        });     
    }
}

function checkValidity(data){
    let input = data.target.value
    let errorMessage = input.nextElementSibling
    if (input.value != '') {
        errorMessage.innerHTML = ''
    } else {
        errorMessage.innerHTML = 'Renseignement obligatoire'
    }
}
function removeFromCart(oneProduct) {
    let cart = getCart()
    cart = cart.filter(p => p.id !== deleteProductId || p.color !== deleteProductColor)
    console.log(cart)
    saveCart(cart)
}

*/ 
