const title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

const patients = document.querySelectorAll(".paciente");

for (var i = 0; i < patients.length; i++) {
  const patient = patients[i];
  const tdPeso = patient.querySelector(".info-peso").textContent;
  const tdAltura = patient.querySelector(".info-altura").textContent;
  const tdImc = patient.querySelector(".info-imc");

  // var validatePeso = true;
  // var validateAltura = true;

  if (!validatePeso(tdPeso)) {
    tdImc.textContent = "Inválido";
    patient.classList.add("invalid-patient");
  }

  if (!validateAltura(tdAltura)) {
    tdImc.textContent = "Inválido";
    patient.classList.add("invalid-patient");
  }

  if (validateAltura && validatePeso) {
    tdImc.textContent = imcCalculation(tdPeso, tdAltura);
  }
}

function imcCalculation(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

function validateName(name) {
  return name == "" ? false : true;
}

function validatePeso(peso) {
  console.log(peso)
  return peso <= 0 || peso > 300 || peso == "" ? false : true;
}
function validateAltura(altura) {
  return altura <= 0 || altura >= 3 || altura == "" ? false : true;
}
function validateFat(fat) {
  return fat == "" ? false : true;
}
// function validateImc(imc) {
//   return imc == "" ? false : true;
// }