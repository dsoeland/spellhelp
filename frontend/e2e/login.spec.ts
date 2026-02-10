import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Authentication Flow with POM', () => {
  test('should login and redirect to dashboard', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('email@gmail.com', '1234');

    await expect(page).toHaveURL(/.*dashboard/);

    const authToken = await page.evaluate(() => localStorage.getItem('auth_token'));
    expect(authToken).not.toBeNull();
  })
})


