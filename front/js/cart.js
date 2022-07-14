function canapeCart(data) {                                                //fonction pour afficher les données API
    document.querySelector("#cart__item__content__description").innertHTML = localStorage.getItem(<h2>data.name</h2><p>${choosenColor}</p><p>data.price</p>);

   
};

/*
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