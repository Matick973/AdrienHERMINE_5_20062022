let cart = getCart()
let totalPriceArray = []
let oneProduct = []
let AllProduct = []

//----------------------------------------------- Fonction du panier : ----------------------------------------------------//

function getCart(){
    let cart = localStorage.getItem('cart');
    if (cart == null || cart == undefined || cart == 0) {
        document.getElementById('cartAndFormContainer').innerHTML = "<h1>Votre Panier est vide</h1>";
        return [];
    } else {
        return JSON.parse(cart);
    }
    // Récupère le panier
    // Créer un panier Vide si panier = 0
    // Sinon retour objet
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
};
// Sauvegarde le panier en Json Stringify

function getTotalProduct() {                                
    totalProduct = 0;
    for (let product of cart) { 
        totalProduct += parseInt(product.quantity);
    }
    return parseInt(totalProduct);
}
document.getElementById('totalQuantity').insertAdjacentHTML("afterbegin", getTotalProduct());
// Génère le nombre produit total
// Pour tout les produit de panier : Addition

function getTotalPrice(oneProduct) {
    let onePrice = oneProduct.quantity * oneProduct.price
    //console.log(onePrice)
    totalPriceArray.push(onePrice)
}

function displayTotalPrice (){
    const initialValue = 0;
    let sumWithInitial = totalPriceArray.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);
    //console.log(sumWithInitial)
    document.getElementById('totalPrice').innerHTML = '';
    document.getElementById('totalPrice').insertAdjacentHTML("afterbegin", parseInt(sumWithInitial));
}
// Génère un tableau totalPriceArray avec reduce pour obtenir le prix total

function removeFromCart(oneProduct) {
    let cart = getCart()
    cart = cart.filter(p => p.id !== deleteProductId && p.color !== deleteProductColor)
    console.log(cart)
    saveCart(cart)
}

function removeOnClick(){
    let deleteBtn = document.querySelectorAll(".deleteItem");

    for (let j = 0; j < deleteBtn.length; j++){

        let deleteProductId = cart[j].id;
        
        let deleteProductColor = cart[j].color;
        
        deleteBtn[j].addEventListener("click" , (event) => {
            cart = cart.filter(p => p.id !== deleteProductId || p.color !== deleteProductColor)

            saveCart(cart)
            
            alert("Ce produit a bien été supprimé du panier");
            location.reload();
        })
    } 
}

function changeQuantity(){
    let changeInput = document.querySelectorAll('.itemQuantity')

    for (let q = 0; q < changeInput.length; q++){

        changeInput[q].addEventListener("change" , (event) => {
            console.log('event', event)
            console.log(cart[q])
            
            console.log(changeInput[q].value)

            if (changeInput[q].value != undefined || changeInput[q].value <= 100) {
                cart[q].quantity = changeInput[q].value;
                saveCart(cart)
                location.reload()
            }else if(changeInput[q].value <= 0){
                removeFromCart()
                saveCart(cart[q])
                
            }else{
                saveCart(cart[q])
                location.reload()
            }
        });    
    } 
}

function clearCart() {
    let cart = getCart()
    localStorage.removeItem('cart');
}
// Fonction pour dev use only mais pourrait etre utilisé sur un bouton 
//de type "Vider le panier" pour supprimer tout les article du localStorage

//----------------------------------------------- accès API par produit et ciblage : ----------------------------------------------------//

let matchCart = getCart()

