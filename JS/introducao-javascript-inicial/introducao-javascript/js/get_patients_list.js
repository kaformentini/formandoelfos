const buttonGetPatients = document.querySelector("#get-patients");
buttonGetPatients.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../patientsList.JSON");
  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      const newPacientList = JSON.parse(xhr.responseText);

      newPacientList.forEach(function (patient) {
        addPatientOnTablePt(patient);
      });
      const patientsList = document.querySelectorAll(".paciente");

      validateObjectsImc(patientsList);
    } else {
      let status = document.querySelector("#status-error-msg");
      // console.log(xhr.status);

      status.textContent = "Não foi possível realizar a operação";
      status.classList.add("error-msg");
    }
  });
  xhr.send();
});

const buttonGetError = document.querySelector("#get-patients-erro");
buttonGetError.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../patientsList.JSONm");
  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      const newPacientList = JSON.parse(xhr.responseText);

      newPacientList.forEach(function (patient) {
        addPatientOnTablePt(patient);
      });
      const patientsList = document.querySelectorAll(".paciente");

      validateObjectsImc(patientsList);
    } else {
      let status = document.querySelector("#status-error-msg");
      // console.log(xhr.status);

      status.textContent = "Não foi possível realizar a operação";
      status.classList.add("error-msg");
    }
  });
  xhr.send();
});