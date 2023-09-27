import { expect, test } from "@playwright/test";

test("Box screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=box--default&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("default.png");
});
