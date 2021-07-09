/* GET CART*/
let cart = localStorage.getItem('panier')
cart = JSON.parse(cart)


if (cart === null){
    let anchornull = document.getElementById('paniervide')
    let cartvide = document.createElement('h1')
    cartvide.innerText = "Votre panier est vide"
    anchornull.appendChild(cartvide)
}   else {
    let sum = 0;
    let allProductId = [];

    /* SHOW ITEMS IN CART */
    for (product of cart){

        let anchorname = document.getElementById('teddyname')
        let anchorcolor = document.getElementById('teddycolor')
        let anchorprice = document.getElementById('teddyprice')

        let teddyName = document.createElement('p')
        let teddyColor = document.createElement('p')
        let teddyPrice = document.createElement('p')

        teddyName.innerText = product.name;
        teddyColor.innerText = product.color;
        teddyPrice.innerText = product.price + "€";
        
        anchorname.appendChild(teddyName)
        anchorcolor.appendChild(teddyColor)
        anchorprice.appendChild(teddyPrice)

        sum = sum + product.price;
        allProductId.push(product.idProduct);
    }

        /* SHOW TOTAL PRICE */
        let anchortotalPrice = document.getElementById('prixtotal')
        let totalPrice = document.createElement('p')
        totalPrice.innerText = "Le prix total est de " + sum + '€'
        anchortotalPrice.appendChild(totalPrice)

        /* ADD VIDER PANIER */
        let checkout = document.getElementById("bouton")
        let viderpanier = document.createElement("button")
        viderpanier.innerText = "Vider panier"
        checkout.appendChild(viderpanier)

        viderpanier.onclick = function(){
            if (confirm("Vous êtes sûr de vouloir vider votre panier?") ) {
                localStorage.removeItem("panier");
                window.location.href = "index.html";

            } else {
                null
            }
        }


        /* FORMULAIRE */

        /* create button send */
        let formulaire = document.getElementById('commandform')
        let envoyer = document.createElement('button')
        envoyer.innerText = "Valider panier"
        formulaire.appendChild(envoyer)

        /* GET ELEMENT OF FORMULAIRE FOR VALIDITY */
        let firstName = document.getElementById('prenom');
        let lastName = document.getElementById('nom');
        let address = document.getElementById('adresse');
        let city = document.getElementById('ville');
        let mail = document.getElementById('email');

        /*when send button is clicked*/
        envoyer.onclick = function(){

            /* CHECK VALIDITY*/
            if (firstName.checkValidity() && lastName.checkValidity() && address.checkValidity() &&
            city.checkValidity() && mail.checkValidity()){
            /*if true then execute rest of the code*/
        
            /* get value of form */
            let clientPrenom = document.getElementById('prenom').value;
            let clientNom = document.getElementById('nom').value;
            let clientAdresse = document.getElementById('adresse').value;
            let clientVille = document.getElementById('ville').value;
            let clientEmail = document.getElementById('email').value;
            
            /*make an object to store data */
            const commande = {"contact": {
                    "firstName": clientPrenom,
                    "lastName": clientNom,
                    "address": clientAdresse,
                    "city": clientVille,
                    "email": clientEmail,
                },
                "products": allProductId
            }
            
            const send = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(commande),
            };

            fetch('http://localhost:3000/api/teddies/order', send) 
                .then((response) => response.json()) 
                .then((response) => {

                    console.log(response)
                    let orderID = response.orderId

                    let emptyarray = []
                    localStorage.setItem("order", JSON.stringify(emptyarray))

                    let order = localStorage.getItem("order") 
                    order =  JSON.parse(order) 
                    order.push(response) 
                    localStorage.setItem("order" , JSON.stringify(order))

                    envoyer.innerHTML = '<a href="./confirmation.html?_id='+orderID+'">Valider panier</a>'
                })

                
            }else{
                alert("Le formulaire n'est pas correctement renseigné")
                return false
            }

        }

}