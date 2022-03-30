'use strict';

const careerJourney = document.querySelectorAll('.career-journey__content-container');
const skillsTitle = document.querySelectorAll('.skills__title');
const body = document.getElementsByTagName('body')[0];

let hoverFlag = false;

window.onbeforeunload = () => {
    console.log('llll');
    window.scrollTo(0, 0);
};

const animateSkills = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    if (entry.target.id === 'skillsDiv') animateSkillsBar();
    else animateOtherSkillsBar();
};

const skillObserver = new IntersectionObserver(animateSkills, {
    root: null,
    threshold: 0.9,
});

skillsTitle.forEach(item => skillObserver.observe(item));

Array.from(careerJourney).forEach((element) => {
    element.addEventListener('mouseenter', hoverIn, false);
    element.addEventListener('mouseleave', hoverOut, false);
});

function hoverIn() {
    if (!hoverFlag) {
        this.children[2].children[2].classList.add('show-text');
        this.children[2].children[2].classList.remove('hidden-text');
    }
    hoverFlag = true;
}

function hoverOut() {
    if (hoverFlag) {
        this.children[2].children[2].classList.remove('show-text');
        this.children[2].children[2].classList.add('hidden-text');
    }
    hoverFlag = false;
}

function scrollToCareerJourney() {
    const element = document.getElementById('careerJourney');
    element.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToSkills() {
    const element = document.getElementById('skills');
    element.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToTestimonials() {
    const element = document.getElementById('testimonials');
    element.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToPortfolios() {
    const element = document.getElementById('portfolios');
    element.scrollIntoView({
        behavior: 'smooth'
    });
}

function animateSkillsBar() {
    let barWidth, progressBar, animationBar;

    const skills = document.querySelectorAll('.skill__progress');
    const bars = document.querySelectorAll('.skill__progress-bar');

    for (let i = 0; i < skills.length; i++) {
        barWidth = skills[i].querySelector('span').innerHTML;
        bars[i].style.width = barWidth;
        progressBar = document.getElementsByClassName('skill__progress-bar')[i];
        progressBar.classList.add('animate-bar');
        animationBar = document.getElementsByClassName('skill__progress-bar animate-bar')[i];
        animationBar.style.setProperty('--widthEnd', barWidth);
    }
}

function animateOtherSkillsBar() {
    let barWidth, progressBar, animationBar;

    const skills = document.querySelectorAll('.other-skill__progress');
    const bars = document.querySelectorAll('.other-skill__progress-bar');

    for (let i = 0; i < skills.length; i++) {
        barWidth = skills[i].querySelector('span').innerHTML;
        bars[i].style.width = barWidth;
        progressBar = document.getElementsByClassName('other-skill__progress-bar')[i];
        progressBar.classList.add('animate-bar');
        animationBar = document.getElementsByClassName('other-skill__progress-bar animate-bar')[i];
        animationBar.style.setProperty('--widthEnd', barWidth);
    }
}


