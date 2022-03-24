export function initPopups() {
    let buttons = document
        .querySelectorAll(".toggle-button")
        .forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                showPopup(button);
            });
        });
}

function showPopup(button) {
    if (button.dataset.toggle) {
        let popup = document.getElementById(button.dataset.toggle);
        if (popup) {
            popup.classList.toggle("visible");
        }
    }
}

export function closePopupInit() {
    document.querySelectorAll(".modal-dialog .close").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            button.closest(".modal-dialog").classList.remove("visible");
        });
    });
}
