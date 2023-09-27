import { expect, test } from "@playwright/test";

test("Contained button screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=button--contained&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("contained.png");
});

test("Outlined button screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=button--outlined&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("outlined.png");
});

test("Disabled button screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=button--disabled&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("disabled.png");
});

test("Success button screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=button--success&viewMode=story",
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("success.png");
});
