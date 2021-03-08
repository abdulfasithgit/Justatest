import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const BarChart = props => {
  //console.log('check from', props)
  //
  let propObj = Object.assign({}, props);
  //console.log("clone",propObj)
  if ((propObj.from = 'individual')&&propObj.product!=undefined) {
    const { name, phone, tablets } = propObj.product
    var options = {
      chart: {
        type: 'column'
      },
      title: {
        text: `${name} Phones and Tablets`
      },

      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'No of items'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
      },

      series: [
        {
          name: name,
          colorByPoint: true,
          data: [
            {
              name: 'Phone',
              y: phone
            },
            {
              name: 'Tablets',
              y: tablets
            }
          ]
        }
      ]
    }
  } else {
    const productData = propObj.products
    const xAxis = []
    const phoneData = []
    const tabletData = []
    productData.forEach(product => {
      xAxis.push(product.name)
      phoneData.push(product.phone)
      tabletData.push(product.tablets)
    })
    var options = {
      chart: {
        type: 'column'
      },
      title: {
        text: `Phones and Tablets`
      },

      xAxis: {
        categories: xAxis
      },
      yAxis: {
        title: {
          text: 'No of items'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          pointPadding: 0.1,
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
      },

      series: [
        {
          name: 'Phones',
          data: phoneData
        },
        {
          name: 'Tablets',
          data: tabletData
        }
      ]
    }
  }
  
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
export default BarChart
