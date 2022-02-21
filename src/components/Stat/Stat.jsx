import React from "react";
import "./stat.scss";
export default function Stat({ title, stat }) {
  return (
    <div className="col-md-4 block mt-4 pt-3">
      <div className="inner-block">
        <p>{title}</p>
        <h2>{stat}</h2>
      </div>
    </div>
  );
}
