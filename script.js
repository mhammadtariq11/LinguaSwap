
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headings.forEach(heading => {
  heading.addEventListener('mouseover', () => {
    heading.style.transition = 'color 0.3s';
    heading.style.color = '#9900d1';
  });

  heading.addEventListener('mouseout', () => {
    heading.style.transition = 'color 0.3s';
    heading.style.color = '';
  });
});