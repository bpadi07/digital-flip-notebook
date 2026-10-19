/* Aarvi Jewellers premium 26-page flipbook — standalone cover + 12 spreads + back cover. */
const ASSET = 'assets/images/';
const MUSIC = {
  veena: {src:'assets/audio/music-veena-tanpura.wav', name:'South Indian Veena & Tanpura'},
  flute: {src:'assets/audio/music-carnatic-flute.wav', name:'Carnatic Flute Mood'},
  bells: {src:'assets/audio/music-veena-bells.wav', name:'Veena & Temple Bells'}
};
const PAGE_TOTAL = 26;
let productSpreadCount = 0;
const product = (title, subtitle, desc, image, modelImage, position='50% 42%', badge='CRAFTED FOR EVERY STORY') => {
  const productPage={kind:'product', image, kicker:'THE AARVI COLLECTION', title, subtitle, desc, badge};
  const modelPage={kind:'model', image:modelImage, position, kicker:'STYLED BY AARVI', title:`Wear your ${title.toLowerCase()} with confidence`, desc:`A closer look at ${title.toLowerCase()} for everyday elegance, celebrations and meaningful gifts.`, badge:'TIMELESS ELEGANCE · BEYOND GENERATIONS'};
  // Reverse image/content placement on alternate product spreads for a more editorial, book-like rhythm.
  const reverse=(productSpreadCount++ % 2)===1;
  return {title,section:'THE AARVI COLLECTION',left:reverse?modelPage:productPage,right:reverse?productPage:modelPage};
};

