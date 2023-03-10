import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-purple-500 px-5 py-10"> 
              crm 
        </aside>
        <main className="md:w-3/4 md:h-screen overflow-scroll ">

  <Outlet/>      
        </main>

    </div>
  )
}

export default Layout
