const $=s=>document.querySelector(s);
const nav=[['Home','#home'],['Services','#services'],['Work','#work'],['About','#why'],['Insights','#insights'],['Contact','#contact']];
const services=[
 ['compass','Social Media Strategy','Platform-specific plans built around your audience, goals and brand voice.','bg-card'],
 ['clapperboard','Content Creation & Reels','Scripts, shoots and edits for posts, carousels and short video.','bg-lime text-[#0c0c10]'],
 ['calendar-check','Social Media Management','Publishing, community replies and monthly calendars handled for you.','bg-card'],
 ['megaphone','Paid Social Advertising','Targeted campaigns with creative testing and clear budget control.','bg-vio text-white'],
 ['users','Influencer Marketing','Creator matching, briefing and collaboration management.','bg-card'],
 ['bar-chart-3','Analytics & Optimization','Transparent reports and steady improvements based on real data.','bg-ink text-bg']];
const steps=[['Discover','Understand the audience, market, and business goals.'],['Strategize','Build a platform-specific growth and content plan.'],['Create & Launch','Produce creative campaigns and run targeted advertising.'],['Analyze & Improve','Measure performance and optimize continuously.']];
const why=['Creative storytelling','Audience-first strategy','Transparent reporting','Platform-specific campaigns','Data-driven decisions'];
const cases=[
 ['Concept · D2C skincare','Content strategy & brand awareness','Build recognition for a new skincare label.','Ingredient-led education, UGC-style Reels and a consistent visual system.','from-[#6d28ff] to-[#c8ff3d]','Glow, explained.'],
 ['Concept · Neighbourhood cafe','Local social engagement','Turn nearby regulars into a loud community.','Behind-the-bar Reels, location tagging, and monthly community prompts.','from-[#ff7a59] to-[#ffd36e]','Your daily pour.'],
 ['Concept · B2B SaaS startup','LinkedIn content & lead generation','Earn trust and qualified conversations.','Founder-led posts, carousel explainers and a lead-magnet funnel.','from-[#0f172a] to-[#6d28ff]','Ship smarter.']];
const tiles=[['Post','bg-vio text-white','col-span-2 row-span-2','Say it louder.'],['Reel cover','bg-lime text-[#0c0c10]','row-span-2','Watch this.'],['Carousel','bg-card border border-line','','Swipe 1/5'],['Ad concept','bg-ink text-bg','','Shop now'],['Campaign','bg-[#ff7a59] text-white','col-span-2','Launch week'],['Story','bg-[#e7e0ff] text-[#2a0a7a]','','Poll time']];
const quotes=['“Replace with a real client quote about working with VYBE DIGITAL.”','“Add a second approved testimonial here, with name and company.”','“Add a third approved testimonial here, with permission.”'];
const faqs=[
 ['What services do you offer?','Strategy, content and Reels, account management, paid social, influencer campaigns, and analytics. You can start with one or combine several.'],
 ['How much does it cost?','Pricing depends on scope, platforms and content volume. Share your budget in the form and we’ll recommend a plan that fits.'],
 ['How does onboarding work?','We start with a discovery call, review your accounts and goals, then share a plan for your approval before work begins.'],
 ['How long until we see results?','It varies by channel and budget. Paid campaigns can show early signals within weeks; organic community growth usually takes longer. We can’t guarantee outcomes.'],
 ['How do you report progress?','Regular reports cover the metrics tied to your goals, with plain-language notes on what we learned and what we’ll change next.'],
 ['Do you work with small businesses?','Yes. We work with startups, creators and small businesses as well as established brands, and scale plans to match.']];
const fields=[
 ['name','Full name','text','sm:col-span-1',1],['email','Work email','email','sm:col-span-1',1],['phone','Phone number','tel','sm:col-span-1',1],['company','Company name','text','sm:col-span-1',0],
 ['site','Website or social profile','text','sm:col-span-2',0]];

