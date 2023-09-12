// Menu

// Scroll bar
const dots = document.querySelectorAll(".scroll-indicator a");

const removeActiveClass = () => {
    dots.forEach((dot) => {
        dot.classList.remove("active");
        dot.classList.remove("show");
    });
};

const addActiveClass = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let currentDot = document.querySelector(`.scroll-indicator a[href='#${entry.target.id}']`);
            removeActiveClass();
            currentDot.classList.add("active");
            currentDot.classList.add("show");

            console.log(entry.target.id);
        }
    });
};

const options = {
    threshold: 1, //khổ
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    observer.observe(section);
});
