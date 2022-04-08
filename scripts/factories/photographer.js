function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    const photographerId = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        // Article
        const article = document.createElement('article');
        // Lien avec focus
        const focusZone = document.createElement('a');
        focusZone.classList.add("to-photographer-page");
        // Récupérer l'id du photographe
        focusZone.setAttribute("href", photographerId)
        focusZone.setAttribute("aria-label", "Mimi Keel - Page photographe")
        article.appendChild(focusZone);
        // Image
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", " ")
        // Titre h2
        const h2 = document.createElement('h2');
        h2.textContent = name;
        focusZone.appendChild(img);
        focusZone.appendChild(h2);
        // Paragraphes
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