module.exports = (sequelize, Sequelize) => {
    const Pacientes = sequelize.define("pacientes", {
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      date_birthday: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      }
    });
    return Pacientes;
  };