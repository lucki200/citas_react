import {useEffect}  from 'react'

function Paciente({ paciente, setPaciente }) {

  
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10  rounded-xl '>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre : {''}
        <span className='font-normal normal-case'>{paciente.nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario : {''}
        <span className='font-normal normal-case'>{paciente.propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email : {''}
        <span className='font-normal normal-case'>{paciente.mail}l</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>fechaAlta : {''}
        <span className='font-normal normal-case'>{paciente.fechaAlta}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas : {''}
        <span className='font-normal normal-case'>{paciente.sintoma}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button className="rounded-full bg-indigo-600 py-2 px-10 hover:bg-indigo-700 text-white font-bold uppercase" type="button">
          Editar
        </button>
        <button className="rounded-full bg-red-700 py-2 px-10 hover:bg-red-800 text-white font-bold uppercase" type="button" 
        onClick={()=> setPaciente(paciente)}>
          Eliminar
        </button>
      </div>
    </div>

    
  )
}

export default Paciente
