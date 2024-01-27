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
      hoverBackgroundColor: "#34CAA5"
    },
  ],
};

function getGradient(chart: {
  ctx: any;
  chartArea: { top: any; bottom: any; left: any; right: any };
}) {
  const {
    ctx,
    chartArea: { top, bottom },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(top, bottom);
  gradientSegment.addColorStop(0, "#34CAA5");
  gradientSegment.addColorStop(1, "rgba(52, 202, 165, 0.00)");
  return gradientSegment;
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
      <div>
        <Bar
        options={chartOptions}
          style={{
            backgroundColor: "white",
            width: "100%",
            objectFit: "contain",
          }}
          data={data}
        />
      </div>
    </div>
  );
};

export default TopBox;
