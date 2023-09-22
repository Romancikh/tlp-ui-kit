import { expect, test } from "@playwright/test";

test("Select closed screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=select--default&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("closed.png");
});

test("Select opened screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=select--default&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  await page.getByText("Option 1").click();
  await page.waitForTimeout(2000);
  expect(await page.screenshot()).toMatchSnapshot("opened.png");
});
