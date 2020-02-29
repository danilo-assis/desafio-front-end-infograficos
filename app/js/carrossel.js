import EmblaCarousel from 'embla-carousel';

const emblaNode = document.querySelector('.embla');
const options = { loop: true };
const embla = EmblaCarousel(emblaNode, options);

document.querySelector('#bt-next-slide').addEventListener('click', () => {
  embla.scrollNext();
});

document.querySelector('#bt-prev-slide').addEventListener('click', () => {
  embla.scrollPrev();
});