// ANIMATE ON SCROLL ÖZELLİĞİ İÇİN YAZILAN DOSYA

const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

window.addEventListener('scroll', () => {
  animateOnScrollElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
});
