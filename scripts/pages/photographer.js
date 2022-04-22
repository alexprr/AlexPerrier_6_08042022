async function getPhotographers() {
    const photographers = fetch("../data/photographers.json")
        .then((res) => res.json()) 
        .then((photographers) => photographers)
        .catch((err) => console.log("Failed to load photographers data" + err));

    return photographers;
}



async function displayPhotographersPage() {
    const {photographers, media} = await getPhotographers();
    const params = new URLSearchParams(document.location.search);
    const photographId = params.get("id");
    const selectedPhotographer = photographers.find(
        (photographer) => photographer.id == photographId)
        
    // Profil Header
    const $photographerHeader = document.querySelector(".photograph-header");
    $photographerHeader.innerHTML += new Photographer(selectedPhotographer).userPageHeader;

    // Profil Footer
    // const $photographerFooter = document.querySelector(".photograph-footer");
    // $photographerFooter.innerHTML += new Photographer(selectedPhotographer).userPageFooter;

    // Gallery
    const mediaGallery = media.filter((media) => media.photographerId == photographId);
    mediaGallery.forEach((media) => {
        const allMedias = new MediaFactory(media)
        const $sectionMedia = document.querySelector("#section-media");
		$sectionMedia.innerHTML += allMedias.mediaGallery;
	});

    // Lightbox
    const lightbox = new Lightbox(mediaGallery);
    document.querySelectorAll("#section-media .gallery-card").forEach(galleryCard => {
        galleryCard.addEventListener("click", (e) => {
            lightbox.show(e.currentTarget.dataset.id);
        })
    })
}


async function init() {
    await displayPhotographersPage();
};

init();