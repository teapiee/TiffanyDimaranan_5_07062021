let cart = localStorage.getItem('panier')
cart = JSON.parse(cart)

let sum = 0;
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

    let anchortotalPrice = document.getElementById('prixtotal')
    let totalPrice = document.createElement('p')
    totalPrice.innerText = "Le prix total est de " + sum + '€'
    anchortotalPrice.appendChild(totalPrice)



/*let anchor = document.getElementById("panier")

let teddyName = document.createElement("div")
let teddyColor = document.createElement("div")
let teddyPrice = document.createElement("div")*/


/*teddyName.textContent = JSON.stringify(getName)
anchor.appendChild(teddyName)*/





/*let panier = document.createElement('h1')

let product = localStorage.getItem('panier')
product =  JSON.parse(product)
console.log(product)


panier.textContent = JSON.stringify(product)
anchor.appendChild(panier)*/

