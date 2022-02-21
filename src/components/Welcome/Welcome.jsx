import React from "react";
import "./welcome.scss";
import DateSelect from "../DateSelect/DateSelect";

export default function Welcome({ name }) {
  return (
    <>
      <h4>Good Afternoon, {name ?? "Name"}</h4>
      <div className="row profile">
        <div className="col-md-8">
          <h5>
            Welcome back to your dashboard, Let's take a quick look at your
            growth
          </h5>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <DateSelect />
        </div>
      </div>
    </>
  );
}