// 24 interior pages in 12 spreads. Add the standalone front and back covers to make 26 pages total.
const spreads = [
  {
    title:'Company Profile', section:'WELCOME TO AARVI',
    left:{kind:'content',tone:'cream',kicker:'COMPANY PROFILE',title:'Every jewel tells an amazing story',desc:'Based in Belagavi (Belgaum), Karnataka, Aarvi Collection celebrates the pieces that stay with us: a first gift, a family celebration, a promise, or a tradition passed from one generation to the next. Our catalogue brings together classic inspiration and contemporary style for women and men.',features:[{icon:'✦',title:'A collection for every chapter',text:'Everyday favourites, meaningful gifts and occasion wear.'},{icon:'◇',title:'Details that matter',text:'Explore designs, finishes and styles that feel personal.'},{icon:'♡',title:'A more personal experience',text:'Proudly based in Belagavi, Karnataka; ask us to help find a piece that feels right.'}],badge:'TRADITION · TRUST · PERSONAL STYLE'},
    right:{kind:'model',image:'model-man.jpg',position:'50% 28%',kicker:'THE PEOPLE BEHIND THE PROMISE',title:'A personal touch, at every step',desc:'Founder / owner portrait placeholder. This is a stock photograph for the demo; replace it with the actual owner’s photo and approved profile before publishing.',badge:'STOCK PHOTO PLACEHOLDER'}
  },
  {
    title:'About Us · Vision & Mission', section:'OUR PHILOSOPHY',
    left:{kind:'content',tone:'cream',kicker:'ABOUT AARVI',title:'Jewellery for life’s meaningful moments',desc:'Jewellery is more than an accessory. It can carry a memory, mark a new beginning and connect generations. Aarvi’s collection is presented with that feeling in mind: a thoughtful mix of timeless motifs and styles for modern life.',features:[{icon:'✦',title:'Our Vision',text:'To be a trusted destination for jewellery that feels meaningful, timeless and personal.'},{icon:'◇',title:'Our Mission',text:'To make discovering the right design welcoming, informed and centred on each customer.'},{icon:'✓',title:'Our Promise',text:'Clear conversations, careful choices and helpful guidance before a purchase.'}],badge:'CRAFT · CARE · CHARACTER'},
    right:{kind:'model',image:'bridal-couple.jpg',position:'50% 40%',kicker:'VISION · MISSION · MOMENTS',title:'Made to be part of your story',desc:'From the simplest everyday detail to a family celebration, choose pieces that feel like you and the moments you want to remember.',badge:'A LITTLE SPARKLE FOR EVERY CHAPTER'}
  },
  {
    title:'A Story of Gold', section:'A STORY THROUGH TIME',
    left:{kind:'story',kicker:'A FAMILY STORY · AN ILLUSTRATION',title:'Two choices. Two very different journeys.',desc:'Imagine a family in 2000 choosing between a ₹6 lakh car and ₹6 lakh worth of gold. In this illustrative story, the car’s resale value is shown as ₹80,000, while the gold is shown at ₹16 lakh.',note:'Illustrative figures supplied for this brochure — not a verified valuation, forecast or investment return. Actual vehicle resale depends on age, model and condition; actual gold value depends on purity, quantity, market price, taxes and charges.',badge:'A STORY ABOUT TIME · NOT A GUARANTEED RETURN'},
    right:{kind:'history',kicker:'INDIA · 24K GOLD · PER 10 GRAMS',title:'Gold rate milestones · 2000–2026',desc:'Selected historical reference points. The 2026 figure is a reported daily price; historical sources use differing averages and methodologies.',rates:[['2000','₹4,400'],['2010','₹18,500'],['2015','₹26,343'],['2020','₹48,651'],['2024','₹77,913'],['2025','₹1,03,870'],['2026','₹1,47,430']],footnote:'Approximate reference values, not live rates. The 16 Oct 2026 Bengaluru report quoted ₹1,47,430 per 10g for 24K gold. Check the day’s local rate, purity, taxes and making charges before buying.',badge:'PAST PRICES DO NOT GUARANTEE FUTURE RETURNS'}
  },
  {
    title:'Gold · Silver · Platinum & Stones', section:'PRECIOUS MATERIALS',
    left:{kind:'metals',kicker:'PRECIOUS MATERIALS',title:'A world of beautiful details',desc:'Discover different metals and the colour, character and sparkle of precious stones.',metals:[{icon:'✦',name:'Gold',desc:'Classic yellow gold, white-gold looks and rose-toned styles.'},{icon:'◇',name:'Silver',desc:'Bright, versatile designs for everyday wear and gifting.'},{icon:'♢',name:'Platinum',desc:'A refined, contemporary look for special pieces.'}],badge:'ASK ABOUT PURITY, HALLMARKING & CARE'},
    right:{kind:'gallery',kicker:'COLOUR · LIGHT · PERSONALITY',title:'Stones that tell your story',desc:'Explore stone-inspired looks, from clean diamond sparkle to rich, colourful accents.',images:['ring-diamond.jpg','necklace-emerald.jpg','earrings-emerald.jpg','gold-pendant.svg','bangles-gold.jpg','model-wearing-necklace.jpg'],quote:'Choose the colour and character that make a piece feel personal.',badge:'DIAMOND · EMERALD · RUBY · SAPPHIRE · MORE'}
  },
  product('Rings','A circle of forever','From graceful everyday bands to statement designs, find a little sparkle for engagements, celebrations and the moments that matter.','ring-diamond.jpg','model-wearing-ring.jpg','50% 43%','ENGAGEMENT · EVERYDAY · STATEMENT'),
  product('Earrings','Grace in every move','Delicate studs, classic drops and festive designs bring light and movement to every look.','earrings-emerald.jpg','model-wearing-earrings.jpg','50% 35%','STUDS · DROPS · FESTIVE DESIGNS'),
  product('Necklaces & Pendants','Elegance in every layer','From delicate pendants to occasion-worthy necklaces, discover designs for layering, gifting and making an entrance.','necklace-emerald.jpg','model-wearing-necklace.jpg','50% 36%','PENDANTS · LAYERING · STATEMENT SETS'),
  product('Bangles & Bracelets','Tradition meets modern style','From classic gold bangles to sleek bracelets, choose wristwear for everyday rituals, festivities and thoughtful gifts.','bangles-gold.jpg','model-wearing-bracelet.jpg','50% 55%','CLASSIC · STACKABLE · MODERN FORMS'),
  product('Women’s Mangalsutra','A bond beyond time','A meaningful symbol of love, reimagined in styles that honour tradition and the rhythm of modern life.','mangalsutra.jpg','model-wearing-mangalsutra.jpg','50% 37%','TIMELESS · CONTEMPORARY · EVERYDAY'),
  product('Men’s Gold Chains','Strength in simplicity','Confident chains and bracelets add a considered finishing touch to a modern wardrobe and make memorable gifts.','mens-chain.svg','model-wearing-chain.jpg','50% 27%','CHAINS · BRACELETS · GIFTING'),
  product('Bridal Collection','Made for your most beautiful day','A celebration of artistry, tradition and personal style for ceremonies and milestones you will remember forever.','necklace-emerald.jpg','model-bridal-couple.jpg','50% 38%','BRIDAL SETS · CEREMONIES · CELEBRATIONS'),
  {
    title:'Gold Saving Scheme · Services · Contact', section:'PLAN · CARE · CONNECT',
    left:{kind:'services',kicker:'PLAN TODAY · CELEBRATE TOMORROW',title:'Services for every story',desc:'Belagavi, Karnataka · Ask us about saving plans, jewellery care and seasonal offers.',services:[{icon:'♧',title:'Gold Saving Scheme',text:'Ask about instalments, duration and redemption terms.'},{icon:'◇',title:'Gold & Diamond',text:'Explore pieces for daily wear and special occasions.'},{icon:'✧',title:'Custom Design',text:'Discuss a design that feels personal.'},{icon:'↻',title:'Gold Exchange',text:'Confirm current exchange rules and valuation.'},{icon:'⚒',title:'Repair & Care',text:'Ask about jewellery cleaning, repair and upkeep.'},{icon:'✓',title:'Hallmark & Valuation',text:'Request details about purity and valuation.'}],badge:'PLAN TERMS MUST BE CONFIRMED WITH THE STORE'},
    right:{kind:'contact',kicker:'WE’RE HERE TO HELP',title:'Connect with Aarvi',desc:'Questions about a design, a gift or the Gold Saving Scheme? Reach out to our team.',contacts:[{icon:'◉',label:'WHATSAPP',value:'8073112321',href:'https://wa.me/918073112321?text=Hello%20Aarvi%20Jewellers%2C%20I%20would%20like%20to%20know%20more.'},{icon:'☎',label:'CALL',value:'+91 80731 12321',href:'tel:+918073112321'},{icon:'✉',label:'EMAIL',value:'info@aarvijewellers.com',href:'mailto:info@aarvijewellers.com'},{icon:'⌖',label:'LOCATION · CITY',value:'Belagavi (Belgaum), Karnataka',href:'https://www.google.com/maps/search/?api=1&query=jewellery+stores+in+Belagavi+Karnataka'}],badge:'WE LOOK FORWARD TO HEARING FROM YOU'}
  }
];

