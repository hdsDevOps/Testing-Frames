const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const { url, username, password } = await page.evaluate(() => {
        const url = prompt('Please enter the URL (e.g., https://staging-learn.opscience.org or https://learn.opscience.org ):');
        const username = prompt('Please enter your username:');
        const password = prompt('Please enter your password:');
        return { url, username, password };
      });

    const timeout = 30000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1172,
            height: 810
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto(`${url}/login`);
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Enter your email address)'),
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[4]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 208.88888549804688,
                y: 13.986114501953125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Enter your email address)'),
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[4]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .fill(username);
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }   
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Enter your Password)'),
            targetPage.locator('div.password-input > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[4]/div[2]/input)'),
            targetPage.locator(':scope >>> div.password-input > input')
        ])
            .setTimeout(timeout)
            .fill(password);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(LOGIN TO CONTINUE)'),
            targetPage.locator('div:nth-of-type(6) > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[6]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(6) > button'),
            targetPage.locator('::-p-text(LOGIN TO CONTINUE)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 110.72222900390625,
                y: 21.4305419921875,
              },
            });
    }
    {
        try {
          const targetPage = page;
          await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(MY COURSES)'),
            targetPage.locator('#animateRow1 button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"animateRow1\\"]/div[1]/div/button)'),
            targetPage.locator(':scope >>> #animateRow1 button'),
            targetPage.locator('::-p-text(MY COURSES)')
          ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94.140625,
                y: 13.609375,
              },
            });
          console.log('Pass: Logged In');
          console.log('Pass: My Course Page');
        } catch (error) {
          console.error('Fail: Invalid credentials');
          process.exit(1);
        }
      }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.container > div:nth-of-type(2) span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/table/tbody/tr/td[1]/span)'),
            targetPage.locator(':scope >>> div.container > div:nth-of-type(2) span'),
            targetPage.locator('::-p-text(10 GROUNDWORK)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90.22221374511719,
                y: 10.583343505859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(1) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[4]/div/div/div[3]/div/div/table/tbody/tr[1]/td[4]/button)'),
            targetPage.locator(':scope >>> tr:nth-of-type(1) button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 33.47222900390625,
                y: 26.27777099609375,
              },
            });
    }
    // {
    //     const targetPage = page;
    //     await puppeteer.Locator.race([
    //         targetPage.locator('div:nth-of-type(12) div.modal-header > button'),
    //         targetPage.locator('::-p-xpath(/html/body/div[12]/div/div/div[1]/button)'),
    //         targetPage.locator(':scope >>> div:nth-of-type(12) div.modal-header > button')
    //     ])
    //         .setTimeout(timeout)
    //         .click({
    //           offset: {
    //             x: 10.16668701171875,
    //             y: 12.180553436279297,
    //           },
    //         });
    // }
    // test malik

    {
        try {
          const targetPage = page;
          await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Download)'),
            targetPage.locator('#animateRow1 button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"animateRow1\\"]/div[1]/div/button)'),
            targetPage.locator(':scope >>> #animateRow1 button'),
            targetPage.locator('::-p-text(Download)')
          ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94.140625,
                y: 13.609375,
              },
            });
          console.log('Pass: files list');
          console.log('Pass: file downloaded');
        } catch (error) {
          console.error('Fail: there is no file to download');
          process.exit(1);
        }
      }

    {
        try {
          const targetPage = page;
          await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Close)'),
            targetPage.locator('#animateRow1 button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"animateRow1\\"]/div[1]/div/button)'),
            targetPage.locator(':scope >>> #animateRow1 button'),
            targetPage.locator('::-p-text(Close)')
          ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94.140625,
                y: 13.609375,
              },
            });
          console.log('Pass: files list');
        } catch (error) {
          console.error('Fail: there is no files to list');
          process.exit(1);
        }
      }


      {
        try {
          const targetPage = page;
          await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(HOME)'),
            targetPage.locator('#animateRow1 button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"animateRow1\\"]/div[1]/div/button)'),
            targetPage.locator(':scope >>> #animateRow1 button'),
            targetPage.locator('::-p-text(HOME)')
          ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94.140625,
                y: 13.609375,
              },
            });
          console.log('Pass: Home page');
        } catch (error) {
          console.error('Fail: Home page ');
          process.exit(1);
        }
      }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
