import {
    test,
    expect,
    Page
} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.NEXT_HOSTNAME}/`);
});

test.describe('Home Page Tests', () => {
    test('should contain title, description, and canonical-url', ({ page }) => {
        const metaDescription = page.locator('');
        const canonicalUrl = page.locator('');

        expect(page).toHaveTitle('Home');
    });

    test('should contain blog posts', async ({ page }) => {
        // @todo: should check that three elements exist with title, excerpt, and read more link
    });

    test('should navigate to blog article when clicked', async ({ page }) => {
        // @todo: should navigate when link is clicked
    });
});