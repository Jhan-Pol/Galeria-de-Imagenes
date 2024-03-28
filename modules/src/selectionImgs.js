//Variables
const modal = document.querySelector(".Principal-Galeria");
const cards = document.querySelectorAll(".cards");
var change = document.getElementById("change");
const firstImg = document.getElementById("firstImg");
const principalContainer = document.getElementById("principal-container");
var pais, key;
var paises = ["america", "europa", "africa", "asia", "oceania", "antartida"];
const paisesAsia = ["asia1", "asia2", "asia3", "asia4", "asia5"];
const body = principalContainer.parentElement;
import {imgs} from "./carrusel";
import { toRight, toLeft} from "./arrows";
var indexImg;
//Funciones
const introModal = () => {
  body.style.display = "flex"
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
      };
      firstImg.id = pais;
      firstImg.src = `imgs/${pais}.jpg`;
    }
  }
      introModal();
}
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
      })
    })
};
export {modal,cards,change,principalContainer,pais,paises,body,finish, paisesAsia, reconozing, indexImg, key};