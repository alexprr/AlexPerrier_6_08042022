class Media {
  constructor(media) {
    this._id = media.id;
    this._photographerId = media.photographerId;
    this._title = media.title;
    this._likes = media.likes;
    this._date = media.date;
    this._price = media.price;
    this._type = media.type;
  }

  template() {
    this.renderMedia();
  }
}

class Photo extends Media {
  constructor(media) {
    super(media);
    this._img = media.image;
  }

  renderMedia() {
    return `
        <div class="gallery-wrapper">
            <a class="gallery-card" aria-label="Ouvrir la vue rapprochée de ${this._title}">
                <div class="gallery-item">
                    <img data-id="${this._id}" class="gallery-img" src="../assets/gallery/${this._photographerId}/${this._img}" alt="${this._title}" tabIndex="0"/>
                </div>
            </a>
            <div class="gallery-footer">
                <div>${this._title}</div>
                <div class="gallery-footer-like">
                    <p aria-label="Nombre de j'aime" class="footer-like-counter">
                        ${this._likes}
                    </p>
                    <button class="footer-like-btn" aria-label="Aimer la publication">
                        <i class="heart-icon fa-regular fa-heart" aria-label="Icone en forme de coeur"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
  }
}

class Video extends Media {
  constructor(media) {
    super(media);
    this._video = media.video;
    this._thumbnail = media.thumbnail;
  }

  renderMedia() {
    return `
        <div class="gallery-wrapper">
            <a class="gallery-card" aria-label="Ouvrir la vue rapprochée de ${this._title}">
                <div class="gallery-item">
                    <img data-id="${this._id}" class="gallery-img" src="../assets/gallery/${this._photographerId}/${this._thumbnail}" alt="${this._title}" tabIndex="0" />
                </div>
            </a>
            <div class="gallery-footer">
                <figcaption>${this._title}</figcaption>
                <div class="gallery-footer-like">
                    <p aria-label="Nombre de j'aime" class="footer-like-counter">
                        ${this._likes} 
                    </p>
                    <button class="footer-like-btn" aria-label="Aimer la publication"> 
                        <i class="heart-icon fa-regular fa-heart" aria-label="Icone en forme de coeur"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
  }
}
