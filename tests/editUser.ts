import { test, expect } from '@playwright/test';

test('delete user', async ({ page }) => {
await page.goto('https://dev.regalis.app/');
await expect(page.getByText ('メールアドレス')).toBeVisible();
await page.getByPlaceholder('メールアドレスを入力する').isVisible();
await page.getByPlaceholder('メールアドレスを入力する').click();
await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
await page.getByRole('button', { name: 'ログイン' }).click();
await page.getByText('マスタメンテナンス').isVisible();
await page.getByText('マスタメンテナンス').click();
await page.getByText('ユーザーアカウント').isVisible();
await page.getByText('ユーザーアカウント').click();
await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
await page.getByRole('cell', { name: '28' }).click();
await page.getByRole('button', { name: '削 除' }).click();
await page.getByText('ユーザーを削除します。よろしいですか？この操作は元に戻せません。').click();
  // await page.getByRole('button', { name: 'はい' }).click();
await page.close();

});