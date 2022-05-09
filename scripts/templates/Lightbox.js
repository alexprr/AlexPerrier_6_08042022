class Lightbox {
  constructor(listMedia) {
    this.currentMedia = null;
    this.listMedia = listMedia;

    this.$modalWrapper = document.querySelector(".lightbox");

    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("lightbox__wrapper");
  }

  show(element) {
    this.currentMedia = this.getElementById(element);
    this.render();
    this.display();
    this.focus();
    this.manageEvents();
  }

  createLightbox() {
    const lightbox = `
        <div class="lightbox__content" aria-label="Vue rapprochée du média">
            <button class="close" aria-label="Fermer la modale">x</button>
            <button class="prev" aria-label="Va à l'image précédente">&lt;</button>
            <img src="" alt="" class="picture">
            <video controls autoplay src="" class="video"></video>
            <button class="next" aria-label="Va à l'image suivante">&gt;</button>
        </div>
        <div class="lightbox__content__title"></div>
        `;

    this.$wrapper.innerHTML = lightbox;
    this.$modalWrapper.appendChild(this.$wrapper);
  }

  render() {
    this.createLightbox();
  }

  focus() {
    document.querySelector(".lightbox .close").focus();
  }

  next() {
    let index = this.listMedia.findIndex(
      (element) => element.id == this.currentMedia.id
    );
    if (index == this.listMedia.length - 1) {
      this.currentMedia = this.listMedia[0];
    } else {
      this.currentMedia = this.listMedia[index + 1];
    }

    this.display();
  }

  prev() {
    let index = this.listMedia.findIndex(
      (element) => element.id == this.currentMedia.id
    );
    if (index == 0) {
      this.currentMedia = this.listMedia[this.listMedia.length - 1];
    } else {
      this.currentMedia = this.listMedia[index - 1];
    }

    this.display();
  }

  close() {
    document.querySelector(".lightbox").classList.remove("active");
  }

  manageEvents() {
    // Mouse Trigger
    document
      .querySelector(".lightbox__content .next")
      .addEventListener("click", () => {
        this.next();
      });
    document
      .querySelector(".lightbox__content .prev")
      .addEventListener("click", () => {
        this.prev();
      });
    document
      .querySelector(".lightbox__content .close")
      .addEventListener("click", () => {
        this.close();
      });
    document.querySelector(".lightbox").addEventListener("click", (e) => {
      if (e.target == e.currentTarget) {
        this.close();
      }
    });
    // Keyboard Trigger
    document.querySelector(".lightbox").addEventListener("keyup", (e) => {
      switch (e.key) {
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
    return this.listMedia.find((element) => element.id == id);
  }

  display() {
    if (this.currentMedia.type === "image") {
      document
        .querySelector(".lightbox .lightbox__content .picture")
        .classList.add("active");
      document.querySelector(".lightbox .lightbox__content .picture").alt =
        this.currentMedia.title;
      document
        .querySelector(".lightbox .lightbox__content .video")
        .classList.remove("active");
      document.querySelector(
        ".lightbox .lightbox__content .picture"
      ).src = `assets/gallery/${this.currentMedia.photographerId}/${this.currentMedia.image}`;
    } else if (this.currentMedia.type === "video") {
      document
        .querySelector(".lightbox .lightbox__content .video")
        .classList.add("active");
      document
        .querySelector(".lightbox .lightbox__content .picture")
        .classList.remove("active");
      document.querySelector(
        ".lightbox .lightbox__content .video"
      ).src = `assets/gallery/${this.currentMedia.photographerId}/${this.currentMedia.video}`;
    }

    document.querySelector(".lightbox").classList.add("active");
    document.querySelector(".lightbox__content__title").innerHTML =
      this.currentMedia.title;
  }
}
