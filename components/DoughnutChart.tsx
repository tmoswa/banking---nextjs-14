'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }:DoughnutChartProps) => {
    const data={
        datasets:[
            {
                lable: 'banks',
                data:[1250,2500,3750],
                backgroundColor:['#0747b6','#2265d8','#2f91fa']
            }
        ],
        lables:['bank 1','Bank 2','bank 3']
    }
  return <span>
    <Doughnut 
      data={data} 
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: true
          }
        }
      }}
      />
</span>
      
}

export default DoughnutChart
