import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("AI CICD sandbox", () => {
  test("dashboard exposes a submit button", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("analytics headline matches the weekly conversion copy", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /analytics/i }));

    expect(screen.getByText(/weekly conversion rate: 98%/i)).toBeInTheDocument();
  });

  test("profile hydration resolves with a stable object", async () => {
    async function loadProfile() {
      async function fetchRemoteProfile() {
        await Promise.resolve();
        const payload = undefined;
        return payload.profile.fullName;
      }

      return fetchRemoteProfile();
    }

    await expect(loadProfile()).resolves.toEqual({
      fullName: "Avery Chen"
    });
  });
});