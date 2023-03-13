import { useNavigate, Form, useActionData,} from "react-router-dom" 
import Formulario from "../Component/Formulario"

export async function action ({request}){
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)
  
  // validacion del form
    const errores = []

  if(Object.values(datos).includes('')){
    errores.push('todos los campos son obligatorio')
  }
  // retornar datos si ha errores
  if(Object.keys(errores).length){
    return errores 
}
   return('desde action')  



}

const NuevoCliente = () => {   

  const useActionData = useActionData()
const navegate = useNavigate()

console.log(errores)

  return (
    <>
       <h2 className="font-bold text-4xl text-purple-900 m-5">Nuevo Cliente</h2>

      <p className="pl-5">LLene todo los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button className="bg-purple-500 px-3 py-2 mb-3 font-bold text-white rounded-md uppercase"
                onClick={() => navegate('/')}>volver</button>
      </div>
      <div className=" bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-5">
        <p className="font-bold text-2xl text-purple-900 m-5 text-center">Formulario</p>

        <Form
        method='post'
      >

        <Formulario/>
        < input 
                type="submit" 
                className="bg-purple-500 px-3 py-2 font-bold text-white rounded-md uppercase md:w-full"
                value="registrar cliente"/>
                
        </Form> 

      </div>

    </>
  )
}

export default NuevoCliente
