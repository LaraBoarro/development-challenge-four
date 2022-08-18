const db = require("../models");
const Paciente = db.pacientes;
const Op = db.Sequelize.Op;

// Create and Save a new Paciente
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Paciente
    const dadospaciente = {
      nome: req.body.nome,
      email: req.body.email,
      date_birthday: req.body.date_birthday,
      address: req.body.address
    };
    // Save Paciente in the database
    Paciente.create(dadospaciente)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Paciente."
        });
      });
  };

// Retrieve all Pacientes from the database.
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
    Paciente.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving paciente."
        });
      });
  };

// Find a single Paciente with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Paciente.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Paciente with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Paciente with id=" + id
        });
      });
  };

// Update a Paciente by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Paciente.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Paciente was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Paciente with id=${id}. Maybe Paciente was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Paciente with id=" + id
        });
      });
  };

// Delete a Paciente with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Paciente.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Paciente was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Paciente with id=${id}. Maybe Paciente was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Paciente with id=" + id
        });
      });
  };

// Delete all Pacientes from the database.
exports.deleteAll = (req, res) => {
    Paciente.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Pacientes were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };