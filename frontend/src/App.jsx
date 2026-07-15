import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import EquipmentList from "./pages/EquipmentList";
import AddEquipment from "./pages/AddEquipment";
import EditEquipment from "./pages/EditEquipment";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />

        <Route path="/equipment" element={<EquipmentList />} />

        <Route path="/equipment/add" element={<AddEquipment />} />

        <Route
          path="/equipment/edit/:id"
          element={<EditEquipment />}
        />

      </Route>
    </Routes>
  );
}

export default App;