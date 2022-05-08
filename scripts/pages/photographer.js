// Api
async function getPhotographers() {
  const photographers = fetch("../data/photographers.json")
    .then((res) => res.json())
    .then((photographers) => photographers)
    .catch((err) => console.log("Failed to load photographers data" + err));

  return photographers;
}

// DOM Elements
const $photographerHeader = document.querySelector(".photograph-header");
const $photographerFooter = document.querySelector("#sticky-footer");
const $sectionMedia = document.querySelector("#section-media");

async function displayPhotographersPage() {
  const { photographers, media } = await getPhotographers();
  const params = new URLSearchParams(document.location.search);
  const photographId = params.get("id");
  const selectedPhotographer = photographers.find(
    (photographer) => photographer.id == photographId
  );

  // Header based on selected photographer's id
  let userHeader = new Photographer(selectedPhotographer);
  $photographerHeader.innerHTML += userHeader.renderHeader();

  // Gallery based on selected photographer's id
  const mediaGallery = media.filter(
    (media) => media.photographerId == photographId
  );

  mediaGallery.forEach((media) => {
    const allMedias = new MediaFactory(media);
    $sectionMedia.innerHTML += allMedias.render();
  });

  // Filtered Gallery
  const FilteredGallery = new FilterForm(mediaGallery);
  FilteredGallery.render();

  // Lightbox
  const lightbox = new Lightbox(mediaGallery);

  const openLightboxOnClick = () => {
    document
      .querySelectorAll("#section-media .gallery-img")
      .forEach((galleryCard) => {
        galleryCard.addEventListener("click", (e) => {
          lightbox.show(e.currentTarget.dataset.id);
        });
      });
  };

  openLightboxOnClick();

  const openLightboxOnKeypress = () => {
    document
      .querySelectorAll("#section-media .gallery-img")
      .forEach((galleryCard) => {
        galleryCard.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            lightbox.show(e.currentTarget.dataset.id);
          }
        });
      });
  };

  openLightboxOnKeypress();

  // Account Footer
  let photographerFooter = new PhotographerFooter(
    selectedPhotographer,
    mediaGallery
  );
  $photographerFooter.innerHTML += photographerFooter.renderFooter();
  photographerFooter.likeHandler();

  // Contact Modal
  let contactModal = new ContactForm(selectedPhotographer);
  contactModal.render();
}

async function init() {
  await displayPhotographersPage();
}

init();
