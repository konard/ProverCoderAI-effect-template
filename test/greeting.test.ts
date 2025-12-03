import { describe, expect, it } from "vitest";

import { formatGreeting, type GreetingVariant } from "../src/core/greeting.js";

describe("formatGreeting", () => {
	it("returns default Effect greeting for effect variant", () => {
		const variant: GreetingVariant = { kind: "effect" };
		expect(formatGreeting(variant)).toBe("Hello from Effect!");
	});

	it("formats deterministic greeting for named variant", () => {
		const variant: GreetingVariant = { kind: "named", name: "Alice" };
		expect(formatGreeting(variant)).toBe("Hello, Alice!");
	});
});
