/* SHOW TOTAL SUM*/
let cart = localStorage.getItem('panier')
cart = JSON.parse(cart)

let sum = 0;
    for (product of cart){
        sum = sum + product.price;
    }

/* GET OTHER ITEM IN LOCAL STORAGE; CONTACT*/

let order = localStorage.getItem('order')
order = JSON.parse(order)


for (item of order){

    let anchor = document.getElementById('confirmation')

    let thanks = document.createElement('h1')
    let confirmOrder = document.createElement('p')
    let confirmId = document.createElement('p')

    thanks.innerText = "Merci " + item.contact.firstName + "!"
    confirmOrder.innerText = "Votre commande d'un total de " + sum + "€ a été enregistrée."
    confirmId.innerText = "N° de commande: " + item.orderId

    anchor.appendChild(thanks);
    anchor.appendChild(confirmOrder);
    anchor.appendChild(confirmId);
}

/*OPTION 2 w/o clients name
const linkPage = window.location.search;
const urlParams = new URLSearchParams(linkPage);
const orderId = urlParams.get('_id');

let anchor = document.getElementById('confirmation')

let thanks = document.createElement('h1')
let confirmOrder = document.createElement('p')
let confirmId = document.createElement('p')

thanks.innerText = "Merci !"
confirmOrder.innerText = "Votre commande d'un total de " + sum + "€ a été enregistrée."
confirmId.innerText = "N° de commande: " + orderId

anchor.appendChild(thanks);
anchor.appendChild(confirmOrder);
anchor.appendChild(confirmId);*/