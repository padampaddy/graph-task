import React from "react";
import "./funnelchart.scss";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const labels = ["Impressions", "Clicks", "Engagement", "Rewards"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 200, 300, 200],
      backgroundColor: ["#5C42E1", "#826EE8", "#A89AEF", "#CEC6F6"],
    },
  ],
};

export default function FunnelChart() {
  const dataSelector = useSelector((state) => state.data);
  return (
    <div className="py-4 px-2 position-relative">
      <h6 className="p-4 pt-0 chart-title position-absolute">Funnel</h6>
      {dataSelector?.barConfig && (
        <Bar className="p-2 py-4"  options={{ ...dataSelector?.barConfig }} data={data} />
      )}
    </div>
  );
}
