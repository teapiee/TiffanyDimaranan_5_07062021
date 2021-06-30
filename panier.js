/* GET CART*/
let cart = localStorage.getItem('panier')
cart = JSON.parse(cart)

let sum = 0;

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
}

    /* SHOW TOTAL PRICE */
    let anchortotalPrice = document.getElementById('prixtotal')
    let totalPrice = document.createElement('p')
    totalPrice.innerText = "Le prix total est de " + sum + '€'
    anchortotalPrice.appendChild(totalPrice)

    /* ADD VIDER OU VALIDER PANIER */
    let checkout = document.getElementById("bouton")

    let validerpanier = document.createElement("button")
    let viderpanier = document.createElement("button")

    validerpanier.innerText = "Valider panier"
    viderpanier.innerText = "Vider panier"

    checkout.appendChild(validerpanier)
    checkout.appendChild(viderpanier)


    validerpanier.onclick = function(){
        confirm("Votre commande a bien été validée! Veuillez renseigner vos informations dans le formulaire ci-dessous.")
    }

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
    let formulaire = document.getElementById('formulaire')
    let envoyer = document.createElement('button')
    envoyer.innerText = "Envoyer"
    formulaire.appendChild(envoyer)

    /*when send button is clicked*/
    envoyer.onclick = function(){

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
        "products": [
            product.idProduct
        ]
    }

    console.log(commande);

}