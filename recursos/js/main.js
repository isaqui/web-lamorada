const header=document.getElementById('header');
  const onScroll=()=>header.classList.toggle('solid',window.scrollY>40);
  onScroll();addEventListener('scroll',onScroll,{passive:true});
  const hamb=document.getElementById('hamb'),links=document.getElementById('navlinks');
  hamb.addEventListener('click',()=>{const o=links.classList.toggle('open');hamb.setAttribute('aria-expanded',o)});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');hamb.setAttribute('aria-expanded','false')}));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.14});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{
    const item=q.parentElement,a=q.nextElementSibling,open=item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null});
    if(!open){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
  }));
  document.getElementById('leadForm').addEventListener('submit',e=>{
    e.preventDefault();const ok=document.getElementById('formOk');
    ok.style.display='block';ok.scrollIntoView({behavior:'smooth',block:'center'});
    e.target.querySelectorAll('input,textarea').forEach(f=>f.value='');
  });
