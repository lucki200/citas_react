import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente}) {
  return (

    <div className=' w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>
      {pacientes && pacientes.lenght ? "Si hay pacientes" : "no hay pacientes"}
      <h2 className='font-black text-3xl text-center' >Listado Pacientes</h2>
      <p className='text-lg mt-5 text-center'>
        Administra tus  {''}
        <span className='text-indigo-600 font-bold ' >Pacientes y Citas</span>
      </p>
      { pacientes.map( paciente  => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                           
                        />
                    ))}
      
      
      

   
    </div>
  )
}

export default ListadoPacientes