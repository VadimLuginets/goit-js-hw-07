import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const genGalleryGrid = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", genGalleryGrid);
console.log(genGalleryGrid);
galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const showOriginalImg = basicLightbox.create(
    `<img src="${
      e.target.closest("img").dataset.source
    }" width="800" height="600">`
  );
  console.log(showOriginalImg.show());
});
document.addEventListener("keydown", (e) => {
  const escape = e.code === "Escape";
  const modal = document.querySelector(".basicLightbox");
  if (!modal) {
    return;
  }
  if (escape) {
    modal.remove();
  }
});
