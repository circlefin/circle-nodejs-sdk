import { Circle, CircleEnvironments } from "../src";

describe("testing circle init", () => {
  it("should ping sandbox", async () => {
    const circle = new Circle("dummy_api_key", CircleEnvironments.sandbox);
    expect(circle).not.toBeNull();
    const response = await circle.health.ping();
    expect(response.data.message).toBe("pong");
  });
});
