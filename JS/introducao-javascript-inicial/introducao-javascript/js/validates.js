function validateName(name) {
  return name == "" ? false : true;
}

function validatePeso(peso) {
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

function validateObjectsImc(patientsList) {
  // console.log(patientsList);
  for (var i = 0; i < patientsList.length; i++) {
    const patient = patientsList[i];

    var tdPeso = Number(patient.querySelector(".info-peso").textContent);
    var tdAltura = Number(patient.querySelector(".info-altura").textContent);
    var tdImc = patient.querySelector(".info-imc");
    // console.log(tdAltura, tdPeso, tdImc);
    const validatedPeso = validatePeso(tdPeso);
    const validatedAltura = validateAltura(tdAltura);

    if (!validatedPeso) {
      tdImc.textContent = "Inválido";
      patient.classList.add("invalid-patient");
    }

    if (!validatedAltura) {
      tdImc.textContent = "Inválido";
      patient.classList.add("invalid-patient");
    }

    if (validatedAltura && validatedPeso) {
      tdImc.textContent = imcCalculation(tdPeso, tdAltura);
    }
  }
}

function validateImc(patient) {
  var tdImc = patient.querySelector(".info-imc");
  // console.log(tdAltura, tdPeso, tdImc);

  if (tdImc < 5 || tdImc > 30) {
    tdImc.textContent = "Inválido";
    patient.classList.add("invalid-patient");
  }
}

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
