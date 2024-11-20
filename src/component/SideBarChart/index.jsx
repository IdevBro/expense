import Chart from "react-apexcharts";

const SideBarChart = () => {
  const chartOptions = {
    series: [41.35, 21.51, 13.47, 9.97, 13.7], // Proportion of categories
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Дом", "Онлайн покупки", "Автомобиль", "Еда", "Прочее"],
      colors: ["#9B59B6", "#E74C3C", "#3498DB", "#2ECC71", "#BDC3C7"],
      legend: {
        show: false, // Hide the default legend
      },
      dataLabels: {
        enabled: false, // Hide labels inside the chart
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
      },
    },
  };

  return (
    <div className="category-chart">
      <h3 className="chart-title">Expense in category</h3>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        width="300"
      />
      <ul className="category-legend">
        <li>
          <span className="color-box" style={{ backgroundColor: "#9B59B6" }} />
          Home <span className="percent">41,35%</span>
        </li>
        <li>
          <span className="color-box" style={{ backgroundColor: "#E74C3C" }} />
          Online store <span className="percent">21,51%</span>
        </li>
        <li>
          <span className="color-box" style={{ backgroundColor: "#3498DB" }} />
          Auto <span className="percent">13,47%</span>
        </li>
        <li>
          <span className="color-box" style={{ backgroundColor: "#2ECC71" }} />
          Food<span className="percent">9,97%</span>
        </li>
        <li>
          <span className="color-box" style={{ backgroundColor: "#BDC3C7" }} />
          Add category
          <button className="add-category">+</button>
        </li>
      </ul>
    </div>
  );
};

export default SideBarChart;
