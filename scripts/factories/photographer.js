function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Création de l'article
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        // Création des paragraphes
        const photographerCity = document.createElement('p');
        photographerCity.classList.add("photographer-city");
        const photographerTagline = document.createElement('p');
        photographerTagline.classList.add("photographer-tagline");
        const photographerPrice = document.createElement('p');
        photographerPrice.classList.add("photographer-price");
        photographerCity.textContent = `${city}, ${country}`;
        photographerTagline.textContent = tagline;
        photographerPrice.textContent = price + "/jour";
        article.appendChild(photographerCity);
        article.appendChild(photographerTagline);
        article.appendChild(photographerPrice);
        return (article);
    }
    return { name, picture, city, tagline, price, getUserCardDOM }
}