class Photographer {
    constructor(photographer) {
        this._name = photographer.name
        this._id = photographer.id
        this._city = photographer.city
        this._country = photographer.country
        this._tagline = photographer.tagline
        this._price = photographer.price
        this._picture = photographer.portrait
    }

    get picture() {
        return `../assets/photographers/${this._picture}`
    }

    get localisation() {
        return `${this._city}, ${this._country}`
    }

    get price() {
        return `${this._price}€/jour`
    }

    get userCardDOM() {
        return `
        <a href="photographer.html?id=${this._id}" aria-label="Page de ${this._name}">
            <article>
                <img src="${this.picture}" alt="Photo de profil du photographe ${this._name}">
                <h2>${this._name}</h2>
                <p class="photographer-city">${this.localisation}</p>
                <p class="photographer-tagline">${this._tagline}</p>
                <p class="photographer-price">${this.price}</p>
            </article>
        </a>
        `
    }

    get userPageHeader() {
        return `
        <div class="photograph-header-info">
            <h1 class="photograph-header-title">${this._name}</h1>
            <p class="photographer-header-city">${this.localisation}</p>
            <p class="photographer-header-tagline">${this._tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img src="${this.picture}" alt="Photo de profil de ${this._name}"/>
        `
    }
}