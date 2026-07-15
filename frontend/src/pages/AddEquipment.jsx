import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentService from "../services/EquipmentService";
import EquipmentForm from "../components/EquipmentForm";
import Swal from "sweetalert2";

export default function AddEquipment() {

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

    const navigate = useNavigate();

    const handleChange = (e) => {
        setEquipment({
            ...equipment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await EquipmentService.addEquipment(equipment);

            await Swal.fire({

                icon: "success",

                title: "Equipment Added",

                text: "Equipment has been added successfully.",

                timer: 1800,

                showConfirmButton: false

            });

            navigate("/equipment");

        } catch (error) {

            console.error(error);

            Swal.fire({

                icon: "error",

                title: "Add Equipment Failed",

                text:
                    error.response?.data?.message ||
                    "Failed to add equipment."

            });

        }

    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Add Equipment
            </h2>

            <EquipmentForm
                equipment={equipment}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                buttonText="Save Equipment"
            />

        </div>

    );

}