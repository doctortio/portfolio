const cards = document.querySelectorAll('.secao,.areas article,.perfil-card,.hero-texto,.numeros,.contato-final');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show')}
  })
},{threshold:.12});
cards.forEach(card=>observer.observe(card));
