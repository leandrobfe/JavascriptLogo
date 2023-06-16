// Biblioteca javascript para simular a linguagem superlogo

// Cria um objeto tartaruga que representa a caneta
var tartaruga = {
  x: 0, // posição x da tartaruga
  y: 0, // posição y da tartaruga
  angulo: 0, // ângulo da tartaruga em graus
  cor: "black", // cor da caneta
  baixo: true, // se a caneta está baixa ou não
};

// Cria um elemento canvas para desenhar
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Define o centro do canvas como a origem
ctx.translate(canvas.width / 2, canvas.height / 2);

// Define uma função para mover a tartaruga para frente
function frente(distancia) {
  // Calcula as novas coordenadas da tartaruga
  var novoX = tartaruga.x + distancia * Math.cos(tartaruga.angulo * Math.PI / 180);
  var novoY = tartaruga.y + distancia * Math.sin(tartaruga.angulo * Math.PI / 180);

  // Desenha uma linha se a caneta estiver baixa
  if (tartaruga.baixo) {
    ctx.beginPath();
    ctx.moveTo(tartaruga.x, -tartaruga.y); // inverte o eixo y
    ctx.lineTo(novoX, -novoY); // inverte o eixo y
    ctx.strokeStyle = tartaruga.cor;
    ctx.stroke();
  }

  // Atualiza as coordenadas da tartaruga
  tartaruga.x = novoX;
  tartaruga.y = novoY;
}

// Define uma função para girar a tartaruga para a direita
function direita(graus) {
  // Subtrai os graus do ângulo da tartaruga
  tartaruga.angulo -= graus;
}

// Define uma função para girar a tartaruga para a esquerda
function esquerda(graus) {
  // Adiciona os graus ao ângulo da tartaruga
  tartaruga.angulo += graus;
}

// Define uma função para mudar a cor da caneta
function cor(novaCor) {
  // Atribui a nova cor à propriedade cor da tartaruga
  tartaruga.cor = novaCor;
}

// Define uma função para levantar a caneta
function levanta() {
  // Atribui false à propriedade baixo da tartaruga
  tartaruga.baixo = false;
}

// Define uma função para abaixar a caneta
function abaixa() {
  // Atribui true à propriedade baixo da tartaruga
  tartaruga.baixo = true;
}

// Define uma função para limpar o canvas
function limpa() {
  // Salva o estado atual do contexto
  ctx.save();
  
  // Reseta as transformações do contexto
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  
  // Limpa o canvas inteiro
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Restaura o estado anterior do contexto
  ctx.restore();
}

// Define uma função para desenhar um quadrado
function quadrado(lado) {
  // Repete quatro vezes
  for (var i = 0; i < 4; i++) {
    // Move a tartaruga para frente com o lado dado
    frente(lado);
    
    // Gira a tartaruga para a direita em 90 graus
    direita(90);
  }
}
