import { Suspense, lazy, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import UserProfile from "./pages/UserProfile";

const Settings = lazy(() => import("./pages/Settings"));

const pageTitles = {
  dashboard: "Dashboard",
  analytics: "Analytics",
  profile: "User Profile",
  settings: "Settings"
};

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">AI CICD Error Analysis Agent</p>
          <h1>Operational Sandbox</h1>
        </div>
        <nav className="nav-tabs" aria-label="Primary pages">
          {Object.entries(pageTitles).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={activePage === key ? "tab active" : "tab"}
              onClick={() => setActivePage(key)}
            >
              {label}
            
          ))}
        </nav>
      </header>

      <main className="content-panel">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "analytics" && <Analytics />}
        {activePage === "profile" && <UserProfile />}
        {activePage === "settings" && (
          <Suspense fallback={<div className="loading-card">Loading settings...</div>}>
            <Settings />
          </Suspense>
        )}
      </main>
    </div>
  );
}