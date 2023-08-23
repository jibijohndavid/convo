"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";
import GroupChart5 from "@/components/partials/widget/chart/group-chart5";
import GroupChart2 from "@/components/partials/widget/chart/group-chart-2";
import ImageBlock2 from "@/components/partials/widget/block/image-block-2";
import TeamTable from "@/components/partials/table/team-table";
import EarningChart from "@/components/partials/widget/chart/earning-chart";
import HistoryChart from "@/components/partials/widget/chart/history-chart";
import ImageBlock3 from "@/components/partials/widget/block/image-block-3";
import GroupChart22 from "@/components/partials/widget/chart/group-chart-22";
import EarningChart2 from "@/components/partials/widget/chart/earning-chart2";
import HistoryChart2 from "@/components/partials/widget/chart/history-chart2";
import Marquee from "react-fast-marquee";
import RadarChart from "@/components/partials/widget/chart/radar-chart";
import RadarChart2 from "@/components/partials/widget/chart/radar-chart2";
import RadarChart3 from "@/components/partials/widget/chart/radar-chart3";
import RadarChart4 from "@/components/partials/widget/chart/radar-chart4";
import RecentActivity from "@/components/partials/widget/recent-activity";
import RadarChart5 from "@/components/partials/widget/chart/radar-chart5";
import RadarChart6 from "@/components/partials/widget/chart/radar-chart6";
import RecentActivity2 from "@/components/partials/widget/recent-activity2";

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
      <HomeBredCurbs title="Summary Dashboard" />
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="col-span-8">
          <p className="text-xl px-4 py-6 dark:bg-slate-800 bg-white rounded-md mb-3">
            Risk Meter
          </p>

          <div className="grid grid-cols-3 gap-5 mb-5">
            <Card bodyClass="pt-3 py-8">
              <RadarChart />
              <p className="text-center text-sm">
                Financial Crime & AML/CFT Risk
              </p>
            </Card>
            <Card bodyClass="pt-3 py-8">
              <RadarChart2 />
              <p className="text-center text-sm">Consumer Protection Risk</p>
            </Card>
            <Card bodyClass="pt-3 py-8">
              <RadarChart3 />
              <p className="text-center text-sm">Prudential Risk</p>
            </Card>
            <Card bodyClass="pt-3 py-8">
              <RadarChart4 />
              <p className="text-center text-sm">Financial Stability Risk</p>
            </Card>
            <Card bodyClass="pt-3 py-8">
              <RadarChart5 />
              <p className="text-center text-sm">Market Integrity Risk</p>
            </Card>
            <Card bodyClass="pt-3 py-8">
              <RadarChart6 />
              <p className="text-center text-sm">Cybersecurity Risk</p>
            </Card>
          </div>
        </div>
        <div className="col-span-4">
          <Card
            title="CeFi: Market Trends & Major Incidents (24 hrs)"
            className="mb-6"
            titleClass="text-sm"
          >
            <RecentActivity />
          </Card>
          <Card
            title="DeFi: Market Trends & Major Incidents (24 hrs)"
            titleClass="text-sm"
          >
            <RecentActivity2 />
          </Card>
        </div>
      </div>

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
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
          <ImageBlock3 />
        </div>
        <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <GroupChart22 />
          </div>
        </div>
      </div>
      <Card title="Transactions">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 place-content-center">
          <GroupChart5 />
        </div>
      </Card>

      <Card className="mt-6">
        <Marquee pauseOnHover>
          <p className="mx-4">
            High frequency large-value transactions:{" "}
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 45
            </span>
            ,&nbsp;
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 53
            </span>
            ,&nbsp;
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 68
            </span>
          </p>
          <p>|</p>
          <p className="mx-4">High-value transactions customer wallets</p>
          <p>|</p>

          <p className="mx-4">
            Suspicious high-volume on-chain activities/wallets:{" "}
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 5
            </span>
            ,&nbsp;
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 30
            </span>
            ,&nbsp;
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 61
            </span>
          </p>
          <p>|</p>

          <p className="mx-4">
            Suspicious high-volume cross-chain activities/wallets:{" "}
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 50
            </span>
            ,&nbsp;
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 3
            </span>
            ,&nbsp;
            <span className="hover:underline cursor-pointer text-blue-500">
              Transaction 82
            </span>
          </p>
        </Marquee>
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
              <div className="md:col-span-2">
                <EarningChart />
              </div>

              <div className="md:col-span-2">
                <EarningChart2 />
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
                <HistoryChart2 />
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
