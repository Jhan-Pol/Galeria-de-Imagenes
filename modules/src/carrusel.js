const imgs = document.querySelectorAll(".carruselImgs");
import {change, pais} from "./selectionImgs";
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
export {imgs, reconozingCarrusel, items};