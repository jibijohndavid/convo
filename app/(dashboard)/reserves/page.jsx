"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";
import GroupChart5 from "@/components/partials/widget/chart/group-chart5";
import GroupChart2 from "@/components/partials/widget/chart/group-chart-2";
import ImageBlock2 from "@/components/partials/widget/block/image-block-2";
import TeamTable from "@/components/partials/table/team-table";
import OrderChart from "@/components/partials/widget/chart/order-chart";
import ProfitChart from "@/components/partials/widget/chart/profit-chart";
import EarningChart from "@/components/partials/widget/chart/earning-chart";
import TransactionsTable from "@/components/partials/table/transactions";
import HistoryChart from "@/components/partials/widget/chart/history-chart";

const MostSales = dynamic(
  () => import("@/components/partials/widget/most-sales"),
  {
    ssr: false,
  }
);
const ReservesDashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Ce Fi Proof of Reserves Dashboard" />
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
          <ImageBlock2 />
        </div>
        <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <GroupChart2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservesDashboard;
