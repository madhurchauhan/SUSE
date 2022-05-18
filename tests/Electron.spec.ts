import { test, expect } from '@playwright/test';

test('Check if the main window title is correct', async ({ page }) => {
  // Go goto will validate  - if main app window opens up
  await page.goto('http://localhost:1212/');
  const title = page.locator('title');
  // following expect statement will validate main window title is correct
  await expect(title).toHaveText('Hello Electron React!');
 });