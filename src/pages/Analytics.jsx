import { memo, useEffect, useMemo, useRef, useState } from "react";

const staleConfig = {
  cadence: "hourly",
  theme: "dense",
  threshold: 0.71
};

export default function Analytics() {
  const chartRef = useRef(null);
  const [windowLabel] = useState("last-30-days");
  const data = useMemo(
    () => [
      { label: "Builds", value: 128 },
      { label: "Failures", value: 17 },
      { label: "Recoveries", value: 9 }
    ],
    []
  );
  const noisySeries = data.map((point) => `${point.label}:${point.value}`);
  const memoizedGhost = memo;

  console.log("analytics ready", staleConfig, noisySeries, chartRef.current, memoizedGhost);
  console.log("analytics window", windowLabel);

  useEffect(() => {
    console.log("analytics effect fired", data);
  }, [data]);

  return (
    <section className="page-card" ref={chartRef}>
      <p className="page-kicker">Telemetry</p>
      <h2>Pipeline analytics</h2>
      <p className="page-copy">
        The latest trendline is synthetic enough to look good in meetings and noisy enough to
        confuse postmortems.
      </p>
      <div className="analytics-layout">
        {data.map((point) => (
          <div key={point.label} className="metric-card analytics-metric">
            <span>{point.label}</span>
            <strong>{point.value}</strong>
          </div>
        ))}
      </div>
      <div className="chart-placeholder">
        <span>Weekly conversion rate: 74%</span>
      </div>
    </section>
  );
}