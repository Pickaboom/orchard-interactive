const cfg=window.ORCHARD_CONFIG||{};
document.querySelectorAll('[data-link]').forEach(a=>{const key=a.dataset.link;if(cfg[key])a.href=cfg[key];else if(key==='supportEmail'){a.href='#';a.addEventListener('click',e=>e.preventDefault())}});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});document.querySelectorAll('.fade').forEach(el=>obs.observe(el));
const modal=document.querySelector('.modal');if(modal){document.querySelectorAll('[data-gallery]').forEach(btn=>btn.addEventListener('click',()=>{modal.querySelector('img').src=btn.querySelector('img').src;modal.classList.add('open')}));modal.addEventListener('click',()=>modal.classList.remove('open'));}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
