function afficherLeToutSousFormeDeDivisions(nounours) {
    
    let anchor = document.getElementById("affichertout");
    for (let elem of nounours) {
        let product = document.createElement("div");
        let img = document.createElement("img");
        let button = document.createElement("button");
        let para = document.createElement("p");
        let link = document.createElement('a'); 

        img.setAttribute('src', elem.imageUrl);
        button.innerHTML = '<a href="./product.html?_id='+elem._id+'">Voir le produit</a>'
        product.classList.add('product');
        para.innerText = elem.name + ' à ' + elem.price/100 + '€';
        
        
        anchor.appendChild(product)
        product.appendChild(img)
        product.appendChild(para)
        product.appendChild(button)
        button.appendChild(link)

    }
  }

  async function showAll() {
    await fetch('http://localhost:3000/api/teddies') 
      .then((response) => response.json()) 
      .then((nounours) => afficherLeToutSousFormeDeDivisions(nounours)) 
  }
  
  showAll()



  




