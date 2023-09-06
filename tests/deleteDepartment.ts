import { test, expect } from '@playwright/test';

test('delete department', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByRole('menuitem', { name: '部署リスト' }).getByText('部署リスト').click();
  await page.getByRole('cell', { name: '00019' }).click();
  await page.getByRole('button', { name: '削 除' }).click();
  await page.getByText('企業情報を削除します。企業に紐づく部署情報、求人票情報も削除されます。よろしいですか？この操作は元に戻せません。').isVisible();
//   await page.getByRole('button', { name: 'はい' }).click();
  await page.close();
});
test.only(' cancel delete department', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByRole('menuitem', { name: '部署リスト' }).getByText('部署リスト').click();
    await page.getByRole('cell', { name: '00019' }).click();
    await page.getByRole('button', { name: '削 除' }).click();
    await page.getByText('企業情報を削除します。企業に紐づく部署情報、求人票情報も削除されます。よろしいですか？この操作は元に戻せません。').isVisible();
    await page.getByRole('button', { name: 'いいえ' }).click();  
    await page.close();
  });