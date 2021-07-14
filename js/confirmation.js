/* GET TOTAL SUM*/
let cart = localStorage.getItem('panier')
cart = JSON.parse(cart)

let sum = 0;
    for (product of cart){
        sum = sum + product.price;
    }

/* DISPLAY MESSAGE OF CONFIRMATION */
function afficherConfirmation(){
    let order = localStorage.getItem('order')
    order = JSON.parse(order)
    
    let anchor = document.getElementById('confirmation')

    let thanks = document.createElement('h1')
    let confirmOrder = document.createElement('p')
    let confirmId = document.createElement('p')

    thanks.innerText = "Merci " + order.contact.firstName + "!"
    confirmOrder.innerText = "Votre commande d'un total de " + sum + "€ a été enregistrée."
    confirmId.innerText = "N° de commande: " + order.orderId

    anchor.appendChild(thanks);
    anchor.appendChild(confirmOrder);
    anchor.appendChild(confirmId);
}
afficherConfirmation();