async function getPhotographers() {
    const photographers = fetch("../data/photographers.json")
        .then((res) => res.json()) 
        .then((photographers) => photographers)
        .catch((err) => console.log("Failed to load photographers data" + err));

    return photographers;
}

async function displayPhotographersPage() {
    const {photographers} = await getPhotographers();
    const params = new URLSearchParams(document.location.search);
    const photographId = params.get("id");
    const selectedPhotographer = photographers.find(
        (photographer) => photographer.id == photographId)
    const photographerHeader = document.querySelector(".photograph-header");
    photographerHeader.innerHTML += new Photographer(selectedPhotographer).userPageHeader;
}



async function init() {
    await displayPhotographersPage();
};

init();