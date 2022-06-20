import {
    test,
    expect,
    Page
} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.joshuablevins.dev');
});

test.describe('Home Page Tests', () => {
    test('should contain blog posts', async ({ page }) => {
        // @todo: should check that three elements exist with title, excerpt, and read more link
    });

    test('should navigate to blog article when clicked', async ({ page }) => {
        // @todo: should navigate when link is clicked
    });
});