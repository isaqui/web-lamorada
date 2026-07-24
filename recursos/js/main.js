// Hero Carousel - Owl Carousel 2
if(document.getElementById('heroSlider')){
  $('#heroSlider').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots:true,
    nav:false,
    mouseDrag:true,
    touchDrag:true,
    responsive:{0:{},768:{},1024:{}}
  });
}

// Testimonials Carousel - Owl Carousel 2
if(document.getElementById('tstCarousel')){
  $('#tstCarousel').owlCarousel({
    items:3,
    loop:true,
    autoplay:true,
    autoplayTimeout:5500,
    autoplayHoverPause:true,
    dots:true,
    nav:false,
    mouseDrag:true,
    touchDrag:true,
    margin:24,
    responsive:{0:{items:1},700:{items:2},1000:{items:3}}
  });
}

// NI / NF Tabs
document.querySelectorAll('.ni-nf-tab').forEach(tab=>tab.addEventListener('click',()=>{
  const target=tab.dataset.tab;
  document.querySelectorAll('.ni-nf-tab').forEach(t=>{
    t.classList.toggle('active',t===tab);
    t.setAttribute('aria-selected',t===tab?'true':'false');
  });
  document.querySelectorAll('.ni-nf-panel').forEach(p=>{
    const show=p.id==='tab-'+target;
    p.classList.toggle('active',show);
    p.hidden=!show;
  });
}));

// Header & Navigation
const header=document.getElementById('header');
const onScroll=()=>header.classList.toggle('solid',window.scrollY>40);
onScroll();addEventListener('scroll',onScroll,{passive:true});
const hamb=document.getElementById('hamb'),links=document.getElementById('navlinks');
hamb.addEventListener('click',()=>{const o=links.classList.toggle('open');hamb.setAttribute('aria-expanded',o)});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');hamb.setAttribute('aria-expanded','false')}));

// Scrollspy — resalta el enlace del menú según la sección visible
const navAnchors=Array.from(links.querySelectorAll('a[href^="#"]'));
const spySections=navAnchors
  .map(a=>document.getElementById(a.getAttribute('href').slice(1)))
  .filter(Boolean);
const setActiveLink=id=>{
  navAnchors.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));
};
const spy=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)setActiveLink(entry.target.id)});
},{rootMargin:'-100px 0px -66% 0px',threshold:0});
spySections.forEach(sec=>spy.observe(sec));

// Intersection Observer for animations (Animate.css)
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    const el=e.target;
    el.classList.add('in');
    const effect=el.dataset.animate;
    if(effect){
      const stagger=Math.min(parseInt(el.dataset.animateIndex||'0',10),4);
      el.style.animationDelay=(stagger*0.12)+'s';
      el.classList.add('animate__animated','animate__'+effect);
      el.addEventListener('animationend',()=>{
        el.classList.remove('animate__animated','animate__'+effect);
        el.style.animationDelay='';
      },{once:true});
    }
    io.unobserve(el);
  }
}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Stagger siblings that share a data-animate-group
document.querySelectorAll('[data-animate-group]').forEach(group=>{
  Array.from(group.children).filter(c=>c.classList.contains('reveal')).forEach((child,i)=>{
    child.dataset.animateIndex=i;
  });
});

// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{
  const item=q.parentElement,a=q.nextElementSibling,open=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null});
  if(!open){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
}));

// Lead Form
document.getElementById('leadForm').addEventListener('submit',e=>{
  e.preventDefault();const ok=document.getElementById('formOk');
  ok.style.display='block';ok.scrollIntoView({behavior:'smooth',block:'center'});
  e.target.querySelectorAll('input,textarea').forEach(f=>f.value='');
});

// Gallery — Justified Gallery + filters + modal
const galGrid=document.getElementById('galGrid');
if(galGrid){
  const $galGrid=$('#galGrid');
  const filterBtns=document.querySelectorAll('.gal-filter');
  const galItems=Array.from(galGrid.querySelectorAll('.gal-item'));
  const modal=document.getElementById('galModal');
  const modalImg=document.getElementById('galModalImg');
  const modalCaption=document.getElementById('galModalCaption');
  let visibleItems=[];
  let currentIndex=0;

  $galGrid.justifiedGallery({
    rowHeight:220,
    maxRowHeight:260,
    margins:6,
    lastRow:'justify',
    captions:false
  });

  filterBtns.forEach(btn=>btn.addEventListener('click',()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    $galGrid.justifiedGallery({
      filter:filter==='todos'?false:function(entry){
        const cats=(entry.dataset.cat||'').split(' ');
        return cats.includes(filter);
      }
    });
  }));

  const showModalItem=()=>{
    const item=visibleItems[currentIndex];
    const img=item.querySelector('img');
    modalImg.src=img.src;
    modalImg.alt=img.alt;
    const caption=item.querySelector('span').textContent;
    modalCaption.textContent=item.dataset.ref?caption+' — Imagen referencial':caption;
  };
  const openModal=item=>{
    visibleItems=galItems.filter(i=>!i.classList.contains('jg-filtered'));
    currentIndex=visibleItems.indexOf(item);
    showModalItem();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  };
  const closeModal=()=>{
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  };
  const nextImage=()=>{currentIndex=(currentIndex+1)%visibleItems.length;showModalItem()};
  const prevImage=()=>{currentIndex=(currentIndex-1+visibleItems.length)%visibleItems.length;showModalItem()};

  galItems.forEach(item=>item.addEventListener('click',()=>openModal(item)));
  document.getElementById('galModalClose').addEventListener('click',closeModal);
  document.getElementById('galModalNext').addEventListener('click',nextImage);
  document.getElementById('galModalPrev').addEventListener('click',prevImage);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
  document.addEventListener('keydown',e=>{
    if(!modal.classList.contains('open'))return;
    if(e.key==='Escape')closeModal();
    if(e.key==='ArrowRight')nextImage();
    if(e.key==='ArrowLeft')prevImage();
  });
}
