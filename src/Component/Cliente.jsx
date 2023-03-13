
const Cliente = ({cliente}) => {

  const {nombre, empresa, email, telefono, id} = cliente

  return (
         <tr className="border-b">
              <td className="p-6">
                    <p className="text-2xl text-gray-800">{nombre}</p>
                    <p className="">{empresa}</p>
              </td>
              <td className="text-center">
                  <p className="text-gray-600"><span className="font-bold text-gray-800">Tel :</span> {telefono}</p>
                  <p className="text-gray-600"><span className="font-bold text-gray-800">Email:</span> {email}</p>
              </td>
              <td className="flex p-6 gap-3">
                <button className="bg-red-600 p-2 text-white rounded-md font-bold md:w-2/3">ELIMINAR</button> 
                <button className="bg-blue-600 p-2 text-white rounded-md font-bold md:w-2/3">EDITAR</button>
              </td>
        </tr>

  )
}

export default Cliente
