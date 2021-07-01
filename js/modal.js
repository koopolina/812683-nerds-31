const modalButton = document.querySelector(".modal-button");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".modal-close");
const modalForm = modalPopup.querySelector(".text-form");
const modalName = modalPopup.querySelector(".text-name");
const modalMail = modalPopup.querySelector(".text-mail");
const modalText = modalPopup.querySelector(".text-text");

let isStorageSupport = true;
let storageName = "";
let storageMail = "";

try {
  storageName = localStorage.getItem("name");
  storageMail = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storageName) {
    modalName.value = storageName;
    modalMail.focus();
  } else {
    modalName.focus();
  }
  if (storageMail) {
    modalMail.value = storageMail;
    modalText.focus();
  } else {
    modalMail.focus();
  }

});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.add("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalMail.value || !modalText.value) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", modalName.value);
      localStorage.setItem("mail", modalMail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
    }
  }
});
