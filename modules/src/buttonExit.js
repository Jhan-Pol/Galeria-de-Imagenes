import {modal, body} from "./selectionImgs";
const buttonExit = document.getElementById("exit");
export default buttonExit.addEventListener("click", () => {
    body.style.display = "block";
    body.style.position = "relative";
    modal.classList.remove("activa");
});
