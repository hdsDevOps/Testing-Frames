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
          x: 276,
          y: 16.203125,
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
          x: 84.9375,
          y: 17.203125,
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
          x: 159,
          y: 14.203125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Enter your email address)'),
      targetPage.locator('div:nth-of-type(1) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[4]/div[1]/input)'),
      targetPage.locator(':scope >>> div:nth-of-type(1) > input'),
      targetPage.locator('::-p-text(logan1802logan@gmail.com)')
    ])
      .setTimeout(timeout)
      .click({
        count: 2,
        offset: {
          x: 255,
          y: 24.203125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Enter your email address)'),
      targetPage.locator('div:nth-of-type(1) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[4]/div[1]/input)'),
      targetPage.locator(':scope >>> div:nth-of-type(1) > input'),
      targetPage.locator('::-p-text(logan1802logan@gmail.com)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 255,
          y: 24.203125,
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
      .fill('');
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
          x: 251,
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
          x: 189,
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
          x: 103.9375,
          y: 20.203125,
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
            x: 44.140625,
            y: 20.609375,
          },
        });
      console.log('Pass: Logged In');
      console.log('Pass: My course page');
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
          x: 53.5,
          y: 26,
        },
      });
    console.log('Pass: Course Selection page');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(3) tr:nth-of-type(1) input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[3]/div/div/div/table/tbody/tr[1]/td[1]/div/input)'),
      targetPage.locator(':scope >>> div:nth-of-type(3) tr:nth-of-type(1) input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 5.5,
          y: 4.625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(3) tr:nth-of-type(2) input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[3]/div/div/div/table/tbody/tr[2]/td[1]/div/input)'),
      targetPage.locator(':scope >>> div:nth-of-type(3) tr:nth-of-type(2) input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 8.5,
          y: 14.625,
        },
      });
  }
  {
    try {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator('::-p-aria(ADD TO CART)'),
        targetPage.locator('div.justify-content-end button:nth-of-type(1)'),
        targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[4]/div/div[2]/div/button[1])'),
        targetPage.locator(':scope >>> div.justify-content-end button:nth-of-type(1)'),
        targetPage.locator('::-p-text(ADD TO CART)')
      ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 81.640625,
            y: 18.625,
          },
        });
      console.log('Pass: Course Added to Cart');
    } catch (error) {
      console.error('Fail: Course Already in Cart');
      process.exit(1);
    }
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(GO TO CART)'),
      targetPage.locator('button:nth-of-type(2)'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[4]/div/div[2]/div/button[2])'),
      targetPage.locator(':scope >>> button:nth-of-type(2)'),
      targetPage.locator('::-p-text(GO TO CART)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 45.0625,
          y: 12.625,
        },
      });
    console.log('Pass: Cart Page');
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
