const patientsList = document.querySelectorAll(".paciente");

const tablePatientList = document.querySelector("table");
// console.log(tablePatientList);

tablePatientList.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fade-out");
  setTimeout(function () {
    event.target.parentNode.remove();
    
  }, 500);
});
