const starsContainer = document.getElementById('stars');
const poema = document.getElementById('poema');
const paragraphs = poema.querySelectorAll('p');
const heart = poema.querySelector('.heart');

// Generar estrellas
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = (Math.random() * 2 + 1) + 's';
  starsContainer.appendChild(star);
}

// Mostrar poema con delay, párrafos uno a uno y efecto glow
setTimeout(() => {
  poema.classList.add('show');
  paragraphs.forEach((p, i) => {
    setTimeout(() => {
      p.classList.add('show');
    }, i * 3000); // cada párrafo aparece 2.5s después del anterior
  });
  setTimeout(() => {
    heart.classList.add('show');
  }, paragraphs.length * 3000);
}, 1500);