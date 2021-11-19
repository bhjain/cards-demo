import React, { Component } from "react";
import Chart from "react-apexcharts";
import './Dashboard.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [{
            name: "Desktops",
            data: [0.5, 1, 1, 1.5, 3, 7, 8, 9, 10]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight',
            width: 3,
            colors: ['#304e67']
          },
          title: {
            align: 'left'
          },
          grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            row: {
              colors: ['transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
            col: {
                colors: ['#000000'], // takes an array which will be repeated on columns
                opacity: 0.5
            }
          },
          xaxis: {
            categories: ['03 Q4', '04 Q1', '04 Q2', '04 Q3', '04 Q4', '05 Q1', '05 Q2', '05 Q3', '05 Q4'],
            labels: {
                rotate: 95
            }
          },
          markers: {
              size: [5],
              colors: ['#304e67']
          }
        }
    }
}

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart sm:hidden">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="400"
            />
          </div>
          <div className="mixed-chart hidden sm:block">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="380"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;