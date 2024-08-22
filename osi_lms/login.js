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
            targetPage.locator('::-p-aria(LOGIN TO CONTINUE)'),
            targetPage.locator('div:nth-of-type(6) > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[6]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(6) > button'),
            targetPage.locator('::-p-text(LOGIN TO CONTINUE)')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 134.9375,
                    y: 12.203125,
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
            .click({
                offset: {
                    x: 182,
                    y: 19.203125,
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
            targetPage.locator('::-p-aria(LOGIN TO CONTINUE)'),
            targetPage.locator('div:nth-of-type(6) > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[6]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(6) > button'),
            targetPage.locator('::-p-text(LOGIN TO CONTINUE)')
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 128.9375,
                    y: 8.203125,
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
            .click({
                offset: {
                    x: 127,
                    y: 19.203125,
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
            .fill('W');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('w');
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
            .fill('Welcome@');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('2');
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
                    x: 114.9375,
                    y: 18.203125,
                },
            });
    }
    {
        try {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('#animateRow1 > div.animate-col'),
                targetPage.locator('::-p-xpath(//*[@id=\\"animateRow1\\"]/div[2])'),
                targetPage.locator(':scope >>> #animateRow1 > div.animate-col')
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 68.5,
                        y: 510,
                    },
                });
            console.log("Pass: Logged In");

        } catch (error) {
            console.error('Fail: Invalid credentials');
            process.exit(1);
        }
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
