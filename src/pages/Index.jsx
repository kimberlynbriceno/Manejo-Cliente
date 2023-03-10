import { useLoaderData } from "react-router-dom";

export function loader(){

  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];
return (clientes)
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
            <tr className="p-5 ">
              <td>
                {cliente.nombre}
              </td>
            </tr>
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
