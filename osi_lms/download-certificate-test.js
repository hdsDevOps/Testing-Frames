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
            width: 1372,
            height: 924
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
                    x: 205,
                    y: 11.203125,
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
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Enter your Password)'),
            targetPage.locator('div.password-input > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[4]/div[2]/input)'),
            targetPage.locator(':scope >>> div.password-input > input')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 195,
                    y: 10.203125,
                },
            });
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
                    x: 110.9375,
                    y: 6.203125,
                },
            });
    }
    {
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
                    x: 77.140625,
                    y: 13.609375,
                },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(3) td:nth-of-type(2) > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[3]/div[3]/div/div[2]/table/tbody/tr[5]/td[2]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(3) td:nth-of-type(2) > button')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 134.046875,
                    y: 23.625,
                },
            });
    }
    {
        try {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Yes)'),
                targetPage.locator('button.swal2-confirm'),
                targetPage.locator('::-p-xpath(/html/body/div[2]/div/div[6]/button[1])'),
                targetPage.locator(':scope >>> button.swal2-confirm'),
                targetPage.locator('::-p-text(Yes)')
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 27.15625,
                        y: 22.515625,
                    },
                });
            console.log('Pass: Certificate Downloaded / user needs to complete the course to download certifiicate');

        } catch (error) {
            console.error('Fail: You Need to Complete the Course and Evaluation');
            process.exit(1);
        }
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
