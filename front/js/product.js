let id = (new URLSearchParams(document.location.search).get("_id"))         // variable pour création Url pour Canape ciblé avec "_id" 
console.log(id)

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
