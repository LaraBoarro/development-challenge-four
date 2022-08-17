const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'pacientes',
  password: '1234',
  port: 5432,

})

const getPacientes = (request, response) => {
    pool.query('SELECT * FROM pacientes ORDER BY id DESC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getPacienteById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM pacientes WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createPaciente = (request, response) => {
    const { nome, email, date_birthday, address } = request.body
  
    pool.query('INSERT INTO pacientes (nome, email, date_birthday, address) VALUES ($1, $2, $3, $4)', [nome, email, date_birthday, address], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Paciente criada com sucesso.`)
    })
  }
  
  const updatePaciente = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, email, date_birthday, address } = request.body
  
    pool.query(
      'UPDATE pacientes SET nome = $1, email = $2, date_birthday = $3, address = $4 WHERE id = $4',
      [nome, email, date_birthday, address, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Paciente ${id} atualizada com sucesso.`)
      }
    )
  }
  
  const deletePaciente = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM pacientes WHERE id = $1', [id], (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Pessoa removida com sucesso com o identificador: ${id}`)
    })
  }
  
  module.exports = {
    getPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente,

}

