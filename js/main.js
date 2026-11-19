(function(){
const C=window.CONTENT,S=C.site,U=C.ui,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,hasG=!!window.gsap;
const esc=t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const split=t=>`<span aria-label="${esc(t)}">`+t.split(' ').map(w=>`<span class="w" aria-hidden="true"><span>${esc(w)}</span></span>`).join(' ')+'</span>';
const ext=(h,t,c='pill')=>`<a class="${c} mag" href="${h}" target="_blank" rel="noopener">${t}</a>`;
document.title=`${S.full} | ${S.role}`;
$('#ldImg').src=S.original;
$('#hdImg').src=S.original;
$('#hdName').textContent=S.full.toUpperCase();
$('#hdTalk').textContent=U.talk;$('#menuBtn').textContent=U.menu;
$('#menuList').innerHTML=C.nav.map(n=>`<li><a href="#${n[0]}">${esc(n[1])}</a></li>`).join('');
const P=C.work.projects;
$('#app').innerHTML=`
<section id="hero"><div class="wm" aria-hidden="true">${S.name}</div><div class="ph"><img src="${S.cutout}" alt="Portrait of ${S.full}" width="460" height="542" fetchpriority="high"></div>
<div class="hcopy"><div><p class="mu">${C.hero.hello}</p><h1>${C.hero.lines.join('<br>')}<br><em>${C.hero.accent}</em></h1></div><div><p>${S.pitch}</p><div class="row" style="margin-top:18px"><a class="pill lime mag" href="#work">${U.work}</a>${ext(S.github,U.github)}${ext(S.linkedin,U.linkedin)}</div></div></div></section>
<section id="skills" aria-label="Skills"><div class="mq">${[0,1].map(()=>C.skills.map((s,i)=>`<span>${esc(s)}</span><b aria-hidden="true">✦</b>`).join('')).join('')}</div></section>
<section id="prologue"><h2>${C.prologue.lines.map(split).join('<br>')}</h2><i class="brush" aria-hidden="true"></i><p>${esc(C.prologue.text)}</p></section>
<section id="about"><div class="g"><div class="card"><img loading="lazy" src="${S.original}" alt="${S.full} in a black blazer" width="1156" height="1361"></div><div><h2 class="about-title">${C.about.title}</h2>${C.about.text.map(t=>`<p style="margin-bottom:14px">${esc(t)}</p>`).join('')}<div class="sig" aria-hidden="true">${C.about.signature}</div><div class="blocks">${C.about.blocks.map(b=>`<div><h3>${b[0]}</h3><p class="mu">${b[1]}</p></div>`).join('')}</div><div class="stats">${C.about.stats.map(s=>`<div><b>${s[0]}</b>${s[1]}</div>`).join('')}</div></div></div></section>
<section id="journey"><h2 class="journey-title">My <em>Journey</em></h2><div class="tl"><i class="pg"></i>${C.journey.items.map(i=>`<div class="ms"><small>${i[0]} · ${i[1]}</small><h3>${esc(i[2])}</h3></div>`).join('')}</div></section>
<section id="work"><h2>${C.work.title}</h2>${P.map((p,i)=>`<article class="pr" data-i="${i}"><span class="t">${String(i+1).padStart(2,'0')} · ${esc(p.tag)}</span><h3>${esc(p.name)}</h3><span class="s">${esc(p.stack)}</span><p class="d">${esc(p.desc)}</p>${p.link?ext(p.link,U.code+' ↗').replace('class="pill mag"','class="pill mag" style="justify-self:start"'):''}</article>`).join('')}
<div class="xt"><span class="mu">${C.work.more}:</span>${C.work.extra.map(e=>ext(e[1],e[0])).join('')}</div></section>
<div class="pv" id="pv" aria-hidden="true"></div>
<section id="do"><h2>${C.doing.title}</h2><p class="mu" style="margin:-30px 0 30px">${C.doing.note}</p>${C.doing.items.map((t,i)=>`<div class="r"><small>${String(i+1).padStart(2,'0')}</small>${esc(t)}</div>`).join('')}</section>
<section id="craft" aria-label="${esc(C.craft.words.join(' '))}"><div class="tr" aria-hidden="true">${C.craft.words.map(w=>`<span class="L${C.craft.hi.includes(w)?' hl':''}">${w}</span>`).join('')}</div></section>
<section id="contact"><p class="mu">${C.contact.ask}</p><h2>${C.contact.big} <em id="talk">${C.contact.accent}</em></h2><a class="mail" href="mailto:${S.email}">${S.email}</a><div class="row">${ext(S.linkedin,U.linkedin,'pill lime')}${ext(S.github,U.github)}<a class="pill mag" href="${S.cv}" download>${U.cv}</a></div></section>
<footer><div class="big" aria-hidden="true">${S.name}</div><div class="row"><span>${U.ist}: <time id="ist"></time></span><span><a href="${S.github}" rel="noopener">${U.github}</a><a href="${S.linkedin}" rel="noopener">${U.linkedin}</a><a href="mailto:${S.email}">Email</a></span><a href="#hero">${U.top}</a><span>${S.copyright}</span></div></footer>`;
// clock
const clock=()=>{$('#ist').textContent=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',second:'2-digit'})};clock();setInterval(clock,1000);
// menu
const m=$('#menu'),mb=$('#menuBtn');m.hidden=true;
const tog=o=>{m.hidden=!o;mb.setAttribute('aria-expanded',o);mb.textContent=o?U.close:U.menu;if(o)$('a',m).focus()};
mb.onclick=()=>tog(m.hidden);addEventListener('keydown',e=>{if(e.key==='Escape'&&!m.hidden){tog(false);mb.focus()}});
// smooth scroll
let lenis;if(window.Lenis&&!RM){lenis=new Lenis();if(hasG){lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();tog(false);const t=$(a.getAttribute('href')==='#'?'#hero':a.getAttribute('href'));if(t)lenis?lenis.scrollTo(t):t.scrollIntoView()});
// ring
const secs=C.nav.map(n=>$('#'+n[0])),rp=$('#ringP'),rt=$('#ringT');
const upd=()=>{const h=document.documentElement,p=scrollY/(h.scrollHeight-innerHeight||1);rp.style.strokeDashoffset=100.5*(1-p);let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.5)c=i});rt.textContent=String(c).padStart(2,'0')};
addEventListener('scroll',upd,{passive:true});upd();
// spotlight
$('#hero').addEventListener('pointermove',e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',e.clientX-r.left+'px');e.currentTarget.style.setProperty('--my',e.clientY-r.top+'px')});
// project preview
const pv=$('#pv');
if(matchMedia('(hover:hover) and (min-width:900px)').matches)$$('.pr').forEach(el=>{const p=P[el.dataset.i];
el.addEventListener('pointerenter',()=>{pv.innerHTML=`<b>${esc(p.name)}</b><p>${esc(p.desc)}</p>`;pv.classList.add('on')});
el.addEventListener('pointerleave',()=>pv.classList.remove('on'));
el.addEventListener('pointermove',e=>{pv.style.left=Math.min(e.clientX+24,innerWidth-320)+'px';pv.style.top=Math.min(e.clientY+16,innerHeight-220)+'px'})});
// magnetic
if(!RM&&hasG)$$('.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.25,duration:.3})});b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.4}))});
// loader
const ld=$('#loader'),seen=sessionStorage.getItem('seen');
const hide=()=>{ld.style.display='none';sessionStorage.setItem('seen','1');intro()};
if(seen||RM||!hasG){hide()}else{const o={v:0};gsap.to(o,{v:100,duration:1.5,ease:'power2.inOut',onUpdate:()=>{const n=Math.round(o.v);$('#ldNum').textContent=String(n).padStart(3,'0');$('#ldBar').style.width=n+'%'},onComplete:()=>gsap.to(ld,{opacity:0,duration:.4,onComplete:hide})})}
function intro(){if(RM||!hasG)return;gsap.from('.wm',{yPercent:20,opacity:0,duration:1});gsap.from('.ph',{y:60,opacity:0,duration:1,delay:.15});gsap.from('.hcopy>*',{y:30,opacity:0,stagger:.1,delay:.4})}
// scroll animations
if(!RM&&hasG){gsap.registerPlugin(ScrollTrigger);
    // ABOUT SECTION ANIMATIONS

gsap.from("#about .about-title", {
    y: 35,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        once: true
    }
});

gsap.from("#about .g > div:nth-child(2) > p", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        once: true
    }
});

