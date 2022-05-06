class MediaFactory {
    constructor(media) {
        if(media.type === 'image') {
            return new Photo(media)
        } else if(media.type ==='video') {
            return new Video(media)
        } else {
            throw "Format non reconnu !"
        }
    }
}


class Photo {
    constructor(media) {
        this._imgId = media.id
        this._imgPhotographerId = media.photographerId
        this._imgTitle = media.title
        this._img = media.image
        this._imgLikes = media.likes
        this._imgDate = media.date
        this._imgPrice = media.price
    }

    render() {
        return `
        <div class="gallery-wrapper">
            <a class="gallery-card" aria-label="Ouvrir la vue rapprochée de ${this._imgTitle}">
                <div class="gallery-item">
                    <img data-id="${this._imgId}" class="gallery-img" src="../assets/gallery/${this._imgPhotographerId}/${this._img}" alt="${this._imgTitle}" tabIndex="0"/>
                </div>
            </a>
            <div class="gallery-footer">
                <div>${this._imgTitle}</div>
                <div class="gallery-footer-like">
                    <p aria-label="Nombre de j'aime" class="footer-like-counter">
                        ${this._imgLikes}
                    </p>
                    <button class="footer-like-btn" aria-label="Aimer la publication">
                        <i class="heart-icon fa-regular fa-heart" aria-label="Icone en forme de coeur"></i>
                    </button>
                </div>
            </div>
        </div>
        `
    }
}

class Video {
    constructor(media) {
        this._videoId = media.id
        this._videoPhotographerId = media.photographerId
        this._videoTitle = media.title
        this._video = media.video
        this._videoLikes = media.likes
        this._videoDate = media.date
        this._videoPrice = media.price
        this._videoImg = media.thumbnail
    }

    render() {
        return `
        <div class="gallery-wrapper">
        <a class="gallery-card" aria-label="Ouvrir la vue rapprochée de ${this._videoTitle}">
            <div class="gallery-item">
                <img data-id="${this._videoId}" class="gallery-img" src="../assets/gallery/${this._videoPhotographerId}/${this._videoImg}" alt="${this._videoTitle}" tabIndex="0" />
                
            </div>
            <div class="gallery-footer">
                    <figcaption>${this._videoTitle}</figcaption>
                    <div class="gallery-footer-like">
                        <p aria-label="Nombre de j'aime" class="footer-like-counter">
                            ${this._videoLikes} 
                        </p>
                        <button class="footer-like-btn" aria-label="Aimer la publication"> 
                            <i class="heart-icon fa-regular fa-heart" aria-label="Icone en forme de coeur"></i>
                        </button>
                    </div>
                </div>
        </a>
        </div>
        `
    }
}
