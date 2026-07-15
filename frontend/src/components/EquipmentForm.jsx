export default function EquipmentForm({
    equipment,
    handleChange,
    handleSubmit,
    buttonText
}) {

    return (

        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label className="form-label">Equipment Name</label>
                <input
                    type="text"
                    name="equipmentName"
                    className="form-control"
                    value={equipment.equipmentName}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Category</label>
                <input
                    type="text"
                    name="category"
                    className="form-control"
                    value={equipment.category}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Serial Number</label>
                <input
                    type="text"
                    name="serialNumber"
                    className="form-control"
                    value={equipment.serialNumber}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Manufacturer</label>
                <input
                    type="text"
                    name="manufacturer"
                    className="form-control"
                    value={equipment.manufacturer}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Purchase Date</label>
                <input
                    type="date"
                    name="purchaseDate"
                    className="form-control"
                    value={equipment.purchaseDate}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Status</label>

                <select
                    name="status"
                    className="form-select"
                    value={equipment.status}
                    onChange={handleChange}
                >
                    <option value="">Select Status</option>
                    <option>Available</option>
                    <option>Assigned</option>
                    <option>Under Maintenance</option>
                </select>

            </div>

            <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                    type="text"
                    name="location"
                    className="form-control"
                    value={equipment.location}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Remarks</label>
                <textarea
                    rows="3"
                    name="remarks"
                    className="form-control"
                    value={equipment.remarks}
                    onChange={handleChange}
                />
            </div>

            <button
                className="btn btn-primary"
                type="submit"
            >
                {buttonText}
            </button>

        </form>

    );

}