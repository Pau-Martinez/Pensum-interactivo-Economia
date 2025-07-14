const mallaContainer = document.getElementById("malla-container");
let estadoMaterias = {};

// Cargar progreso desde localStorage
function cargarEstado() {
  const guardado = localStorage.getItem("estadoMaterias");
  if (guardado) {
    estadoMaterias = JSON.parse(guardado);
  }
}

// Guardar progreso en localStorage
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

// Validar si la materia está desbloqueada (prerrequisitos cumplidos)
function desbloqueada(materia) {
  return materia.prerequisitos.every((codigo) => estadoMaterias[codigo]);
}

// Cambiar el estado de la materia (hecha/no hecha)
function toggleMateria(codigo) {
  const materia = materias.find((m) => m.codigo === codigo);
  if (!desbloqueada(materia)) return;
  estadoMaterias[codigo] = !estadoMaterias[codigo];
  renderMalla();
}

// Asignar grupo de color por nombre de la materia
function asignarGrupo(materia) {
  const nombre = materia.nombre.toLowerCase();
  if (nombre.includes("micro")) return "micro";
  if (nombre.includes("macro")) return "macro";
  if (nombre.includes("econometría")) return "estadistica";
  if (nombre.includes("probabilidad") || nombre.includes("métodos estadísticos")) return "estadistica";
  if (nombre.includes("cálculo")) return "calculo";
  return "otros";
}

// Renderizar la malla completa
function renderMalla() {
  mallaContainer.innerHTML = "";

  materias.forEach((materia) => {
    const card = document.createElement("div");
    card.className = "card";

    // Asignar grupo de color
    const grupo = asignarGrupo(materia);
    card.classList.add(grupo);

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

// Inicializar al cargar la página
cargarEstado();
renderMalla();
