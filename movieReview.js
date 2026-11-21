const slides = document.querySelector('.slides');
const footer = document.querySelector('.footer');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slideNo = document.querySelector('.slide_no');
let current = 0;
let timer=null;
const slidesList = [];
slideNo.innerHTML=`${current+1}/${slidesList.length}`;

function resizeSlides() {
    const slides = document.querySelector('.slides');
    if (!slides) return;

    const baseWidth = 1200;
    const baseHeight = 675;

    const scale = Math.min(
        window.innerWidth / baseWidth,
        window.innerHeight / baseHeight
    ) * 0.92;

    slides.style.transform = `translate(-50%, -50%) scale(${scale})`;
    slides.style.left = '50%';
    slides.style.top = '50%';
}

window.addEventListener('mousemove', () => {
    footer.classList.add('visible');
    clearTimeout(timer);
    timer = setTimeout(() => {
        footer.classList.remove('visible');
    }, 2000);
});

nextButton.addEventListener('click', () => {
    if (slidesList.length-1==current){
        return;
    }
    try{
        slides.querySelectorAll('video').forEach(video => {
            video.pause();
        });
    }catch{
        console.log("No videos");
    }
    slides.innerHTML = slidesList[++current];
    updateSlideNo();
});

prevButton.addEventListener('click', () => {
    if (current==0){
        return;
    }
    try{
        slides.querySelectorAll('video').forEach(video => {
            video.pause();
        });
    }catch{
        console.log("No videos");
    }
    slides.innerHTML = slidesList[--current];
    updateSlideNo();
});

function updateSlideNo(){
    slideNo.innerHTML=`${current+1}/${slidesList.length}`;
    if (current==3){
       clockStart();
    }
}

const slide1 = `<div id="slide1" class="slides">
                    <div id="slide1-content">
                        <h1 id="slide1-title">THE IMITATION<br>GAME</h1>
                        <h4><span class="bold">Based on</span> the 1983<br> biography <span class="bold">Alan Turing: The<br> Enigma</span> by Andrew Hodges</h4>
                    </div>
                </div>`
slidesList.push(slide1);

const slide2 = `<div id="slide2" class="slides">
                    <div id="maroon-box">
                        <h2 id="slide2-title">THE WAR BEGINS</h2>
                        <div id="row1">
                            <p id="paragraph1">In 1939, Britain declared war on Nazi Germany, facing an enemy with an unbreakable advantage.</p>
                            <img id="staticImage" src="./slide2Static_pic.png" alt="slide2Static_pic"></img>
                        </div>
                        <div id="row2">
                            <div id="bombing-container">
                                <video autoplay muted loop playsinline id="bombing">
                                    <source src="./bombing.mp4" type="video/mp4">
                                </video>
                            </div>
                            <p id="paragraph2">The Germans used the Enigma machine to encrypt military communications, making their plans invisible to Allied forces.</p>
                        </div>
                    </div>
                    <div class="plane-wrapper plane2">
                        <img src="./plane2.png" alt="plane2">
                        <div class="propeller">
                            <div class="propeller-blades"></div>
                        </div>
                    </div>
                    <div class="plane-wrapper plane1">
                        <img src="./plane1.png" alt="plane1">
                        <div class="propeller"></div>
                    </div>
                </div>`
slidesList.push(slide2);

const slide3 = `<div id="slide3" class="slides">
                    <img id="slide3-bg" src="./slide3_bg.png" alt="slide3_bg">
                    <video autoplay muted loop playsinline id="enigma">
                        <source src="./enigma.mp4" type="video/mp4">
                    </video>
                    <video autoplay muted loop playsinline id="christopher">
                        <source src="./christopher.mp4" type="video/mp4">
                    </video>
                    <h2>ENIGMA VS CHRISTOPHER</h2>
                    <div id="enigma-desc">Enigma was a complex machine which had 159 million million million possible combinations.</div>
                    <div id="christopher-desc">Christopher was the first electrical machine designed by Alan Turing to decode the Enigma codes.</div>
                </div>`
slidesList.push(slide3);

const slide4 = `<div id="slide4" class="slides">
                    <img id="slide4-bg" src="./slide4-bg.png" alt="slide4-bg">
                    <div class="clock" role="img" aria-label="Analog clock">
                        <div class="face" id="face">
                        <div class="brand">Bletchley Radio Manufacturing<br>Est. 1939</div>
                        <div class="hand hour-hand" id="hour"></div>
                        <div class="hand min-hand" id="min"></div>
                        <div class="hand sec-hand" id="sec"></div>
                        <div class="pin"></div>
                        <div class="glass"></div>
                        </div>
                    </div>
                    <h2 id="title">FIGHT AGAINST THE TIME</h2>
                    <div id="text-content">While Christopher and Enigma were at war, the Codebreakers were at war with the clock.</div>
                </div>`
