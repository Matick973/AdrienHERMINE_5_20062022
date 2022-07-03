let productID = params.get("{product-ID}")

fetch("http://localhost:3000/api/products/{product-ID}") //accès API par produit

.then((response) => response.json())
.then((data) => {
  //console.table(data);
  unCanapeApi(data);
})
  
.catch((err) => {
  document.querySelector('#item').innerHTML = '<h1>Erreur API</h1>';
  console.log('erreur');                // Si Erreur afficher en HTML ET console
});

function unCanapeApi(data) {    //fonction pour contenir ma boucle, et afficher les données API

  document.querySelector("#item").innerHTML += // innerHTML pour insérer du code HTML à la page index; "a href" qui redirige vers la page product.html
  `<a href="./product.html?_id=${article._id}">         
    <article>
    <img src="${article.imageUrl}" alt="${article.altTxt}">
    <h3 class="productName">${article.name}</h3>
    <p class="productDescription">${article.description}</p>
    </article>
  </a>`;
  
  console.table(Array);
};






/*
    
  console.table(data[1]);
  console.table(data[2]);
  document.getElementsByClassName('productName').innerHTML = data[0].name;
ocument.getElementsByClassName('productName').innerHTML = data.name;
    document.getElementsByClassName("productDescription").innerHTML = data.description;

    let lesCanapes = document.querySelector("#items");
    
    for (i = 0; i < article; i++) {
  
      lesCanapes.innerHTML = `<a href="./product.html?_id=${article._id}">
        <article>
          <img src="${article.imageUrl}" alt="${article.altTxt}">
          <h3 class="productName">${article.name}</h3>
          <p class="productDescription">${article.description}</p>
        </article>
      </a>`;
    }



document.getElementsByClassName("productName");
  document.getElementsByClassName("productDescription");
  

  for (let product of listProduct) {
        product = new Product(product);
        listItem.insertAdjacentHTML("beforeend", product.toHtml());
    }



}

`<a href="./product.html?_id=${products._id}"></a>
                                            <article>
                                            <img src="${products.imageUrl}" alt="${products.altTxt}">
                                            <h3 class="productName">${products.name}</h3>
                                            <p class="productDescription">${products.description}</p>
                                            </article>`



let imageKanape = document.querySelector("article div.item__img");
let titre = document.getElementsByClassName("productName");
let description = document.getElementsByClassName("productDescription");
let couleurOption = document.querySelector("#colors");
let prix = document.querySelector("#price");


*/


/*
  async function loadProduct() {
    let id = (new URL(window.location).searchParams.get("id"));
    let config = await Config.getConfig();
    let result = await fetch(config.getServerPath() + "/" + id);
    let product = new Product(await result.json());

    let item = document.querySelector(".item");
    item.querySelector(".item__img").insertAdjacentHTML("afterbegin", `<img src="${product.imageUrl}" alt="Photographie d'un canapé ${product.name}">`);

    item.querySelector("#title").insertAdjacentHTML("afterbegin", product.name);

    item.querySelector("#price").insertAdjacentHTML("afterbegin", product.price);

    item.querySelector("#description").insertAdjacentHTML("afterbegin", product.description);

    item.querySelector("#colors").insertAdjacentHTML("beforeend", product.colors.map(color => `<option value="${color}">${color}</option>`).join());

    document.querySelector("#addToCart").addEventListener("click", function() {
        if (document.querySelector("#quantity").reportValidity() &&
            document.querySelector("#colors").reportValidity()) {
            product.quantity = parseInt(document.querySelector("#quantity").value);
            product.color = document.querySelector("#colors").value;
            Basket.add(product);
            window.location.assign("cart.html");
        }
    });
}

loadProduct();

*/