import { test, expect } from '@playwright/test';


test.only('search user name', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await expect(page.getByText ('メールアドレス')).toBeVisible();
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    // await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.getByText ('マスタメンテナンス')).toBeVisible();
    await page.getByText('マスタメンテナンス').click();
    await page.getByText('ユーザーアカウント').click();
    // await expect(page).toHaveURL(/.*user-management/);
    await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
    await page.getByPlaceholder('名前').isVisible();
    await page.getByPlaceholder('名前').fill('test');
    await page.getByRole('button', { name: 'search 検索' }).click();
    await expect(page
      .getByRole('listitem'))
      .toHaveText(['apple', 'banana', 'orange']);
  
      await page.close();

    });