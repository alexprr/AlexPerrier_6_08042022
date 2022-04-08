async function getPhotographers() {
    const photographers = fetch("../data/photographers.json")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (photographers) {
            return photographers;
        })
        .catch(function (error) {
            console.log("Failed to load photographers data" + error.message)
        })

    return photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
