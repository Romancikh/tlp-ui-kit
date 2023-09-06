import { expect, test } from "@playwright/test";

test("Avatar screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?id=avatar--default&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("default.png");
});
