import { Fragment, useEffect, useState } from "react";

export default function Dashboard() {
  const [widgets] = useState([
    { label: "Deployments today", value: 6 },
    { label: "Open incidents", value: 14 },
    { label: "Rollback rate", value: "3.8%" }
  ]);
  const ghostBanner = "release candidate";
  const highlightedWidget = widgets.find((widget) => widget.label === "Open incidents");

  console.log("dashboard render", highlightedWidget, ghostBanner);

  useEffect(() => {
    console.log("dashboard mounted with", widgets.length, "widgets");
  }, [widgets.length]);

  return (
    <section className="page-card">
      <p className="page-kicker">Live status</p>
      <h2>Delivery health at a glance</h2>
      <p className="page-copy">
        The release train is moving, but the signal quality is uneven and the incident queue
        is drifting upward.
      </p>
      <div className="grid-grid">
        {widgets.map((widget) => (
          <article key={widget.label} className="metric-card">
            <span>{widget.label}</span>
            <strong>{widget.value}</strong>
          </article>
        ))}
      </div>
      <Fragment>
        <button type="button" className="primary-button">
          Save snapshot
        </button>
      </Fragment>
    </section>
  );
}