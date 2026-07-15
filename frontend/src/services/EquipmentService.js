import axios from "axios";

const API_URL = "http://localhost:8081/api/equipment";

class EquipmentService {

    getAllEquipment() {
        return axios.get(API_URL);
    }

    getEquipmentById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    addEquipment(equipment) {
        return axios.post(API_URL, equipment);
    }

    updateEquipment(id, equipment) {
        return axios.put(`${API_URL}/${id}`, equipment);
    }

    deleteEquipment(id) {
        return axios.delete(`${API_URL}/${id}`);
    }

}

export default new EquipmentService();