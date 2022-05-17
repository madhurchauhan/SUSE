import { test, expect } from '@playwright/test';

test('Check if the main window title is correct', async ({ page }) => {
  await page.goto('http://localhost:1212/');
  const title = page.locator('title');
  await expect(title).toHaveText('Hello Electron React!');
});

test('Check if the main window title is correct', async ({ page }) => {
  await page.goto('http://localhost:1212/');
  const title = page.locator('title');
  await expect(title).toHaveText('Hello Electron React!');
});