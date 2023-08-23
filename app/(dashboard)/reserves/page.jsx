"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";
import GroupChart55 from "@/components/partials/widget/chart/group-chart-55";
import RecentOrderTable from "@/components/partials/table/recentOrder-table";

const MostSales = dynamic(
  () => import("@/components/partials/widget/most-sales"),
  {
    ssr: false,
  }
);
const campaigns = [
  {
    name: "USDT",
    value: "32.13%",
  },
  {
    name: "BTC",
    value: "27.52%",
  },
  {
    name: "ETH",
    value: "9.59%",
  },
  {
    name: "BNB",
    value: "4.61%",
  },
  {
    name: "TUSD",
    value: "4.33%",
  },
  {
    name: "Others",
    value: "21.82%",
  },
];
const campaigns2 = [
  {
    name: "US Treasury Bills",
    value: "5%",
  },
  {
    name: "Euro Bonds",
    value: "1%",
  },
  {
    name: "Marketable securities",
    value: "0.5%",
  },
];
const ReservesDashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Ce Fi Proof of Reserves Dashboard" />

      <div className="grid grid-cols-12 gap-5 mb-6">
        <div className="xl:col-span-12 col-span-12">
          <Card bodyClass="py-0 p-6">
            <RecentOrderTable />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mb-6">
        <div className="lg:col-span-4 col-span-12 space-y-5">
          <Card title="Assets Compositions">
            <ul className="divide-y divide-slate-100 dark:divide-slate-700">
              {campaigns.map((item, i) => (
                <li
                  key={i}
                  className="first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase"
                >
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="lg:col-span-8 col-span-12 space-y-5">
          <Card title="Asset worth month on month" className="pb-3">
            <img src="/assets/images/reserves-assets.png" alt="" />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mb-6">
        <div className="lg:col-span-5 col-span-12 space-y-5">
          <Card title="Assets Compositions">
            <ul className="divide-y divide-slate-100 dark:divide-slate-700 h-80">
              {campaigns2.map((item, i) => (
                <li
                  key={i}
                  className="first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase"
                >
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="lg:col-span-7 col-span-12 space-y-5">
          <Card title="P&L" className="pb-3">
            <img src="/assets/images/reserves-pl.png" alt="" />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mb-6">
        <div className="lg:col-span-6 col-span-12 space-y-5">
          <Card title="Token Allocation" className="pb-5">
            <img src="/assets/images/reserves-token.png" alt="" />
          </Card>
        </div>

        <div className="lg:col-span-6 col-span-12 space-y-5">
          <Card title="Cumulative P& L">
            <img src="/assets/images/reserves-cpl.png" alt="" />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mb-6">
        <div className="lg:col-span-9 col-span-12 space-y-5">
          <Card title="Token Allocation" className="pb-5">
            <img src="/assets/images/reserves-protocol.png" alt="" />
          </Card>
        </div>

        <div className="lg:col-span-3 col-span-12 space-y-5">
          <Card>
            <div className="">
              <GroupChart55 />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReservesDashboard;
