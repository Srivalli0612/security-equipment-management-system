export default function EquipmentTable({ equipmentList, onEdit, onDelete }) {

    return (

        <table className="table table-striped table-hover align-middle shadow">

            <thead className="table-dark">

                <tr>
                    <th>ID</th>
                    <th>Equipment Name</th>
                    <th>Category</th>
                    <th>Serial Number</th>
                    <th>Status</th>
                    <th>Location</th>
                    <th className="text-center">Actions</th>
                </tr>

            </thead>

            <tbody>

                {equipmentList.map((equipment) => (

                    <tr key={equipment.id}>

                        <td>{equipment.id}</td>

                        <td>{equipment.equipmentName}</td>

                        <td>{equipment.category}</td>

                        <td>{equipment.serialNumber}</td>

                        <td>

    {equipment.status === "Available" && (
        <span className="badge bg-success">
            Available
        </span>
    )}

    {equipment.status === "Assigned" && (
        <span className="badge bg-warning text-dark">
            Assigned
        </span>
    )}

    {equipment.status === "Under Maintenance" && (
        <span className="badge bg-danger">
            Under Maintenance
        </span>
    )}

</td>

                        <td>{equipment.location}</td>

                        <td>

                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={()=> onEdit(equipment.id)}
                            >
                                Edit
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(equipment.id)}
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}