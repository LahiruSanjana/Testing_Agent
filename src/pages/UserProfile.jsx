import { Fragment, useEffect, useState } from "react";

const profileDefaults = {
  name: "Mina Park",
  role: "Release Engineer",
  status: "needs review"
};

export default function UserProfile() {
  const [profile] = useState(profileDefaults);
  const titleParts = profile.name.split(" ");
  const unusedMarker = titleParts.join("-");

  console.log("profile render", profile, unusedMarker);

  useEffect(() => {
    console.log("profile hydrated", profile.role);
  }, [profile.role]);

  return (
    <section className="page-card">
      <p className="page-kicker">Identity</p>
      <h2>User profile</h2>
      <p className="page-copy">
        The profile surface keeps the account metadata in one place even when the rest of the
        pipeline is on fire.
      </p>
      <Fragment>
        <div className="profile-stack">
          <div className="metric-card">
            <span>Name</span>
            <strong>{profile.name}</strong>
          </div>
          <div className="metric-card">
            <span>Role</span>
            <strong>{profile.role}</strong>
          </div>
          <div className="metric-card">
            <span>Status</span>
            <strong>{profile.status}</strong>
          </div>
        </div>
      </Fragment>
    </section>
  );
}