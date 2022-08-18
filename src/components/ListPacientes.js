import React from 'react'

const ListPacientes = () => {

    async function PacientesGet(){
            const response = await fetch("http://localhost:8080/api/pacientes/")

        const result = await response.json()
        console.log('Resultado:',result)
    }

    React.useEffect(() => {
        PacientesGet();
    });

  return (
    <div>Teste</div>
  )
}

export default ListPacientes