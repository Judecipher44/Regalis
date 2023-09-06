import { test, expect } from '@playwright/test';

test('department list', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('部署リスト').click();
  await page.getByRole('heading', { name: '部署リスト' }).isVisible();
  await page.getByText('営業先ID').isVisible();
  await page.getByRole('button', { name: 'search 検索' }).isVisible();
  await page.getByRole('button', { name: 'plus 部署を追加する' }).isVisible();
  await page.getByText('10 / page').isVisible();
  await page.close();

});