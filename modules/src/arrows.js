const arrowRight = document.getElementById("forward");
const arrowLeft = document.getElementById("back");
let siguientePais, anteriorPais;
import { items } from "./carrusel";
import { pais, change} from "./selectionImgs";
import { imgs } from "./carrusel";
const toRight = (pais) => {
    arrowRight.addEventListener("click", (e) => {
        for(let i = 0; i < imgs.length; i++) {
            if(pais == items[i]) {
                change.src = `imgs/${items[i + 1]}.jpg`;
                console.log(pais);
                console.log(items[i]);
                siguientePais = items[i + 1];
            };
        }
        pais = siguientePais;
        console.log(e);
    });
}
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
}
export {arrowRight, arrowLeft, toRight, toLeft, siguientePais, anteriorPais};