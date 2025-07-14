const mallaContainer = document.getElementById("malla-container");
let estadoMaterias = {};

// Cargar estado guardado
function cargarEstado() {
  const guardado = localStorage.getItem("estadoMaterias");
  if (guardado) {
    estadoMaterias = JSON.parse(guardado);
  }
}

// Guardar progreso
function guardarMalla() {
  localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
  alert("Progreso guardado ✅");
}

// Reiniciar progreso
function resetMalla() {
  if (confirm("¿Estás seguro de reiniciar la malla?")) {
    localStorage.removeItem("estadoMaterias");
    estadoMaterias = {};
    renderMalla();
  }
}

// Verificar si la materia está desbloqueada
function desbloqueada(materia) {
  return materia.prerequisitos.every((codigo) => estadoMaterias[codigo]);
}

// Cambiar estado de la materia al hacer clic
function toggleMateria(codigo) {
  const materia = materias.find((m) => m.codigo === codigo);
  if (!desbloqueada(materia)) return;
  estadoMaterias[codigo] = !estadoMaterias[codigo];
  renderMalla();
}

// Asignar color de grupo a la tarjeta
function asignarGrupo(materia) {
  const nombre = materia.nombre.toLowerCase();
  if (nombre.includes("micro")) return "micro";
  if (nombre.includes("macro")) return "macro";
  if (nombre.includes("econometría")) return "estadistica";
  if (nombre.includes("probabilidad") || nombre.includes("métodos estadísticos")) return "estadistica";
  if (nombre.includes("cálculo")) return "calculo";
  return "otros";
}

// Dibujar la malla completa
function renderMalla() {
  mallaContainer.innerHTML = "";

  materias.forEach((materia) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const grupo = asignarGrupo(materia);
    card.classList.add(grupo);

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

// Inicializar al cargar la página
cargarEstado();
renderMalla();
