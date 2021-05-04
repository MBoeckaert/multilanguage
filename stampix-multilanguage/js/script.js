//global var
const navList = document.querySelector('.navigation__list');
const link = document.querySelectorAll('a');
const consumerTitle = document.querySelector('.title__consumers');
const consumerText = document.querySelector('.text__consumers');
const consumerBtn = document.querySelector(`.button__consumers`);
const businessTitle = document.querySelector('.title__business');
const businessText = document.querySelector('.text__business');
const businessBtn = document.querySelector(`.button__business`);

link.forEach(el => {
    el.addEventListener('click', () => {
        navList.querySelector('.list--active').classList.remove('list--active');
        el.classList.add('list--active');

        const attr = el.getAttribute('language');

        consumerTitle.textContent = data[attr].consumer__title;
        consumerText.textContent = data[attr].consumer__text;
        consumerBtn.textContent = data[attr].consumer__btn;
        businessTitle.textContent = data[attr].business__title;
        businessText.textContent = data[attr].business__text;
        businessBtn.textContent = data[attr].business__btn;
    });
});

const data = {
    "english":
    {
        "consumer__title": "For consumers",
        "consumer__text":
            "Install the Stampix App and order prints in just a few clicks",
        "consumer__btn": "start printing",
        "business__title": "For business",
        "business__text":
            "Build emotionally loyalty and brand engagement",
        "business__btn": "stampix for business"
    },
    "francais":
    {
        "consumer__title": "Pour les consommateurs",
        "consumer__text":
            "Installez l'application Stampix et commandez des photos en quelques clics",
        "consumer__btn": "commencer l'impression",
        "business__title": "Pour le business",
        "business__text":
            "Renforcez la fidélité émotionnelle et l'engagement de la marque",
        "business__btn": "stampix pour les entreprises"
    },
    "nederlands":
    {
        "consumer__title": "Voor particulieren",
        "consumer__text":
            "Installeer de Stampix app en bestel foto's in slechts een paar klikken",
        "consumer__btn": "start afdrukken",
        "business__title": "Voor ondernemingen",
        "business__text":
            "Bouw emotionele loyaliteit en merkbetrokkenheid op",
        "business__btn": "stampix voor ondernemingen"
    }
}
//scroll to top button
const button = document.querySelector(`.scroll-top`);
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
button.addEventListener("click", scrollToTop);

