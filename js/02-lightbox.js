import { galleryItems } from './gallery-items.js';
// Change code below this line
const photoRfs = document.querySelector(".gallery");

  const result = galleryItems
    .map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  )
  
    .join("");

photoRfs.insertAdjacentHTML("beforeend", result);



new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});

