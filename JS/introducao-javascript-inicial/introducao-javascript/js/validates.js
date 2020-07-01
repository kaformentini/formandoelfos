function validateName(name) {
  return name == "" ? false : true;
}

function validatePeso(peso) {
//   console.log(peso);
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

function validateData(patient) {
  const errorsValidate = [];
//   console.log(patient);
  if (!validateName(patient.name)) {
    errorsValidate.push("Nome");
  }
  if (!validatePeso(patient.weigth)) {
    errorsValidate.push("Peso");
  }
  if (!validateAltura(patient.heigth)) {
    errorsValidate.push("Altura");
  }
  if (!validateFat(patient.fat)) {
    errorsValidate.push("Gordura");
  }
  // if (!validateImc(patient.imc)) {
  //   errorsValidate.push("Campos com letras");
  // }

  return errorsValidate;
}
