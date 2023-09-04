import { test, expect } from '@playwright/test';

test('company list', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByRole('menuitem', { name: 'profile 求人企業リスト' }).isVisible();
  await page.getByRole('menuitem', { name: 'profile 求人企業リスト' }).click();
  await page.getByText('企業リスト', { exact: true }).click();
  await page.getByRole('heading', { name: '企業リスト' }).isVisible();
  await page.getByRole('button', { name: 'search 検索' }).isVisible();
  await page.getByRole('button', { name: 'plus 企業を追加する' }).click();
  await page.getByRole('main').click();
  await page.getByText('企業名').isVisible();
  await page.getByText('支店・部署名').isVisible();
  await page.getByRole('columnheader', { name: '担当者名' }).locator('div').isVisible();
  await page.getByText('所在地').isVisible();
  await page.getByText('電話番号').isVisible();
  await page.getByText('メールアドレス').isVisible();
  await page.getByText('1-9 of 9 items').isVisible();
  await page.close();
});