slidesList.push(slide4);

const slide5 = `<div id="slide5">
                    <h2 id="title">DECRYPTING THE<span class="dots">...</span></h2>
                    <div id="cinematography">
                        <h2 class="heading">CINEMATOGRAPHY</h2>
                        <h3 class="content">Muted cold blues mirror repression; warm amber reserved for flashbacks — colour becomes emotional language.</h3>
                    </div>
                    <div id="story-narration">
                        <h2 class="heading">STORY NARRATION</h2>
                        <h3 class="content">Three timelines — wartime, 1927 schooldays, 1951 inquiry — weaved around secrecy and identity building layered dramatic irony.</h3>
                    </div>
                    <div id="castingPerformance">
                        <h2 class="heading">CASTING & PERFORMANCES</h2>
                        <h3 class="content">Cumberbatch balances obliviousness and vulnerability with precision. Knightley anchors Clarke with quiet strength. No caricatures.</h3>
                    </div>
                    <div id="set-design">
                        <h2 class="heading">SET DESIGN</h2>
                        <h3 class="content">Bletchley's cramped huts feel authentically wartime. Turing's sterile home contrasts sharply, underlining his isolation.</h3>
                    </div>
                    <div id="soundScore">
                        <h2 class="heading">SOUND & SCORE</h2>
                        <h3 class="content">Desplat's ticking, clicking motifs echo the Bombe's rhythm — minimalist score keeps logic and emotion in quiet tension.</h3>
                    </div>
                </div>`
slidesList.push(slide5);

const slide6 = `<div id="slide6">
                    <h2 id="title">RECOMMENDED<br>AUDIENCE</h2>
                    <div id="perfect">Perfect for:-<br><br>•  Technology & Computer Science enthusiasts<br>•  History and World War II fans<br>•  Students and innovators<br>•  Lovers of inspiring true stories</div>
                    <div id="maroon-box">
                        <img src="bletchleyRadio.png" alt="bletchleyRadio" id="blectch">
                        <img src="skudoku.png" alt="skudoku" id="skudoku">
                        <img src="KeiraKnightley.png" alt="KeiraKnightley" id="Keira">
                    </div>
                </div>`
slidesList.push(slide6);

const slide7 = `<div id="slide7">
                    <h2 id="title">RATING BREAKDOWN</h2>
                    <div class="rating-list">
                        <div class="rating-row" style="--score: 90%; --color: #403152; --delay: 0.1s;">
                            <div class="bar-track">
                            <div class="bar-fill"></div>
                            <span class="category">Cinematography</span>
                            </div>
                            <span class="score-text">9/10</span>
                        </div>

                        <div class="rating-row" style="--score: 95%; --color: #376092; --delay: 0.2s;">
                            <div class="bar-track">
                            <div class="bar-fill"></div>
                            <span class="category">Casting & Performances</span>
                            </div>
                            <span class="score-text">9.5/10</span>
                        </div>

                        <div class="rating-row" style="--score: 80%; --color: #4f81bd; --delay: 0.2s;">
                            <div class="bar-track">
                            <div class="bar-fill"></div>
                            <span class="category">Sound & Score</span>
                            </div>
                            <span class="score-text">8/10</span>
                        </div>

                        <div class="rating-row" style="--score: 85%; --color: #77933c; --delay: 0.2s;">
                            <div class="bar-track">
                            <div class="bar-fill"></div>
                            <span class="category">Story Narration</span>
                            </div>
                            <span class="score-text">8.5/10</span>
                        </div>

                        <div class="rating-row" style="--score: 100%; --color: #c0504d; --delay: 0.2s;">
                            <div class="bar-track">
                            <div class="bar-fill"></div>
                            <span class="category">Set Design</span>
                            </div>
                            <span class="score-text">10/10</span>
                        </div>

                        <div class="rating-row" style="--score: 75%; --color: #e46c0a; --delay: 0.2s;">
                            <div class="bar-track">
                            <div class="bar-fill"></div>
                            <span class="category">Casting & Performance</span>
                            </div>
                            <span class="score-text">7.5/10</span>
                        </div>
                    </div>
                    <div id="maroon-box">
                        <h3 id="sub-title">OVERALL RATING</h3>
                        <div id="rating-circle">
                            <h1>8.5</h1>
                            <h2>/10</h2>
                        </div>
                        <div class="ribbon">Highly Recommended</div>
                        <h3 id="quote">“Sometimes it is the people no one imagines<br>anything of who do the things no one can<br>imagine.”</div>
                    </div>
                </div>`
slidesList.push(slide7);

const slide8 = `<div id="slide8" class="slides">
                    <div class="mask-up">
                        <h1>REMEMBERING<br>ALAN TURING</h1>
                    </div>
                    <div id="line"></div>
                    <div class="mask-down">
                        <h2>FATHER OF MODERN COMPUTING. CODE-BREAKER.<br>VISIONARY. HIS LEGACY LIVES ON IN EVERY<br>COMPUTATION.</h2>
                    </div>
                </div>`
