export default function RecentEquipmentTable({ equipmentList }) {

    const recentEquipment = [...equipmentList]
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);

    return (

        <div className="card shadow border-0 mt-4">

            <div className="card-body">

                <h4 className="mb-4">

                    Recently Added Equipment

                </h4>

                <table className="table table-hover align-middle">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Location</th>

                        </tr>

                    </thead>

                    <tbody>

                        {recentEquipment.map((equipment) => (

                            <tr key={equipment.id}>

                                <td>{equipment.id}</td>

                                <td>{equipment.equipmentName}</td>

                                <td>{equipment.category}</td>

                                <td>

                                    {equipment.status === "Available" &&
                                        <span className="badge bg-success">
                                            Available
                                        </span>
                                    }

                                    {equipment.status === "Assigned" &&
                                        <span className="badge bg-warning text-dark">
                                            Assigned
                                        </span>
                                    }

                                    {equipment.status === "Under Maintenance" &&
                                        <span className="badge bg-danger">
                                            Under Maintenance
                                        </span>
                                    }

                                </td>

                                <td>{equipment.location}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}