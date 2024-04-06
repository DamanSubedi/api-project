import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'


export default function LineChart({ coinHistory }) {
    const coinPrice = [];
    const timeStamp = []
    for (let i = 0; i < coinHistory?.length; i++) {
        coinPrice.push(Number(coinHistory[i]?.price).toFixed(2))
        timeStamp.push(new Date(coinHistory[i]?.timestamp * 1000).toLocaleString())
    }

    const data = {
        labels: timeStamp.slice(0, 100),
        datasets: [
            {
                label: 'price in USD',
                fill: false,
                lineTension: 0.5,
                borderWidth: 2,
                data: coinPrice.slice(0,100),
            }
        ]
    };






    return (
        <div className="chart-container">
            <Line
                data={data}
            />

        </div>
    )
}