// Seletores
const openPopupButton = document.getElementById("open-login-popup");
const closePopupButton = document.getElementById("close-login-popup");
const popup = document.getElementById("login-popup");
const popupContent = document.getElementById("popup-content");

// Abrir Popup
openPopupButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Fechar Popup
closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});

// Tornar o Popup Arrastável
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

popupContent.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - popupContent.offsetLeft;
    offsetY = e.clientY - popupContent.offsetTop;
    popupContent.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        popupContent.style.left = `${e.clientX - offsetX}px`;
        popupContent.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    popupContent.style.cursor = "grab";
});
