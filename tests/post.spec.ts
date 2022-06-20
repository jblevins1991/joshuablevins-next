import {
    test,
    expect,
    Page
} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.NEXT_HOSTNAME}/blog/test`);
});

test.describe('Home Page Tests', () => {
    test('should contain blog posts', async ({ page }) => {
        // @todo: should check that three elements exist with title, excerpt, and read more link
    });

    test('should navigate to blog article when clicked', async ({ page }) => {
        // @todo: should navigate when link is clicked
    });
});