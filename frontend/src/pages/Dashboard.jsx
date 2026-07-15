import { useEffect, useState } from "react";
import EquipmentService from "../services/EquipmentService";
import StatusPieChart from "../components/StatusPieChart";
import CategoryBarChart from "../components/CategoryBarChart";
import RecentEquipmentTable from "../components/RecentEquipmentTable";
import {
    FaTools,
    FaCheckCircle,
    FaUserCheck,
    FaWrench
} from "react-icons/fa";

export default function Dashboard() {

    const [equipmentList, setEquipmentList] = useState([]);

    useEffect(() => {

        EquipmentService.getAllEquipment()
            .then((response) => {
                setEquipmentList(response.data);
            })
            .catch((error) => console.error(error));

    }, []);

    const total = equipmentList.length;

    const available = equipmentList.filter(
        e => e.status === "Available"
    ).length;

    const assigned = equipmentList.filter(
        e => e.status === "Assigned"
    ).length;

    const maintenance = equipmentList.filter(
        e => e.status === "Under Maintenance"
    ).length;

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Dashboard
            </h2>

            <div className="row">

                <div className="col-md-3 mb-4">

                    <div className="card dashboard-card bg-primary text-white shadow-lg border-0 h-100">

    <div className="card-body text-center">

        <FaTools size={40} className="mb-3"/>

        <h5>Total Equipment</h5>

        <h1>{total}</h1>

    </div>

</div>

                </div>

                <div className="col-md-3 mb-4">

                    <div className="card dashboard-card bg-success text-white shadow-lg border-0 h-100">

    <div className="card-body text-center">

        <FaCheckCircle size={40} className="mb-3"/>

        <h5>Available</h5>

        <h1>{available}</h1>

    </div>

</div>

                </div>

                <div className="col-md-3 mb-4">

                    <div className="card dashboard-card bg-warning text-dark shadow-lg border-0 h-100">

    <div className="card-body text-center">

        <FaUserCheck size={40} className="mb-3"/>

        <h5>Assigned</h5>

        <h1>{assigned}</h1>

    </div>

</div>

                </div>

                <div className="col-md-3 mb-4">

                    <div className="card dashboard-card bg-danger text-white shadow-lg border-0 h-100">

    <div className="card-body text-center">

        <FaWrench size={40} className="mb-3"/>

        <h5>Maintenance</h5>

        <h1>{maintenance}</h1>

    </div>

</div>

                </div>
            </div>

            {/* Status Pie Chart */}
            <div className="row mt-4">

    <div className="col-lg-6 mb-4">

        <StatusPieChart
            available={available}
            assigned={assigned}
            maintenance={maintenance}
        />

    </div>

    <div className="col-lg-6 mb-4">

        <CategoryBarChart
            equipmentList={equipmentList}
        />

    </div>

</div>

<RecentEquipmentTable equipmentList={equipmentList}/>

        </div>

    );

}