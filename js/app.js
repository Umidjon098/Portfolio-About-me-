const scrollUp = document.querySelector(".navbar-bg");
window.addEventListener("scroll", function() {
    if (this.scrollY > 20) {
        scrollUp.classList.add("fixed");
    } else {
        scrollUp.classList.remove("fixed");
    }
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '-80px',
    duration: 2000,
    reset: true
})

sr.reveal(".title", {});
sr.reveal(".left", { delay: 200 });
sr.reveal(".up-text", { delay: 400 });
sr.reveal(".several", { interval: 200 });
sr.reveal(".services-card", {});
sr.reveal(".line", { delay: 200 });
sr.reveal(".info", { delay: 400 });
sr.reveal(".teams-card", { interval: 200 });
sr.reveal(".portfolio-img", {});
sr.reveal(".field", { delay: 200 });
sr.reveal(".btn", { delay: 400 });