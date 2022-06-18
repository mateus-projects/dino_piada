let personagem = document.querySelector("#personagem");
let quadrado = document.querySelector("#quadrado");
let body = document.querySelector("body");
let game = document.getElementById("game");
let inicio = document.querySelector("#inicio");
let piada = document.querySelector("#piada");
let piadashit = [
    "Sabe o que uma nádega falou para outra?   Resp.: QUE MERDA É ESSA QUE ESTÁ ACONTECENDO ENTRE NÓS DUAS",
    "Qual é a semelhança entre o jovem e o papel higiênico?   Resp.: É que quando não ta no rolo, ta na merda.",
    "Por que os elétrons nunca são convidados para festas?   R.: Porque eles são muito negativos.",
    "Onde os ursos polares guardam o seu dinheiro?   R.: Em um banco de neve.",
    "O que o zero disse para o oito?   R.: Belo cinto!",
    "Por que o fantasma entrou no elevador?   R.: Para elevar o espírito.",
    "O que o tubarão disse quando comeu o peixe-palhaço?   R.: Que gosto engraçado!",
    "Sabe por que o rapaz jogou o computador no mar?   R.: Para ele navegar na internet!",
    "Quem são as dançarinas do Diabo?   R.: As Diabetes.",
    "O que a zebra disse para a mosca?   R.: Você está na minha listra negra",
    "Por que as estrelas não podem ser gatos?   R.: Porque astro não mia",
    "Como que o Batman dorme?   R.: De bruce!",
    "Um triângulo estava voando e o outro não. Por quê?   R.: Porque um deles era uma asa delta.",
    "O que o advogado do frango foi fazer na delegacia?   R.: Foi soltar a franga!",
    "O que um álcool disse para outro álcool?   R.: Etanois!",
    "Qual é o tio da construção?   R.: O Tio Jolo",
    "Um tênis foi jogado ao mar e afundou. Qual o nome do filme?   R.: Titanike.",
    "Qual é o melhor tratamento para pessoas que sofrem de queda constante?   R.: Para-quedismo.",
    "Qual é a galinha que cai no chão e surta?   R.: A galinha cai i pira.",
    "O que é um pontinho preto no avião?   R.: Uma aeromosca.",
    "O que um cromossomo falou para o outro?   R.: Cromossomos bonitos!",
    "O que é um astrólogo andando a cavalo?   R.: Um Cavaleiro do Zodíaco.",
    "Por que a planta não responde?   R.: Porque ela é mudinha.",
    "Por que o policial não usa sabão?   R.: Porque ele prefere deter gente.",
    "Por que o rádio não pode ter filhos?   R.: Porque ele é estéreo.",
    "O que o tijolo falou para o outro?   R.: Há um ciumento entre nós.",
];




function gameOver(){
    inicio.style.display = "block";
    game.style.display = "none";
    piada.innerHTML = piadashit[Math.floor(Math.random()*26)];
}

function iniciar() {
    inicio.style.display = "none";
    game.style.display = "block";
    game.classList.add("game");
    personagem.classList.add("personagem");
    quadrado.classList.add("quadrado");
    quadrado.style.animation = "quadrado 1s infinite linear";
    quadrado.style.display = "block";
}

function pular() {
  if (personagem.classList != "animar") {
    personagem.classList.add("animar");
  }

  setTimeout(function () {
    personagem.classList.remove("animar");
  }, 500);
}

var testarColisao = setInterval(() => {
  var topPersonagem = parseInt(
    window.getComputedStyle(personagem).getPropertyValue("top")
  );
  var esquerdaquadrado = parseInt(
    window.getComputedStyle(quadrado).getPropertyValue("left")
  );

  if (esquerdaquadrado < 50 && esquerdaquadrado > 0 && topPersonagem >= 130) {
    quadrado.style.animation = "none";
    quadrado.style.display = "none";
    gameOver();
  }
}, 10);
