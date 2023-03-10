import { Outlet, Link, useLocation  } from "react-router-dom"

const Layout = () => {
   const location = useLocation()

   console.log(location)

  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-purple-500 px-5 py-10 "> 
        
              <h2 className="font-bold text-3xl text-white text-center"> CRM-Clientes</h2>
              
              <nav className="m-3 font-bold">
                <Link className={`${location.pathname === '/' ? "text-purple-900" : "text-black"}  hover:text-white `} to="/">Clientes</Link> <br />
                <Link className={`${location.pathname === '/Nuevo/Cliente' ? "text-purple-900" : "text-black"}  hover:text-white `}  to="/Nuevo/Cliente">Nuevo Cliente</Link>
              </nav>
          </aside>
        <main className="md:w-3/4 md:h-screen overflow-scroll ">

  <Outlet/>      
        </main>

    </div>
  )
}

export default Layout
 