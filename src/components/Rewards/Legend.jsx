import React from "react";

export default function Legend({ icon, label, value }) {
  return (
    <div className="d-flex m-2 justify-content-between align-items-center">
      <img src={icon} />
      <div style={{ fontSize: 12 }} className="flex-grow-1">
        {label}
      </div>
      <div>{value}</div>
    </div>
  );
}
