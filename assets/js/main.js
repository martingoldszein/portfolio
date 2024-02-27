/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}


navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== REMOVE MENU MOBILE ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const   contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_76nsvqk','template_kdpgxfv','#contact-form','GlgamuGOCM0DTI1Oc')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000 )

        contactForm.reset();
    }, () => {
        contactMessage.textContent = 'Message not sent (service error) ❌'
    }  )
}
contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 

const scrollup = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+ sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(('.home__perfil, .about__image, .contact__mail'), {origin: 'right'})
sr.reveal(('.home__name, .home__info, .about__container .section__title-1,.about__info, .contact__data'), {origin: 'left'})

sr.reveal('.services__card, .projects__card', {interval:70})
//

