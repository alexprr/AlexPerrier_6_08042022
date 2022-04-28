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
        <a class="gallery-card" aria-label="Ouvrir la lightbox">
        <figure class="gallery-item">
            <img data-id="${this._imgId}" class="gallery-img" src="../assets/gallery/${this._imgPhotographerId}/${this._img}" alt="${this._imgTitle}"/>
            <div class="gallery-footer">
                <figcaption>${this._imgTitle}</figcaption>
                <div class="gallery-footer-like">
                    <p class="footer-like">${this._imgLikes}</p>
                    <button class="footer-like-btn">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </figure>
        </a>
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

    get mediaGallery() {
        return `
        <a class="gallery-card" aria-label="Ouvrir la lightbox">
            <figure class="gallery-item">
                <img data-id="${this._videoId}" class="gallery-img" src="../assets/gallery/${this._videoPhotographerId}/${this._videoImg}" alt="${this._videoTitle}" 
                </img>
                <div class="gallery-footer">
                    <figcaption>${this._videoTitle}</figcaption>
                    <div class="gallery-footer-like">
                        <p class="footer-like">${this._videoLikes}</p>
                        <button class="footer-like-btn">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                </div>
            </figure>
        </a>
        `
    }
}
