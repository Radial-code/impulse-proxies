import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadialBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
            track: {
              background: "#303059",
            },
            dataLabels: {
              show: true,
              value: {
                show: false,
                fontSize: "25px"
              },
            },
          },
        },
        colors: ["#347c82"],
        labels: [`${this.props.remainingData} GB Left`],
        annotations: {
          text: "GB Left",
          offsetX: 0,
          offsetY: 0,
          style: {
            background: "transparent",
            border: "0px",
            color: "#FFFFFF",
            fontSize: "20px",
          },
        },
      },
      series: [this.props.percentageLabel],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width="380"
        />
      </div>
    );
  }
}

export default RadialBar;
