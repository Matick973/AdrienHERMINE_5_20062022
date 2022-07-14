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
        localStorage.removeItem(cart);
    }
    // Vide le panier

/*








*/