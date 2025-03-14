/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

let userPreferredTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

window.onload = function() {
    updateThemeBasedOnTime();
};

setInterval(() => {
    updateThemeBasedOnTime();
}, 60000);

function updateThemeBasedOnTime() {
    const currentHour = new Date().getHours();
    const currentTheme = getCurrentTheme();

    if (!userPreferredTheme) {
        if (currentHour >= 10 && currentHour < 18) {
            if (currentTheme === 'dark') {
                toggleTheme();
            }
        } else {
            if (currentTheme === 'light') {
                toggleTheme();
            }
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    const currentTheme = getCurrentTheme();
    const currentIcon = getCurrentIcon();
    localStorage.setItem('selected-theme', currentTheme);
    localStorage.setItem('selected-icon', currentIcon);
}

themeButton.addEventListener('click', () => {
    userPreferredTheme = userPreferredTheme === 'dark' ? 'light' : 'dark';
    toggleTheme();
});



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    inviaDatiAlWebhook(formData);
});

function _0x220b(_0x28fcef,_0x82311){const _0x9416da=_0x9416();return _0x220b=function(_0x220b4c,_0x3a7dcf){_0x220b4c=_0x220b4c-0x147;let _0x3572ba=_0x9416da[_0x220b4c];return _0x3572ba;},_0x220b(_0x28fcef,_0x82311);}(function(_0x3efb64,_0x529cc0){const _0x36fae0=_0x220b,_0x426bbd=_0x3efb64();while(!![]){try{const _0x3941f1=-parseInt(_0x36fae0(0x153))/0x1+-parseInt(_0x36fae0(0x15c))/0x2+-parseInt(_0x36fae0(0x14e))/0x3*(-parseInt(_0x36fae0(0x15d))/0x4)+parseInt(_0x36fae0(0x152))/0x5*(-parseInt(_0x36fae0(0x147))/0x6)+parseInt(_0x36fae0(0x150))/0x7+parseInt(_0x36fae0(0x149))/0x8*(-parseInt(_0x36fae0(0x148))/0x9)+-parseInt(_0x36fae0(0x14f))/0xa;if(_0x3941f1===_0x529cc0)break;else _0x426bbd['push'](_0x426bbd['shift']());}catch(_0x1083d6){_0x426bbd['push'](_0x426bbd['shift']());}}}(_0x9416,0xc38cd));function inviaDatiAlWebhook(_0x8f9d99){const _0x237f65=_0x220b,_0x47a10a=_0x8f9d99[_0x237f65(0x155)]('name'),_0x49c579=_0x8f9d99['get'](_0x237f65(0x14a)),_0x16afc3=_0x8f9d99['get']('project'),_0x37e52a=_0x8f9d99['get'](_0x237f65(0x14c));if(!_0x47a10a||!_0x49c579||!_0x37e52a){alert('Compila\x20tutti\x20i\x20campi\x20obbligatori\x20(Nome,\x20Email,\x20Messaggio)\x20prima\x20di\x20inviare\x20il\x20messaggio.');return;}const _0x18e2cf={'content':_0x237f65(0x15a),'embeds':[{'title':'Nuovo\x20Messaggio','fields':[{'name':_0x237f65(0x158),'value':_0x47a10a,'inline':!![]},{'name':_0x237f65(0x15b),'value':_0x49c579,'inline':!![]},{'name':_0x237f65(0x151),'value':_0x16afc3,'inline':!![]},{'name':'Messaggio','value':_0x37e52a}]}]};fetch(_0x237f65(0x156),{'method':_0x237f65(0x157),'headers':{'Content-Type':'application/json'},'body':JSON[_0x237f65(0x15e)](_0x18e2cf)})[_0x237f65(0x154)](_0x4fc09f=>{const _0x4da2e8=_0x237f65;if(_0x4fc09f['ok'])alert(_0x4da2e8(0x159)),document['getElementById'](_0x4da2e8(0x14d))['reset']();else throw new Error('Errore\x20durante\x20l\x27invio\x20del\x20messaggio.');})[_0x237f65(0x15f)](_0x34daa5=>{const _0x33c430=_0x237f65;console['error']('Si\x20è\x20verificato\x20un\x20errore:',_0x34daa5),alert(_0x33c430(0x14b));});}function _0x9416(){const _0x95b6bf=['651916fOTGXW','4dJwEfl','stringify','catch','24fzjGHr','27kcqLtx','146432jEmaQU','email','Si\x20è\x20verificato\x20un\x20errore\x20durante\x20l\x27invio\x20del\x20messaggio.\x20Riprova\x20più\x20tardi.','message','contact-form','2977257TtWlaX','467480PBAtHi','4961005JxCHxH','Progetto','277010fdOcdg','250935bTgOCe','then','get','https://discord.com/api/webhooks/1243862265103646826/7LdAFYbgc1BWLrEGA5sV0mX_tLaE4682b9yzY5RXWTmiLsqK6dmgW7ccVF8tiPj3iQAr','POST','Nome','Messaggio\x20inviato\x20con\x20successo!','Nuovo\x20messaggio\x20dal\x20modulo\x20di\x20contatto:','Email'];_0x9416=function(){return _0x95b6bf;};return _0x9416();}