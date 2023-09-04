import { test, expect } from '@playwright/test';

test('userlist', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await expect(page.getByText ('メールアドレス')).toBeVisible();
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByText ('マスタメンテナンス')).toBeVisible();
  await page.getByText('マスタメンテナンス').click();
  await page.getByText('ユーザーアカウント').click();
  await expect(page).toHaveURL(/.*user-management/);
  await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
  await page.getByPlaceholder('名前').isVisible();
  await page.getByPlaceholder('メールアドレス').isVisible();
  await page.locator('#rc_select_3').isVisible();
  await page.getByPlaceholder('所属').isVisible();
  await page.getByRole('button', { name: 'plus ユーザー作成' }).isVisible();
  await page.getByRole('button', { name: 'search 検索' }).isVisible();
  await page.getByText('1-10 of 15 items').isVisible();
  await page.getByText('10 / page').isVisible();
  await page.getByText('ID No').isVisible();
  await page.getByText('名前').isVisible();
  await page.getByText('メールアドレス').isVisible();
  await page.getByText('アカウント権限').isVisible();
  await page.getByText('所属').isVisible();
  await page.getByRole('button', { name: 'plus ユーザー作成' }).isVisible();
  await page.close();
});