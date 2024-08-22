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
        await targetPage.goto(`${url}/SignUp`);
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[5]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 50,
                    y: 14.203125,
                },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[5]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .fill(username);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[5]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 157,
                    y: 23.203125,
                },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[5]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 159,
                    y: 19.203125,
                },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[5]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .fill(username);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Password)'),
            targetPage.locator('div.password-input > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[5]/div[2]/input)'),
            targetPage.locator(':scope >>> div.password-input > input')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 172,
                    y: 8.203125,
                },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Password)'),
            targetPage.locator('div.password-input > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[5]/div[2]/input)'),
            targetPage.locator(':scope >>> div.password-input > input')
        ])
            .setTimeout(timeout)
            .fill('W');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('w');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Password)'),
            targetPage.locator('div.password-input > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[5]/div[2]/input)'),
            targetPage.locator(':scope >>> div.password-input > input')
        ])
            .setTimeout(timeout)
            .fill(password);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(CREATE ACCOUNT)'),
            targetPage.locator('div:nth-of-type(6) > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[6]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(6) > button'),
            targetPage.locator('::-p-text(CREATE ACCOUNT)')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 77.203125,
                    y: 7.203125,
                },
            });
    }
    {
        try {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(OK)'),
                targetPage.locator('button.swal2-confirm'),
                targetPage.locator('::-p-xpath(/html/body/div[2]/div/div[6]/button[1])'),
                targetPage.locator(':scope >>> button.swal2-confirm'),
                targetPage.locator('::-p-text(OK)')
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 27.15625,
                        y: 19.515625,
                    },
                });
            console.log('Pass: Account Created check mail to verify / user already exists');
        } catch (error) {
            console.error('Fail: Account already exist');
            process.exit(1);
        }
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(CREATE ACCOUNT)'),
            targetPage.locator('div:nth-of-type(6) > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[6]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(6) > button'),
            targetPage.locator('::-p-text(CREATE ACCOUNT)')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 101.203125,
                    y: 23.203125,
                },
            });

    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
