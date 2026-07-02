const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('ativo');
  });
},{ threshold: .12 });
reveals.forEach(el => observer.observe(el));
