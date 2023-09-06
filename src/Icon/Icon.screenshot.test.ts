import { expect, test } from "@playwright/test";

test("AddIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--add-icon&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("add-icon.png");
});

test("Colored AddIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--colored&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("colored.png");
});

test("AutoStoriesIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--auto-stories-icon&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("auto-stories-icon.png");
});

test("CancelOutlinedIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--cancel-outlined-icon&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("cancel-outlined-icon.png");
});

test("CheckCircleOutlineIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--check-circle-outline-icon&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot(
    "check-circle-outline-icon.png"
  );
});

test("DeleteOutlineIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--delete-outline-icon&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("delete-outline-icon.png");
});

test("EditIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--edit-icon&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("edit-icon.png");
});

test("MenuIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--menu-icon&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("menu-icon.png");
});

test("NavigateBeforeIcon screenshot test", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?args=&id=icon--navigate-before-icon&viewMode=story"
  );
  await page.waitForSelector("#storybook-root");
  expect(await page.screenshot()).toMatchSnapshot("navigate-before-icon.png");
});
