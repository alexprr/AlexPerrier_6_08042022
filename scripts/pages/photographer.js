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
    const {photographers, media} = await getPhotographers();
    const params = new URLSearchParams(document.location.search);
    const photographId = params.get("id");
    const selectedPhotographer = photographers.find(
        (photographer) => photographer.id == photographId)
        
    // Account Header
    let userHeader = new Photographer(selectedPhotographer);
    $photographerHeader.innerHTML += userHeader.renderHeader();

    // Account Gallery
    const mediaGallery = media.filter((media) => media.photographerId == photographId);

    mediaGallery.forEach((media) => {
        const allMedias = new MediaFactory(media)
		$sectionMedia.innerHTML += allMedias.render();
	});

    // Lightbox
    const lightbox = new Lightbox(mediaGallery);
    document.querySelectorAll("#section-media .gallery-img").forEach(galleryCard => {
        galleryCard.addEventListener("click", (e) => {
            lightbox.show(e.currentTarget.dataset.id);
        });
    });

    // Account Footer
    let userFooter = new UserFooter(selectedPhotographer, mediaGallery)
    $photographerFooter.innerHTML += userFooter.render();
    userFooter.likeHandler();

};
    
async function init() {
    await displayPhotographersPage();
    displayModal();
    closeModal();
    formValidation();
};

init();
