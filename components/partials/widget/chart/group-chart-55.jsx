import Icon from "@/components/ui/Icon";

const statistics = [
  {
    title: "Share of consumer deposits covered",
    count: "95%",
    bg: "bg-warning-500",
    text: "text-primary-500",
    percent: "25.67% ",
    icon: "heroicons:arrow-trending-up",
    img: "/assets/images/all-img/shade-1.png",
    percentClass: "text-primary-500",
  },
  {
    title: "Share of assets with custodians",
    count: "25%",
    bg: "bg-info-500",
    text: "text-primary-500",
    percent: "8.67%",
    icon: "heroicons:arrow-trending-up",
    img: "/assets/images/all-img/shade-2.png",
    percentClass: "text-primary-500",
  },
];
const GroupChart55 = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1] mb-8 h-48 text-center grid`}
        >
          <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
            <img
              src={item.img}
              alt=""
              draggable="false"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="block mb-2 text-xl text-slate-900 dark:text-white font-medium">
            {item.title}
          </span>
          <span className="block  text-5xl text-slate-900 dark:text-white font-medium">
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

export default GroupChart55;
