// script.js
const mallaContainer = document.getElementById("malla-container");

let estadoMaterias = {};

function cargarEstado() {
  const guardado = localStorage.getItem("estadoMaterias");
  if (guardado) {
    estadoMaterias = JSON.parse(guardado);
  }
}

function guardarMalla() {
  localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
  alert("Progreso guardado ✅");
}

function resetMalla() {
  if (confirm("¿Estás seguro de reiniciar la malla?")) {
    localStorage.removeItem("estadoMaterias");
    estadoMaterias = {};
    renderMalla();
  }
}

function desbloqueada(materia) {
  return materia.prerequisitos.every((codigo) => estadoMaterias[codigo]);
}

function toggleMateria(codigo) {
  const materia = materias.find((m) => m.codigo === codigo);
  if (!desbloqueada(materia)) return;
  estadoMaterias[codigo] = !estadoMaterias[codigo];
  renderMalla();
}

function renderMalla() {
  mallaContainer.innerHTML = "";
  materias.forEach((materia) => {
    const card = document.createElement("div");
    card.className = "card";
    const estaHecha = estadoMaterias[materia.codigo];
    const estaDesbloqueada = desbloqueada(materia);
    if (estaHecha) card.classList.add("done");
    else if (!estaDesbloqueada) card.classList.add("locked");
    card.innerHTML = `
      <div class="code">${materia.codigo}</div>
      <div class="name">${materia.nombre}</div>
      <div class="credits">${materia.creditos} créditos</div>
    `;
    card.onclick = () => toggleMateria(materia.codigo);
    mallaContainer.appendChild(card);
  });
}
function crearTarjeta(curso) {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('card', curso.grupo);

  tarjeta.innerHTML = `
    <div class="code">${curso.codigo}</div>
    <div>${curso.nombre}</div>
    <div class="credits">${curso.creditos} créditos</div>
  `;

  document.getElementById('malla-container').appendChild(tarjeta);
}

// Carga todas las tarjetas al iniciar
cursos.forEach(crearTarjeta);
cargarEstado();
renderMalla();
