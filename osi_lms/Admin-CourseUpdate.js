const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const { url, username, password } = await page.evaluate(() => {
    const url = prompt('Please enter the URL (e.g., https://staging-learn.opscience.org or https://learn.opscience.org):');
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
          x: 203,
          y: 8.203125,
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
          x: 170,
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
      .fill('S');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('s');
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
          x: 101.9375,
          y: 20.203125,
        },
      });
  }
  {
    try {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator('::-p-aria(Add Course)'),
        targetPage.locator('#animateRow1 button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"animateRow1\\"]/div[1]/div/button)'),
        targetPage.locator(':scope >>> #animateRow1 button'),
        targetPage.locator('::-p-text(Add Course)')
      ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 83.75,
            y: 16.609375,
          },
        });
      console.log('Pass: Logged In');
    } catch (error) {
      console.error('Fail: Invalid credentials');
      process.exit(1);
    }

  }
  {
    try {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator('::-p-aria(Back To Courses)'),
        targetPage.locator('div.row > div > div.row button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div[1]/div/div[1]/div[2]/button)'),
        targetPage.locator(':scope >>> div.row > div > div.row button'),
        targetPage.locator('::-p-text(Back To Courses)')
      ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 32.5,
            y: 15,
          },
        });
    } catch (error) {
      console.error('Fail: Admin can only access this page');
      process.exit(1);
    }
  }
  {
    try {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator('div:nth-of-type(7) button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"dropdown-basic\\"])'),
        targetPage.locator(':scope >>> div:nth-of-type(7) button')
      ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 16.171875,
            y: 17.25,
          },
        });
      console.log('Pass: Edit Course Page');
    } catch (error) {
      console.error('Fail: Course not in list');
      process.exit(1);
    }
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Edit)'),
      targetPage.locator('a:nth-of-type(2)'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div[2]/div[7]/div/div/div/div[2]/div/div[1]/div/div[2]/div/div/a[2])'),
      targetPage.locator(':scope >>> a:nth-of-type(2)'),
      targetPage.locator('::-p-text(Edit)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 123.515625,
          y: 16.25,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Price:)'),
      targetPage.locator('#coursePrice'),
      targetPage.locator('::-p-xpath(//*[@id=\\"coursePrice\\"])'),
      targetPage.locator(':scope >>> #coursePrice'),
      targetPage.locator('::-p-text(300)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 124.5,
          y: 13,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Price:)'),
      targetPage.locator('#coursePrice'),
      targetPage.locator('::-p-xpath(//*[@id=\\"coursePrice\\"])'),
      targetPage.locator(':scope >>> #coursePrice'),
      targetPage.locator('::-p-text(300)')
    ])
      .setTimeout(timeout)
      .fill('400');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Next)'),
      targetPage.locator('div.text-right > button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div[2]/div[2]/button)'),
      targetPage.locator(':scope >>> div.text-right > button'),
      targetPage.locator('::-p-text(Next)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 20.40625,
          y: 26,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Evaluation Questions) >>>> ::-p-aria([role=\\"generic\\"])'),
      targetPage.locator('li:nth-of-type(3) span'),
      targetPage.locator('::-p-xpath(//*[@id=\\"react-aria1617825138-:ri:-tab-evaluation\\"]/span)'),
      targetPage.locator(':scope >>> li:nth-of-type(3) span'),
      targetPage.locator('::-p-text(Evaluation Questions)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 55.109375,
          y: 14,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Question:)'),
      targetPage.locator('#questionText'),
      targetPage.locator('::-p-xpath(//*[@id=\\"questionText\\"])'),
      targetPage.locator(':scope >>> #questionText')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 148.5,
          y: 20,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Question:)'),
      targetPage.locator('#questionText'),
      targetPage.locator('::-p-xpath(//*[@id=\\"questionText\\"])'),
      targetPage.locator(':scope >>> #questionText')
    ])
      .setTimeout(timeout)
      .fill('test1');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Answer:)'),
      targetPage.locator('#answerText'),
      targetPage.locator('::-p-xpath(//*[@id=\\"answerText\\"])'),
      targetPage.locator(':scope >>> #answerText')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 184.5,
          y: 34,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Answer:)'),
      targetPage.locator('#answerText'),
      targetPage.locator('::-p-xpath(//*[@id=\\"answerText\\"])'),
      targetPage.locator(':scope >>> #answerText')
    ])
      .setTimeout(timeout)
      .fill('test1');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Add Evaluation)'),
      targetPage.locator('#react-aria1617825138-\\:ri\\:-tabpane-evaluation > div.row button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"react-aria1617825138-:ri:-tabpane-evaluation\\"]/div[1]/div/button)'),
      targetPage.locator(':scope >>> #react-aria1617825138-\\:ri\\:-tabpane-evaluation > div.row button'),
      targetPage.locator('::-p-text(Add Evaluation)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 61.140625,
          y: 21,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Course Status)'),
      targetPage.locator('#react-aria1617825138-\\:ri\\:-tab-course-status'),
      targetPage.locator('::-p-xpath(//*[@id=\\"react-aria1617825138-:ri:-tab-course-status\\"])'),
      targetPage.locator(':scope >>> #react-aria1617825138-\\:ri\\:-tab-course-status')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 59.515625,
          y: 7,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria( Update)'),
      targetPage.locator('div.tab-card div.col-sm-2 > button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"react-aria1617825138-:ri:-tabpane-course-status\\"]/div[2]/div[1]/button)'),
      targetPage.locator(':scope >>> div.tab-card div.col-sm-2 > button')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 50.875,
          y: 18,
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
            x: 25.15625,
            y: 17.515625,
          },
        });
      console.log('Pass: Course Updated');
    } catch (error) {
      console.error('Fail: Error While updating the course');
      process.exit(1);
    }
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
