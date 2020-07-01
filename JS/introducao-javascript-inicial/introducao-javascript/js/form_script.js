const addPatientButton = document.querySelector("#adicionar-paciente");
addPatientButton.addEventListener("click", function (event) {
  event.preventDefault();

  const formReq = document.querySelector("#form-adiciona");

  const patient = patientCreate(formReq);
  errors = validateData(patient);

  if (errors.length > 0) {
    patientError(errors);
    return;
  } else {
    const errorMsg = document.querySelector("#error-msg");
    errorMsg.innerHTML = "";
  }

  const patientTr = createTr(patient);

  const table = document.querySelector("#tabela-pacientes");

  table.appendChild(patientTr);
  formReq.reset();
});

function patientCreate(formReq) {
  const patient = {
    name: formReq.nome.value,
    weigth: formReq.peso.value,
    heigth: formReq.altura.value,
    fat: formReq.gordura.value,
    imc: imcCalculation(formReq.peso.value, formReq.altura.value),
  };
  return patient;
}

function createTd(dado, classe) {
  const td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function createTr(patient) {
  const patientTr = document.createElement("tr");
  patientTr.appendChild(createTd(patient.name, "info-nome"));
  patientTr.appendChild(createTd(patient.weigth, "info-peso"));
  patientTr.appendChild(createTd(patient.heigth, "info-altura"));
  patientTr.appendChild(createTd(patient.fat, "info-gordura"));
  patientTr.appendChild(createTd(patient.imc, "info-imc"));

  patientTr.classList.add("paciente");
  return patientTr;
}

function validateData(patient) {
  const errorsValidate = [];
  console.log(patient);
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

function patientError(errors) {
  const errorMsg = document.querySelector("#error-msg");
  errorMsg.innerHTML = "";
  errorMsg.textContent = `Dados inválidos: ${errors.join(", ")}`;
  errorMsg.classList.add("error-msg");
}