gsap.from("#about .blocks > div", {
    y: 25,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    scrollTrigger: {
        trigger: "#about .blocks",
        start: "top 85%",
        once: true
    }
});
$$('#prologue .w>span').forEach(s=>gsap.from(s,{yPercent:110,duration:.8,scrollTrigger:{trigger:s,start:'top 92%'}}));
gsap.from('.brush',{scaleX:0,duration:1,scrollTrigger:{trigger:'.brush',start:'top 90%'}});
gsap.to('.pg',{scaleY:1,ease:'none',scrollTrigger:{trigger:'.tl',start:'top 60%',end:'bottom 60%',scrub:true}});
$$('.ms').forEach(e=>ScrollTrigger.create({trigger:e,start:'top 60%',onToggle:s=>e.classList.toggle('on',s.isActive||s.progress>0)}));
$$('#do .r').forEach(r=>ScrollTrigger.create({trigger:r,start:'top 55%',end:'bottom 45%',toggleClass:{targets:r,className:'on'}}));
ScrollTrigger.matchMedia({'(min-width:900px)':()=>{const t=$('#craft .tr');gsap.to(t,{x:()=>-(t.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:'#craft',pin:true,scrub:.6,end:()=>'+='+(t.scrollWidth-innerWidth),invalidateOnRefresh:true}});$$('.L',t).forEach((l,i)=>gsap.from(l,{rotate:(i%2?1:-1)*25,y:(i%2?1:-1)*120,opacity:0,scrollTrigger:{trigger:'#craft',start:'top 60%',toggleActions:'play none none reverse'}}))}});
gsap.from('#talk',{filter:'blur(24px)',opacity:0,duration:1.2,scrollTrigger:{trigger:'#talk',start:'top 85%'}});
}
})();
