import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/constant/data";
import useDarkMode from "@/hooks/useDarkMode";

const HistoryChart2 = ({ height = 360 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "Transactions",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Values",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Miners/Validators",
      data: [10, 31, 42, 38, 32, 22, 11],
    },
    {
      name: "Active Protocols & Assets",
      data: [31, 12, 65, 72, 84, 92, 81],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: [colors.primary, colors.warning, colors.secondary, colors.info],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 4,
      show: true,
      fontSize: "12px",
      fontFamily: "Inter",
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    grid: {
      show: true,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.3,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 30, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      type: "number",
      categories: ["T-1", "T-2", "T-3", "T-4", "T-5", "T-6", "T"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
  };
  return (
    <>
      <Chart options={options} series={series} type="area" height={height} />
    </>
  );
};

export default HistoryChart2;
