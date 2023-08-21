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
const Dashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Country-Level Dashboard (24 Hours)" />
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
      <Card title="Transactions">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 place-content-center">
          <GroupChart5 />
        </div>
      </Card>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="2xl:col-span-8 lg:col-span-7 col-span-12">
          <Card title="Top 6 High Value Transactions" noborder>
            <TeamTable />
          </Card>
        </div>
        <div className="2xl:col-span-4 lg:col-span-5 col-span-12">
          <Card>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <OrderChart />
              <ProfitChart />
              <div className="md:col-span-2">
                <EarningChart />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="lg:col-span-6 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Lending/Borrowing/Staking (Active Trackers)">
              <div className="legend-ring4">
                <HistoryChart />
              </div>
            </Card>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Deposits (Active Trackers)">
              <div className="legend-ring4">
                <HistoryChart />
              </div>
            </Card>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Mining (Active Trackers)">
              <div className="legend-ring4">
                <HistoryChart />
              </div>
            </Card>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="OTC Derivatives (Active Trackers)">
              <div className="legend-ring4">
                <HistoryChart />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
