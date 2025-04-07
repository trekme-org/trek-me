document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery img, .gallery video');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      alert('Thanks for checking out our trek media!');
    });
  });
});