slidesList.push(slide8);

slides.innerHTML = slidesList[current];
updateSlideNo();

animateHTMLTypeWriter(document.getElementById('slide1-title'),100);

function animateHTMLTypeWriter(element, speed=50) {
    if (!element) return;
    const text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    function type(){
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                const endTagIndex = text.indexOf('>', i);
                if (endTagIndex !== -1) {
                    i = endTagIndex + 1;
                }
            } else {
                i++;
            }
            element.innerHTML = text.slice(0, i);
            setTimeout(type, speed);
        }
    }
    type();
}
function clockStart(){
  const face = document.getElementById('face');
  const hourEl = document.getElementById('hour');
  const minEl = document.getElementById('min');
  const secEl = document.getElementById('sec');

  // Build 60 tick marks (thicker every 5th) and 12 numerals
  for (let i = 0; i < 60; i++) {
    const t = document.createElement('div');
    t.className = 'tick' + (i % 5 === 0 ? ' hour' : '');
    t.style.transform = `rotate(${i * 6}deg)`;
    face.insertBefore(t, face.firstChild);
  }
  const ROMAN = ['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI'];
  for (let i = 0; i < 12; i++) {
    const n = document.createElement('div');
    n.className = 'num';
    n.textContent = ROMAN[i];
    const a = (i * 30 - 90) * Math.PI / 180;
    n.style.transform = `translate(${Math.cos(a) * 340}%, ${Math.sin(a) * 340}%)`;
    face.appendChild(n);
  }

  // Starts at 11:59:00 and stops at exactly 12:00:00 after 60 seconds
  const DURATION = 60; // clock seconds to cover (11:59:00 to 12:00:00)
  const SPEED = 5;     // 1 = real time, 4 = four times faster
  const startTime = performance.now();

  function render(elapsed) {
    const s = elapsed;              // seconds into the minute (0 to 60)
    const m = 59 + s / 60;          // minutes: 59 to 60
    const h = 11 + m / 60;          // hours: 11.98 to 12

    secEl.style.transform = `rotate(${s * 6}deg)`;
    minEl.style.transform = `rotate(${m * 6}deg)`;
    hourEl.style.transform = `rotate(${h * 30}deg)`;
    if (h==12){
        cipherEncrypt();
    }
  }

  function tick(now) {
    const elapsed = Math.min(((now - startTime) / 1000) * SPEED, DURATION);
    render(elapsed);
    if (elapsed < DURATION) requestAnimationFrame(tick);
  }

  render(0);
  requestAnimationFrame(tick);
}
function cipherEncrypt(){
    const heading=document.querySelector("#title");
    const headText=heading.innerText;
    const text=document.querySelector("#text-content");
    const contentText=text.innerText;
    let string="";
    for (let i of heading.innerText){
        const asciiOfi = i.codePointAt(0);
        if (asciiOfi>=65 && asciiOfi<=90){
            string+=String.fromCodePoint(((asciiOfi-65+5)%26)+65);
        }
        else if (asciiOfi>=97 && asciiOfi<=122){
            string+=String.fromCodePoint(((asciiOfi-97+5)%26)+97);
        }
        else{
            string+=i;
        }
    }
    heading.innerText=string;
    string="";
    for (let i of text.innerText){
        const asciiOfi = i.codePointAt(0);
        if (asciiOfi>=65 && asciiOfi<=90){
            string+=String.fromCodePoint(((asciiOfi-65+5)%26)+65);
        }
        else if (asciiOfi>=97 && asciiOfi<=122){
            string+=String.fromCodePoint(((asciiOfi-97+5)%26)+97);
        }
        else{
            string+=i;
        }
    }
    text.innerText=string;
    decrypt(headText,contentText);
}
function decrypt(headText, contentText){
    let decryptOption = document.createElement('div');
    decryptOption.id="decryptionOption";
    let msg = document.createElement('div');
    msg.id="msg";
    msg.innerHTML="Midnight... The Nazis have likely reset the Enigma settings. Our progress is wiped out!<br>Use Christopher to break the new code and restore the message!"
    let button = document.createElement('button');
    button.id="Ask-button"
    button.innerHTML="↲ Decrypt";
    msg.append(button);
    decryptOption.append(msg);    
    const slide4 = document.querySelector('#slide4');
    slide4.append(decryptOption);
    
    button.addEventListener('click', () => {
        document.querySelector("#title").innerText=headText;
        const text=document.querySelector("#text-content").innerText=contentText;

        decryptOption.classList.add('leaving');                  // starts the fade-out
        setTimeout(() => decryptOption.remove(), 600);
    });
}