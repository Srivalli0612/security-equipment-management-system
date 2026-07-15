import { useState } from "react";
import { Outlet } from "react-router-dom";

import AppNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
};

  return (
    <>

      <AppNavbar toggleSidebar={toggleSidebar} />

      <Sidebar 
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />

      <div
  style={{
    marginTop: "70px",
    marginLeft: isSidebarOpen ? "250px" : "0",
    padding: "20px",
    transition: "margin-left 0.3s ease"
  }}
>
    <Outlet />
</div>

    </>
  );
}