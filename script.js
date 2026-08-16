// ========================================
// NEXORA SOLUTIONS
// FINAL JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {


    // ========================================
    // MOBILE NAVIGATION
    // ========================================

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });


        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';

                });

            });

    }



    // ========================================
    // SMOOTH SCROLL
    // ========================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", function (e) {

                const targetId =
                    this.getAttribute("href");

                if (!targetId || targetId === "#") {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });



    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================

    const header =
        document.querySelector("header");


    window.addEventListener("scroll", () => {

        if (!header) return;


        if (window.scrollY > 70) {

            header.style.background =
                "rgba(8,13,24,.95)";

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.35)";

        } else {

            header.style.background =
                "rgba(8,13,24,.78)";

            header.style.boxShadow =
                "none";

        }

    });



    // ========================================
    // SECTION REVEAL
    // ========================================

    const sections =
        document.querySelectorAll("main section");


    if ("IntersectionObserver" in window) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            sectionObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(section);

        });

    } else {

        sections.forEach(section => {

            section.classList.add("show");

        });

    }



    // ========================================
    // COUNTER ANIMATION
    // ========================================

    const counters =
        document.querySelectorAll(".counter");


    if ("IntersectionObserver" in window) {

        const counterObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        const counter =
                            entry.target;

                        const target =
                            Number(
                                counter.dataset.target
                            );

                        const duration = 1600;

                        const startTime =
                            performance.now();


                        const updateCounter =
                            currentTime => {

                                const elapsed =
                                    currentTime - startTime;

                                const progress =
                                    Math.min(
                                        elapsed / duration,
                                        1
                                    );


                                const eased =
                                    1 -
                                    Math.pow(
                                        1 - progress,
                                        3
                                    );


                                const current =
                                    Math.floor(
                                        eased * target
                                    );


                                counter.textContent =
                                    current + "+";


                                if (progress < 1) {

                                    requestAnimationFrame(
                                        updateCounter
                                    );

                                } else {

                                    counter.textContent =
                                        target + "+";

                                }

                            };


                        requestAnimationFrame(
                            updateCounter
                        );


                        counterObserver.unobserve(
                            counter
                        );

                    });

                },
                {
                    threshold: 0.5
                }
            );


        counters.forEach(counter => {

            counterObserver.observe(counter);

        });

    }



    // ========================================
    // CONTACT FORM
    // ========================================

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    contactForm
                        .querySelector('[name="name"]')
                        .value
                        .trim();


                const email =
                    contactForm
                        .querySelector('[name="email"]')
                        .value
                        .trim();


                const message =
                    contactForm
                        .querySelector('[name="message"]')
                        .value
                        .trim();


                if (!name || !email || !message) {

                    alert(
                        "Please complete all required fields."
                    );

                    return;

                }


                alert(
                    `Thank you, ${name}! Your message has been received.`
                );


                contactForm.reset();

            }
        );

    }



    // ========================================
    // CURRENT YEAR
    // ========================================

    const year =
        new Date().getFullYear();

    const copyright =
        document.querySelector(".footer-bottom p");


    if (copyright) {

        copyright.textContent =
            `© ${year} Nexora Solutions. All Rights Reserved.`;

    }



    // ========================================
    // CONSOLE
    // ========================================

    console.log(
        "Nexora Solutions loaded successfully!"
    );

});
