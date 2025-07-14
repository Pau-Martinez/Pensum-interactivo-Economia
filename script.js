const mallaContainer = document.getElementById("malla-container");
let estadoMaterias = {};

// Cargar estado desde localStorage
function cargarEstado() {
  const guardado = localStorage.getItem("estadoMaterias");
  if (guardado) {
    estadoMaterias = JSON.parse(guardado);
  }
}

// Guardar progreso
function guardarMalla() {
  localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
  alert("¡Progreso guardado!");
}

// Resetear progreso
function resetMalla() {
  if (confirm("¿Estás seguro de reiniciar la malla?")) {
    localStorage.removeItem("estadoMaterias");
    estadoMaterias = {};
    renderMalla();
  }
}

// Revisar prerequisitos
function desbloqueada(materia) {
  return materia.prerequisitos.every(codigo => estadoMaterias[codigo]);
}

// Cambiar estado al hacer clic
function toggleMateria(codigo) {
  const materia = materias.find(m => m.codigo === codigo);
  if (!desbloqueada(materia)) return;
  estadoMaterias[codigo] = !estadoMaterias[codigo];
  renderMalla();
}

// Renderizar tarjetas
function renderMalla() {
  mallaContainer.innerHTML = "";
  materias.forEach(materia => {
    const card = document.createElement("div");
    card.classList.add("card");

    if (estadoMaterias[materia.codigo]) {
      card.classList.add("done");
    } else if (!desbloqueada(materia)) {
      card.classList.add("locked");
    }

    card.innerHTML = `
      <div class="code">${materia.codigo}</div>
      <div class="name">${materia.nombre}</div>
      <div class="credits">${materia.creditos} créditos</div>
    `;

    card.onclick = () => toggleMateria(materia.codigo);
    mallaContainer.appendChild(card);
  });
}

// Inicializar
cargarEstado();
renderMalla();
