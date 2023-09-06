import { expect, test } from "@playwright/test";

test("Typography screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=typography--h-1&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("default.png");
});

test("Colored Typography screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=typography--colored&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("colored.png");
});
