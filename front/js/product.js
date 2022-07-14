let id = (new URLSearchParams(document.location.search).get("_id"))         // variable pour création Url pour Canape ciblé avec "_id" 

fetch("http://localhost:3000/api/products/" + id)                           //accès API par produit et ciblage avec  "+ id" 
.then((response) => response.json())
.then((data) => {
  console.log(data);                                                        //log un objet du tableau
  unCanapeApi(data);
})
  
.catch((err) => {
  document.getElementById('title').innerHTML = '<h1>Erreur API</h1>';
  console.log('Erreur' + err);                                              // Si Erreur afficher en HTML ET console
});

function unCanapeApi(data) {                                                //fonction pour afficher les données API

    let item = document.querySelector(".item");                             //ciblage de la zone item

    item.querySelector(".item__img").insertAdjacentHTML("afterbegin", `<img src="${data.imageUrl}" alt="Photographie d'un canapé ${data.name}">`);
    item.querySelector("#title").insertAdjacentHTML("afterbegin", data.name);
    item.querySelector("#price").insertAdjacentHTML("afterbegin", data.price);
    item.querySelector("#description").insertAdjacentHTML("afterbegin", data.description);
    item.querySelector("#colors").insertAdjacentHTML("beforeend", data.colors.map(color => `<option value="${color}">${color}</option>`).join());
};

//----------------------------------------------- Eventlistener : ----------------------------------------------------//

let chosenProduct = {}     //variable pour stocker les infos produit sélectionnés

// id du produit choisi
  chosenProduct.id = id
  console.log(chosenProduct.id)

// Couleur du produit choisi
  let productColor = document.getElementById('colors').addEventListener("input", (data) => {
    
  let chosenColor = data.target.value;              // récupère la valeur sélectionné                     
    
  chosenProduct.color = chosenColor
  
  console.log(chosenColor);
    
});

// Quantité du produit sélectionné
  let productQuantity = document.getElementById('quantity').addEventListener('input', (data) =>{
    
    let chosenQuantity = parseInt(data.target.value);
    
    chosenProduct.quantity = chosenQuantity

    console.log(chosenQuantity)
    
  });                                   

// Bouton Validé
  let btnAddToCart = document.getElementById('addToCart')

  btnAddToCart.addEventListener('click', function() {

  if (chosenProduct.quantity < 1 || chosenProduct.quantity > 100 || chosenProduct.quantity === undefined || chosenProduct.color === "" || chosenProduct.color === undefined){
    alert("Merci de renseigner une quantité valide et la couleur désirée !") 
  }else{
    
    function SaveDataToLocalStorage(chosenProduct){
      let cart = [];

      cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      cart.push(chosenProduct);
      
      localStorage.setItem('cart', JSON.stringify(cart));

      console.log(chosenProduct)
      alert("Ajouté au Panier !")
    } 
     return SaveDataToLocalStorage(chosenProduct)
  }
})

/*


    
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





*/

//    function save(_id, _color, _quantity) {
  //forCart.push(choosenProduct);
 // return (localStorage.forCart = JSON.stringify(forCart))  
// }