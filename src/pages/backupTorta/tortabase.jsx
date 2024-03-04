// base per non farlo buggare
import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";


const Torta = () => {
    return (
        <>
            <div className="">
                <div className="">
                    <Doughnut
                        data={{
                            labels: ["A", "B", "C"],
                            datasets: [
                                {
                                    label: "revenue",
                                    data: [200, 300, 400]
                                }
                            ]
                        }}/>
                </div>
            </div>
        </>
    )
}

export default Torta