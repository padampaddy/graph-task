import React from "react";
import "./linechart.scss";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      label: "New Customers",
      data: [100, 200, 400, 200, 100, 240, 130],
      borderColor: "#2C00FB",
      backgroundColor: "#2C00FB",
    },
    {
      label: "Purchases",
      data: [200, 100, 200, 0, 123, 344, 200],
      borderColor: "#B5F0A0",
      backgroundColor: "#B5F0A0",
    },
  ],
};

export default function LineChart() {
  const dataSelector = useSelector((state) => state.data);
  return (
    <div className="p-4">
      <h6 className="p-4 pt-0 chart-title">Growth</h6>
      {dataSelector?.lineConfig && (
        <Line options={{ ...dataSelector?.lineConfig }} data={data} />
      )}
    </div>
  );
}
