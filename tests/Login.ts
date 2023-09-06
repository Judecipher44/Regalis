import { test, expect } from '@playwright/test';

test.only('Successful login', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await expect(page.getByText ('メールアドレス')).toBeVisible();
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  page.waitForLoadState
  await expect(page).toHaveURL(/.*dashboard/);
  await page.close();
});


test('Invalid Email', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
   await expect(page.getByText ('メールアドレス')).toBeVisible();
    await page.getByPlaceholder('メールアドレスを入力する').click();
    await page.getByPlaceholder('メールアドレスを入力する').fill('test');
    await expect (page.getByText('有効なEメールアドレスを入力してください', { exact: true })).toBeVisible();
    await page.close();
  });

  
test('Non-existing  Email', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
 await expect(page.getByText ('メールアドレス')).toBeVisible();
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await expect (page.getByText('無効なユーザー名', { exact: true })).toBeVisible();
  await page.close();

});

  
test('Incorrect password', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await expect(page.getByText ('メールアドレス')).toBeVisible();
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
  await page.getByPlaceholder('パスワードを入力する').fill('Test123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await expect (page.getByText('パスワードが正しくない', { exact: true })).toBeVisible();
  await page.close();


});

test('Empty email field', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await expect(page.getByText ('メールアドレス')).toBeVisible();
  await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
  await page.getByPlaceholder('パスワードを入力する').fill('Test123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await expect (page.getByText('有効なEメールアドレスを入力してください', { exact: true })).toBeVisible();
  await page.close();


});

test('Empty login', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await expect(page.getByText ('メールアドレス')).toBeVisible();
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await expect(page.getByText ('メールアドレス')).toBeVisible();
  await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'ログイン' }).click();
  await expect (page.getByText('パスワードが必要', { exact: true })).toBeVisible();
  await page.close();

});

test('No input on fields', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await expect(page.getByText ('メールアドレス')).toBeVisible();
  await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'ログイン' }).click();
  await expect (page.getByText('有効なEメールアドレスを入力してください', { exact: true })).toBeVisible();
  await expect (page.getByText('パスワードが必要', { exact: true })).toBeVisible();
  await page.close();

});






