/* DISPLAY ALL TEDDIES WITH EACH THEIR NAME, PHOTO AND PRICE*/
function displayAllTeddies(nounours) {
    let anchor = document.getElementById("affichertout");
    for (let elem of nounours) {
        let product = document.createElement("div");
        let img = document.createElement("img");
        let button = document.createElement("button");
        let para = document.createElement("p");

        product.classList.add('product');
        img.setAttribute('src', elem.imageUrl);
        button.innerHTML = '<a href="./product.html?_id='+elem._id+'">Voir le produit</a>'
        para.innerText = elem.name + ' à ' + elem.price/100 + '€';
        
        anchor.appendChild(product)
        product.appendChild(img)
        product.appendChild(para)
        product.appendChild(button)
    }
  }

  /* GET REQUEST TEDDIES INFO*/
  async function showAll() {
    await fetch('http://localhost:3000/api/teddies') 
      .then((response) => response.json()) 
      .then((nounours) => displayAllTeddies(nounours)) 
      .catch(error => {
        console.log(error)
        alert('Un problème est survenu lors de la connexion aux serveur')
      })
  }
  
  showAll()