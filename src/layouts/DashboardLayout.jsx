import "../components/layout/Layout.css"
import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"
//
import { useState } from "react"

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex">
      {sidebarOpen && (
          <div
            className="overlay"
            onClick={() => setSidebarOpen(false)}
          />
      )}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1">
      <Navbar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

        <main className="main">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout