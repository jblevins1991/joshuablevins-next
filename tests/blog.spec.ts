import {
    test,
    expect,
    Page
} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.NEXT_HOSTNAME}/blog`);
});

test.describe('Home Page Tests', () => {
    test('should contain blog posts', ({ page }) => {
        // @todo: should check that three elements exist with title, excerpt, and read more link
        const metaDescription = page.locator('');
        const canonicalUrl = page.locator('');

        expect(page).toHaveTitle('Blog');
    });

    test('should navigate to blog article when clicked', ({ page }) => {
        // @todo: should navigate when link is clicked
    });
});