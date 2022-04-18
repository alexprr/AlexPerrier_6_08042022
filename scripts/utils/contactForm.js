function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    const closeModal = document.getElementById('close-modal');
    closeModal.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}