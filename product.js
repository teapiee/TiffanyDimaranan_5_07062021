const linkPage = window.location.search;
const urlParams = new URLSearchParams(linkPage);
const teddyId = urlParams.get('_id');
console.log(teddyId);


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
        teddyImg.setAttribute('src', teddyInfo.imageUrl);
        teddyDescrip.innerText = teddyInfo.description;
        

        anchor.appendChild(teddy)
        teddy.appendChild(teddyName)
        teddy.appendChild(teddyPrice)
        teddy.appendChild(teddyImg)
        teddy.appendChild(teddyDescrip)

    })
}

chosenTeddy();




//const linkPage = window.location.href;
//const teddyId = linkPage.split('_id=');
//console.log(teddyId);