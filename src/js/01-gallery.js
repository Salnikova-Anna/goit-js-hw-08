import SimpleLightbox from 'simplelightbox';
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  })
  .join('');

galleryRef.innerHTML = galleryMarkUp;
