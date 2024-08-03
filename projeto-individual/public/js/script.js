document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.header a');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('selected');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('selected');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();  // Run on page load

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('selected'));
            link.classList.add('selected');
        });
    });
});
function toggleText(button) {
    const container = button.parentElement;
    const textToToggle = container.querySelector('.texto-expansivel');
    const isExpanded = container.classList.contains('expanded');

    // Fechar todos os textos expandidos
    document.querySelectorAll('.texto-expansivel').forEach(texto => {
        const btn = texto.parentElement.querySelector('.expande-btn');
        if (texto !== textToToggle) {
            texto.parentElement.classList.remove('expanded');
            btn.classList.remove('expande-btn-clicked');
        }
    });

    if (isExpanded) {
        container.classList.remove('expanded');
        button.classList.remove('expande-btn-clicked');
    } else {
        container.classList.add('expanded');
        button.classList.add('expande-btn-clicked');
    }
}
let currentIndex = 1; 
function showSlide(index) {
  const slides = Array.from(document.querySelectorAll('.carousel-card'));
    const totalSlides = slides.length;
    console.log(slides);
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, idx) => {
    if (idx === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  const offset = (currentIndex - 1) * -33.3333;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

showSlide(currentIndex);