// nav
const li=(h,t,c='')=>`<li><a href="${h}" class="${c}">${t}</a></li>`;
$('#navLinks').innerHTML=nav.map(n=>li(n[1],n[0],'hover:text-vio')).join('');
$('#mobLinks').innerHTML=nav.map(n=>li(n[1],n[0],'mob block py-4 text-2xl font-extrabold border-b border-line')).join('');
const mb=$('#menuBtn'),mm=$('#mobileMenu');
function tog(o){mm.classList.toggle('hidden',!o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')}
mb.onclick=()=>tog(mm.classList.contains('hidden'));
document.querySelectorAll('.mob').forEach(a=>a.addEventListener('click',()=>tog(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')tog(false)});

// static
$('#ticker').innerHTML=Array(4).fill('<span>CREATIVE THINKING.</span><span class="text-lime">STRATEGIC EXECUTION.</span><span>MEASURABLE GROWTH.</span>').join('');
$('#logos').innerHTML=Array.from({length:5},(_,i)=>`<div class="border border-dashed border-line rounded-xl h-16 grid place-items-center text-sm text-mute font-semibold">Client logo ${i+1}</div>`).join('');
$('#serviceGrid').innerHTML=services.map((s,i)=>`<article class="rv group rounded-3xl p-7 min-h-[260px] flex flex-col justify-between transition hover:-translate-y-1 ${s[3]} ${i%2?'lg:mt-8':''}">
 <span class="w-14 h-14 rounded-2xl bg-white/20 border border-current/20 grid place-items-center group-hover:rotate-6 transition"><i data-lucide="${s[0]}"></i></span>
 <div><h3 class="text-2xl font-extrabold tracking-tight">${s[1]}</h3><p class="mt-2 opacity-80">${s[2]}</p></div></article>`).join('');
$('#steps').innerHTML=steps.map((s,i)=>`<li class="rv flex md:block gap-5 relative">
 <span class="shrink-0 w-14 h-14 rounded-full bg-ink text-bg grid place-items-center font-extrabold relative z-10">0${i+1}</span>
 ${i<3?'<span class="absolute left-7 top-14 bottom-[-2.5rem] w-px bg-line md:hidden"></span>':''}
 ${i<3?'<span class="hidden md:block absolute top-7 left-14 right-[-1.5rem] h-px bg-line"></span>':''}
 <div class="md:mt-6"><h3 class="text-xl font-extrabold">${s[0]}</h3><p class="mt-2 text-mute">${s[1]}</p></div></li>`).join('');
$('#whyList').innerHTML=why.map(w=>`<li class="flex items-center gap-3 font-bold text-lg"><span class="w-7 h-7 rounded-full bg-lime text-[#0c0c10] grid place-items-center"><i data-lucide="check" class="w-4 h-4"></i></span>${w}</li>`).join('');
$('#kpis').innerHTML=['Reach','Engagement','Clicks'].map(k=>`<div class="rounded-xl bg-bg border border-line p-3"><p class="text-mute">${k}</p><p class="font-extrabold text-xl">00.0</p></div>`).join('');
$('#bars').innerHTML=[40,55,35,70,60,85,95].map((h,i)=>`<div class="flex-1 rounded-t-lg ${i>4?'bg-vio':'bg-line'}" style="height:${h}%"></div>`).join('');
$('#cases').innerHTML=cases.map((c,i)=>`<article class="rv grid md:grid-cols-2 gap-6 bg-white/5 border border-white/15 rounded-3xl p-5 md:p-8 ${i==1?'md:[&>div:first-child]:order-2':''}">
 <div class="rounded-2xl bg-gradient-to-br ${c[4]} min-h-[260px] grid place-items-center p-6"><span class="font-extrabold text-4xl md:text-5xl text-white text-center tracking-tight drop-shadow">${c[5]}</span></div>
 <div class="flex flex-col justify-center"><span class="self-start text-xs font-bold bg-lime text-[#0c0c10] rounded-full px-3 py-1">${c[0]}</span>
 <h3 class="mt-4 text-2xl font-extrabold">${c[1]}</h3>
 <p class="mt-3 opacity-80"><b>Objective:</b> ${c[2]}</p><p class="mt-2 opacity-80"><b>Approach:</b> ${c[3]}</p>
 <p class="mt-4 text-sm border border-dashed border-white/30 rounded-xl p-3">Results: [add real, verified results here]</p></div></article>`).join('');
$('#showcase').innerHTML=tiles.map(t=>`<div class="rv rounded-3xl p-4 flex flex-col justify-between overflow-hidden transition hover:scale-[1.02] ${t[1]} ${t[2]}"><span class="text-xs font-bold opacity-80">${t[0]}</span><span class="font-extrabold text-2xl md:text-3xl leading-none tracking-tight">${t[3]}</span></div>`).join('');
$('#quotes').innerHTML=quotes.map((q,i)=>`<figure class="rv rounded-3xl border border-line bg-bg p-7 ${i==1?'md:mt-8':''}"><blockquote class="text-lg font-semibold">${q}</blockquote><figcaption class="mt-5 text-sm text-mute">Client name, Company</figcaption></figure>`).join('');
$('#faqList').innerHTML=faqs.map((f,i)=>`<div><h3><button class="w-full flex justify-between items-center gap-4 text-left py-5 font-bold text-lg" aria-expanded="false" aria-controls="fa${i}" id="fq${i}">${f[0]}<i data-lucide="plus" class="shrink-0"></i></button></h3>
 <div id="fa${i}" role="region" aria-labelledby="fq${i}" class="faq-a"><div class="overflow-hidden"><p class="pb-5 text-mute">${f[1]}</p></div></div></div>`).join('');
document.querySelectorAll('#faqList button').forEach(b=>b.onclick=()=>{const o=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',o);document.getElementById(b.getAttribute('aria-controls')).classList.toggle('open',o)});
$('#fNav').innerHTML=nav.map(n=>li(n[1],n[0],'hover:text-lime')).join('');
$('#fServ').innerHTML=services.map(s=>li('#services',s[1],'hover:text-lime')).join('');
// EDIT: replace with your real profile URLs
$('#socials').innerHTML=[['instagram','https://www.instagram.com/'],['linkedin','https://www.linkedin.com/'],['youtube','https://www.youtube.com/']].map(s=>`<a href="${s[1]}" target="_blank" rel="noopener" aria-label="${s[0]}" class="w-10 h-10 grid place-items-center rounded-full border border-white/30 hover:bg-lime hover:text-[#0c0c10]"><i data-lucide="${s[0]}" class="w-4 h-4"></i></a>`).join('');
$('#yr').textContent=new Date().getFullYear();
privBtn.onclick=()=>priv.showModal();

// form
const inp='w-full min-h-[48px] rounded-xl border-2 border-line bg-card px-4 py-3 focus:border-vio';
const f=$('#leadForm');
const fld=(id,l,t,c,r)=>`<div class="${c}"><label for="${id}" class="block font-bold mb-1">${l}${r?' <span aria-hidden="true">*</span>':''}</label><input id="${id}" name="${id}" type="${t}" ${r?'required':''} class="${inp}" aria-describedby="${id}-e"><p id="${id}-e" class="text-sm text-red-600 mt-1 min-h-[1.25rem]"></p></div>`;
f.innerHTML=fields.map(x=>fld(...x)).join('')+
`<div class="sm:col-span-1"><label for="service" class="block font-bold mb-1">Service required <span aria-hidden="true">*</span></label><select id="service" name="service" required class="${inp}" aria-describedby="service-e"><option value="">Select a service</option>${services.map(s=>`<option>${s[1]}</option>`).join('')}</select><p id="service-e" class="text-sm text-red-600 mt-1 min-h-[1.25rem]"></p></div>
<div class="sm:col-span-1"><label for="budget" class="block font-bold mb-1">Monthly marketing budget</label><select id="budget" name="budget" class="${inp}"><option value="">Prefer to discuss</option><option>Under 50k INR</option><option>50k–2L INR</option><option>2L–5L INR</option><option>5L+ INR</option></select><p class="min-h-[1.25rem]"></p></div>
<div class="sm:col-span-2"><label for="goals" class="block font-bold mb-1">Project goals <span aria-hidden="true">*</span></label><textarea id="goals" name="goals" rows="4" required class="${inp}" aria-describedby="goals-e"></textarea><p id="goals-e" class="text-sm text-red-600 mt-1 min-h-[1.25rem]"></p></div>
<button id="sendBtn" class="btn btn-vio sm:col-span-2 justify-center" type="submit">Send message</button>`;
const msgs={name:'Enter your full name.',email:'Enter a valid work email, like name@company.com.',phone:'Enter a phone number with 7–15 digits.',service:'Choose a service.',goals:'Tell us a little about your goals (10+ characters).'};
const rules={name:v=>v.trim().length>1,email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),phone:v=>/^[+\d][\d\s().-]{6,19}$/.test(v)&&v.replace(/\D/g,'').length>=7&&v.replace(/\D/g,'').length<=15,service:v=>!!v,goals:v=>v.trim().length>=10};
function check(id){const el=f.elements[id],ok=rules[id](el.value),e=document.getElementById(id+'-e');e.textContent=ok?'':msgs[id];el.setAttribute('aria-invalid',!ok);return ok}
Object.keys(rules).forEach(id=>f.elements[id].addEventListener('blur',()=>check(id)));
/* INTEGRATION BOUNDARY: set FORM_ENDPOINT to a backend or form service (Formspree, Web3Forms, your API).
   It must accept a JSON POST and return 2xx on success. Until set, nothing is sent and the form says so. */
const FORM_ENDPOINT='https://formspree.io/f/myeekkbp';
async function submitLead(data){
 if(!FORM_ENDPOINT) throw new Error('NOT_CONFIGURED');
 const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)});
 if(!r.ok) throw new Error('HTTP '+r.status);
}
const st=$('#formStatus');
f.addEventListener('submit',async e=>{
 e.preventDefault();
 const bad=Object.keys(rules).filter(id=>!check(id));
 if(bad.length){st.innerHTML='<p class="text-red-600 font-semibold">Please fix the highlighted fields.</p>';f.elements[bad[0]].focus();return}
 const b=$('#sendBtn');b.disabled=true;b.textContent='Sending…';st.textContent='';
 try{await submitLead(Object.fromEntries(new FormData(f)));f.reset();st.innerHTML='<p class="rounded-xl bg-lime text-[#0c0c10] font-bold p-4">Thanks! We’ve received your message and will reply soon.</p>'}
 catch(err){st.innerHTML=`<p class="rounded-xl border-2 border-red-600 text-red-600 font-semibold p-4">${err.message==='NOT_CONFIGURED'?'This form isn’t connected yet. Set FORM_ENDPOINT in the page script to enable sending. Nothing was submitted.':'Something went wrong and your message wasn’t sent. Please try again.'}</p>`}
 b.disabled=false;b.textContent='Send message';
});

// reveal + icons
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
lucide.createIcons();
