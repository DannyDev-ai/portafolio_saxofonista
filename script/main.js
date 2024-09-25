// script.js
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remover clase 'active' de todos los links
            navLinks.forEach(item => item.classList.remove('active'));

            // Añadir clase 'active' al link clicado
            this.classList.add('active');

            // Obtener la sección a mostrar
            const sectionToShow = this.getAttribute('data-section');

            // Ocultar todas las secciones
            sections.forEach(section => section.classList.remove('active'));

            // Mostrar la sección seleccionada
            document.getElementById(sectionToShow).classList.add('active');
        });
    });
});






/////////////////////// GALERIA

// Variables para seleccionar los elementos del DOM
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const galleryImages = document.querySelectorAll('.gallery-img');

let currentImageIndex = 0;

// Mostrar imagen en el modal
function openModal(index) {
    modal.style.display = 'flex';
    modalImg.src = galleryImages[index].src;
    currentImageIndex = index;
}

// Cerrar el modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Función para la imagen siguiente
nextBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    modalImg.src = galleryImages[currentImageIndex].src;
});

// Función para la imagen anterior
prevBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    modalImg.src = galleryImages[currentImageIndex].src;
});

// Evento para abrir el modal al hacer clic en cualquier imagen de la galería
galleryImages.forEach((img, index) => {
    img.addEventListener('click', function() {
        openModal(index);
    });
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});