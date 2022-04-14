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

    get userCardDOM() {
        return `
        <a href="pages/photographers.html?=id${this._id}">
            <article>
                <img src="${this.picture}">
                <h2>${this.name}</h2>
                <p></p>
                <p></p>
                <p></p>
            </article>
        </a>
        `
    }
}