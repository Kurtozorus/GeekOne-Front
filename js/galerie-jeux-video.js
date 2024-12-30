// const disponibilite = document.getElementById("disponibilite");
// const createDiv = document.getElementById("createDiv");

// const { Button } = require("bootstrap");

// createDiv.addEventListener("click", (titre, urlimage, prix) => {
//     return galerieImage.innerHTML += `<div class="col p-3">
//     <div class="card bg-secondary card-width" style="width: 18rem;">
//     <img src="${urlimage}" class="card-img-top">
//     <div class="card-body d-flex flex-row d-flex justify-content-between">
//     <p class="titre-image text-center text-decoration-underline">${titre}</p>
//     <div id="disponibilite"></div>
//     <p>"${prix}"</p>
//     <button class="btn btn-primary">Info</button>
//     </div>
//     <div class="action-image-buttons" data-show="admin">
//     <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
//     <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
//     </div>
//     </div>
//     </div>`;
// })
// console.log("teste2");
// //systeme de disponibilité
// disponibilite.innerHTML = `<span class="text-success">Disponible</span>`;

// //Récupérer les information des images
// let titre = '<img src=x onerror="window.location.replace(\'http://google.com\')">';
// let imgSource = "./images/fc25.webp";
// let prix = "Prix";
// let monImage = getImage(titre , imgSource, prix);


//Montrer cette images

// const arraySectionJeux = [{
//     titre: "call of", urlimage: "../images/dessert.jpg", prix: "59,99 €"
// }];
// function getImage(titre, imgSource, prix){
//     // titre = sanitizeHtml(titre);
//     // imgSource = sanitizeHtml(imgSource);
//     // prix = sanitizeHtml(prix);
//     return `<div class="col p-3">
//     <div class="card bg-secondary card-width" style="width: 18rem;">
//     <img src="${imgSource}" class="card-img-top">
//     <div class="card-body d-flex flex-row d-flex justify-content-between">
//     <p class="titre-image text-center text-decoration-underline">${titre}</p>
//     <div id="disponibilite"></div>
//     <p>"${prix}"</p>
//     <button class="btn btn-primary">Info</button>
//     </div>
//     <div class="action-image-buttons" data-show="admin">
//     <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
//     <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
//     </div>
//     </div>
//     </div>`;
// }

 function displayCard() {
     const galerieImage = document.getElementById("allImages");
     galerieImage.innterHTML = ""; 
     arraySectionJeux.forEach(element => {
         const monImage = getImage(element.titre, element.urlimage, element.prix);
         galerieImage.innterHTML += monImage;
         console.log(monImage);
     })
 }
function ajouter() {
    arraySectionJeux.push({
        titre: "call of", urlimage: "../images/dessert.jpg", prix: "59,99 €"
    });
    addBlock();
}
function addBlock() {
     const galerieJeux = document.getElementById("allImages");
     galerieJeux.innerHTML = "";
     for (let i = 0; i < arraySectionJeux.length; i++) {
        const new_div = document.createElement("div");
        new_div.className = "col p-3";
        new_div.innerHTML = `<div class="card bg-secondary card-width" style="width: 18rem;">
        <img src="${arraySectionJeux[i].urlimage}" class="card-img-top">
        <div class="card-body d-flex flex-row d-flex justify-content-between">
        <p class="titre-image text-center text-decoration-underline">${arraySectionJeux[i].titre}</p>
        <div id="disponibilite"></div>
        <p>"${arraySectionJeux[i].prix}"</p>
        <button class="btn btn-primary">Info</button>
        </div>
        <div class="action-image-buttons" data-show="admin">
        <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
        <Button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>`
    }
    return galerieJeux.appendChild(new_div);
}

//     `<div class="col p-3">
//     <div class="card bg-secondary card-width" style="width: 18rem;">
//     <img src="${imgSource}" class="card-img-top">
//     <div class="card-body d-flex flex-row d-flex justify-content-between">
//     <p class="titre-image text-center text-decoration-underline">${titre}</p>
//     <div id="disponibilite"></div>
//     <p>"${prix}"</p>
//     <button class="btn btn-primary">Info</button>
//     </div>
//     <div class="action-image-buttons" data-show="admin">
//     <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
//     <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
//     </div>
//     </div>
//     </div>`;

 function createCard(titre, urlimage, prix) {
     arraySectionJeux.forEach(element => {
         let galerieImage = document.getElementById("allImages");
         galerieImage.innerHTML = "";
         const card = document.createElement("div");
         card.classList.add("col", "p-3");
  
         const cardContent = document.createElement("div");
         card.content.classList.add("card", "bg-secondary", "card-width");
         card.content.style.width = "18rem";
  
         const cardImage = document.createElement("img");
         cardImage.src = urlimage;
         cardImage.classList.add("card-img-top");
  
         const cardBody = document.createElement("div");
         cardBody.classList.add("card-body", "d-flex", "flex-row", "d-flex", "justify-content-between");
  
         const cardTitle = document.createElement("p");
         cardTitle.classList.add("titre-image", "text-center", "text-decoration-underline");
         cardTitle.textContent = titre;
  
         const disponibilite = document.createElement("div");
         disponibilite.id = "disponibilite";
  
         const cardPrix = document.createElement("p");    
         cardPrix.textContent = prix;
  
         const cardButton = document.createElement("button");
         cardButton.classList.add("btn", "btn-primary");
         cardButton.textContent = "Info";
  
         cardBody.appendChild(cardTitle);
         cardBody.appendChild(disponibilite);
         cardBody.appendChild(cardPrix);
         cardBody.appendChild(cardButton);
  
         cardContent.appendChild(cardImage);
         cardContent.appendChild(cardBody);
  
         card.appendChild(cardContent);
  
         galerieImage.appendChild(card);
  
         const actionImageButtons = document.createElement("div");
         actionImageButtons.classList.add("action-image-buttons", "data-show", "admin");
  
         const editButton = document.createElement("button");
         editButton.classList.add("btn", "btn-outline-light");
         editButton.setAttribute("data-bs-toggle", "modal");
         editButton.setAttribute("data-bs-target", "#EditionPhotoModal");
         editButton.innerHTML = `<i class="bi bi-pencil-square"></i>`;
  
         const deleteButton = document.createElement("button");
         deleteButton.classList.add("btn", "btn-outline-light");
         deleteButton.setAttribute("data-bs-toggle", "modal");
         deleteButton.setAttribute("data-bs-target", "#DeletePhotoModal");
         deleteButton.innerHTML = `<i class="bi bi-trash"></i>`;
  
         actionImageButtons.appendChild(editButton);
         actionImageButtons.appendChild(deleteButton);
  
         card.appendChild(actionImageButtons);
  
         return  galerieImage.appendChild(card);
      
     })
 }