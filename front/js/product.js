let id = (new URLSearchParams(document.location.search).get("_id"))         // variable pour création Url pour Canape ciblé avec "_id" 

fetch("http://localhost:3000/api/products/" + id)                           //accès API par produit et ciblage avec  "+ id" 
.then((response) => response.json())
.then((data) => {
  unCanapeApi(data)
  console.log(data);                                                        //log un objet du tableau
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
  console.log(chosenProduct)

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
  })

 
// Bouton Validé
  let btnAddToCart = document.getElementById('addToCart')

  btnAddToCart.addEventListener('click', function() {


  if (chosenProduct.quantity < 1 || chosenProduct.quantity > 100 || chosenProduct.quantity === undefined || chosenProduct.color === "" || chosenProduct.color === undefined){
    alert("Merci de renseigner une quantité valide et la couleur désirée !") 
  }else{
    
    function SaveDataToLocalStorage(chosenProduct){
      let cart = [];                                          // Création du tableau

      cart = JSON.parse(localStorage.getItem('cart')) || [];  // Accès au panier 'cart' ou création du panier 'cart'
      
      let foundProduct = cart.find(p => p.id == chosenProduct.id && p.color == chosenProduct.color) ;
      if (foundProduct != undefined || foundProduct< 100) {
        foundProduct.quantity = foundProduct.quantity + chosenProduct.quantity;                             // Quantité incrémenté +1 si produit présent ou inférieur à 1
      } else {
        chosenProduct.quantity;                          // Si produit présent ajouté produit X1
        cart.push(chosenProduct)                             // Ajout produit au tableau
      }
     
      localStorage.setItem('cart', JSON.stringify(cart));   // Sauvegarde du panier 'cart'

      console.log(chosenProduct)                            // Vérification des objets envoyés
      alert("Ajouté au Panier !")                           // Information au client 
    } 
    return SaveDataToLocalStorage(chosenProduct)            // Retour des données de l'execution de la fonction
  }
})