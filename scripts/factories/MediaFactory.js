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

    get mediaGallery() {
        return `
        <div data-id="${this._imgId}" class="gallery-card" aria-label="Ouvrir la lightbox">
        <figure class="gallery-item">
            <img class="gallery-img" src="../assets/gallery/${this._imgPhotographerId}/${this._img}" alt="${this._imgTitle}"/>
            <div class="gallery-footer">
                <figcaption>${this._imgTitle}</figcaption>
                <button>${this._imgLikes}</button>
            </div>
        </figure>
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
    }

    get mediaGallery() {
        return `
        <a class="gallery__link" href="#" aria-label="Ouvrir la lightbox">
            <figure class="gallery-item">
                <video controls class="gallery-img" src="../assets/gallery/${this._videoPhotographerId}/${this._video}" alt="${this._videoTitle}" 
                </video>
                <div class="gallery-footer">
                    <figcaption>${this._videoTitle}</figcaption>
                    <button>${this._videoLikes}</button>
                </div>
            </figure>
        </a>
        `
    }
}
