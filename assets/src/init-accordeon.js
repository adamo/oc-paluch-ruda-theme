export function initAccordeon() {
    const elements = document.querySelectorAll(".accordion .element");

    elements.forEach((element) => {
        element.querySelector("h3").addEventListener("click", () => {
            elements.forEach((e) => {
                e.classList.remove("open");
                e.querySelector("span").innerHTML = "+";
            });
            element.classList.toggle("open");
            element.querySelector("span").innerHTML = "-";
        });
    });
}
