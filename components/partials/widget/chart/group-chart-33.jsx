import Icon from "@/components/ui/Icon";

const statistics = [
  {
    title: "Transactions",
    count: "$723,872,537",
    bg: "bg-warning-500",
    text: "text-primary-500",
    percent: "25.67% ",
    icon: "heroicons:arrow-trending-up",
    img: "/assets/images/all-img/shade-1.png",
    percentClass: "text-primary-500",
  },
  {
    title: "Values ",
    count: "86,954,322",
    bg: "bg-info-500",
    text: "text-primary-500",
    percent: "8.67%",
    icon: "heroicons:arrow-trending-up",
    img: "/assets/images/all-img/shade-2.png",
    percentClass: "text-primary-500",
  },
  {
    title: "Active Wallets",
    count: "$26,678,111",
    bg: "bg-primary-500",
    text: "text-danger-500",
    percent: "1.67%  ",
    icon: "heroicons:arrow-trending-down",
    img: "/assets/images/all-img/shade-3.png",
    percentClass: "text-danger-500",
  },
  {
    title: "Active Protocols & Assets",
    count: "85,338",
    bg: "bg-success-500",
    text: "text-primary-500",
    percent: "11.67%  ",
    icon: "heroicons:arrow-trending-up",
    img: "/assets/images/all-img/shade-4.png",
    percentClass: "text-primary-500",
  },
];
const GroupChart33 = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]`}
        >
          <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
            <img
              src={item.img}
              alt=""
              draggable="false"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="block mb-2 text-sm text-slate-900 dark:text-white font-medium">
            {item.title}
          </span>
          <span className="block  text-2xl text-slate-900 dark:text-white font-medium">
            {item.count}
          </span>
          {/* <div className="flex space-x-2 rtl:space-x-reverse">
            <div className={` flex-none text-xl  ${item.text} `}>
              <Icon icon={item.icon} />
            </div>
            <div className="flex-1 text-sm">
              <span className={` block mb-[2px] ${item.percentClass} `}>
                {item.percent}
              </span>
              <span className="block mb-1 text-slate-600 dark:text-slate-300">
                From last week
              </span>
            </div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default GroupChart33;
