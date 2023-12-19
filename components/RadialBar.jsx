import React, { Component} from 'react';
import dynamic from 'next/dynamic';
const DynamicChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class RadialBar extends Component {
  render() {
    this.state = {
      series: [`${this.props.channelData.percentageLabel}`],
      options: {
        width: '5%',
        chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            track: {
              background: "#303059",
            },
            hollow: {
              size: '60%',
            },
            dataLabels: {
              show: true,
              name: {
                  show: true,
                  fontSize: '30px',
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  color: "#FFF",
                  offsetY: -10

                },
                value: {
                  show: true,
                  fontSize: '14px',
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  color: "#827b96",
                  formatter: function () {
                    return `GB LEFT`
                  }
                },
            }
          },
        },
        labels: [`${this.props.channelData.remainingData}`],
        colors: ['#7c7aa4'], // Set the color of "GB LEFT" text
        fill: {
          colors: ['#357c83'], // Set the color of additional text (e.g., red)
        },        
        legend: {
          show: false, // Hide legend
        },
      },
    };
    return (
      <div>
        <DynamicChart options={this.state.options} series={this.state.series} type="radialBar" height={280} />
      </div>
    );
  }
}
