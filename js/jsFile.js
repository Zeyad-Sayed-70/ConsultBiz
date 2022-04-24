window.onscroll = function() {
    // StickyNav
    stickyNav();
    // Add Animation when Scrool to it
    animationEffect();
    // Counter Effect
    getCounter();
}
window.onload = function() {
    defaultScroll();
}


// Main Animation func
function animationTool(...section) {
    section.forEach(el => {
        if ( window.scrollY + window.innerHeight >= el.getBoundingClientRect().top + window.scrollY  ) {
            setTimeout(function() {
                el.classList.add("animation");
            }, 50)
        }
    })
}

// Counter Func
function counterEffect(counter, num, speed, isop = 0, ex = '') {
    if ( window.scrollY + window.innerHeight - 100 >= counter.getBoundingClientRect().top + window.scrollY ) {
        let count = 0;
        const counterEff = setInterval(function() {
            count += 10;
            counter.innerText = `${count}${ex}`;
            if ( count == num )
                clearInterval(counterEff);
            else if ( count > num ) {
                clearInterval(counterEff);
                counter.innerText = `${num}${ex}`;
            }
        }, speed);
        iso = isop;
    }
}

// StickyNav
function stickyNav() {
    if ( window.scrollY >= 57.25 ) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

// Add Animation when Scrool to it
function animationEffect() {
    // Animations
    animationTool(laddingHeaderh1, laddingHeaderSpan);

    setTimeout(() => {

        head_h4.forEach(el => {
            animationTool(el);
        })
        head_span.forEach(el => {
            animationTool(el);
        })
        head_p.forEach(el => {
            animationTool(el);
        })

        animationTool(aboutImg);
    
        animationTool(featImg);
        feats.forEach(function(el) {
            animationTool(el);
        })

        plans.forEach(function(el) {
            animationTool(el);
        })

        animationTool(testimonials);

        animationTool(footerLogo, footerContact, footerLinks, footerSubs, footerBot);
    }, 10);
}

// Counter Effect
let iso = 0;
function getCounter() {
    // Counter Effect
    if ( iso == 0 ) {
        counterEffect(CounterSpans[0], 2003, 10);
        counterEffect(CounterSpans[1], 547, 50);
        counterEffect(CounterSpans[2], 45, 500, 0, '+');
        counterEffect(CounterSpans[3], 1500, 20, 1);
    }
}

// go position y = 0 when reload page
function defaultScroll() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 1)
}

/*   Declear Vars In Your Page [ Decleartion Proccess ]   */

// Start Menu Action
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav ul");

menuBtn.onclick = function() {
    menu.classList.toggle("active");
}

// Start Bullets Action
const bull = document.querySelector(".bullets");
const bullContent = document.querySelector(".contact-info-bul");

bull.onclick = function() {
    bullContent.classList.toggle("active");
}

// Create Sticky Navigation
const nav = document.querySelector(".nav");
// const navH = nav.getBoundingClientRect().top;


// ladding-text header vars
const laddingHeaderh1 = document.querySelector(".ladding-text h1");
const laddingHeaderSpan = document.querySelector(".ladding-text span");
const laddingBtn = document.querySelector(".ladding-text button");

laddingBtn.onclick = function() {
    window.scrollTo({top: aboutus.offsetTop, behavior: 'smooth'});
}

// Main Sections Header Vars
const head_h4 = document.querySelectorAll(".section-head-h4");
const head_span = document.querySelectorAll(".section-head-span");
const head_p = document.querySelectorAll(".section-head-p");

// About us Vars
const aboutus = document.querySelector(".aboutus");
const aboutImg = document.querySelector(".aboutus img");

// Feautuers Vars
const featImg = document.querySelector(".features img");
const feats = document.querySelectorAll(".feat");

// Counter Vars
const CounterSpans = document.querySelectorAll(".counter span");

// Plans Vars
const plans = document.querySelectorAll(".plans .plan");

// Testimonials Vars
const testimonials = document.querySelector(".testimonials");

// footer Vars
const footerLogo = document.querySelector(".footer .logo");
const footerContact = document.querySelector(".footer .contact-Finfo");
const footerLinks = document.querySelector(".footer .quick-links");
const footerSubs = document.querySelector(".footer .subscribe");
const footerBot = document.querySelector(".footer .bot-section");


