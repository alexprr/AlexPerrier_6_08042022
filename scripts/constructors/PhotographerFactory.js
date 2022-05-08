class Photographer {
  constructor(photographer) {
    this._name = photographer.name;
    this._id = photographer.id;
    this._city = photographer.city;
    this._country = photographer.country;
    this._tagline = photographer.tagline;
    this._price = photographer.price;
    this._picture = photographer.portrait;
  }

  get picture() {
    return `../assets/photographers/${this._picture}`;
  }

  get localisation() {
    return `${this._city}, ${this._country}`;
  }

  get price() {
    return `${this._price}€/jour`;
  }

  renderUser() {
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
        `;
  }

  renderHeader() {
    return `
        <div class="photograph-header-info">
            <h1 class="photograph-header-title">${this._name}</h1>
            <h2 class="photographer-header-city">${this.localisation}</h2>
            <p class="photographer-header-tagline">${this._tagline}</p>
        </div>
        <button class="contact_button">Contactez-moi</button>
        <img src="${this.picture}" alt="Photo de profil de ${this._name}"/>
        `;
  }
}

class PhotographerFooter extends Photographer {
  constructor(photographer, media) {
    super(photographer);
    this._likes = media.likes;
  }

  renderFooter() {
    return `
        <div class="sticky-footer-likes">
            <h2 class="total-likes">${this.totalLikes()}</h2>
            <i class="fa-solid fa-heart fa-lg"></i>
        </div>
        <h3>${this.price}</h3>
        `;
  }

  totalLikes() {
    const $allLikesCounter = document.querySelectorAll(".footer-like-counter");
    let allLikes = [];
    $allLikesCounter.forEach((like) => {
      allLikes.push(parseInt(like.textContent));
    });

    const totalLikes = allLikes.reduce((a, b) => {
      return a + b;
    });

    return totalLikes;
  }

  likeHandler() {
    const $galleryFooterLikes = document.querySelectorAll(
      ".gallery-footer-like"
    );

    $galleryFooterLikes.forEach((item) => {
      item.addEventListener("click", () => {
        const $footerLikeCounter = item.querySelector(".footer-like-counter");
        const $heartIcon = item.querySelector(".heart-icon");
        let likeSum = parseInt($footerLikeCounter.textContent);

        if ($heartIcon.classList.contains("fas")) {
          $heartIcon.classList.remove("fas");
          $footerLikeCounter.innerHTML = --likeSum;
        } else {
          $heartIcon.classList.add("fas");
          $footerLikeCounter.innerHTML = ++likeSum;
        }

        document.querySelector("h2.total-likes").innerText = this.totalLikes();
      });
    });
  }
}
