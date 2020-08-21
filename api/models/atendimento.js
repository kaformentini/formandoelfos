const moment = require("moment");
const conection = require("../infra/mysql");

class Atendimento {
  adiciona(attendance, res) {
    const creation_date = moment().format("YYYY-MM-DD HH:MM:SS");
    const service_date = modifyDateFormat(attendance.service_date);
    const attendanceDate = { ...attendance, creation_date, service_date };

    const validateName = attendance.client.length >= 5 ? true : false;
    const validateServiceDate = moment(service_date).isAfter(creation_date);

    const errorArray = [
      {
        campus: "client",
        validation: validateName,
        message: "Nome do inclente inválido",
      },
      {
        campus: "service_date",
        creation_date: creation_date,
        service_date: service_date,
        validation: validateServiceDate,
        message: "Data de Agendamento inválida. Tente uma data no futuro!",
      },
    ];

    const validationsErrorMsg = errorArray.filter(
      (campus) => !campus.validation
    );

    if (validationsErrorMsg.length) {
      console.log(errorArray);
      res.status(400).json(validationsErrorMsg);
    } else {
      const sql = "INSERT INTO attendance SET ?";
      conection.query(sql, attendanceDate, (erro, result) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(201).json(result);
        }
      });
    }
  }

  list(res) {
    const sql = "SELECT * FROM attendance";

    conection.query(sql, (erro, results) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(results);
      }
    });
  }

  findById(id, res) {
    const sql = `SELECT * FROM attendance WHERE id=${id}`;
    conection.query(sql, (erro, result) => {
      console.log(result.length);
      if (erro) {
        res.status(400).json(erro);
      } else if (!result.length) {
        res.status(404).json({ message: "no results" });
      } else {
        res.status(200).json(result[0]);
      }
    });
  }

  update(id, dataForChange, res) {
    if(dataForChange.service_date) {
      dataForChange.service_date = modifyDateFormat(dataForChange.service_date);
    }
    const sql = `UPDATE attendance SET ? WHERE id=${id}`;
    conection.query(sql, [dataForChange, id], (erro, result) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({dataForChange, id});
      }
    });
  }

  delete(id, res) {
    const sql = 'DELETE FROM attendance WHERE id=?'

    conection.query(sql, id, (erro, result) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({id});
      }
    })
  }
}


module.exports = new Atendimento();

function modifyDateFormat(date) {
  date = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");
  return date;
}