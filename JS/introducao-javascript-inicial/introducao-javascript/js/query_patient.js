const queryPatient = document.querySelector("#query-patient");
queryPatient.addEventListener("input", function () {
  const patients = document.querySelectorAll(".paciente");

  if (queryPatient.value.length > 0) {
    patients.forEach(function (patient) {
      const patientName = patient.querySelector(".info-nome").textContent;
    //   console.log(queryPatient);
      const expressionQuery = new RegExp(queryPatient.value, "i");
    //   console.log(expressionQuery.test(patientName));

      if (expressionQuery.test(patientName)) {
        patient.classList.remove("invisible");
      } else {
        patient.classList.add("invisible");
      }
    });
    
  } else {
    patients.forEach(function (patient) {
      patient.classList.remove("invisible");
    });
  }
});
