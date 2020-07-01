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

