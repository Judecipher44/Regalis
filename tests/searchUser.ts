

import { test, expect } from '@playwright/test';

test('search user by name', async ({ page }) => {
  await page.goto('https://dev.regalis.app/');
  await expect(page.getByText ('メールアドレス')).toBeVisible();
  await page.getByPlaceholder('メールアドレスを入力する').click();
  await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
  await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
  await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('マスタメンテナンス').isVisible();
  await page.getByText('マスタメンテナンス').click();
  await page.getByText('ユーザーアカウント').isVisible();
  await page.getByText('ユーザーアカウント').click();
  await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
  await page.getByPlaceholder('名前').isVisible();
  await page.getByPlaceholder('名前').click();
  await page.getByPlaceholder('名前').fill('test');
  await page.getByRole('button', { name: 'search 検索' }).click();
  await page.close();



  });

    test('search user by email address', async ({ page }) => {
      await page.goto('https://dev.regalis.app/');
      await expect(page.getByText ('メールアドレス')).toBeVisible();
      await page.getByPlaceholder('メールアドレスを入力する').click();
      await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
      await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
      await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
      await page.getByRole('button', { name: 'ログイン' }).click();
      await page.getByText('マスタメンテナンス').isVisible();
      await page.getByText('マスタメンテナンス').click();
      await page.getByText('ユーザーアカウント').isVisible();
      await page.getByText('ユーザーアカウント').click();
      await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
      await page.getByPlaceholder('メールアドレス').isVisible();
      await page.getByPlaceholder('メールアドレス').click();
      await page.getByPlaceholder('メールアドレス').fill('test');
      await page.getByRole('button', { name: 'search 検索' }).click();
      await page.close();
  
  
      });

      test('search user by account', async ({ page }) => {
        await page.goto('https://dev.regalis.app/');
        await expect(page.getByText ('メールアドレス')).toBeVisible();
        await page.getByPlaceholder('メールアドレスを入力する').click();
        await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
        await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
        await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
        await page.getByRole('button', { name: 'ログイン' }).click();
        await page.getByText('マスタメンテナンス').isVisible();
        await page.getByText('マスタメンテナンス').click();
        await page.getByText('ユーザーアカウント').isVisible();
        await page.getByText('ユーザーアカウント').click();
        await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
        await page.locator('#rc_select_6').isVisible();
        await page.locator('#rc_select_6').click();
        await page.getByRole('option', { name: '管理者' }).getByText('管理者').click();
        await page.getByRole('button', { name: 'search 検索' }).click();
        await page.close();
    
    
        });
        test('search user by affilation', async ({ page }) => {
          await page.goto('https://dev.regalis.app/');
          await expect(page.getByText ('メールアドレス')).toBeVisible();
          await page.getByPlaceholder('メールアドレスを入力する').click();
          await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
          await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
          await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
          await page.getByRole('button', { name: 'ログイン' }).click();
          await page.getByText('マスタメンテナンス').isVisible();
          await page.getByText('マスタメンテナンス').click();
          await page.getByText('ユーザーアカウント').isVisible();
          await page.getByText('ユーザーアカウント').click();
          await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
          await page.getByPlaceholder('所属').isVisible();
          await page.getByPlaceholder('所属').click();
          await page.getByPlaceholder('所属').fill('LANEX');
          await page.getByRole('button', { name: 'search 検索' }).click();
          await page.close();
      
          });
          test('clear search', async ({ page }) => {
            await page.goto('https://dev.regalis.app/');
            await expect(page.getByText ('メールアドレス')).toBeVisible();
            await page.getByPlaceholder('メールアドレスを入力する').click();
            await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
            await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
            await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
            await page.getByRole('button', { name: 'ログイン' }).click();
            await page.getByText('マスタメンテナンス').isVisible();
            await page.getByText('マスタメンテナンス').click();
            await page.getByText('ユーザーアカウント').isVisible();
            await page.getByText('ユーザーアカウント').click();
            await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
            await page.getByPlaceholder('所属').isVisible();
            await page.getByPlaceholder('所属').click();
            await page.getByPlaceholder('所属').fill('LANEX');
            await page.getByRole('button', { name: '条件クリア' }).isVisible();
            await page.getByRole('button', { name: '条件クリア' }).click();
            await page.close();
        
            });
            test('Add User from Search', async ({ page }) => {
              await page.goto('https://dev.regalis.app/');
              await expect(page.getByText ('メールアドレス')).toBeVisible();
              await page.getByPlaceholder('メールアドレスを入力する').click();
              await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
              await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
              await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
              await page.getByRole('button', { name: 'ログイン' }).click();
              await page.getByText('マスタメンテナンス').isVisible();
              await page.getByText('マスタメンテナンス').click();
              await page.getByText('ユーザーアカウント').isVisible();
              await page.getByText('ユーザーアカウント').click();
              await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
              await page.getByRole('button', { name: 'plus ユーザー作成' }).isVisible();
              await page.getByRole('button', { name: 'plus ユーザー作成' }).click();
              await page.getByText('戻る').isVisible();
              await page.getByText('戻る').click();
              await page.close();
          
              });
              test('No results found', async ({ page }) => {
                await page.goto('https://dev.regalis.app/');
                await expect(page.getByText ('メールアドレス')).toBeVisible();
                await page.getByPlaceholder('メールアドレスを入力する').click();
                await page.getByPlaceholder('メールアドレスを入力する').fill('shunwasaki144@gmail.com');
                await expect (page.getByText('パスワード', { exact: true })).toBeVisible();
                await page.getByPlaceholder('パスワードを入力する').fill('Test@123!');
                await page.getByRole('button', { name: 'ログイン' }).click();
                await page.getByText('マスタメンテナンス').isVisible();
                await page.getByText('マスタメンテナンス').click();
                await page.getByText('ユーザーアカウント').isVisible();
                await page.getByText('ユーザーアカウント').click();
                await page.getByRole('heading', { name: 'ユーザーリスト' }).isVisible();
                await page.getByPlaceholder('名前').isVisible();
                await page.getByPlaceholder('名前').click();
                await page.getByPlaceholder('名前').fill('ABCDEF');
                await page.getByRole('button', { name: 'search 検索' }).click();
                await page.getByText('No data').isVisible();
                await page.close();
            
                });