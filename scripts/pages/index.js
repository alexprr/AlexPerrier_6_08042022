async function getPhotographers() {
  const photographers = fetch("../data/photographers.json")
    .then((res) => res.json())
    .then((photographers) => photographers)
    .catch((err) => console.log("Failed to load photographers data" + err));

  return photographers;
}

async function displayData(photographers) {
  const photographerSection = document.querySelector(".photographer_section");
  photographerSection.innerHTML = "";
  photographers.forEach((photographer) => {
    const photographerModel = new Photographer(photographer);
    photographerSection.innerHTML += photographerModel.renderUser();
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
