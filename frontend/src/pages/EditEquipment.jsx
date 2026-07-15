import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import EquipmentService from "../services/EquipmentService";
import EquipmentForm from "../components/EquipmentForm";

export default function EditEquipment() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [equipment, setEquipment] = useState({
        equipmentName: "",
        category: "",
        serialNumber: "",
        manufacturer: "",
        purchaseDate: "",
        status: "",
        location: "",
        remarks: ""
    });

    useEffect(() => {

        EquipmentService.getEquipmentById(id)
            .then((response) => {

                setEquipment(response.data);

            })
            .catch((error) => {

                console.error(error);

                Swal.fire({

                    icon: "error",

                    title: "Error",

                    text:
                        error.response?.data?.message ||
                        "Unable to load equipment details."

                });

            });

    }, [id]);

    const handleChange = (e) => {

        setEquipment({

            ...equipment,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await EquipmentService.updateEquipment(id, equipment);

            await Swal.fire({

                icon: "success",

                title: "Equipment Updated",

                text: "Equipment updated successfully.",

                timer: 1800,

                showConfirmButton: false

            });

            navigate("/equipment");

        } catch (error) {

            console.error(error);

            Swal.fire({

                icon: "error",

                title: "Update Failed",

                text:
                    error.response?.data?.message ||
                    "Failed to update equipment."

            });

        }

    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Edit Equipment
            </h2>

            <EquipmentForm
                equipment={equipment}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                buttonText="Update Equipment"
            />

        </div>

    );

}