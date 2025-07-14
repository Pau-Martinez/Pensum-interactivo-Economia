// data.js
const materias = [
  // Semestre 1
  { codigo: "52469", nombre: "Fundamentos de Microeconomía", creditos: 4, prerequisitos: [] },
  { codigo: "51166", nombre: "Contabilidad General", creditos: 3, prerequisitos: [] },
  { codigo: "61565", nombre: "Comprensión y Producción de Textos", creditos: 2, prerequisitos: [] },
  { codigo: "22268", nombre: "Cálculo Diferencial", creditos: 4, prerequisitos: [] },
  { codigo: "65654", nombre: "Constitución Colombiana", creditos: 2, prerequisitos: [] },
  { codigo: "62700", nombre: "Electiva de Contexto I", creditos: 2, prerequisitos: [] },

  // Semestre 2
  { codigo: "52473", nombre: "Microeconomía Intermedia I", creditos: 4, prerequisitos: ["52469"] },
  { codigo: "52474", nombre: "Historia Económica General", creditos: 3, prerequisitos: [] },
  { codigo: "22269", nombre: "Probabilidad", creditos: 3, prerequisitos: [] },
  { codigo: "22270", nombre: "Cálculo Integral y Ecuaciones", creditos: 4, prerequisitos: ["22268"] },
  { codigo: "62701", nombre: "Electiva de Contexto II", creditos: 2, prerequisitos: [] },

  // Semestre 3
  { codigo: "52475", nombre: "Microeconomía Intermedia II", creditos: 4, prerequisitos: ["52473"] },
  { codigo: "52476", nombre: "Pensamiento Económico", creditos: 3, prerequisitos: [] },
  { codigo: "22271", nombre: "Cálculo Multivariado y Álgebra", creditos: 4, prerequisitos: ["22270"] },
  { codigo: "52477", nombre: "Fundamentos de Macroeconomía", creditos: 4, prerequisitos: [] },
  { codigo: "22272", nombre: "Métodos Estadísticos", creditos: 3, prerequisitos: ["22269"] },

  // Semestre 4
  { codigo: "52478", nombre: "Macroeconomía Intermedia I", creditos: 4, prerequisitos: ["52477"] },
  { codigo: "52479", nombre: "Historia Económica de Colombia", creditos: 3, prerequisitos: ["52474"] },
  { codigo: "52480", nombre: "Medición Económica", creditos: 2, prerequisitos: [] },
  { codigo: "52481", nombre: "Economía Política", creditos: 3, prerequisitos: ["52476"] },
  { codigo: "52482", nombre: "Econometría I", creditos: 3, prerequisitos: ["22272"] },
  { codigo: "62702", nombre: "Electiva de Contexto III", creditos: 2, prerequisitos: [] },

  // Semestre 5
  { codigo: "52483", nombre: "Economía Internacional", creditos: 3, prerequisitos: ["52477"] },
  { codigo: "52484", nombre: "Macroeconomía Intermedia II", creditos: 4, prerequisitos: ["52478"] },
  { codigo: "52485", nombre: "Economía Institucional", creditos: 2, prerequisitos: [] },
  { codigo: "52486", nombre: "Economía Matemática", creditos: 3, prerequisitos: ["22271"] },
  { codigo: "52487", nombre: "Econometría II", creditos: 3, prerequisitos: ["52482"] },
  { codigo: "62703", nombre: "Electiva de Contexto IV", creditos: 2, prerequisitos: [] },

  // Semestre 6
  { codigo: "52488", nombre: "Economía Monetaria", creditos: 3, prerequisitos: ["52478"] },
  { codigo: "52489", nombre: "Formulación y Evaluación de Proyectos", creditos: 3, prerequisitos: ["22272"] },
  { codigo: "52490", nombre: "Teoría y Política Fiscal", creditos: 3, prerequisitos: ["52477"] },
  { codigo: "52491", nombre: "Desarrollo Económico", creditos: 3, prerequisitos: ["52484"] },
  { codigo: "52492", nombre: "Pensamiento Económico Contemporáneo", creditos: 3, prerequisitos: [] },
  { codigo: "52493", nombre: "Electiva de Complementariedad I", creditos: 3, prerequisitos: [] },

  // Semestre 7
  { codigo: "52494", nombre: "Seminario de Investigación Económica", creditos: 3, prerequisitos: [] },
  { codigo: "52495", nombre: "Política Económica Colombiana", creditos: 3, prerequisitos: ["52490", "52488"] },
  { codigo: "52496", nombre: "Electiva de Profundización I", creditos: 3, prerequisitos: ["52475", "52487", "52484"] },
  { codigo: "52497", nombre: "Electiva de Complementariedad II", creditos: 3, prerequisitos: [] },
  { codigo: "52498", nombre: "Electiva de Profundización II", creditos: 3, prerequisitos: ["52475", "52487", "52484"] },
  { codigo: "52499", nombre: "Electiva de Complementariedad III", creditos: 3, prerequisitos: [] },

  // Semestre 8
  { codigo: "52500", nombre: "Trabajo de Grado", creditos: 3, prerequisitos: ["52494"] },
  { codigo: "52505", nombre: "Electiva de Profundización III", creditos: 3, prerequisitos: [] },
  { codigo: "52506", nombre: "Electiva de Complementariedad IV", creditos: 3, prerequisitos: [] },
  { codigo: "52507", nombre: "Electiva de Profundización IV", creditos: 3, prerequisitos: ["52475", "52487", "52484"] },
  { codigo: "52508", nombre: "Electiva de Profundización V", creditos: 3, prerequisitos: ["52475", "52487", "52484"] }
];
