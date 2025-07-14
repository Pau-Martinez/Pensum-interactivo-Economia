// script.js
const mallaContainer = document.getElementById("malla-container");
let estadoMaterias = {};

// Cargar estado guardado
function cargarEstado() {
  const guardado = localStorage.getItem("estadoMaterias");
  if (guardado) {
    estadoMaterias = JSON.parse(guardado);
  }
}

// Guardar estado actual
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

// Validar si una materia está desbloqueada
function desbloqueada(materia) {
  return materia.prerequisitos.every((codigo) => estadoMaterias[codigo]);
}

// Alternar estado de una materia (completada o no)
function toggleMateria(codigo) {
  const materia = materias.find((m) => m.codigo === codigo);
  if (!desbloqueada(materia)) return;
  estadoMaterias[codigo] = !estadoMaterias[codigo];
  renderMalla();
}

// Renderizar todas las tarjetas en pantalla
function renderMalla() {
  mallaContainer.innerHTML = "";

  materias.forEach((materia) => {
    const card = document.createElement("div");
    card.className = "card";

    // Agregar color por grupo
    if (materia.grupo) {
      card.classList.add(materia.grupo);
    }

    // Estado de la materia
    const estaHecha = estadoMaterias[materia.codigo];
    const estaDesbloqueada = desbloqueada(materia);

    if (estaHecha) {
      card.classList.add("done");
    } else if (!estaDesbloqueada) {
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

// Inicialización
cargarEstado();
renderMalla();
