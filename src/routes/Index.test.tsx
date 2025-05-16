import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Index } from "./Index.tsx";

describe("Index", () => {
  test("renders", () => {
    render(<Index />);
    expect(screen.getByText("Learn React")).toBeDefined();
  });
});
