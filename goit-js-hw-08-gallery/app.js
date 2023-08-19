import { galleryItems } from "./data.js";
console.log(galleryItems);

const gallery = document.querySelector(".js-gallery");

const cardsMarkup = createGallaryCardMarkup(galleryItems);
let globalCurrentImageLink = {};
const modalWindow = document.querySelector(".js-lightbox");
const modalWindowImage = document.querySelector(".lightbox__image");
const modalWindowCloseBtn = document.querySelector(
  'button[data-action="close-lightbox"]'
);

gallery.addEventListener("click", openLightboxImage);
modalWindowCloseBtn.addEventListener("click", CloseLightbox);
modalWindow.addEventListener("click", onLightbixOverlayClick);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);

function openLightboxImage(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const currentImage = e.target;
  // console.log(currentImage.closest(".gallery__item").nextElementSibling);
  globalCurrentImageLink = currentImage.dataset.source;

  AddOpenModalClass();
  SetLightboxImage(currentImage);

  window.addEventListener("keydown", EscapeCloseLightbox);
  window.addEventListener("keydown", onArrowsImageChange);
}
function EscapeCloseLightbox(e) {
  if (e.code === "Escape") {
    CloseLightbox();
    console.log("+event");
  }
}
function createGallaryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a
          class="gallery__link"
          
        >
          <img
            loading ="lazy"
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}
function AddOpenModalClass() {
  modalWindow.classList.add("is-open");
}
function SetLightboxImage(image) {
  modalWindowImage.src = image.dataset.source;
}
function CloseLightbox() {
  modalWindow.classList.remove("is-open");
  modalWindowImage.src = "";
  console.log("Yee");
  window.removeEventListener("keydown", EscapeCloseLightbox);
  window.removeEventListener("keydown", onArrowsImageChange);
}
function onLightbixOverlayClick(e) {
  if (!e.target.classList.contains("lightbox__overlay")) {
    return;
  }
  CloseLightbox();
}
function onArrowsImageChange(e) {
  if (!(e.code === "ArrowRight" || e.code === "ArrowLeft")) {
    return;
  }

  let currentIndex = galleryItems.findIndex(
    (picture) => picture.original === globalCurrentImageLink
  );
  e.code === "ArrowRight" ? ++currentIndex : --currentIndex;

  if (galleryItems[currentIndex]) {
    modalWindowImage.src = galleryItems[currentIndex].original;
    globalCurrentImageLink = modalWindowImage.src;
  }
}
