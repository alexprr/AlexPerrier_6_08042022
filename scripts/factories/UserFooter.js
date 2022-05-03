class UserFooter {
    constructor(photographer, media) {
        this._name = photographer.name
        this._id = photographer.id
        this._city = photographer.city
        this._country = photographer.country
        this._tagline = photographer.tagline
        this._price = photographer.price
        this._picture = photographer.portrait
        this._likes = media.likes
    }

    get price() {
        return `${this._price}€/jour`
    }
    
    render() {
        return `
        <div class="sticky-footer-likes">
            <h2 class="total-likes">${this.userTotalLikes()}</h2>
            <i class="fa-solid fa-heart fa-lg"></i>
        </div>
        <h3>${this.price}</h3>
        `
    }

    userTotalLikes() {
        const $allLikesCounter = document.querySelectorAll(".footer-like-counter");
        let allLikes = [];
        $allLikesCounter.forEach(like => {
            allLikes.push(parseInt(like.textContent));
        });

        const totalLikes = allLikes.reduce((a, b) => {
            return a + b
        });
        
        return totalLikes;
    };

    likeHandler() {
        const $galleryFooterLikes = document.querySelectorAll(".gallery-footer-like");
        
        $galleryFooterLikes.forEach(item => {
            item.addEventListener("click", () => {
                const $footerLikeCounter = item.querySelector(".footer-like-counter")
                const $heartIcon = item.querySelector(".heart-icon");
                let likeSum = parseInt($footerLikeCounter.textContent);
    
                if($heartIcon.classList.contains("fas")) {
                    $heartIcon.classList.remove("fas");
                    $footerLikeCounter.innerHTML = --likeSum;
                } else {
                    $heartIcon.classList.add("fas");
                    $footerLikeCounter.innerHTML = ++likeSum;
                }
    
                document.querySelector("h2.total-likes").innerText = this.userTotalLikes();
                
            });
        });
    }
}