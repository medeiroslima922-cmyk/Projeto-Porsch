
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
// Espera o HTML carregar antes de executar o JavaScript
document.addEventListener("DOMContentLoaded", () => {

  // Pega o botão pelo ID definido no HTML
  const botao = document.getElementById('fale-comigo');

  // Adiciona um evento de clique no botão
  botao.addEventListener('click', function(e) {

    // Impede o comportamento padrão do <a> (recarregar a página)
    e.preventDefault();

    // Número do WhatsApp (com código do Brasil + DDD)
    const numero = '5585992806240';

    // Mensagem que vai aparecer já preenchida
    const mensagem = 'Olá, vim pelo site JC Porsche!';

    // Cria a URL do WhatsApp com a mensagem codificada
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');
  });

});
function mostrarInternos() {
  const section = document.getElementById("internos");
  const galeria = document.getElementById("galeria-interna");

  // mostra a seção
  section.style.display = "block";

  // adiciona as imagens internas
  galeria.innerHTML = `
    <h3>Taycan.jpg</h3>
    <img src="./img/taycan.interno.jpg" width="300">
    <img src="./img/taycan-interior2.jpg" width="300">

    <h3>911</h3>
    <img src="./img/911-interior1.jpg" width="300">
    <img src="./img/911-interior2.jpg" width="300">
