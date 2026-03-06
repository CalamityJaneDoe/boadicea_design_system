import { describe, it, expect } from "vitest";
import { cn } from "../classNames";

describe("cn util", () => {
  it("concatenates classes correctly", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
    expect(cn("foo", undefined, "baz")).toBe("foo baz");
    expect(cn("", "bar")).toBe("bar");
    expect(cn("foo", false && "bar")).toBe("foo");
    expect(cn()).toBe("");
  });
});
