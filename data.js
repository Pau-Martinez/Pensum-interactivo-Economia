// data.js
const materias = [
  { codigo: "52469", nombre: "Fundamentos de Microeconomía", creditos: 4, prerequisitos: [] },
  { codigo: "51166", nombre: "Contabilidad General", creditos: 3, prerequisitos: [] },
  { codigo: "61565", nombre: "Comprensión y Producción de Textos", creditos: 2, prerequisitos: [] },
  { codigo: "22268", nombre: "Cálculo Diferencial", creditos: 4, prerequisitos: [] },
  { codigo: "65654", nombre: "Constitución Colombiana", creditos: 2, prerequisitos: [] },
  { codigo: "62700", nombre: "Electiva de Contexto I", creditos: 2, prerequisitos: [] },

  { codigo: "52473", nombre: "Microeconomía Intermedia I", creditos: 4, prerequisitos: ["52469"] },
  { codigo: "52474", nombre: "Historia Económica General", creditos: 3, prerequisitos: [] },
  { codigo: "22269", nombre: "Probabilidad", creditos: 3, prerequisitos: [] },
  { codigo: "22270", nombre: "Cálculo Integral y Ecuaciones", creditos: 4, prerequisitos: ["22268"] },
  { codigo: "62701", nombre: "Electiva de Contexto II", creditos: 2, prerequisitos: [] },

  { codigo: "52475", nombre: "Microeconomía Intermedia II", creditos: 4, prerequisitos: ["52473"] },
  { codigo: "52476", nombre: "Pensamiento Económico", creditos: 3, prerequisitos: [] },
  { codigo: "22271", nombre: "Cálculo Multivariado y Álgebra", creditos: 4, prerequisitos: ["22270"] },
  { codigo: "52477", nombre: "Fundamentos de Macroeconomía", creditos: 4, prerequisitos: [] },
  { codigo: "22272", nombre: "Métodos Estadísticos", creditos: 3, prerequisitos: ["22269"] }
];
