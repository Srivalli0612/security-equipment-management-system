import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import EquipmentService from "../services/EquipmentService";
import EquipmentTable from "../components/EquipmentTable";

export default function EquipmentList() {

    const [equipmentList, setEquipmentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 5;

    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/equipment/edit/${id}`);
    };

    const handleDelete = async (id) => {

        const result = await Swal.fire({

            title: "Delete Equipment?",

            text: "You won't be able to undo this action!",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#d33",

            cancelButtonColor: "#3085d6",

            confirmButtonText: "Yes, Delete"

        });

        if (!result.isConfirmed) {
            return;
        }

        try {

            await EquipmentService.deleteEquipment(id);

            Swal.fire({

                icon: "success",

                title: "Deleted!",

                text: "Equipment deleted successfully.",

                timer: 1800,

                showConfirmButton: false

            });

            loadEquipment();

        } catch (error) {

            console.error(error);

            Swal.fire({

                icon: "error",

                title: "Delete Failed",

                text: "Unable to delete equipment."

            });

        }

    };

    const loadEquipment = () => {

        setLoading(true);

        EquipmentService.getAllEquipment()

            .then((response) => {

                setEquipmentList(response.data);

            })

            .catch((error) => {

                console.error(error);

                Swal.fire({

                    icon: "error",

                    title: "Error",

                    text: "Failed to load equipment."

                });

            })

            .finally(() => {

                setLoading(false);

            });

    };

    useEffect(() => {

        loadEquipment();

    }, []);

    const filteredEquipment = equipmentList.filter((equipment) => {

        const search = searchTerm.toLowerCase();

        return (

            equipment.equipmentName.toLowerCase().includes(search) ||

            equipment.category.toLowerCase().includes(search) ||

            equipment.serialNumber.toLowerCase().includes(search)

        );

    });

    const totalPages = Math.max(
        1,
        Math.ceil(filteredEquipment.length / recordsPerPage)
    );

    const lastIndex = currentPage * recordsPerPage;

    const firstIndex = lastIndex - recordsPerPage;

    const currentRecords = filteredEquipment.slice(
        firstIndex,
        lastIndex
    );

    // Loading Spinner
    if (loading) {

        return (

            <div className="container text-center mt-5">

                <div
                    className="spinner-border text-primary"
                    role="status"
                >
                </div>

                <h5 className="mt-3">

                    Loading Equipment...

                </h5>

            </div>

        );

    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2 className="mb-0">

                    Equipment List

                </h2>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/equipment/add")}
                >

                    + Add Equipment

                </button>

            </div>

            <div className="mb-3">

                <input

                    type="text"

                    className="form-control"

                    placeholder="🔍 Search by Equipment Name, Category or Serial Number..."

                    value={searchTerm}

                    onChange={(e) => {

                        setSearchTerm(e.target.value);

                        setCurrentPage(1);

                    }}

                />

            </div>

            <p className="text-muted">

                Showing{" "}
                {filteredEquipment.length === 0
                    ? 0
                    : firstIndex + 1}
                {" - "}
                {Math.min(lastIndex, filteredEquipment.length)}
                {" of "}
                {filteredEquipment.length} equipment

            </p>

            {filteredEquipment.length === 0 ? (

                <div className="text-center mt-5">

                    <h1>🔍</h1>

                    <h4>No Equipment Found</h4>

                    <p className="text-muted">

                        Try another search.

                    </p>

                </div>

            ) : (

                <>

                    <EquipmentTable

                        equipmentList={currentRecords}

                        onEdit={handleEdit}

                        onDelete={handleDelete}

                    />

                    <div className="d-flex justify-content-between align-items-center mt-4">

                        <button

                            className="btn btn-outline-primary"

                            disabled={currentPage === 1}

                            onClick={() => setCurrentPage(currentPage - 1)}

                        >

                            ◀ Previous

                        </button>

                        <span>

                            Page {currentPage} of {totalPages}

                        </span>

                        <button

                            className="btn btn-outline-primary"

                            disabled={currentPage === totalPages}

                            onClick={() => setCurrentPage(currentPage + 1)}

                        >

                            Next ▶

                        </button>

                    </div>

                </>

            )}

        </div>

    );

}