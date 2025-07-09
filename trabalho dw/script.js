const pilotos = [
  { nome: "George Russell", habilidade: 89, imagem: "img/pilotos/russell.png" },
  { nome: "Kimi Antonelli", habilidade: 82, imagem: "img/pilotos/antonelli.png" },
  { nome: "Charles Leclerc", habilidade: 91, imagem: "img/pilotos/leclerc.png" },
  { nome: "Lewis Hamilton", habilidade: 92, imagem: "img/pilotos/hamilton.png" },
  { nome: "Lando Norris", habilidade: 91, imagem: "img/pilotos/norris.png" },
  { nome: "Oscar Piastri", habilidade: 88, imagem: "img/pilotos/piastri.png" },
  { nome: "Max Verstappen", habilidade: 96, imagem: "img/pilotos/verstappen.png" },
  { nome: "Liam Lawson", habilidade: 80, imagem: "img/pilotos/lawson.png" },
  { nome: "Fernando Alonso", habilidade: 92, imagem: "img/pilotos/alonso.png" },
  { nome: "Lance Stroll", habilidade: 81, imagem: "img/pilotos/stroll.png" },
  { nome: "Pierre Gasly", habilidade: 85, imagem: "img/pilotos/gasly.png" },
  { nome: "Jack Doohan", habilidade: 78, imagem: "img/pilotos/doohan.png" },
  { nome: "Alex Albon", habilidade: 85, imagem: "img/pilotos/albon.png" },
  { nome: "Carlos Sainz", habilidade: 89, imagem: "img/pilotos/sainz.png" },
  { nome: "Yuki Tsunoda", habilidade: 83, imagem: "img/pilotos/tsunoda.png" },
  { nome: "Isack Hadjar", habilidade: 77, imagem: "img/pilotos/hadjar.png" },
  { nome: "Nico Hulkenberg", habilidade: 84, imagem: "img/pilotos/hulkenberg.png" },
  { nome: "Gabriel Bortoleto", habilidade: 79, imagem: "img/pilotos/bortoleto.png" },
  { nome: "Oliver Bearman", habilidade: 78, imagem: "img/pilotos/bearman.png" },
  { nome: "Esteban Ocon", habilidade: 84, imagem: "img/pilotos/ocon.png" }
];

const equipes = [
  { nome: "Mercedes", carro: 89, imagem: "img/equipes/mercedes.png" },
  { nome: "Ferrari", carro: 92, imagem: "img/equipes/ferrari.png" },
  { nome: "McLaren", carro: 93, imagem: "img/equipes/mclaren.png" },
  { nome: "Red Bull Racing", carro: 95, imagem: "img/equipes/redbull.png" },
  { nome: "Aston Martin", carro: 86, imagem: "img/equipes/astonmartin.png" },
  { nome: "Alpine", carro: 80, imagem: "img/equipes/alpine.png" },
  { nome: "Williams", carro: 82, imagem: "img/equipes/williams.png" },
  { nome: "Racing Bulls", carro: 81, imagem: "img/equipes/racingbulls.png" },
  { nome: "Kick Sauber", carro: 79, imagem: "img/equipes/kicksauber.png" },
  { nome: "Haas", carro: 78, imagem: "img/equipes/haas.png" }
];

