

/*

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