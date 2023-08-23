import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import useDarkMode from "@/hooks/useDarkMode";

const RadarChart6 = () => {
  const [isDark] = useDarkMode();
  const series = [90];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "22px",
            color: isDark ? "#E2E8F0" : "#475569",
          },
          value: {
            fontSize: "16px",
            color: isDark ? "#E2E8F0" : "#475569",
          },
          total: {
            show: true,
            label: "",
            color: isDark ? "#E2E8F0" : "#475569",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 0,
    },
    colors: ["#4669FA"],
  };

  return (
    <div>
      <Chart series={series} options={options} type="radialBar" height="280" />
    </div>
  );
};

export default RadarChart6;
