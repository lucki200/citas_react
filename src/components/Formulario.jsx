import React, { useState, useEffect } from 'react'


function Formulario({ pacientes, setPacientes, paciente }) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [mail, setMail] = useState('');
  const [fechaAlta, setfechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [alerta, setAlerta] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length>0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setMail(paciente.mail)
      setfechaAlta(paciente.fechaalta)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, mail, fechaAlta, sintomas].includes('')) {
      console.log('hay un campo vacio')
      setAlerta(true)
      return;
    }
    setAlerta(false)
    //objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      mail,
      fechaAlta,
      sintomas,
      id:generarId()
    }
    setPacientes([...pacientes, objetoPaciente]);
    //reiniciar el formulario
    setNombre('')
    setPropietario('')
    setMail('')
    setfechaAlta('')
    setSintomas('')
  }
  return (

    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center' >Seguimiento Paciente</h2>
      <p className='text-lg mt-5 text-center'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold ' >Administralos</span>
      </p>

      <form className='max-w w-sm mx-auto my-8' onSubmit={handleSubmit} >
        {alerta &&
         <div className='bg-red-700 text-white uppercase  text-center p-3 font-bold mb-3 rounded-md'>Todos Los campos son obligatorios</div>}
        <div className="mb-4">
          <label htmlFor="mascota" className="block text-gray-700 font-bold mb-10">
            Nombre de la mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder='nombre mascota'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label htmlFor="propietario" className="block text-gray-700 font-bold mb-2">
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder='Nombre del propietario'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
          <label htmlFor="mail" className="block text-gray-700 font-bold mb-2">
            Mail
          </label>
          <input
            type="email"
            id="mail"
            placeholder='Ingrese su email'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <label htmlFor="fechaAlta" className="block text-gray-700 font-bold mb-2">
            fechaAlta
          </label>
          <input
            type="date"
            id="fechaAlta"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fechaAlta}
            onChange={(e) => setfechaAlta(e.target.value)}
          />
          <label htmlFor="fechaAlta" className="block text-gray-700 font-bold mb-2">
            fechaAlta
          </label>
          <textarea
            id='siintomas'
            className='border-2 w-full p-2  mt-2  placeholder-gray-400 rounded-md'
            placeholder='describe los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
          <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' type="submit" value="AGREGAR PACIENTE" />
        </div>
      </form>
    </div>
  )
}

export default Formulario