const title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

const patients = document.querySelectorAll(".paciente");
// console.log(patients);


validateObjectsImc(patients);

function imcCalculation(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}
