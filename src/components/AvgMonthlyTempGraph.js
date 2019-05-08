import ReactChartkick, { LineChart} from 'react-chartkick'
import Chart from 'chart.js'
import React, {Component} from 'react';
ReactChartkick.addAdapter(Chart)

class AvgMonthlyTempGraph extends Component {

  createLineGraphData=()=>{
    let months = ['Jan', 'Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec']
    let tempArr = this.props.temps.split(",").slice(1,13)
    let dataObj = {}

    tempArr.forEach((temp,index)=>{
      dataObj[months[index]] = temp
    })
    return dataObj
  }

  minYAxisCalc=()=>{
    let tempArr = this.props.temps.split(",").slice(1,13).map(Number)
    let minTemp = Math.min(...tempArr)
    return (Math.floor(minTemp / 10) * 10)
  }

  maxYAxisCalc=()=>{
    let tempArr = this.props.temps.split(",").slice(1,13).map(Number)
    let maxTemp = Math.max(...tempArr)
    return (Math.ceil(maxTemp / 10) * 10)
  }

  render() {
    let lineGraphData = this.createLineGraphData()
    let chartMin = this.minYAxisCalc()
    let chartMax = this.maxYAxisCalc()
    return (
        <LineChart xtitle="Month" ytitle="Degrees(F)" min={chartMin} max={chartMax} colors="#808080" data={lineGraphData} />
    )
  }
}

export default AvgMonthlyTempGraph;


// 178	174	188
