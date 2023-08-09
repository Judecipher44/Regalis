import { test, expect } from '@playwright/test';

test('search department by ID', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('部署リスト').click();
  await page.getByRole('button', { name: 'search 検索' }).click();
  await page.getByLabel('求人ID').click();
  await page.getByLabel('求人ID').fill("00036");
  await page.getByRole('button', { name: '検 索' }).click();

//   await page.getByLabel('会社名').click();
//   await page.getByLabel('支店・部署名').click();
//   await page.getByLabel('担当者名').click();
//   await page.getByLabel('所在地').click();
//   await page.getByLabel('メールアドレス').click();
//   await page.getByLabel('業務内容').click();
//   await page.getByRole('button', { name: 'キャンセル' }).click();
await page.close();
});

test('search department by company name', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('部署リスト').click();
  await page.getByRole('button', { name: 'search 検索' }).click();
  await page.getByLabel('会社名').click();
  await page.getByLabel('会社名').fill("Companytest");
  await page.getByRole('button', { name: '検 索' }).click();

//   await page.getByLabel('担当者名').click();
//   await page.getByLabel('所在地').click();
//   await page.getByLabel('メールアドレス').click();
//   await page.getByLabel('業務内容').click();
//   await page.getByRole('button', { name: 'キャンセル' }).click();
await page.close();
});
test('search department by department name', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('部署リスト').click();
  await page.getByRole('button', { name: 'search 検索' }).click();
  await page.getByLabel('支店・部署名').click();
  await page.getByLabel('支店・部署名').fill("Departmenttest");
  await page.getByRole('button', { name: '検 索' }).click();

//   await page.getByLabel('所在地').click();
//   await page.getByLabel('メールアドレス').click();
//   await page.getByLabel('業務内容').click();
//   await page.getByRole('button', { name: 'キャンセル' }).click();
await page.close();
});
test('search department by person in charge', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('部署リスト').click();
  await page.getByRole('button', { name: 'search 検索' }).click();
  await page.getByLabel('担当者名').click();
  await page.getByLabel('担当者名').fill("Test");
await page.getByRole('button', { name: '検 索' }).click();

//   await page.getByLabel('所在地').click();
//   await page.getByLabel('メールアドレス').click();
//   await page.getByLabel('業務内容').click();
//   await page.getByRole('button', { name: 'キャンセル' }).click();
await page.close();
});