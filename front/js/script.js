  fetch("http://localhost:3000/api/products/") //accès API général

  .then((response) => response.json())
  .then((data) => {
    //console.table(data);
    lesCanapesApi(data);
  })
    
  .catch((err) => {
    document.getElementById('items').innerHTML = '<h1>Erreur API</h1>';
    console.log('erreur');                // Si Erreur afficher en HTML ET console
});

function lesCanapesApi(data) {    //fonction pour contenir ma boucle, et afficher les données API

  for (article of data){    //Boucle qui répète article tant qu'il y a des données dans l'API

    document.querySelector("#items").innerHTML += // innerHTML pour insérer du code HTML à la page index; "a href" qui redirige vers la page product.html
    `<a href="./product.html?_id=${article._id}">         
      <article>
      <img src="${article.imageUrl}" alt="${article.altTxt}">
      <h3 class="productName">${article.name}</h3>
      <p class="productDescription">${article.description}</p>
      </article>
    </a>`;
    
    console.table(Array);
  };
}