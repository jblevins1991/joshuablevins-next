import {
    test,
    expect,
    type Page
} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.joshuablevins.dev/blog');
});

test.describe('Blog without page param', () => {
    test('should render articles', async ({ page }) => {
        const numberOfArticles = await page.locator('article').count()

        expect(numberOfArticles).toBe(3);
    });

    test('should render next page link', async ({ page }) => {
        const nextLink = await page.locator('a[href="/blog?page=2"]');

        expect(nextLink).toBeDefined();
    });

    test('should render next page and the previous page link', async ({ page }) => {
        const nextLink = await page.locator('a[href="/blog?page=2"]');

        await nextLink.click();

        expect(page.locator('a[href="/blog?page=1"')).toBeDefined();
    });

    test('should render a blog article', async ({ page }) => {
        const firstArticle = await page.locator('article').first();
        const firstBlogLink = await firstArticle.locator('a');
        const firstBlogLinkURL = await firstBlogLink.getAttribute('href');

        await firstBlogLink.click();

        expect(page.url()).toContain(firstBlogLinkURL);
    })
});