/* GET CART*/
let cart = localStorage.getItem('panier')
cart = JSON.parse(cart)

if (cart === null || cart.length === 0){ // if cart is empty then show message //
    let anchornull = document.getElementById('paniervide')
    let cartvide = document.createElement('h1')
    cartvide.innerText = "Votre panier est vide"
    anchornull.appendChild(cartvide)

}else { // if cart has item/s //

    let sum = 0;     
    let allProductId = [];   

    function displayItemsinCart() {   /* DISPLAY ITEMS IN CART */
        for (product of cart){

        let anchorName = document.getElementById('teddyname')
        let anchorColor = document.getElementById('teddycolor')
        let anchorPrice = document.getElementById('teddyprice')

        let teddyName = document.createElement('p')
        let teddyColor = document.createElement('p')
        let teddyPrice = document.createElement('p')

        teddyName.innerText = product.name;
        teddyColor.innerText = product.color;
        teddyPrice.innerText = product.price + "€";
        
        anchorName.appendChild(teddyName)
        anchorColor.appendChild(teddyColor)
        anchorPrice.appendChild(teddyPrice)

        sum = sum + product.price;              //equation for total price//
        allProductId.push(product.idProduct);   //adds every idproduct in the cart to allProductId array//
        }

        let anchorTotalPrice = document.getElementById('prixtotal') /* SHOW TOTAL PRICE */
        let totalPrice = document.createElement('p')
        totalPrice.innerText = "Le prix total est de " + sum + '€'
        anchorTotalPrice.appendChild(totalPrice)
    }

    /* ADD VIDER PANIER */
    function buttonEmptyCart(){
        let checkOut = document.getElementById("bouton")
        let viderPanier = document.createElement("button")
        viderPanier.innerText = "Vider panier"
        checkOut.appendChild(viderPanier)

        viderPanier.onclick = function(){
            if (confirm("Vous êtes sûr de vouloir vider votre panier?") ) {
                localStorage.removeItem("panier");
                window.location.href = "index.html";

            } else {
                null
            }
        }
    }

    /* FORMULAIRE */

    //create button send//
    let formulaire = document.getElementById('commandform')
    let envoyer = document.createElement('button')
    envoyer.innerText = "Valider panier"
    formulaire.appendChild(envoyer)

    // get element of form for validity//
    let firstName = document.getElementById('prenom');
    let lastName = document.getElementById('nom');
    let address = document.getElementById('adresse');
    let city = document.getElementById('ville');
    let mail = document.getElementById('email');

    //when send button is clicked//
    envoyer.onclick = function(event){
        event.preventDefault()

        /* CHECK VALIDITY*/
        if (firstName.checkValidity() && lastName.checkValidity() && address.checkValidity() &&
        city.checkValidity() && mail.checkValidity()){
        
            let clientPrenom = document.getElementById('prenom').value; //get value of form//
            let clientNom = document.getElementById('nom').value;
            let clientAdresse = document.getElementById('adresse').value;
            let clientVille = document.getElementById('ville').value;
            let clientEmail = document.getElementById('email').value;
                      
            const commande = {contact: { //make an object to store data//
                firstName: clientPrenom,
                lastName: clientNom,
                address: clientAdresse,
                city: clientVille,
                email: clientEmail,
                },
                products: allProductId
                }
            
            /* POST REQUEST*/
            const send = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', },
            body: JSON.stringify(commande),
            };

            fetch('http://localhost:3000/api/teddies/order', send) 
                .then((response) => response.json()) 
                .then((response) => {
                    localStorage.setItem("order", JSON.stringify(response)) //create order key; with all the user's contact info and orderId// 
                    window.location.href = "confirmation.html" //redirect to confirmation page//
                })
             
        }else{ //else statement of checkValidity//
            alert("Le formulaire n'est pas correctement renseigné")
            return false
        }
    }
}

displayItemsinCart()
buttonEmptyCart()