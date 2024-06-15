"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }:DoughnutChartProps) => {
    const data={
      lables:['Bank 1','Bank 2','Bank 3'],
        datasets:[
            {
                lable: 'Banks',
                data:[1250,2500,3750],
                backgroundColor:['#0747b6','#2265d8','#2f91fa']
            }
        ],
        hoverOffset: 4  
    }
  return <div>
    <Doughnut 
      data={data} 
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          }
        },
        responsive:true,
      }}
      /> 
      </div>  
}

export default DoughnutChart
