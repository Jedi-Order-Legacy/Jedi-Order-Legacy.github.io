// Selektuj sve header dugmiće

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {

  header.addEventListener('click', () => {

    const item = header.parentElement; // .accordion-item

    const currentlyActive = document.querySelector('.accordion-item.active');

    // Ako je neki drugi otvoren, zatvori ga

    if (currentlyActive && currentlyActive !== item) {

      currentlyActive.classList.remove('active');

    }

    // Toggle trenutni

    item.classList.toggle('active');

  });

});
// Selektuj sve linkove u navbaru i sve sekcije

const navLinks = document.querySelectorAll('nav a');

const sections = document.querySelectorAll('section');

// Funkcija koja sakriva sve sekcije i prikazuje jednu

function showSection(targetId) {

  sections.forEach(sec => {

    if(sec.id === targetId){

      sec.style.display = 'block';

    } else {

      sec.style.display = 'none';

    }

  });

}

// Dodaj klik event na svaki link u navbaru

navLinks.forEach(link => {

  link.addEventListener('click', (e) => {

    e.preventDefault(); // sprečava default scroll

    const targetId = link.getAttribute('href').substring(1); // ukloni #

    showSection(targetId);

  });

});

// Početno: prikaz samo #home sekcije

showSection('home');

navLinks.forEach(link => {

  link.addEventListener('click', (e) => {

    e.preventDefault(); 

    const targetId = link.getAttribute('href').substring(1);

    showSection(targetId);

    // Odbaci scroll na sledećem "tick-u" da DOM ažurira layout

    setTimeout(() => {

      const targetSection = document.getElementById(targetId);

      if(targetSection){

        targetSection.scrollIntoView({ behavior: 'smooth' });

      }

    }, 0);

  });

});
