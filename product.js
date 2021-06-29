const linkPage = window.location.search;
const urlParams = new URLSearchParams(linkPage);
const teddyId = urlParams.get('_id');
/*console.log(teddyId);*/


async function chosenTeddy() {
    await fetch(`http://localhost:3000/api/teddies/${teddyId}`)
      .then((response) => response.json()) 
      .then((teddyInfo) => {
        let anchor = document.getElementById("chosenteddy");

        let teddy = document.createElement("div");
        let teddyName = document.createElement("h1");
        let teddyPrice = document.createElement("h2");
        let teddyImg = document.createElement("img");
        let teddyDescrip = document.createElement("p");

        teddy.classList.add('teddyinfo');
        teddyName.innerText = teddyInfo.name;
        teddyPrice.innerText = teddyInfo.price/100 + '€';
        teddyImg.src =  teddyInfo.imageUrl;
        teddyDescrip.innerText = teddyInfo.description;
        
        anchor.appendChild(teddy)
        teddy.appendChild(teddyName)
        teddy.appendChild(teddyPrice)
        teddy.appendChild(teddyImg)
        teddy.appendChild(teddyDescrip)

        /*Color options for Teddy*/
        const colorAvailable = teddyInfo.colors;
          
          for (color of colorAvailable){
               let ancre = document.getElementById("color");
               let teddyColors = document.createElement('option');
               teddyColors.innerText = color;
               ancre.appendChild(teddyColors)
          }  



        /*BUTTON ADD TO CART*/

       /*create an empty cart*/
        let array = []
        if (!localStorage.getItem("panier")){ /*if cart does not exist then...*/
        localStorage.setItem("panier", JSON.stringify(array)) /*create a cart with empty array*/
        }
  
        /*create add to cart button*/
        let addToCart = document.getElementById("addtocart")
        let btnCart = document.createElement("button")
        btnCart.innerText = "Ajouter au panier"
        addToCart.appendChild(btnCart)
        
        /*when button is clicked*/
        addToCart.onclick = function(){

          let panier = localStorage.getItem("panier") /*get empty cart*/
          panier =  JSON.parse(panier) /*parse cart*/

          const colorChosen = document.getElementById('color').value; /*take the value of option*/

          /*create object*/
          const chosenProduct = 
            {idProduct: teddyInfo._id, 
            name: teddyInfo.name,
            color:colorChosen, 
            price:teddyInfo.price/100,
            image:teddyInfo.imageUrl}
          
          /*console.log(chosenProduct)
          console.log(panier)*/

          if (panier.length == 0){
            panier.push(chosenProduct) /*add to panier*/
            localStorage.setItem("panier" , JSON.stringify(panier))}

            else{ /*cart is not empty, then we can still add another item*/
              panier.push(chosenProduct) 
              localStorage.setItem("panier" , JSON.stringify(panier))
              console.log(panier)}
        }
   
    })
}

chosenTeddy();