const circuitos = [
    { nome: "Melbourne", dificuldade: 86, imagem: "img/circuitos/melbourne.png" },
    { nome: "Xangai", dificuldade: 84, imagem: "img/circuitos/xangai.png" },
    { nome: "Suzuka", dificuldade: 94, imagem: "img/circuitos/suzuka.png" },
    { nome: "Sakhir", dificuldade: 82, imagem: "img/circuitos/sakhir.png" },
    { nome: "Jeddah", dificuldade: 88, imagem: "img/circuitos/jeddah.png" },
    { nome: "Miami", dificuldade: 83, imagem: "img/circuitos/miami.png" },
    { nome: "Imola", dificuldade: 90, imagem: "img/circuitos/imola.png" },
    { nome: "Mônaco", dificuldade: 98, imagem: "img/circuitos/monaco.png" },
    { nome: "Barcelona", dificuldade: 85, imagem: "img/circuitos/barcelona.png" },
    { nome: "Montreal", dificuldade: 87, imagem: "img/circuitos/montreal.png" },
    { nome: "Spielberg", dificuldade: 79, imagem: "img/circuitos/spielberg.png" },
    { nome: "Silverstone", dificuldade: 92, imagem: "img/circuitos/silverstone.png" },
    { nome: "Spa-Francorchamps", dificuldade: 95, imagem: "img/circuitos/spa.png" },
    { nome: "Hungaroring", dificuldade: 89, imagem: "img/circuitos/hungaroring.png" },
    { nome: "Zandvoort", dificuldade: 91, imagem: "img/circuitos/zandvoort.png" },
    { nome: "Monza", dificuldade: 78, imagem: "img/circuitos/monza.png" },
    { nome: "Baku", dificuldade: 93, imagem: "img/circuitos/baku.png" },
    { nome: "Singapura", dificuldade: 96, imagem: "img/circuitos/singapura.png" },
    { nome: "Austin", dificuldade: 86, imagem: "img/circuitos/austin.png" },
    { nome: "Cidade do México", dificuldade: 81, imagem: "img/circuitos/mexico.png" },
    { nome: "Interlagos", dificuldade: 90, imagem: "img/circuitos/interlagos.png" },
    { nome: "Las Vegas", dificuldade: 80, imagem: "img/circuitos/lasvegas.png" },
    { nome: "Lusail", dificuldade: 84, imagem: "img/circuitos/lusail.png" },
    { nome: "Yas Marina", dificuldade: 82, imagem: "img/circuitos/yasmarina.png" }
];

function preencherSelects() {
  const pilotoSelect = document.getElementById("piloto");
  const equipeSelect = document.getElementById("equipe");
  const circuitoSelect = document.getElementById("circuito");

  for (let i = 0; i < pilotos.length; i++) {
    let option = document.createElement("option");
    option.value = pilotos[i].nome;
    option.text = pilotos[i].nome;
    pilotoSelect.appendChild(option);
  }

  for (let i = 0; i < equipes.length; i++) {
    let option = document.createElement("option");
    option.value = equipes[i].nome;
    option.text = equipes[i].nome;
    equipeSelect.appendChild(option);
  }

  for (let i = 0; i < circuitos.length; i++) {
    let option = document.createElement("option");
    option.value = circuitos[i].nome;
    option.text = circuitos[i].nome;
    circuitoSelect.appendChild(option);
  }
}

function calcularDesempenho() {
  const somCarro = document.getElementById("somCarro");
  somCarro.volume = 0.5;
  somCarro.play();

  const pilotoSelecionado = document.getElementById("piloto").value;
  const equipeSelecionada = document.getElementById("equipe").value;
  const circuitoSelecionado = document.getElementById("circuito").value;

  let piloto, equipe, circuito;

  for (let i = 0; i < pilotos.length; i++) {
    if (pilotos[i].nome === pilotoSelecionado) {
      piloto = pilotos[i];
    }
  }

  for (let i = 0; i < equipes.length; i++) {
    if (equipes[i].nome === equipeSelecionada) {
      equipe = equipes[i];
    }
  }

  for (let i = 0; i < circuitos.length; i++) {
    if (circuitos[i].nome === circuitoSelecionado) {
      circuito = circuitos[i];
    }
  }

  const desempenho = piloto.habilidade + equipe.carro - circuito.dificuldade;
  const resultadoElement = document.getElementById("resultado");
  let resultadoTexto = `Desempenho de ${piloto.nome} com a ${equipe.nome} em ${circuito.nome}: `;

  resultadoElement.className = "";

  if (desempenho > 100) {
    resultadoTexto += "Excelente Desempenho";
    resultadoElement.classList.add("excelente");
  } else if (desempenho >= 90) {
    resultadoTexto += "Ótimo Desempenho";
    resultadoElement.classList.add("otimo");
  } else if (desempenho >= 80) {
    resultadoTexto += "Bom desempenho.";
    resultadoElement.classList.add("bom");
  } else {
    resultadoTexto += "Desempenho ruim";
    resultadoElement.classList.add("ruim");
  }

  resultadoElement.innerText = resultadoTexto;

  document.getElementById("imgPiloto").src = piloto.imagem;
  document.getElementById("imgEquipe").src = equipe.imagem;
  document.getElementById("imgCircuito").src = circuito.imagem;

  const imagensContainer = document.getElementById("imagens-container");
  imagensContainer.style.visibility = "visible";
  imagensContainer.style.opacity = "1";
}

window.onload = function() {
  preencherSelects();

  const musicaFundo = document.getElementById("musicaFundo");
  musicaFundo.volume = 0.2;

  const playPromise = musicaFundo.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      document.body.addEventListener('click', function() {
        musicaFundo.play();
      }, { once: true });
    });
  }
};