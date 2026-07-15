import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

export default function CategoryBarChart({ equipmentList }) {

    const categoryCount = {};

    equipmentList.forEach((equipment) => {

        categoryCount[equipment.category] =
            (categoryCount[equipment.category] || 0) + 1;

    });

    const data = {

        labels: Object.keys(categoryCount),

        datasets: [

            {

                label: "Equipment",

                data: Object.values(categoryCount),

                backgroundColor: "#0d6efd"

            }

        ]

    };

    const options = {

        responsive: true,

        maintainAspectRatio: false

    };

    return (

        <div className="card chart-card shadow border-0">

            <div className="card-body">

                <h4 className="text-center mb-4">

                    Equipment Categories

                </h4>

                <div
                    style={{
                        height: "350px"
                    }}
                >

                    <Bar
                        data={data}
                        options={options}
                    />

                </div>

            </div>

        </div>

    );

}