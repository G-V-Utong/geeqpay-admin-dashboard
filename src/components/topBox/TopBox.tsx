import "./topBox.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartType } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { CgOptions } from "react-icons/cg";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const chartOptions: any = {
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      border: {
        dash:[6],
        color: 'white'
      }
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
      border: {
        dash:[6],
        color: 'white'
      }
    }
  }
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const data = {
  labels,
  datasets: [
    
    {
      data: [
        6000, 21000, 3000, 28000, 9000, 45000, 9000, 23000, 35000, 7000, 3000,
        25000,
      ],
      outerWidth: 30,
      borderRadius: 20,
      backgroundColor: "rgba(52, 202, 165, 0.10)",
      hoverBackgroundColor: function(context: { chart: any; }) {
        const chart = context.chart;
        const {
          ctx,
          chartArea
        } = chart;
        if (!chartArea) {
          return null;
        }
        return getGradient(ctx, chartArea, "rgba(52, 202, 165, 1)", "rgba(52, 202, 165, 0)");
      }
    },
  ],
};

const  getGradient = (ctx: { createLinearGradient: (arg0: number, arg1: any, arg2: number, arg3: any) => any; }, chartArea: { right: number; left: number; bottom: number; top: number; }, start_color: string, stop_color: string) => {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, stop_color);
    gradient.addColorStop(1, start_color);
  }
  return gradient;
}


// export const config = {
//   type: 'bar',
//   data,
//   options: {
//     onHover: (event: any, chartElement: string | any[]) => {
//       if(chartElement.length == 1 ) {
//         console.log(chartElement)
//       }

//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       }
//     }
//   }

// }

const TopBox = () => {
  const options = ["Hourly", "Daily", "Weekly", "Monthly", "Yearly"];

  const defaultOption = options[2];

  return (
    <div className="topBox">
      <div className="topBox-header">
        <h1>Sales Trends</h1>
        <div className="sortby">
          <p>Sort by:</p>
          <Dropdown
            className="topBoxDropdownDiv"
            placeholderClassName="topBoxDropdownPlaceholder"
            menuClassName="topBoxMenu"
            controlClassName="topBoxDropdown"
            arrowClassName="topBoxDropdownArrow"
            options={options}
            value={defaultOption}
          />
        </div>
      </div>
      <div className="bar">
        <Bar
        options={chartOptions}
          style={{
            
            backgroundColor: "white",
            width: 'inherit',
            height: 'inherit',
            objectFit: "contain",
            flex: "1",
          }}
          data={data}
        />
      </div>
    </div>
  );
};

export default TopBox;
