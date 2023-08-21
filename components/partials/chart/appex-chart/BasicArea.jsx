import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import useDarkMode from "@/hooks/useDarkMode";
import { colors } from "@/constant/data";

const BasicArea = ({ height = 350 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "Transactions",
      data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80],
    },
    {
      name: "Values",
      data: [10, 20, 35, 40, 50, 90, 80, 65, 60, 70],
    },
    {
      name: "Active Wallets",
      data: [20, 30, 55, 50, 30, 40, 60, 85, 80, 100],
    },
    {
      name: "Active Protocols & Assets",
      data: [30, 20, 55, 40, 48, 60, 70, 55, 75, 90],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: [colors.primary, colors.warning, colors.secondary, colors.info],
    tooltip: {
      theme: "dark",
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
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [50, 100, 0],
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="area" height={height} />
    </div>
  );
};

export default BasicArea;
