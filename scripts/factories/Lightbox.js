class Lightbox {
    constructor(listMedia) {
        this.currentMedia = null;
        this.listMedia = listMedia;
        this.manageEvents();
    }

    show(element) {
        this.currentMedia = this.getElementById(element);
        this.display();
        document.querySelector("#lightbox .close").focus();
    }

    next() {
        let index = this.listMedia.findIndex(element => element.id == this.currentMedia.id);
        if(index == this.listMedia.length - 1) {
            this.currentMedia = this.listMedia[0];
        } else {
            this.currentMedia = this.listMedia[index + 1];
        }
        
        this.display();
    }

    prev() {
        let index = this.listMedia.findIndex(element => element.id == this.currentMedia.id);
        if(index == 0) {
            this.currentMedia = this.listMedia[this.listMedia.length - 1];
        } else {
            this.currentMedia = this.listMedia[index - 1];
        }
        
        this.display();
    }

    close() {
        document.querySelector("#lightbox").classList.remove("active");
    }

    manageEvents() {
        // Mouse Trigger
        document.querySelector("#lightbox .next").addEventListener("click", () => {
            this.next();
        });
        document.querySelector("#lightbox .prev").addEventListener("click", () => {
            this.prev();
        });
        document.querySelector("#lightbox .close").addEventListener("click", (e) => {
            this.close();
        });
        document.querySelector("#lightbox").addEventListener("click", (e) => {
            if(e.target == e.currentTarget) {
                this.close();
            }
        });
        // Keyboard Trigger
        document.querySelector("#lightbox").addEventListener("keyup", (e) => {
            switch(e.key) {
                case "ArrowRight":
                    this.next();
                    break;
                case "ArrowLeft": 
                    this.prev();
                    break;
                case "Escape": 
                    this.close();
                    break;
            }
        });
    }

    getElementById(id) {
        return this.listMedia.find(element => element.id == id);
    }

    display() {
        if(this.currentMedia.type === "image") 
        {
            document.querySelector("#lightbox .lightbox__content .picture").classList.add("active");
            document.querySelector("#lightbox .lightbox__content .picture").alt = this.currentMedia.title;
            document.querySelector("#lightbox .lightbox__content .video").classList.remove("active");
            document.querySelector("#lightbox .lightbox__content .picture").src = `assets/gallery/${this.currentMedia.photographerId}/${this.currentMedia.image}`
        } 
        else if (this.currentMedia.type === "video") 
        {
            document.querySelector("#lightbox .lightbox__content .video").classList.add("active");
            document.querySelector("#lightbox .lightbox__content .picture").classList.remove("active");
            document.querySelector("#lightbox .lightbox__content .video").src = `assets/gallery/${this.currentMedia.photographerId}/${this.currentMedia.video}`
        }

        document.querySelector("#lightbox").classList.add("active");
        document.querySelector(".lightbox__content__title").innerHTML = this.currentMedia.title;
    }
}