import { expect, test } from "@playwright/test";

test("Menu closed screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=menu--default&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("closed.png");
});

test("Menu opened screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=menu--default&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  await page.getByRole("button").click();
  await page.waitForTimeout(2000);
  expect(await page.screenshot()).toMatchSnapshot("opened.png");
});
