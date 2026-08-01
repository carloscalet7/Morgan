// ==========================
// CONTADORES ANIMADOS
// ==========================

const counters = document.querySelectorAll(".number");

counters.forEach(counter => {
    const update = () => {
        const target = parseInt(counter.innerText);
        const current = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 60);

        if (current < target) {
            counter.setAttribute("data-count", current + increment);
            counter.innerText = current + increment;
            setTimeout(update, 30);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
});

// ==========================
// TARJETAS 3D
// ==========================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        card.style.transform =
            `perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) scale(1)";

    });

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section, .card").forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

// ==========================
// NAVBAR
// ==========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,5,5,.85)";
        nav.style.backdropFilter = "blur(20px)";
        nav.style.boxShadow = "0 0 20px rgba(0,180,255,.3)";

    } else {

        nav.style.background = "rgba(5,5,5,.5)";
        nav.style.boxShadow = "none";

    }

});
