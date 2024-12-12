document.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})