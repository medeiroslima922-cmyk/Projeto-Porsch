
var nome = window.prompt("Seja bem vindo a JC, qual é seu nome?");
window.alert("É um grande prazer em te conhecer " + nome + "!");

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");


let current = 0;

function showSlide(index) {
    // move carrosel
slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    // atualizar bolinhas
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        current = index;
        showSlide(current);
    });
});
