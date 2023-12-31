import { test, expect } from '@playwright/test';

test('add department', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('部署リスト').click();
  await page.getByRole('button', { name: 'plus 部署を追加する' }).click();
  await page.locator('.ant-select-selection-item').click();
  await page.getByText('Company Tesst').click();
  await page.getByPlaceholder('支店・部署名を入力する').click();
  await page.getByPlaceholder('支店・部署名を入力する').fill('test');
  await page.getByPlaceholder('担当者名を入力する').click();
  await page.getByPlaceholder('担当者名を入力する').fill('test');
  await page.getByPlaceholder('所在地を入力する').click();
  await page.getByPlaceholder('所在地を入力する').fill('test');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('test');
  await page.getByPlaceholder('業務内容を入力する').click();
  await page.getByPlaceholder('業務内容を入力する').fill('test');
  // await page.getByRole('button', { name: '登 録' }).click();
  await page.close();

});
test.only('cancel add department', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('部署リスト').click();
  await page.getByRole('button', { name: 'plus 部署を追加する' }).click();
  await page.locator('.ant-select-selection-item').click();
  await page.getByText('Company Tesst').click();
  await page.getByPlaceholder('支店・部署名を入力する').click();
  await page.getByPlaceholder('支店・部署名を入力する').fill('test');
  await page.getByPlaceholder('担当者名を入力する').click();
  await page.getByPlaceholder('担当者名を入力する').fill('test');
  await page.getByPlaceholder('所在地を入力する').click();
  await page.getByPlaceholder('所在地を入力する').fill('test');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('test');
  await page.getByPlaceholder('業務内容を入力する').click();
  await page.getByPlaceholder('業務内容を入力する').fill('test');
  await page.getByRole('button', { name: 'キャンセル' }).click();
  await page.close();
});
test('add department no input on required fields', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('部署リスト').click();
  await page.getByRole('button', { name: 'plus 部署を追加する' }).click();
  await page.getByRole('button', { name: '登 録' }).click();
  await page.locator('#company_name_help').getByText('入力必須項目です').isVisible();
  await page.locator('#department_name_help').getByText('入力必須項目です').isVisible();
  await page.locator('#in_charge_help').getByText('入力必須項目です').isVisible();
  await page.locator('#address_help').getByText('入力必須項目です').isVisible();  
  await page.close();

});
