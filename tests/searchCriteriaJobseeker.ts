import { test, expect } from '@playwright/test';

test('edit company', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();

  await page.close();
});