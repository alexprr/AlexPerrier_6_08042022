class MediaFactory {
    constructor(media) {
        if(media.type === 'image') {
            return new Photo(media)
        } else if (media.type === 'video') {
            return new Video(media)
        } else {
            throw "Format de média non reconnu"
        }
    }
}

class Photo {
    constructor(img) {
        this._imgId = img.id
        this._imgPhotographerId = img.photographerId
        this._imgTitle = img.title
        this._img = img.image
        this._imgLikes = img.likes
        this._imgDate = img.date
        this._imgPrice = img.price
    }

    get mediaGallery() {
        return `
        <figure>
            <img src="../assets/gallery/${this._imgPhotographerId}" alt="${this._imgTitle}"/>
            <figcaption>${this._imgTitle}</figcaption>
            <button>${this._imgLikes}</button>
        </figure>
        `
    }
}

class Video {
    constructor(video) {
        this._videoId = video.id
        this._videoPhotographerId = video.photographerId
        this._videoTitle = video.title
        this._video = video.video
        this._videoLikes = video.likes
        this._videoDate = video.date
        this._videoPrice = video.price
    }
}
