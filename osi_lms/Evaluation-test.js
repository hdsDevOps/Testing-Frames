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
          x: 239,
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
          x: 191,
          y: 23.203125,
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
          x: 83.9375,
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
    try {
      const targetPage = page;
      await puppeteer.Locator.race([
        targetPage.locator('tr:nth-of-type(3) button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/table/tbody/tr[3]/td[2]/button)'),
        targetPage.locator(':scope >>> tr:nth-of-type(3) button')
      ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 83.546875,
            y: 11.8125,
          },
        });
    } catch (error) {
      console.error('Fail: You Should Complete the Course');
      process.exit(1);
    }
  }
  {
    try {
      const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(EVALUATION QUESTIONS)'),
      targetPage.locator('div:nth-of-type(5) button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[5]/div/button)'),
      targetPage.locator(':scope >>> div:nth-of-type(5) button'),
      targetPage.locator('::-p-text(EVALUATION QUESTIONS)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 182.5,
          y: 19.03125,
        },
      });
    } catch (error) {
      console.log("Pass: User neeeds to complete evaluation");
      process.exit(1);
    }
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Capacity utilization Weather Average cycle time It increases Standard deviation divided by the mean 100% 14.8 CV of process time Reduces queueing and cycle time No change Improvement efforts Employee performance Setup time)'),
      targetPage.locator('div:nth-of-type(1) > div:nth-of-type(2) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-1\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(1) > div:nth-of-type(2) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 4.5,
          y: 11,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Lead times Cycle time variance Variance of cycle time It remains the same Mean divided by standard deviation 50% 75 CV of demand Increases variability An increase Financial reporting Market trends Marketing time)'),
      targetPage.locator('div:nth-of-type(1) > div:nth-of-type(3) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-2\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(1) > div:nth-of-type(3) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 7.5,
          y: 7,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(2) > div:nth-of-type(2) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-1\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(2) > div:nth-of-type(2) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 12.5,
          y: 12,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Question : The VUT equation describes what component of cycle time?)'),
      targetPage.locator('#question3'),
      targetPage.locator('::-p-xpath(//*[@id=\\"question3\\"])'),
      targetPage.locator(':scope >>> #question3')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 41.5,
          y: 9,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Question : The VUT equation describes what component of cycle time?)'),
      targetPage.locator('#question3'),
      targetPage.locator('::-p-xpath(//*[@id=\\"question3\\"])'),
      targetPage.locator(':scope >>> #question3')
    ])
      .setTimeout(timeout)
      .fill('Queue time');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Question : What type of buffer is overtime?)'),
      targetPage.locator('#question6'),
      targetPage.locator('::-p-xpath(//*[@id=\\"question6\\"])'),
      targetPage.locator(':scope >>> #question6')
    ])
      .setTimeout(timeout)
      .fill('Capacity');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(4) > div:nth-of-type(2) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-1\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(4) > div:nth-of-type(2) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 9.5,
          y: 7,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(5) > div:nth-of-type(2) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-1\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(5) > div:nth-of-type(2) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 4.5,
          y: 10,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(7) > div:nth-of-type(2) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-1\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(7) > div:nth-of-type(2) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 11.5,
          y: 7,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(8) > div:nth-of-type(1) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-0\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(8) > div:nth-of-type(1) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 10.5,
          y: 6,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(9) > div:nth-of-type(3) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-2\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(9) > div:nth-of-type(3) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 12.5,
          y: 5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(10) > div:nth-of-type(2)'),
      targetPage.locator('::-p-xpath(/html/body/div[3]/div/div/div[2]/form/div[10]/div[2])'),
      targetPage.locator(':scope >>> div:nth-of-type(10) > div:nth-of-type(2)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 15.5,
          y: 18,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(10) > div:nth-of-type(2)'),
      targetPage.locator('::-p-xpath(/html/body/div[3]/div/div/div[2]/form/div[10]/div[2])'),
      targetPage.locator(':scope >>> div:nth-of-type(10) > div:nth-of-type(2)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 3.5,
          y: 19,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(10) > div:nth-of-type(2) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-1\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(10) > div:nth-of-type(2) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 8.5,
          y: 10,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(10) > div:nth-of-type(3) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-2\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(10) > div:nth-of-type(3) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 5.5,
          y: 7,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(11) > div:nth-of-type(3) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-2\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(11) > div:nth-of-type(3) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 8.5,
          y: 7,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(12) > div:nth-of-type(3) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-2\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(12) > div:nth-of-type(3) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 8.5,
          y: 8,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(13) > div:nth-of-type(3) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-2\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(13) > div:nth-of-type(3) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 12.5,
          y: 8,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(14) > div:nth-of-type(1) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-0\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(14) > div:nth-of-type(1) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 11.5,
          y: 7,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(15) > div:nth-of-type(1) > input'),
      targetPage.locator('::-p-xpath(//*[@id=\\"option-0\\"])'),
      targetPage.locator(':scope >>> div:nth-of-type(15) > div:nth-of-type(1) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 9.5,
          y: 5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Submit)'),
      targetPage.locator('div.modal button.btn-primary'),
      targetPage.locator('::-p-xpath(/html/body/div[3]/div/div/div[3]/button[2])'),
      targetPage.locator(':scope >>> div.modal button.btn-primary'),
      targetPage.locator('::-p-text(Submit)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 23.296875,
          y: 26,
        },
      });
  }
  {
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
          y: 13.3125,
        },
      });
    console.log('Pass: Evaluation Completed');
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
