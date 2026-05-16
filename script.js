// Mensagem de boas vindas (mantida do código original)
var nome = window.prompt("Seja bem vindo a JC, qual é seu nome?");
if (nome) {
    window.alert("É um grande prazer em te conhecer " + nome + "!");
}

// Espera o HTML carregar antes de executar o JavaScript
document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // FUNÇÃO WHATSAPP (FALE CONOSCO)
  // ==========================================
  const botao = document.getElementById('fale-comigo');

  if (botao) {
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
  }

  // Efeito simples de cor de fundo no header ao rolar a página
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.style.background = 'rgba(0, 0, 0, 0.95)'; // Mais escuro ao rolar
      } else {
          header.style.background = 'rgba(10, 10, 10, 0.85)'; // Leve transparência no topo
      }
  });

  // ==========================================
  // FUNÇÃO DO MODAL/LIGHTBOX (FOTOS AMPLIADAS)
  // ==========================================
  const modal = document.getElementById("image-modal");
  const imgAmpliada = document.getElementById("img-ampliada");
  const closeModalBtn = document.querySelector(".close-modal");
  
  // Pegamos todas as imagens dentro dos cards de "Nossos Modelos" e de "Interiores"
  const galeriaImgs = document.querySelectorAll(".modelo-card img, .interior-card img");

  // Adiciona o evento de clique em cada uma das imagens
  galeriaImgs.forEach(img => {
      img.addEventListener("click", function() {
          modal.style.display = "block"; // Mostra o modal na tela
          imgAmpliada.src = this.src; // Pega o endereço (src) da imagem clicada e joga no modal
      });
  });

  // Fecha o modal ao clicar no botão "X"
  if (closeModalBtn) {
      closeModalBtn.addEventListener("click", () => {
          modal.style.display = "none";
      });
  }

  // Fecha o modal se o usuário clicar fora da imagem (no fundo escuro)
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

});
