'use strict';

// Funzione per alternare la classe "active" su un elemento
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); };

// Sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Testimonianze
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Aggiunge evento click a ogni testimonianza
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Selettori personalizzati
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Filtro progetti/certificati
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "tutti") {
      item.classList.add("active");
    } else if (selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Gestione selezione filtro
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Form contatti
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Navigazione pagine
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    pages.forEach(page => {
      if (this.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks.forEach(nav => nav.classList.remove("active"));
      }
    });
  });
});

// Funzione per verificare se il dispositivo è mobile o desktop basato sulla larghezza della finestra
const isMobile = window.innerWidth <= 768; // Puoi adattare questa larghezza a seconda della tua esigenza

// ---------- POP-UP PDF (SOLO SU DESKTOP) ----------
const pdfLinks = document.querySelectorAll(".project-item a[href$='.pdf']");
if (!isMobile) {
  const pdfModal = document.createElement("div");
  pdfModal.id = "pdfModal";
  pdfModal.classList.add("modal-container");
  pdfModal.innerHTML = `
    <div class="overlay" id="pdfOverlay"></div>
    <section class="pdf-modal">
      <button class="modal-close-btn" id="pdfCloseBtn">
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <iframe id="pdfViewer" src="" width="100%" height="600px"></iframe>
    </section>
  `;
  document.body.appendChild(pdfModal);

  const pdfViewer = document.getElementById("pdfViewer");
  const pdfCloseBtn = document.getElementById("pdfCloseBtn");
  const pdfOverlay = document.getElementById("pdfOverlay");

  pdfLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      pdfViewer.src = this.href;
      pdfModal.classList.add("active");
    });
  });

  const closePdfModal = () => {
    pdfModal.classList.remove("active");
    pdfViewer.src = "";
  };

  pdfCloseBtn.addEventListener("click", closePdfModal);
  pdfOverlay.addEventListener("click", closePdfModal);
}

// ---------- POP-UP IMMAGINI (SOLO SU DESKTOP) ----------
const imageLinks = document.querySelectorAll(".project-item a:not([href$='.pdf'])");
if (!isMobile) {
  const imageModal = document.createElement("div");
  imageModal.id = "imageModal";
  imageModal.classList.add("modal-container");
  imageModal.innerHTML = `
    <div class="overlay" id="imageOverlay"></div>
    <section class="image-modal">
      <button class="modal-close-btn" id="imageCloseBtn">
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <img id="imageViewer" src="" alt="Certificato" width="100%">
    </section>
  `;
  document.body.appendChild(imageModal);

  const imageViewer = document.getElementById("imageViewer");
  const imageCloseBtn = document.getElementById("imageCloseBtn");
  const imageOverlay = document.getElementById("imageOverlay");

  imageLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      imageViewer.src = this.href;
      imageModal.classList.add("active");
    });
  });

  const closeImageModal = () => {
    imageModal.classList.remove("active");
    imageViewer.src = "";
  };

  imageCloseBtn.addEventListener("click", closeImageModal);
  imageOverlay.addEventListener("click", closeImageModal);
}

// Aggiungi un event listener per ridimensionare la finestra per ricalcolare la larghezza
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    // Disattiva pop-up su mobile
    pdfModal.classList.remove("active");
    imageModal.classList.remove("active");
  }
});