matchCart.forEach((product) => {  
fetch("http://localhost:3000/api/products/")                            
.then((response) => response.json())
.then((data) => {
        
    
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
    
    AllProduct.push(oneProduct)
    
    displayProduct(oneProduct)

    getTotalPrice(oneProduct)

    removeOnClick()

    displayTotalPrice()

    changeQuantity()
   
})

.catch((err) => {
    document.getElementById('cart__items').innerHTML = "<h1>Erreur d'accès au Panier</h1>";
    console.log(err); 
});

//--------------------------------------------- fonction pour afficher les données API : ------------------------------------------------//

function displayProduct(oneProduct) {                
    
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

})

//-------------------------------------------------------- Gestion du Formulaire : ------------------------------------------------------//

let contact = {}

const ctrlRegexName = (value) =>{                                    //Regex autorisant Lettre Majuscule-Minuscule + Espace + tiret + virgule + entre 2 et 40 charactères (Ex: Nom Malgache = Andriantsimitoviaminandriandehibe ;  Prenom Chinois = Yu) https://regex101.com/
    return /[a-zA-Z-+, éèàùµ]{2,40}/g.test(value)
};                                                 
const ctrlRegexAddress = (value) =>{                                //Regex '' + quelques caractères spéciaux et sans limitation du nombre de charactères
    return /[a-zA-Z-0-9-+,+ +&é'è_ç^à°]/g.test(value)
} ;
const ctrlRegexEmail = (value) =>{                                  //Regex complexe SO
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(value)
} ;  

function getCustomerInfo(){
    let contact = localStorage.getItem('contact');
    if (contact == null) {
        return [];
    } else {
        return JSON.parse(contact);
    }
    // Récupère le panier
    // Créer un panier Vide si panier = 0
    // Sinon retour objet
}

function saveCustomerInfo(contact) {
    localStorage.setItem('contact', JSON.stringify(contact));
};
// Sauvegarde le panier en Json Stringify
     
function SaveDataCustomerToLocalStorage (){

    document.getElementById('firstName').addEventListener('input', (data) =>{
        
        let firstName = data.target.value;
        
        contact.firstName = firstName

        if (ctrlRegexName(firstName)){
            firstName.insertRow
            document.getElementById('firstName').style.backgroundColor = 'lightgreen'
            document.getElementById('firstName').nextElementSibling.innerHTML = ''
            return true
        } else {
            document.getElementById('firstName').style.backgroundColor = 'lightpink'
            document.getElementById('firstName').nextElementSibling.innerHTML = 'Renseignement obligatoire'
            return false
        }
        
        //console.log(firstName)
    })
    
    document.getElementById('lastName').addEventListener('input', (data) =>{
       
        let lastName = data.target.value;
        
        contact.lastName = lastName
        
        if (ctrlRegexName(lastName)){
            lastName.insertRow
            document.getElementById('lastName').style.backgroundColor = 'lightgreen'
            document.getElementById('lastName').nextElementSibling.innerHTML = ''
            return true
        } else {
            document.getElementById('lastName').style.backgroundColor = 'lightpink'
            document.getElementById('lastName').nextElementSibling.innerHTML = 'Renseignement obligatoire'
            return false
        }

        //console.log(lastName)
    })
    
    document.getElementById('address').addEventListener('input', (data) =>{
        
        let address = data.target.value;
        
        contact.address = address
        
        if (ctrlRegexAddress(address)){
            address.insertRow
            document.getElementById('address').style.backgroundColor = 'lightgreen'
            document.getElementById('address').nextElementSibling.innerHTML = ''
            return true
        } else {
            document.getElementById('address').style.backgroundColor = 'lightpink'
            document.getElementById('address').nextElementSibling.innerHTML = 'Renseignement obligatoire'
            return false
        }
  
        //console.log(address)
    })
    
    document.getElementById('city').addEventListener('input', (data) =>{
        
        let city = data.target.value; 
        
        contact.city = city
        
        if (ctrlRegexName(city)){
            city.insertRow
            document.getElementById('city').style.backgroundColor = 'lightgreen'
            document.getElementById('city').nextElementSibling.innerHTML = ''
            return true
        } else {
            document.getElementById('city').style.backgroundColor = 'lightpink'
            document.getElementById('city').nextElementSibling.innerHTML = 'Renseignement obligatoire'
            return false
        }

        //console.log(city)
    })
    
    document.getElementById('email').addEventListener('input', (data) =>{
        
        let email = data.target.value; 
        
        contact.email = email
        
        if (ctrlRegexEmail(email)){
            email.insertRow
            document.getElementById('email').style.backgroundColor = 'lightgreen'
            document.getElementById('email').nextElementSibling.innerHTML = ''
            return true
        } else {
            document.getElementById('email').style.backgroundColor = 'lightpink'
            document.getElementById('email').nextElementSibling.innerHTML = 'Renseignement obligatoire'
            return false
        }
        
        //console.log(email)
    })
      
   saveCustomerInfo(contact)
  
}
SaveDataCustomerToLocalStorage(contact)

//----------------------------------------------------------------- Post : --------------------------------------------------------------//
function getProductId() {
    if (getCart().length >= 1) {
        return getCart().map(product => product.id);
    } else {
        return [];
    }
}

let products = getProductId()
console.log(products)

let order = {contact, products}
console.log(order)

let btnOrder = document.getElementById("order")
    btnOrder.addEventListener("click", (event)=>{
    event.preventDefault()

    SaveDataCustomerToLocalStorage(contact)
    
    const testViability = products.length !== 0 && Object.keys(contact).length === 5 && Object.values(contact).every(x => x !== null && x !== '' && x !== undefined);

    console.log('testViability', testViability,)
    
    if (testViability){

        fetch("http://localhost:3000/api/products/order", {
            method: "POST",
            body: JSON.stringify(order),
            headers: {"Content-Type": "application/json",},
        })

        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("orderId", data.orderId)
            window.location.href = "/front/html/confirmation.html";
        })
        .catch((err) => {
            console.log('Erreur' + err);                                              // Si Erreur afficher en HTML ET console
          });
    } else {
        console.log(order)
        alert('Merci de renseigner le Formulaire')
    }
})