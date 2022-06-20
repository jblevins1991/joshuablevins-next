import {
    test,
    expect,
    Page
} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.NEXT_HOSTNAME}/about`);
});

test.describe('About Page Tests', () => {
    test('should', async ({ page }) => {
        // @todo: should check that three elements exist with title, excerpt, and read more link
    });
});