import { test, expect } from '@playwright/test';


test.only('dashboard', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await expect(page.getByText ('メールアドレス')).toBeVisible();
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki1ss44@gmail.com');
    await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await expect(page).toHaveURL(/.*dashboard/);
    await page.getByRole('heading', { name: 'Dashboard' }).click();
    await page.close();

    });