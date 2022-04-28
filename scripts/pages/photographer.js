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

// Filtres 
const mediaFilter = (mediaGallery, option) => {
    switch(option) {
        case "popularity" : 
            return mediaGallery.sort((a,b) => b.likes - a.likes);
        case "date" : 
            return mediaGallery.sort((a,b) => new Date(b.date) - new Date(a.date));
        case "title" :
            return mediaGallery.sort((a,b) => a.title.localCompare(b.title));
    }
}; 

const updateGallery = (gallery) => {
    gallery.forEach((media) => {
        const allMedias = new MediaFactory(media)
		$sectionMedia.innerHTML += allMedias.mediaGallery;
	});
}

async function displayPhotographersPage() {
    const {photographers, media} = await getPhotographers();
    const params = new URLSearchParams(document.location.search);
    const photographId = params.get("id");
    const selectedPhotographer = photographers.find(
        (photographer) => photographer.id == photographId)
        
    // Account Header
    $photographerHeader.innerHTML += new Photographer(selectedPhotographer).userPageHeader;

    // Account Footer
    $photographerFooter.innerHTML += new Photographer(selectedPhotographer).userPageFooter;

    // Account Gallery
    const mediaGallery = media.filter((media) => media.photographerId == photographId);
    mediaGallery.forEach((media) => {
        const allMedias = new MediaFactory(media)
		$sectionMedia.innerHTML += allMedias.mediaGallery;
	});

    // Filtered Gallery
    document.addEventListener("change", (e) => {
        $sectionMedia.innerHTML = "";
        const option = mediaFilter(mediaGallery, e.target.value);
        updateGallery(option)
    })

    // Lightbox
    const lightbox = new Lightbox(mediaGallery);
    document.querySelectorAll("#section-media .gallery-img").forEach(galleryCard => {
        galleryCard.addEventListener("click", (e) => {
            lightbox.show(e.currentTarget.dataset.id);
        })
    })
}
    
async function init() {
    await displayPhotographersPage();
};

init();