const $ = id => document.getElementById(id);
const book = $('book'), bookShell = $('bookShell'), coverGate = $('coverGate');
const spreadCount = $('spreadCount'), mobilePage = $('mobilePage'), spreadCaption = $('spreadCaption'), progressBar = $('progressBar');
const thumbnailStrip = $('thumbnailStrip'), thumbnailWrap = $('thumbnailWrap'), contentsList = $('contentsList');
const drawer = $('contentsDrawer'), scrim = $('scrim'), backgroundMusic = $('backgroundMusic');
const pageTurnAudio = $('pageTurnAudio'), buttonAudio = $('buttonAudio');
let current = -1; // -1 = front cover; 0–11 = interior spreads; 12 = back cover.
let zoom = 1, autoTimer = null, soundOn = true, musicOn = false, transitionLock = false, transitionTimer = null;
let effectVolume = .23;
function escapeHTML(value='') { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function safeAudio(audio, volume) { try { audio.volume=Math.max(0,Math.min(1,volume)); audio.currentTime=0; const p=audio.play(); if(p?.catch)p.catch(()=>{}); } catch (_) {} }
function asset(name) { return `${ASSET}${name}`; }
function mediaMarkup(p, extra='') {
  if (!p.image) return '';
  const alt = p.imageAlt || `${p.title || 'Aarvi Jewellers'} jewellery photograph`;
  return `<img class="page-photo ${extra}" src="${asset(p.image)}" alt="${escapeHTML(alt)}" style="object-position:${escapeHTML(p.position || 'center')}" loading="eager" onerror="this.classList.add('image-missing')">`;
}
function featuresMarkup(features=[]) {
  return `<div class="feature-list">${features.map((f,i)=>{
    if (typeof f === 'string') return `<div class="feature-row"><b>${['✦','◇','✓','↗','♡'][i%5]}</b><span>${escapeHTML(f)}</span></div>`;
    return `<div class="feature-row"><b>${escapeHTML(f.icon||'✦')}</b><span>${f.title?`<strong>${escapeHTML(f.title)}</strong>`:''}${f.text?`<small>${escapeHTML(f.text)}</small>`:''}${!f.title&&!f.text?escapeHTML(f.icon||'') : ''}</span></div>`;
  }).join('')}</div>`;
}
function ctaMarkup(p) { return p.cta ? `<button class="page-cta" data-action="${escapeHTML(p.action||'whatsapp')}">${escapeHTML(p.cta)} <span>↗</span></button>` : ''; }
function renderPage(p, side, spreadIndex) {
  const pageNumber = spreadIndex*2 + (side === 'left' ? 2 : 3);
  let content = '', classes = `page ${side} kind-${p.kind||'content'} tone-${spreadIndex%6} ${p.tone==='cream'?'cream':''}`;
  const copy = (extra='') => `<div class="page-copy ${extra}"><div class="page-kicker">${p.kicker||'AARVI JEWELLERS'}</div><h2 class="page-title">${p.title||'Aarvi Collection'}</h2><div class="small-rule"></div>${p.subtitle?`<p class="page-subtitle">${escapeHTML(p.subtitle)}</p>`:''}${p.desc?`<p class="page-desc">${p.desc}</p>`:''}${p.features?featuresMarkup(p.features):''}${p.badge?`<span class="page-badge">✦ ${escapeHTML(p.badge)}</span>`:''}${ctaMarkup(p)}</div>`;

  if (p.kind === 'intro' || p.kind === 'model') {
    content = `${mediaMarkup(p)}<div class="full-image-shade"></div><div class="full-page-copy"><div class="page-kicker">${p.kicker||'AARVI JEWELLERS'}</div><h2 class="page-title">${p.title||'Jewellery for Every Story'}</h2><div class="small-rule"></div><p class="page-desc">${escapeHTML(p.desc||'')}</p>${p.tagline?`<p class="cover-tagline">${escapeHTML(p.tagline)}</p>`:''}${p.badge?`<span class="page-badge">✦ ${escapeHTML(p.badge)}</span>`:''}</div>`;
  } else if (p.kind === 'product') {
    content = `<div class="product-photo-wrap">${mediaMarkup(p,'product-photo')}</div><div class="product-caption"><div class="page-kicker">${p.kicker||'THE AARVI COLLECTION'}</div><h2 class="page-title">${p.title}</h2><div class="small-rule"></div>${p.subtitle?`<p class="page-subtitle">${escapeHTML(p.subtitle)}</p>`:''}<p class="page-desc">${escapeHTML(p.desc||'A considered piece for every story.')}</p>${p.badge?`<span class="page-badge">✦ ${escapeHTML(p.badge)}</span>`:''}<span class="product-offer-tag">✧ FESTIVE OFFERS · ASK IN STORE</span><button class="page-cta compact" data-action="whatsapp">Enquire about this style <span>↗</span></button></div>`;
  } else if (p.kind === 'services') {
    content = `<div class="services-page-head"><div class="page-kicker">${p.kicker}</div><h2 class="page-title">${p.title}</h2><div class="small-rule"></div><p class="page-desc">${escapeHTML(p.desc||'')}</p><div class="offer-callout"><b>SEASONAL OFFER PREVIEW</b><span>Selected-design savings · bridal combos · gifting extras</span><em>Ask in store; availability and terms apply.</em></div></div><div class="service-grid">${(p.services||[]).map(s=>`<button class="service-tile" data-action="${s.title.toLowerCase().includes('saving')?'gold':'whatsapp'}"><span class="service-icon">${s.icon}</span><b>${escapeHTML(s.title)}</b><small>${escapeHTML(s.text)}</small></button>`).join('')}</div><span class="page-badge">✦ ${escapeHTML(p.badge||'AARVI JEWELLERS')}</span>`;
  } else if (p.kind === 'content') {
    content = `<div class="content-layout">${p.image?`<div class="content-image">${mediaMarkup(p)}</div>`:''}${copy('content-copy')}</div>`;
  } else if (p.kind === 'story') {
    content = `<div class="story-layout"><div class="page-kicker">${p.kicker}</div><h2 class="page-title">${p.title}</h2><div class="small-rule"></div><p class="page-desc">${escapeHTML(p.desc)}</p><div class="story-comparison"><div class="story-stat car"><span>🚘</span><small>CAR RESALE · EXAMPLE</small><strong>₹80,000</strong><em>from a ₹6 lakh purchase</em></div><div class="story-vs">VERSUS</div><div class="story-stat gold"><span>✦</span><small>GOLD VALUE · EXAMPLE</small><strong>₹16 lakh</strong><em>from a ₹6 lakh purchase</em></div></div><div class="story-disclaimer">${escapeHTML(p.note)}</div><span class="page-badge">✦ ${escapeHTML(p.badge)}</span></div>`;
  } else if (p.kind === 'history') {
    content = `<div class="history-layout"><div class="page-kicker">${p.kicker}</div><h2 class="page-title">${p.title}</h2><div class="small-rule"></div><p class="page-desc">${escapeHTML(p.desc)}</p><div class="history-list">${p.rates.map((r,i)=>`<div class="history-row"><span class="history-dot">${i+1}</span><b>${escapeHTML(r[0])}</b><span class="history-track"><i style="width:${Math.max(7,Number(r[1].replace(/[^0-9]/g,''))/147430*100)}%"></i></span><strong>${escapeHTML(r[1])}</strong></div>`).join('')}</div><p class="history-note">${escapeHTML(p.footnote)}</p><span class="page-badge">✦ ${escapeHTML(p.badge)}</span></div>`;
  } else if (p.kind === 'metals') {
    content = `<div class="metals-layout"><div class="page-kicker">${p.kicker}</div><h2 class="page-title">${p.title}</h2><div class="small-rule"></div><p class="page-desc">${escapeHTML(p.desc)}</p><div class="metals-grid">${p.metals.map(m=>`<div class="metal-card"><span>${m.icon}</span><h3>${escapeHTML(m.name)}</h3><p>${escapeHTML(m.desc)}</p></div>`).join('')}</div><div class="stone-chips"><span>DIAMOND</span><span>EMERALD</span><span>RUBY</span><span>SAPPHIRE</span><span>POLKI</span><span>COLOURED STONES</span></div><span class="page-badge">✦ ${escapeHTML(p.badge)}</span></div>`;
  } else if (p.kind === 'gallery') {
    content = `<div class="gallery-page"><div class="page-kicker">${p.kicker}</div><h2 class="page-title">${p.title}</h2><p class="page-desc">${escapeHTML(p.desc||'')}</p><div class="gallery-grid">${(p.images||[]).map((img,i)=>`<img src="${asset(img)}" alt="Aarvi jewellery gallery image ${i+1}" loading="eager" onerror="this.classList.add('image-missing')">`).join('')}</div><blockquote>${escapeHTML(p.quote||'Made for moments that matter.')}</blockquote><span class="page-badge">✦ ${escapeHTML(p.badge||'MOMENTS OF ELEGANCE')}</span></div>`;
  } else if (p.kind === 'contact') {
    content = `<div class="contact-page-inner"><div class="contact-topline"><span class="contact-seal">✦</span><span class="page-kicker">${p.kicker}</span></div><h2 class="page-title">${p.title}</h2><div class="small-rule"></div><p class="page-desc">${escapeHTML(p.desc||'')}</p><div class="contact-details">${p.contacts.map(c=>`<a class="contact-detail" href="${escapeHTML(c.href)}" ${c.href.startsWith('https://')?'target="_blank" rel="noopener"':''}><span class="icon-disc">${c.icon}</span><span><small>${escapeHTML(c.label)}</small><strong>${escapeHTML(c.value)}</strong></span><span class="contact-arrow">↗</span></a>`).join('')}</div><div class="social-area"><span>FOLLOW / CONNECT</span><div class="icon-row"><a class="mini-icon" href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">◎</a><a class="mini-icon" href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook" title="Facebook">f</a><a class="mini-icon" href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube" title="YouTube">▶</a><a class="mini-icon" href="https://wa.me/918073112321" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">◉</a><a class="mini-icon" href="mailto:info@aarvijewellers.com" aria-label="Email" title="Email">✉</a></div></div><span class="page-badge">✦ ${escapeHTML(p.badge||'LET’S CONNECT')}</span></div>`;
  }
  return `<article class="${classes}" aria-label="Book page ${pageNumber}">${content}<span class="page-number">${String(pageNumber).padStart(2,'0')}</span></article>`;
}
function renderSpread(index, animate=false) {
  const s = spreads[index]; if (!s) return;
  book.dataset.tone=['champagne','blush','sage','plum','lagoon','terracotta'][index%6];
  book.classList.remove('single-page');
  book.innerHTML = renderPage(s.left,'left',index) + renderPage(s.right,'right',index);
  if (animate) { book.classList.remove('book-transition'); void book.offsetWidth; book.classList.add('book-transition'); window.setTimeout(()=>book.classList.remove('book-transition'),650); }
  const first=index*2+2, second=first+1;
  spreadCount.textContent=`${String(first).padStart(2,'0')}–${String(second).padStart(2,'0')} / ${PAGE_TOTAL}`;
  mobilePage.textContent=spreadCount.textContent; spreadCaption.textContent=s.title;
  progressBar.style.width=`${((index+1)/spreads.length)*90+3}%`;
  book.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',()=>handleAction(btn.dataset.action)));
  updateNavigationState();
}
function renderBackCover(animate=false) {
  book.classList.add('single-page');
  book.innerHTML=`<article class="page back-cover kind-thankyou" aria-label="Book page 26"><img class="page-photo" src="${asset('model-woman.jpg')}" alt="Jewellery model portrait" style="object-position:52% 38%"><div class="full-image-shade back-cover-shade"></div><div class="back-cover-copy"><div class="cover-brand-mark">✦</div><div class="cover-brand-name">AARVI<small>JEWELLERS</small></div><div class="page-kicker">THANK YOU FOR TURNING THE PAGES</div><h2 class="page-title">Every story deserves <em>a little sparkle.</em></h2><div class="small-rule"></div><p class="page-desc">May your most meaningful moments shine for generations to come.</p><div class="back-cover-cta"><a href="https://wa.me/918073112321" target="_blank" rel="noopener">WHATSAPP AARVI ↗</a><span>DESIGNED BY CVIS</span></div><div class="thank-pattern">❧ ✧ ❧</div></div><span class="page-number">26</span></article>`;
  if (animate) { book.classList.remove('book-transition'); void book.offsetWidth; book.classList.add('book-transition'); window.setTimeout(()=>book.classList.remove('book-transition'),650); }
  spreadCount.textContent=`26 / ${PAGE_TOTAL}`; mobilePage.textContent=spreadCount.textContent; spreadCaption.textContent='Thank You · Designed by CVIS'; progressBar.style.width='100%';
  updateNavigationState();
}
function updateNavigationState() {
  $('prevBtn').disabled=current===-1; $('mobilePrev').disabled=current===-1; $('firstBtn').disabled=current===-1;
  $('nextBtn').disabled=current===12; $('mobileNext').disabled=current===12; $('lastBtn').disabled=current===12;
  document.querySelectorAll('.side-link').forEach(el=>{
    const go=Number(el.dataset.go);
    let active=go===current;
    if(go===4 && current>=4 && current<=9) active=true;
    if(go===11 && current===11) active=true;
    el.classList.toggle('active',active);
  });
  document.querySelectorAll('[data-go].thumb, [data-go].contents-item').forEach(el=>el.classList.toggle('active',Number(el.dataset.go)===current));
}
function animatePageTurnOverlay(clone, direction) {
  if (!clone) return;
  clone.classList.add('page-turn-overlay', direction === 'next' ? 'turn-next' : 'turn-previous');
  clone.setAttribute('aria-hidden','true');
  clone.querySelectorAll('button,a').forEach(el=>{el.setAttribute('tabindex','-1');});
  book.appendChild(clone);
  const remove=()=>{if(clone.isConnected)clone.remove();};
  clone.addEventListener('animationend',remove,{once:true});
  window.setTimeout(remove,760);
}
function showFrontCover() {
  // Full reset: the cover can be restored even if Previous is clicked during a page-turn.
  if (transitionTimer) window.clearTimeout(transitionTimer);
  transitionTimer = null;
  transitionLock = false;
  book.querySelectorAll('.page-turn-overlay').forEach(node=>node.remove());
  book.classList.remove('book-transition');
  bookShell.classList.add('cover-mode');
  coverGate.classList.remove('is-hidden');
  coverGate.setAttribute('aria-hidden','false');
  // Force both cover and book visibility styles to commit before the next paint.
  void bookShell.offsetWidth;
  void coverGate.offsetWidth;
  spreadCount.textContent=`01 / ${PAGE_TOTAL}`;
  mobilePage.textContent=spreadCount.textContent;
  spreadCaption.textContent='Aarvi Collection · Cover';
  progressBar.style.width='0%';
  updateNavigationState();
}
function flipTo(index) {
  const target=Math.max(-1,Math.min(12,index));
  if(target===current)return;
  // A quick Previous press after opening the first spread must always return to the cover.
  // In that one case, interrupt the in-flight open animation and clear its snapshot overlay.
  if(transitionLock) {
    const urgentCoverReturn=(current===0 && target===-1);
    if(!urgentCoverReturn) return;
    if(transitionTimer) window.clearTimeout(transitionTimer);
    transitionLock=false;
  }
  book.querySelectorAll('.page-turn-overlay').forEach(node=>node.remove());
  const old=current;
  // Hold a snapshot of the page that swings across the spine before the new spread is exposed.
  let pageSnapshot=null, turnDirection=target>old?'next':'previous';
  if(old>=0 && old<spreads.length) {
    const pageToTurn=book.querySelector(turnDirection==='next'?'.page.right':'.page.left');
    if(pageToTurn)pageSnapshot=pageToTurn.cloneNode(true);
  }
  transitionLock=true; current=target;
  if(soundOn) safeAudio(pageTurnAudio,effectVolume);
  if(target===-1) {
    // A dedicated return path avoids a stale overlay/lock hiding the cover on Previous.
    showFrontCover();
  } else {
    bookShell.classList.remove('cover-mode'); coverGate.classList.add('is-hidden'); coverGate.setAttribute('aria-hidden','true');
    if(target===12) renderBackCover(true); else renderSpread(target,true);
    if(old!==-1 && pageSnapshot) animatePageTurnOverlay(pageSnapshot,turnDirection);
  }
  if(old===-1 && target>=0) ensureMusic();
  transitionTimer=window.setTimeout(()=>{transitionLock=false;transitionTimer=null;},720);
}
function goNext(){flipTo(current+1);} function goPrevious(){flipTo(current-1);}
function handleAction(action) {
  if(soundOn) safeAudio(buttonAudio,effectVolume*.55);
  const messages={gold:'Hello Aarvi Jewellers, please share details about your current Gold Saving Scheme, instalments, duration and redemption terms.',whatsapp:'Hello Aarvi Jewellers, I would like to know more about your jewellery collections.',explore:'Hello Aarvi Jewellers, I would like to explore the Aarvi Collection.'};
  if(action==='explore'){flipTo(0);return;}
  const text=encodeURIComponent(messages[action]||messages.whatsapp);
  window.open(`https://wa.me/918073112321?text=${text}`,'_blank','noopener');
}
function makeNavigation(){
  const addThumb=(label,sub,go,imgs)=>{
    const thumb=document.createElement('button');thumb.type='button';thumb.className='thumb';thumb.dataset.go=String(go);
    thumb.innerHTML=`<span class="thumb-images ${imgs.length===1?'one-thumb':''}">${imgs.map(src=>`<img src="${asset(src)}" alt="" loading="lazy">`).join('')}</span><span class="thumb-meta"><b>${label}</b><span>${escapeHTML(sub)}</span></span>`;
    thumb.addEventListener('click',()=>{flipTo(go);thumbnailWrap.classList.add('open');});thumbnailStrip.appendChild(thumb);
  };
  const addContent=(label,section,go,pages)=>{
    const item=document.createElement('button');item.type='button';item.className='contents-item';item.dataset.go=String(go);
    item.innerHTML=`<span class="toc-number">${label}</span><span class="toc-info"><b>${escapeHTML(section)}</b><small>${escapeHTML(label==='01'||label==='26'?'COVER':section.toUpperCase())}</small></span><span class="toc-pages">${pages} <i>↗</i></span>`;
    item.addEventListener('click',()=>{flipTo(go);closeDrawer();});contentsList.appendChild(item);
  };
  addThumb('01','Aarvi Collection · Cover',-1,['model-woman.jpg']);addContent('01','Aarvi Collection · Front Cover',-1,'01');
  spreads.forEach((s,i)=>{
    const left=s.left.image||(s.left.images&&s.left.images[0])||'model-woman.jpg';
    const right=s.right.image||(s.right.images&&s.right.images[1])||'model-woman.jpg';
    const pages=`${String(i*2+2).padStart(2,'0')}–${String(i*2+3).padStart(2,'0')}`;
    addThumb(pages,s.title,i,[left,right]);addContent(pages,s.title,i,pages);
  });
  addThumb('26','Thank You · Designed by CVIS',12,['model-woman.jpg']);addContent('26','Thank You · Back Cover',12,'26');
}
function openDrawer(){drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');scrim.classList.add('show');$('menuButton').classList.add('active');}
function closeDrawer(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');scrim.classList.remove('show');$('menuButton').classList.remove('active');}
function toggleAuto(){
  const b=$('autoBtn');
  if(autoTimer){clearInterval(autoTimer);autoTimer=null;b.classList.remove('active');b.innerHTML='<span class="ctl-icon">▷</span><span class="ctl-text">Auto flip</span>';showToast('Auto flip paused');return;}
  autoTimer=setInterval(()=>{if(current>=12){clearInterval(autoTimer);autoTimer=null;b.classList.remove('active');b.innerHTML='<span class="ctl-icon">▷</span><span class="ctl-text">Auto flip</span>';showToast('You reached the closing cover');}else goNext();},5200);
  b.classList.add('active');b.innerHTML='<span class="ctl-icon">Ⅱ</span><span class="ctl-text">Auto flip on</span>';showToast('Auto flip started');
}
function updateMusicUI(){$('musicBtn').classList.toggle('active',musicOn);$('musicBtn').setAttribute('aria-pressed',String(musicOn));$('musicToggleIcon').textContent=musicOn?'Ⅱ':'▶';$('musicToggleLabel').textContent=musicOn?'Pause music':'Play music';}
function ensureMusic(){
  if(musicOn)return;
  backgroundMusic.volume=Number($('musicVolume').value)/100;
  const p=backgroundMusic.play();
  if(p&&p.then)p.then(()=>{musicOn=true;updateMusicUI();}).catch(()=>{});
}
function musicSourceChanged(){const key=$('musicSelect').value,wasPlaying=musicOn;backgroundMusic.pause();musicOn=false;backgroundMusic.src=MUSIC[key].src;backgroundMusic.load();updateMusicUI();if(wasPlaying)ensureMusic();showToast(`Selected: ${MUSIC[key].name}`);}
function toggleMusic(){if(!backgroundMusic.src||!backgroundMusic.src.includes(MUSIC[$('musicSelect').value].src))backgroundMusic.src=MUSIC[$('musicSelect').value].src;if(!musicOn){backgroundMusic.volume=Number($('musicVolume').value)/100;backgroundMusic.play().then(()=>{musicOn=true;updateMusicUI();showToast(`${MUSIC[$('musicSelect').value].name} playing`);}).catch(()=>showToast('Your browser blocked playback. Click Play Music again.'));}else{backgroundMusic.pause();musicOn=false;updateMusicUI();showToast('Music paused');}}
function toggleSound(){soundOn=!soundOn;$('soundBtn').classList.toggle('active',soundOn);$('soundBtn').innerHTML=`<span class="ctl-icon">${soundOn?'♬':'♩'}</span><span class="ctl-text">Page sound: ${soundOn?'On':'Off'}</span>`;if(soundOn)safeAudio(buttonAudio,effectVolume*.4);showToast(`Page-turn sound ${soundOn?'on':'off'}`);}
let toastTimer;function showToast(message){const toast=$('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2300);}
async function shareFlipbook(){const shareData={title:'Aarvi Jewellers — Premium Flipbook',text:'Explore the Aarvi Jewellers digital collection.',url:window.location.href};try{if(navigator.share)await navigator.share(shareData);else if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(window.location.href);showToast('Flipbook link copied');}else showToast('Copy the URL from your browser address bar to share');}catch(err){if(err?.name!=='AbortError')showToast('Use your browser address bar to share this demo');}}

// Main arrows work from every state, including the key fix: Previous from the first spread returns to the standalone cover.
$('prevBtn').addEventListener('click',goPrevious);$('nextBtn').addEventListener('click',goNext);
$('mobilePrev').addEventListener('click',goPrevious);$('mobileNext').addEventListener('click',goNext);
$('coverContinue').addEventListener('click',()=>flipTo(0));
$('firstBtn').addEventListener('click',()=>flipTo(-1));$('lastBtn').addEventListener('click',()=>flipTo(12));
$('zoomIn').addEventListener('click',()=>{zoom=Math.min(1.28,zoom+.06);bookShell.style.transform=`scale(${zoom})`;showToast(`Zoom ${Math.round(zoom*100)}%`);});
$('zoomOut').addEventListener('click',()=>{zoom=Math.max(.78,zoom-.06);bookShell.style.transform=`scale(${zoom})`;showToast(`Zoom ${Math.round(zoom*100)}%`);});
$('fullscreenBtn').addEventListener('click',async()=>{try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen();}catch(_){showToast('Fullscreen is not available in this browser');}});
$('thumbsBtn').addEventListener('click',()=>{thumbnailWrap.classList.toggle('open');$('thumbsBtn').classList.toggle('active',thumbnailWrap.classList.contains('open'));if(thumbnailWrap.classList.contains('open'))thumbnailWrap.scrollIntoView({behavior:'smooth',block:'nearest'});});
$('closeThumbs').addEventListener('click',()=>{thumbnailWrap.classList.remove('open');$('thumbsBtn').classList.remove('active');});
$('menuButton').addEventListener('click',openDrawer);$('closeDrawer').addEventListener('click',closeDrawer);scrim.addEventListener('click',closeDrawer);
$('autoBtn').addEventListener('click',toggleAuto);$('musicBtn').addEventListener('click',toggleMusic);$('musicSelect').addEventListener('change',musicSourceChanged);$('soundBtn').addEventListener('click',toggleSound);$('shareBtn').addEventListener('click',shareFlipbook);
$('musicVolume').addEventListener('input',()=>{const volume=Number($('musicVolume').value);backgroundMusic.volume=volume/100;$('musicVolumeValue').textContent=`${volume}%`;});
$('brandHome').addEventListener('click',e=>{e.preventDefault();flipTo(-1);});
document.querySelectorAll('.side-link').forEach(b=>b.addEventListener('click',()=>flipTo(Number(b.dataset.go))));
document.addEventListener('keydown',e=>{if(e.target.matches('input,select,textarea'))return;if(e.key==='ArrowRight'||e.key==='PageDown')goNext();if(e.key==='ArrowLeft'||e.key==='PageUp')goPrevious();if(e.key==='Home')flipTo(-1);if(e.key==='End')flipTo(12);if(e.key==='Escape')closeDrawer();});
let touchStartX=null;
bookShell.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].clientX;},{passive:true});
bookShell.addEventListener('touchend',e=>{if(touchStartX===null)return;const dx=e.changedTouches[0].clientX-touchStartX;if(Math.abs(dx)>48)(dx<0?goNext():goPrevious());touchStartX=null;},{passive:true});
book.addEventListener('click',e=>{if(soundOn&&!e.target.closest('button,a'))safeAudio(buttonAudio,effectVolume*.28);});

makeNavigation();
bookShell.classList.add('cover-mode');coverGate.classList.remove('is-hidden');coverGate.setAttribute('aria-hidden','false');
spreadCount.textContent=`01 / ${PAGE_TOTAL}`;mobilePage.textContent=spreadCount.textContent;spreadCaption.textContent='Aarvi Collection · Cover';progressBar.style.width='0%';
renderSpread(0); // Keep the first spread ready behind the cover; it becomes visible when the cover opens.
bookShell.classList.add('cover-mode');coverGate.classList.remove('is-hidden');coverGate.setAttribute('aria-hidden','false');
$('musicSelect').value='veena'; backgroundMusic.src=MUSIC[$('musicSelect').value].src;backgroundMusic.volume=Number($('musicVolume').value)/100;
pageTurnAudio.volume=effectVolume;buttonAudio.volume=effectVolume*.45;
// Try autoplay immediately; if the browser blocks audible autoplay, start on the visitor's first interaction.
ensureMusic();
document.addEventListener('pointerdown',()=>{if(!musicOn)ensureMusic();},{once:true,capture:true});
document.addEventListener('keydown',()=>{if(!musicOn)ensureMusic();},{once:true,capture:true});
