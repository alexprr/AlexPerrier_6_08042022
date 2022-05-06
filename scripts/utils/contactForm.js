class ContactForm {
  constructor(photographer) {
    this.photographer = photographer;
  }

  render() {
    this.createModal();
    this.displayModal();
    this.closeModal();
    this.formValidation();
  }

  createModal() {
    const $modalWrapper = document.querySelector("#contact_modal");

    const modal = `
        <div class="modal" aria-labelledby="contactez-moi">
            <header>
                <h2 id="contactez-moi">Contactez-moi : ${this.photographer.name}</h2>
                <a href="" id="close-modal">
                <img src="assets/icons/close.svg" alt="Fermer le formulaire de contact"/>
                </a>
            </header>
            <form id="form">
                <div>
                    <label for="firstname">Veuillez insérer votre prénom</label>
                        <input type="text" id="firstname" required minlength="2" pattern="[a-zA-Zéèêëàùôüîï]*"/>
                    <label for="lastname">Veuillez insérer votre nom</label>
                        <input type="text" id="lastname" required minlength="2"/>
                    <label for="email">Veuillez insérer votre adresse électronique</label>
                        <input type="email" id="email" pattern="(.*)@(.*)" required/>
                    <label for="message">Veuillez insérer votre message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                    <button class="contact_button" aria-label="Envoyer votre message">Envoyer</button>
            </form>
        </div>
        `;

    $modalWrapper.innerHTML = modal;
    return $modalWrapper;
  }

  // Open Modal
  displayModal() {
    const contactBtn = document.querySelector(".contact_button");
    contactBtn.addEventListener("click", () => {
      const modal = document.getElementById("contact_modal");
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      const closeModal = document.getElementById("close-modal");
      closeModal.focus();
    });
  }

  // Close Modal
  closeModal() {
    const closeBtn = document.querySelector("#close-modal");
    closeBtn.addEventListener("click", () => {
      const modal = document.getElementById("contact_modal");
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    });
  }

  // Form Validation
  formValidation() {
    const submitBtn = document.querySelector("#form .contact_button");
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let inputs = document.querySelectorAll("input");
      let message = document.querySelector("textarea");
      inputs.forEach((input) => {
        console.log(input.value);
      });
      console.log(` ${message.value}`);
    });
  }
}
