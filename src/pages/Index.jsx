import { useLoaderData } from "react-router-dom";
import Cliente from "../Component/Cliente";
import {obtenerClientes} from '../data/clientes'

export function loader(){
  const clientes = obtenerClientes()
  
  return(clientes)

}


const Index = () => {

  const clientes = useLoaderData();
  
  console.log(clientes)


  return (
    <>
    <h2 className="font-bold text-4xl text-purple-900 m-5">Clientes</h2>
    <p className="font-bold m-5">Administrar Clientes</p>

    {clientes.length ? (
      <table className="w-full bg-white table-auto m-3">
        <thead className="bg-purple-500 text-white">
          <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map( cliente => (
           <Cliente
           cliente={cliente}
           key={cliente.id}/>
          ))}
            <tr>

            </tr>
        </tbody>
      </table>
     ) : (

      <p className='mt-5 text-center'> no hay clientes aun</p>
    )}


    </>

  )
}

export default Index
