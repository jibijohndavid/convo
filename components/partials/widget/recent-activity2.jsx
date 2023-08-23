const activity = [
  {
    id: 1,
    img: "/assets/images/users/user-1.jpg",
    link: "Cross-Chain DeFi Protocol Achieves Interoperability",
  },
  {
    id: 2,
    img: "/assets/images/users/user-2.jpg",
    link: "Liquidity Pools Surge Amid Yield Farming",
  },
  {
    id: 3,
    img: "/assets/images/users/user-3.jpg",
    link: "Regulators Assess NFT Marketplace Compliance",
  },
  {
    id: 4,
    img: "/assets/images/users/user-4.jpg",
    link: "New DeFi Index Sparks Investment",
  },
];

const RecentActivity2 = () => {
  return (
    <div>
      <ul className="list-item space-y-3 h-full overflow-x-auto">
        {activity.map((item, i) => (
          <li
            className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0"
            key={i}
          >
            {/* <div>
              <div className="w-8 h-8 rounded-[100%]">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full rounded-[100%] object-cover"
                />
              </div>
            </div> */}
            <div className="text-sm text-blue-600 hover:underline cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap">
              {item.link}
            </div>
            {/* <div className="flex-1 ltr:text-right rtl:text-left">
              <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                1 hours
              </div>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity2;
