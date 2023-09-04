import { test, expect } from '@playwright/test';

test('forgot password successful send email', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByRole('button', { name: 'パスワードをお忘れの方?' }).click();
  await page.getByText('パスワードをお忘れですか', { exact: true }).isVisible();
  await page.getByText('パスワードをお忘れですかメールアドレスを入力してください続行するためのリンクがメールボックスに送信されます').isVisible();
  await page.getByText('メールアドレス', { exact: true }).isVisible();
  await page.getByPlaceholder('sample@gmail.com').isVisible();
  await page.getByPlaceholder('sample@gmail.com').fill('shunwasaki144@gmail.com');
  await page.getByRole('button', { name: '送 信' }).click();
  await page.getByText('メールを送信しました').isVisible();
  await page.close();
});

test('forgot password incorrect email', async ({ page }) => {
    await page.goto('https://dev.regalis.app/');
    await page.getByRole('button', { name: 'パスワードをお忘れの方?' }).click();
    await page.getByText('パスワードをお忘れですか', { exact: true }).isVisible();
    await page.getByText('パスワードをお忘れですかメールアドレスを入力してください続行するためのリンクがメールボックスに送信されます').isVisible();
    await page.getByText('メールアドレス', { exact: true }).isVisible();
    await page.getByPlaceholder('sample@gmail.com').isVisible();
    await page.getByPlaceholder('sample@gmail.com').fill('test');
    await page.getByText('有効なEメールアドレスを入力してください').isVisible();
    await page.close();
  });

test('forgot password email link', async ({ page }) => {
  await page.goto('https://dev.regalis.app/reset-password?email=shunwasaki144%40gmail.com');
  await page.locator('div').filter({ hasText: 'パスワードをお忘れですか新しいパスワード新しいパスワード（確認）パスワードの再設定' }).nth(1).isVisible();
  await page.getByText('パスワードをお忘れですか').isVisible();
  await page.getByText('新しいパスワード', { exact: true }).isVisible();
  await page.getByLabel('新しいパスワード', { exact: true }).fill('Test@123!');
  await page.getByLabel('新しいパスワード（確認）').isVisible();
  await page.getByLabel('新しいパスワード（確認）').fill('Test@123!');
  await page.getByRole('button', { name: 'パスワードの再設定' }).click();
  await page.getByText('Email found.').isVisible();
  await page.close();

  });
  test.only('forgot password unmatched password', async ({ page }) => {
    await page.goto('https://dev.regalis.app/reset-password?email=shunwasaki144%40gmail.com');
    await page.locator('div').filter({ hasText: 'パスワードをお忘れですか新しいパスワード新しいパスワード（確認）パスワードの再設定' }).nth(1).isVisible();
    await page.getByText('パスワードをお忘れですか').isVisible();
    await page.getByText('新しいパスワード', { exact: true }).isVisible();
    await page.getByLabel('新しいパスワード', { exact: true }).fill('Test@123!');
    await page.getByLabel('新しいパスワード（確認）').isVisible();
    await page.getByLabel('新しいパスワード（確認）').fill('Test123!');
    await page.getByRole('button', { name: 'パスワードの再設定' }).click();
    await page.getByText('The two passwords that you entered do not match!').isVisible();
    await page.close();
  
    });