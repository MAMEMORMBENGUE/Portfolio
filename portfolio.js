let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.mySlides');
    
    // Masque toutes les images
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Passe à la diapositive suivante
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Affiche la diapositive actuelle
    slides[slideIndex - 1].style.display = 'block';

    // Change la diapositive toutes les 3 secondes
    setTimeout(showSlides, 3000);
}

// Démarre le diaporama
showSlides();
