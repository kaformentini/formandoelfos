const buttonGetPatients = document.querySelector("#get-patients");
buttonGetPatients.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../patientsList.JSON");
  xhr.addEventListener("load", function () {
    const newPacientList = JSON.parse(xhr.responseText);
    // console.log(newPacientList);

    newPacientList.forEach(function (patient) {
        
      addPatientOnTablePt(patient);
    });

    const patientsList = document.querySelectorAll(".paciente")
    // console.log(patientsList);
    
    validateObjectsImc(patientsList);
  });
  xhr.send();
});
