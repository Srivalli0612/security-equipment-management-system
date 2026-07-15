import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function StatusPieChart({
    available,
    assigned,
    maintenance
}) {

    const data = {

        labels: [
            "Available",
            "Assigned",
            "Under Maintenance"
        ],

        datasets: [

            {

                data: [
                    available,
                    assigned,
                    maintenance
                ],

                backgroundColor: [

                    "#198754",
                    "#ffc107",
                    "#dc3545"

                ]

            }

        ]

    };

    const options={
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            legend:{
                position: "top"
            }
        }
    };

    return (

        <div className="card chart-card shadow border-0 mt-4">

            <div className="card-body">

                <h4 className="text-center mb-4">

                    Equipment Status

                </h4>

                <div
    style={{
        width: "400px",
        height: "400px",
        margin: "0 auto"
    }}
>
    <Pie data={data} 
    options={options}/>
</div>

            </div>

        </div>

    );

}