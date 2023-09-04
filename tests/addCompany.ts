import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('企業リスト', { exact: true }).click();
  await page.getByRole('button', { name: 'plus 企業を追加する' }).click();
  await page.getByRole('button', { name: '登 録' }).click();
  await page.getByPlaceholder('会社名を入力する').click();
  await page.getByPlaceholder('会社名を入力する').fill('companytest');
  await page.getByPlaceholder('支店・部署名を入力する').click();
  await page.getByPlaceholder('支店・部署名を入力する').fill('department test');
  await page.getByPlaceholder('担当者名を入力する').click();
  await page.getByPlaceholder('担当者名を入力する').fill('name');
  await page.getByPlaceholder('所在地を入力する').click();
  await page.getByPlaceholder('所在地を入力する').fill('location');
  await page.getByPlaceholder('電話番号を入力する').click();
  await page.getByPlaceholder('電話番号を入力する').fill('telephone number');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('mail address');
  await page.getByPlaceholder('業務内容を入力する').click();
  await page.getByPlaceholder('業務内容を入力する').fill('business content');
  await page.getByPlaceholder('福利厚生を入力する').click();
  await page.getByPlaceholder('福利厚生を入力する').fill('welfare');
  // await page.getByRole('button', { name: '登 録' }).click();
  await page.close();

});

test('cancel add company', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('企業リスト', { exact: true }).click();
  await page.getByRole('button', { name: 'plus 企業を追加する' }).click();
  await page.getByRole('button', { name: '登 録' }).click();
  await page.getByPlaceholder('会社名を入力する').click();
  await page.getByPlaceholder('会社名を入力する').fill('companytest');
  await page.getByPlaceholder('支店・部署名を入力する').click();
  await page.getByPlaceholder('支店・部署名を入力する').fill('department test');
  await page.getByPlaceholder('担当者名を入力する').click();
  await page.getByPlaceholder('担当者名を入力する').fill('name');
  await page.getByPlaceholder('所在地を入力する').click();
  await page.getByPlaceholder('所在地を入力する').fill('location');
  await page.getByPlaceholder('電話番号を入力する').click();
  await page.getByPlaceholder('電話番号を入力する').fill('telephone number');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('mail address');
  await page.getByPlaceholder('業務内容を入力する').click();
  await page.getByPlaceholder('業務内容を入力する').fill('business content');
  await page.getByPlaceholder('福利厚生を入力する').click();
  await page.getByPlaceholder('福利厚生を入力する').fill('welfare');
  await page.getByRole('button', { name: 'キャンセル' }).click();
  await page.close();

  });
  

test.only('no input on required field', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'plus 企業を追加する' }).click();
    await page.getByRole('button', { name: '登 録' }).click();
    await page.getByText('入力必須項目です').isVisible();
    await page.close();
});
