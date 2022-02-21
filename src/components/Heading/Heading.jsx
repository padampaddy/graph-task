import React from "react";
import "./heading.scss";
export default function Heading({ title }) {
  return <div className="heading">{title ?? "Overview"}</div>;
}
