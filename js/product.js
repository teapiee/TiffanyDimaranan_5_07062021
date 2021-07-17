/*GET ID FROM URL LINK*/
const linkPage = window.location.search;
const urlParams = new URLSearchParams(linkPage);
const teddyId = urlParams.get('_id');

/* DISPLAY CHOSEN TEDDY: name, price, image, description and color option*/
function showChosenTeddy(teddyInfo) {
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

    const colorAvailable = teddyInfo.colors; //color options for chosen teddy//
      for (color of colorAvailable){
        let ancre = document.getElementById("color");
        let teddyColors = document.createElement('option');
        teddyColors.innerText = color;
        ancre.appendChild(teddyColors)
      }  
}

/* CREATE CART; CREATE BUTTON ADD TO CART; ADD ITEMS TO CART*/
function addToCart(teddyInfo){
  if (!localStorage.getItem("panier")){ /*if cart does not exist then...*/
  localStorage.setItem("panier", JSON.stringify([])) /*create a cart with empty array*/
  }
  
  //create add to cart button//
  let addToCart = document.getElementById("addtocart")
  let btnCart = document.createElement("button")
  btnCart.innerText = "Ajouter au panier"
  addToCart.appendChild(btnCart)
        
  addToCart.onclick = function(){
    let panier = localStorage.getItem("panier") //get cart//
    panier =  JSON.parse(panier)

    const colorChosen = document.getElementById('color').value; /*take the value of option*/

    //create object//
    const chosenProduct = 
    {idProduct: teddyInfo._id, 
    name: teddyInfo.name,
    color:colorChosen, 
    price:teddyInfo.price/100,
    image:teddyInfo.imageUrl}
          
    //if cart is empty then add item to panier// 
    if (panier.length == 0){
      panier.push(chosenProduct) 
      localStorage.setItem("panier" , JSON.stringify(panier))}

    else{ //cart is not empty, then we can still add another item//
      panier.push(chosenProduct) 
      localStorage.setItem("panier" , JSON.stringify(panier))
      console.log(panier)}
    
    alert("Le produit a bien été ajouté!") 
  }
}

/* GET REQUEST CHOSEN TEDDY*/
async function fetchChosenTeddy() {
  await fetch(`http://localhost:3000/api/teddies/${teddyId}`)
    .then((response) => response.json()) 
    .then((teddyInfo) => {
      showChosenTeddy(teddyInfo)
      addToCart (teddyInfo)})
    .catch(error => {
        console.log(error)
        alert('Un problème est survenu lors de la connexion aux serveur')
    })
}
fetchChosenTeddy()