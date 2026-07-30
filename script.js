const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

sections.forEach(section=>{
    observer.observe(section);
});
// Counter Animation

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let count = 0;

            const updateCounter = () => {

                const increment = Math.ceil(target / 80);

                if (count < target) {

                    count += increment;

                    if (count > target) {
                        count = target;
                    }

                    counter.innerText = count + "+";

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});