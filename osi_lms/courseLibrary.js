const puppeteer = require('puppeteer'); 

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
          x: 54.9375,
          y: 17.203125,
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
          x: 160,
          y: 15.203125,
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
          x: 107.9375,
          y: 25.203125,
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
          x: 217,
          y: 22.203125,
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
          x: 128.9375,
          y: 16.203125,
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
            x: 93.140625,
            y: 22.609375,
          },
        });
      console.log('Pass: Logged In');
      console.log('My course page');
    } catch (error) {
      console.error('Fail: Invalid credentials');
      process.exit(1);
    }
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(COURSE SELECTION)'),
      targetPage.locator('div.container > div:nth-of-type(1) button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[1]/div[2]/button)'),
      targetPage.locator(':scope >>> div.container > div:nth-of-type(1) button'),
      targetPage.locator('::-p-text(COURSE SELECTION)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 130.5,
          y: 29,
        },
      });
    console.log('Pass: Course Selection page');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(COURSE LIBRARY)'),
      targetPage.locator('div.container > div:nth-of-type(1) button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[1]/div[2]/button)'),
      targetPage.locator(':scope >>> div.container > div:nth-of-type(1) button'),
      targetPage.locator('::-p-text(COURSE LIBRARY)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 114.5,
          y: 14,
        },
      });
    console.log('Pass: Course Library page');
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
