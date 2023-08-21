import React from "react";
import Icon from "@/components/ui/Icon";

const statistics = [
  {
    title: "Ratio to Market Flucatuations",
    count: "6:1",
    bg: "bg-red-500",
    text: "text-red-500",
    percent: "25.67% ",
    icon: "heroicons-outline:menu-alt-1",
  },
  {
    title: "Threshold Surplus",
    count: "40%",

    bg: "bg-yellow-500",
    text: "text-yellow-500",
    percent: "8.67%",
    icon: "heroicons-outline:chart-pie",
  },
  {
    title: "Threshold Dip",
    count: "0.0%",
    bg: "bg-teal-500",
    text: "text-teal-500",
    percent: "1.67%  ",
    icon: "heroicons-outline:clock",
  },
];
const GroupChart44 = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} rounded-md p-8 bg-opacity-[0.15] dark:bg-opacity-50 text-center`}
        >
          <div
            className={`${item.text} mx-auto h-10 w-10 flex flex-col items-center justify-center rounded-full bg-white text-2xl mb-4 `}
          >
            <Icon icon={item.icon} />
          </div>
          <span className="block text-base text-slate-600 font-medium dark:text-white mb-3">
            {item.title}
          </span>
          <span className="block text-5xl text-slate-900 dark:text-white font-medium">
            {item.count}
          </span>
        </div>
      ))}
    </>
  );
};

export default GroupChart44;
