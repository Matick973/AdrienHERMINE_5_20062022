function saveCart(cart){
    localStorage.setItem('cart',JSON.stringify(cart))                  
}                                                                       // Sauvegarde le panier et retour en chaine de charactères

function getCart(){
    let cart = localStorage.getItem('cart');                          // Récupère le panier
    if (cart == null){
        return [];                                                    // Créer un panier Vide si panier = 0
    } else{
        return JSON.parse(cart);                                      // Sinon retour objet
    }
}

function addCart(product){
    let cart = getCart();                                               // Insert le produit dans le tableau (panier)
    let foundProduct = cart.find(p => p._id == product._id && p.color == product.color);
    if (foundProduct != undefined || foundProduct <= 100){
        foundProduct.quantity++;
    }else{
        product.quantity = 1;
        cart.push(product);
    }                                
    saveCart(cart);                                                     // Sauvegarde du panier
}

function removeFromCart(product){
    let cart = getCart();   
    cart = cart.filter(p => p._id != product._id || p.color != product.color)
    saveCart(cart)
}

function changeQuantity(product,quantity) {
    let cart = getCart();                                               // Récupère le Panier
    let foundProduct = cart.find(p => p._id == product._id && p.color == product.color)
    if (foundProduct != undefined) {                                    // Si produit non-trouvé i++
        foundProduct.quantity += quantity;
    }if(foundProduct.quantity <= 0){                                    // Si produit inférieur ou égal à produit supprimé
        removeFromCart(product)
    }else{
         saveCart(cart)                                                 // Sauvegarde du panier 
    }               
}

function getTotalProduct(){                                             // Génère le nombre produit total
    let cart = getCart()                                            
    totalProduct = 0
    for(let product of cart){                                           // Pour tout les produit de panier : Addition
        totalProduct += product.quantity   
    }
    return totalProduct
}

function getTotalPrice(){                                               // Génrère le prix total                         
    let cart = getCart()                                            
    totalPrice = 0
    for(let product of cart){                                           // Pour tout les produis du panier Addition X Prix
        totalPrice += product.quantity * product.price
    }
    return totalPrice
}

function clearCard(){
    localStorage.removeItem('cart');
}

//Credit  tuto suivi sur : https://www.training-dev.fr/Cours/Gerer-un-panier-avec-le-localStorage
