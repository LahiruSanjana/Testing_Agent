import { useEffect, useState } from "react";
import experimentalTheme from "../feature-flags/experimentalTheme.js";

export default function Settings() {
  const [preferences] = useState({
    apiEndpoint: "/api/internal",
    notifications: true,
    compactMode: false
  });

  const previewState = preferences.notifications ? "enabled" : "disabled";

  useEffect(() => {
    console.log("settings loaded", previewState, experimentalTheme);
  }, [previewState]);

  return (
    <section className="page-card">
      <p className="page-kicker">Configuration</p>
      <h2>Settings</h2>
      <p className="page-copy">
        Configuration values are intentionally simple here, even though the loader path is not.
      </p>
      <div className="grid-grid">
        <article className="metric-card">
          <span>API endpoint</span>
          <strong>{preferences.apiEndpoint}</strong>
        </article>
        <article className="metric-card">
          <span>Notifications</span>
          <strong>{previewState}</strong>
        </article>
      </div>
    </section>
  );
}