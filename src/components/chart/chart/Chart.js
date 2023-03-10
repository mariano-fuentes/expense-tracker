import './Chart.css'
import React from 'react'
import ChartBar from '../chart-bar/ChartBar'

const Chart = ({ dataPoints })=>{
  return (
    <div className='chart'>
      {
        dataPoints.map((dataPoint)=>{
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
          />
        })
      }  
    </div>
  )
}

export default Chart