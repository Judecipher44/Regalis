
import { test, expect } from '@playwright/test';

test.only('search by ID', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('企業リスト', { exact: true }).click();
  await page.getByRole('button', { name: 'search 検索' }).click();
  await page.getByLabel('求人ID').click();
  await page.getByLabel('求人ID').fill('00016');
  await page.getByRole('button', { name: '検 索' }).click();
  await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
  await page.close();

});
test.only('search by Company name', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'search 検索' }).click();
    await page.getByLabel('会社名').click();
    await page.getByLabel('会社名').fill('test');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
    await page.close();
  });
  test.only('search by Department name', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'search 検索' }).click();
    await page.getByLabel('支店・部署名').click();
    await page.getByLabel('支店・部署名').fill('test');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
    await page.close();
  });
  test.only('search by name', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'search 検索' }).click();
    await page.getByLabel('担当者名').click();
    await page.getByLabel('担当者名').fill('test');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
    await page.close();
  });
  test.only('search by location', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'search 検索' }).click();
    await page.getByLabel('所在地').click();
    await page.getByLabel('所在地').fill('test');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
    await page.close();
  });
  test.only('search by telephone', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'search 検索' }).click();
    await page.getByLabel('電話番号').click();
    await page.getByLabel('電話番号').fill('09305479693');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
    await page.close();
  });
  test.only('search by email', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'search 検索' }).click();
   await page.getByLabel('メールアドレス').click();
   await page.getByLabel('メールアドレス').fill('test@gmail.com');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
    await page.close();
  });
  test.only('search by role', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'search 検索' }).click();
   await page.getByLabel('業務内容').click();
   await page.getByLabel('業務内容').fill('general');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
    await page.close();
  });
  test.only('search by role', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
    await page.getByPlaceholder('パスワードを入力する').click();
    await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.getByText('求人企業リスト').click();
    await page.getByText('企業リスト', { exact: true }).click();
    await page.getByRole('button', { name: 'search 検索' }).click();
   await page.getByLabel('福利厚生').click();
   await page.getByLabel('福利厚生').fill('test');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.locator('div').filter({ hasText: /^フィルタリング中：該当1件$/ }).isVisible();
    await page.close();
  });