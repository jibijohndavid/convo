"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";
import BasicArea from "@/components/partials/chart/appex-chart/BasicArea";
import GroupChart3 from "@/components/partials/widget/chart/group-chart-3";
import GroupChart33 from "@/components/partials/widget/chart/group-chart-33";

const MostSales = dynamic(
  () => import("@/components/partials/widget/most-sales"),
  {
    ssr: false,
  }
);
const DeFinancialDashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="De Fi Financial Health Aave Dashboard" />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="lg:col-span-12 col-span-12 space-y-5">
          <Card>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <GroupChart33 />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-12 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Deposits Trend Graph">
              <div className="legend-ring4">
                <BasicArea height={310} />
              </div>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-12 col-span-12 space-y-5">
          <Card>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <GroupChart33 />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-12 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Borrows Trend Graph">
              <div className="legend-ring4">
                <BasicArea height={310} />
              </div>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-12 col-span-12 space-y-5">
          <Card>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <GroupChart33 />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-12 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Withdrawal Trend Graph">
              <div className="legend-ring4">
                <BasicArea height={310} />
              </div>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-12 col-span-12 space-y-5">
          <Card>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <GroupChart33 />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-12 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Repays Trend Graph">
              <div className="legend-ring4">
                <BasicArea height={310} />
              </div>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-12 col-span-12 space-y-5">
          <Card>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <GroupChart33 />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-12 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Liquidations Trend Graph">
              <div className="legend-ring4">
                <BasicArea height={310} />
              </div>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-12 col-span-12 space-y-5">
          <Card>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <GroupChart33 />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-12 col-span-12">
          <div className="space-y-5 bank-table">
            <Card title="Flash Loans Trend Graph">
              <div className="legend-ring4">
                <BasicArea height={310} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeFinancialDashboard;
