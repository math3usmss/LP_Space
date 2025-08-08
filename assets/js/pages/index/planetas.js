// Lista dos planetas em português
const planetas = [
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Netuno"
];

const elementoTexto = document.getElementById('nome-planeta');
let planetaAtual = 0;
let charAtual = 0;
let estaApagando = false;
let esperando = false;

function digitar() {
  if (planetaAtual >= planetas.length) {
    planetaAtual = 0; 
  }

  const textoCompleto = planetas[planetaAtual];
  
  if (!estaApagando && !esperando) {
    
    elementoTexto.textContent = textoCompleto.substring(0, charAtual + 1);
    charAtual++;
    
    if (charAtual === textoCompleto.length) {
      esperando = true;
      setTimeout(() => {
        esperando = false;
        estaApagando = true;
      }, 2000); 
    }
  } else if (estaApagando && !esperando) {
    
    elementoTexto.textContent = textoCompleto.substring(0, charAtual - 1);
    charAtual--;
    
    if (charAtual === 0) {
      estaApagando = false;
      planetaAtual++;
    }
  }

  const velocidade = estaApagando ? 100 : 150; 
  setTimeout(digitar, velocidade);
}

// Inicia o efeito
window.addEventListener('DOMContentLoaded', digitar);