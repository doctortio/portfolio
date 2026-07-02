const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if(menuBtn){menuBtn.addEventListener('click',()=>menu.classList.toggle('aberto'))}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('aberto')));
const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('ativo')}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
