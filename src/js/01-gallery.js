// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryRef = document.querySelector('.gallery')


// console.log(galleryItems);
onMarkupGallery(galleryItems)
function onMarkupGallery(imgArray) {
    galleryRef.innerHTML = imgArray.map(img => `
    <a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" title=""/>
</a>`).join('');
        var lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captions: true,
        captionsData: 'alt'
    });
}
function currentImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const imgOriginalLink = e.target.parentNode.href;

}



galleryRef.addEventListener('click', currentImg)