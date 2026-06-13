import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout