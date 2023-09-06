import { test, expect } from '@playwright/test';

test('view company details', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await page.getByPlaceholder('メールアドレスを入力する').click
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await page.getByPlaceholder('パスワードを入力する').click();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('求人企業リスト').click();
  await page.getByText('企業リスト', { exact: true }).click();
  await page.getByRole('cell', { name: '00036' }).click(); //select company you want to view
  await page.getByRole('heading', { name: '企業詳細' }).isVisible();
  await page.getByText('求人ID').isVisible();
  await page.getByText('会社名').isVisible();
  await page.getByText('支店・部署名').isVisible();
  await page.getByText('担当者名').isVisible();
  await page.getByText('所在地').isVisible();
  await page.getByText('電話番号').isVisible();
  await page.getByText('メールアドレス').isVisible();
  await page.getByRole('button', { name: 'plus 部署を追加する' }).click();
  await page.getByRole('heading', { name: '部署登録' }).isVisible();
  await page.getByRole('main').locator('img').click();
  await page.getByRole('button', { name: 'plus 求人票を追加する' }).isVisible();
  await page.getByRole('heading', { name: '求人票登録' }).isVisible();
  await page.getByText('戻る').click();
//   await page.getByRole('button', { name: '編 集' }).click();
//   await page.getByRole('heading', { name: '企業詳細' }).isVisible();
//   await page.getByRole('main').locator('img').click();
//   await page.getByRole('button', { name: '削 除' }).click();
//   await page.getByText('企業情報を削除します。企業に紐づく部署情報、求人票情報も削除されます。よろしいですか？この操作は元に戻せません。').isVisible();
//   await page.getByRole('button', { name: 'いいえ' }).click();
  await page.close();
});