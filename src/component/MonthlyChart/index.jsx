import React, { useState } from "react";
import Chart from "react-apexcharts";

const MonthlyChart = () => {
  // 12 oy uchun ma'lumotlar (har bir oy uchun kunlik qiymatlar)
  const monthlyData = {
    January: Array(31)
      .fill(100000)
      .map((val, i) => val + i * 1000),
    February: Array(28)
      .fill(120000)
      .map((val, i) => val + i * 500),
    March: Array(31)
      .fill(130000)
      .map((val, i) => val - i * 700),
    April: Array(30)
      .fill(90000)
      .map((val, i) => val + i * 1500),
    May: Array(31)
      .fill(110000)
      .map((val, i) => val + i * 800),
    June: Array(30)
      .fill(140000)
      .map((val, i) => val - i * 1000),
    July: Array(31)
      .fill(150000)
      .map((val, i) => val + i * 600),
    August: Array(31)
      .fill(125000)
      .map((val, i) => val + i * 200),
    September: Array(30)
      .fill(150000)
      .map((val, i) => val - i * 500),
    October: Array(31)
      .fill(135000)
      .map((val, i) => val + i * 300),
    November: Array(30)
      .fill(105000)
      .map((val, i) => val - i * 400),
    December: Array(31)
      .fill(160000)
      .map((val, i) => val + i * 700),
  };

  // Tanlangan oyni saqlash uchun holat
  const [selectedMonth, setSelectedMonth] = useState("September");

  // ApexCharts uchun parametrlar
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 5,
      },
    },
    colors: ["#007bff"],
    dataLabels: {
      enabled: false, // Ustidagi raqamlarni yashirish
    },
    xaxis: {
      categories: Array.from(
        { length: monthlyData[selectedMonth].length },
        (_, i) => i + 1
      ), // Kunlar
      title: {
        text: selectedMonth, // Tanlangan oy nomi
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#007bff",
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        formatter: (val) => val.toLocaleString(), // Yangi raqam ko'rinishida chiqarish
      },
    },
  };

  const series = [
    {
      name: "Sum", // "Amount" o'rniga "Sum"
      data: monthlyData[selectedMonth],
    },
  ];

  return (
    <div className="chart-container">
      {/* Oy tanlash uchun select */}
      <div className="month-selector">
        <label htmlFor="month">Select Month: </label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Object.keys(monthlyData).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Grafik */}
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default MonthlyChart;
