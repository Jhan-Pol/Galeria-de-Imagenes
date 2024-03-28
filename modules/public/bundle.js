'use strict';

const imgs = document.querySelectorAll(".carruselImgs");
var items = [imgs.length];
const reconozingCarrusel = () => {
    for(let i = 0; i < imgs.length; i++) {
      items[i] = imgs[i].id; 
        if(pais) {
          change.src = `imgs/${pais}.jpg`;
          console.log(pais);
        }
        console.log(imgs[i]);
    }
    console.log(items);
    console.log(pais);
};

const arrowRight = document.getElementById("forward");
const arrowLeft = document.getElementById("back");
let siguientePais, anteriorPais;
const toRight = (pais) => {
    arrowRight.addEventListener("click", (e) => {
        for(let i = 0; i < imgs.length; i++) {
            if(pais == items[i]) {
                change.src = `imgs/${items[i + 1]}.jpg`;
                console.log(pais);
                console.log(items[i]);
                siguientePais = items[i + 1];
            }        }
        pais = siguientePais;
        console.log(e);
    });
};
const toLeft = (pais) => {
    arrowLeft.addEventListener("click", () => {
        for(let i = 0; i < imgs.length; i++) {
            if(pais == items[i]) {
                change.src = `imgs/${items[i - 1]}.jpg`;
                console.log(pais);
                console.log(items[i]);
                anteriorPais = items[i - 1];
            }
        }
        pais = anteriorPais;
        console.log(pais);
    });
};

//Variables
const modal = document.querySelector(".Principal-Galeria");
const cards = document.querySelectorAll(".cards");
var change = document.getElementById("change");
const firstImg = document.getElementById("firstImg");
const principalContainer = document.getElementById("principal-container");
var pais;
var paises = ["america", "europa", "africa", "asia", "oceania", "antartida"];
const body = principalContainer.parentElement;
//Funciones
const introModal = () => {
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.position = "fixed";
  modal.setAttribute("class","Principal-Galeria activa");
};
const reconozing = (cards, pais, paises) => {
  for(let i = 0; i < cards.length; i++) {
    if(pais == paises[i]) {
      pais = paises[i];
      console.log(pais);
      console.log(change);
      change.src = `imgs/${pais}.jpg`;
      for(let i = 0; i < imgs.length; i++) {
        imgs[i].id = `${pais}${i}`;
        imgs[i].src = `imgs/${pais}${i}.jpg`;
      }      firstImg.id = pais;
      firstImg.src = `imgs/${pais}.jpg`;
    }
  }
      introModal();
};
var finish = (cards, reconozing) => {
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      pais = e.target.id;
      console.log(`${pais}`);
      console.log(cards.length);
      console.log(paises);
      reconozing(cards, pais, paises);
      toRight(pais);
      toLeft(pais);
      console.log(`${pais}`);
      });
    });
};

const buttonExit = document.getElementById("exit");
buttonExit.addEventListener("click", () => {
    body.style.display = "block";
    body.style.position = "relative";
    modal.classList.remove("activa");
});

finish(cards, reconozing);
if(finish) {
    finish(imgs, reconozingCarrusel);
}
