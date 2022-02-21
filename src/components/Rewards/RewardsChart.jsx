import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Legend from "./Legend";
import coupons from "../../assets/icons/coupons.svg";
import credits from "../../assets/icons/credits.svg";
import samples from "../../assets/icons/samples.svg";
export const data = {
  labels: ["Rewards"],
  datasets: [
    {
      label: ["Coupons", "Samples", "Credits"],
      data: [140, 20, 7],
      backgroundColor: ["#1DD6FC", "#017CF8", "#5C42E1"],
      borderColor: ["#1DD6FC", "#017CF8", "#5C42E1"],
      borderWidth: 0,
      borderRadius: 20,
    },
  ],
};

export default function RewardsChart() {
  const dataSelector = useSelector((state) => state.data);
  return (
    <div className="py-4 px-2 position-relative">
      <h6 className="p-4 pt-0 chart-title position-absolute">Rewards</h6>
      {dataSelector?.doughnutConfig && (
        // <Doughnut options={{ ...dataSelector?.barConfig }} data={data} />
        <div className="position-relative">
          <Doughnut
            className="mt-3 p-3"
            options={{ ...dataSelector.doughnutConfig }}
            data={data}
          />
          <div className="inner-doughnut">
            <h1>167</h1>
            <p>Rewards</p>
          </div>
        </div>
      )}
      <div className="legend">
        <Legend icon={coupons} label="Coupons" value={140} />
        <Legend icon={samples} label="Samples" value={20} />
        <Legend icon={credits} label="Credits" value={7} />
      </div>
    </div>
  );
}
