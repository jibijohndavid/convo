"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";
import ImageBlock1 from "@/components/partials/widget/block/image-block-1";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import GroupChart4 from "@/components/partials/widget/chart/group-chart-4";
import GroupChart44 from "@/components/partials/widget/chart/group-chart-44";

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
      <div className="grid grid-cols-12 gap-5 mb-64">
        <div className="2xl:col-span-12 lg:col-span-12 col-span-12">
          <Card bodyClass="p-4">
            <div className="grid md:grid-cols-4 col-span-1 gap-4">
              <GroupChart1 />
            </div>
          </Card>
        </div>
        <div className="xl:col-span-12 col-span-12">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            <GroupChart4 />
            <GroupChart44 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservesDashboard;
