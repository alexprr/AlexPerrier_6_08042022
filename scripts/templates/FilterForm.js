class FilterForm {
    constructor(mediaGallery) {
        this.mediaGallery = mediaGallery

        this.$wrapper = document.createElement("div")
        this.$filterFormWrapper = document.querySelector(".filter-form-wrapper")
        this.$sectionMedia = document.querySelector("#section-media")
    }

    filterByOption(mediaGallery, option) {
        this.clearMediaGallery()

        switch (option) {
            case "popularity":
                return mediaGallery.sort((a, b) => {
                    return b.likes - a.likes;
            });
            case "date":
                return mediaGallery.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
            });
            case "title":
                return mediaGallery.sort((a, b) => a.title.localeCompare(b.title));
        }
    }

    updatedGallery(mediaGallery) {
        mediaGallery = this.mediaGallery
        mediaGallery.forEach((media) => {
            const allMedias = new MediaFactory(media)
            $sectionMedia.innerHTML += allMedias.render();
        });
    }

    onChangeFilter() {
        this.$wrapper.querySelector('.filter-form').addEventListener("change", e => {
            const option = this.filterByOption(this.mediaGallery, e.target.value);
            this.updatedGallery(option)
        });
    }

    clearMediaGallery() {
        this.$sectionMedia.innerHTML = ""
    }

    render() {
        const filterForm = `
        <form class="filter-form" action="#">
            <label for="filter-form__dropdown">Trier par</label>
            <select id="filter-form__dropdown" aria-label="Order By">
                <option value="default">Par défaut</option>
                <option value="popularity">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
            </select>
        </form>
        `

        this.$wrapper.innerHTML = filterForm
        this.onChangeFilter()

        this.$filterFormWrapper.appendChild(this.$wrapper)
    }
}