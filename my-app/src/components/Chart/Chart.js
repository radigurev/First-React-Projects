import React from "react";

import ChartBar from "./ChartBar";

import './Chart.css';

function Chart(props) {
    const dataPoints = props.charts.map(d => d.value);
    const max = Math.max(...dataPoints);
    
    return <div className="chart">
        {props.charts.map(d => <ChartBar value= {d.value} max={max} label={d.label} key={d.label}/>)}
    </div>
    
}

export default Chart;