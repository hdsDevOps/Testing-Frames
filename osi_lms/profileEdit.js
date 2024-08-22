const puppeteer = require('puppeteer'); 

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const { url, username, password } = await page.evaluate(() => {
        const url = prompt('Please enter the URL (e.g., https://staging-learn.opscience.org or https://live-learn.opscience.org):');
        const username = prompt('Please enter your username:');
        const password = prompt('Please enter your password:');
        return { url, username, password };
      });

    const timeout = 30000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1190,
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
                x: 263,
                y: 17.986114501953125,
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
                x: 131.83334350585938,
                y: 7.4305419921875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.card-body svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div/div/div[4]/div[2]/svg)'),
            targetPage.locator(':scope >>> div.card-body svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3.77777099609375,
                y: 13.319427490234375,
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
            targetPage.locator('::-p-text(malikdinarss7@gmail.com)')
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
                x: 69.83334350585938,
                y: 18.4305419921875,
              },
            });
    }
    {
       try {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(PROFILE[role=\\"button\\"])'),
            targetPage.locator('#collasible-nav-dropdown-profile'),
            targetPage.locator('::-p-xpath(//*[@id=\\"collasible-nav-dropdown-profile\\"])'),
            targetPage.locator(':scope >>> #collasible-nav-dropdown-profile'),
            targetPage.locator('::-p-text(PROFILE)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53.02496337890625,
                y: 23,
              },
            });
            console.log('Pass: Logged In');
       } catch (err) {
        console.error('Fail: Invalid credentials');
        process.exit(1);
       }

  }
  {
      try {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Edit Profile)'),
            targetPage.locator('#responsive-navbar-nav > div > div > div > a:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"responsive-navbar-nav\\"]/div/div/div/a[1])'),
            targetPage.locator(':scope >>> #responsive-navbar-nav > div > div > div > a:nth-of-type(1)'),
            targetPage.locator('::-p-text(Edit Profile)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 41.2249755859375,
                y: 9.200000762939453,
              },
            });
        await Promise.all(promises);
        console.log("Pass: Edit Profile Page");
      } catch (err) { 
        console.error('Fail: Error in Edit Profile');
        process.exit(1);
      } 
  }

    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('select'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[6]/div[3]/select)'),
            targetPage.locator(':scope >>> select')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 356.9305419921875,
                y: 18.25,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('select'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[6]/div[3]/select)'),
            targetPage.locator(':scope >>> select')
        ])
            .setTimeout(timeout)
            .fill('Contact me in a couple of months to discuss operations science');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(CHANGE PREFERENCE)'),
            targetPage.locator('div:nth-of-type(7) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[7]/div/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(7) button'),
            targetPage.locator('::-p-text(CHANGE PREFERENCE)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 167.9305419921875,
                y: 17.25,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(OK)'),
            targetPage.locator('button.swal2-confirm'),
            targetPage.locator('::-p-xpath(/html/body/div[5]/div/div[6]/button[1])'),
            targetPage.locator(':scope >>> button.swal2-confirm'),
            targetPage.locator('::-p-text(OK)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.0555419921875,
                y: 12.1805419921875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('select'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[6]/div[3]/select)'),
            targetPage.locator(':scope >>> select')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 142.9305419921875,
                y: 19.25,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('select'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[6]/div[3]/select)'),
            targetPage.locator(':scope >>> select')
        ])
            .setTimeout(timeout)
            .fill('I will continue to follow the OSI. No need to contact me now');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(CHANGE PREFERENCE)'),
            targetPage.locator('div:nth-of-type(7) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[7]/div/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(7) button'),
            targetPage.locator('::-p-text(CHANGE PREFERENCE)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 144.9305419921875,
                y: 23.25,
              },
            });
    }
    {
        try {
          const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.swal2-actions'),
            targetPage.locator('::-p-xpath(/html/body/div[5]/div/div[6])'),
            targetPage.locator(':scope >>> div.swal2-actions'),
            targetPage.locator('::-p-text(OKNoCancel)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36.0555419921875,
                y: 3.1805419921875,
              },
            });
        } catch (err) {
          console.error('Fail: Error While changing Preference');
          process.exit(1);
        }
    }
    {
       try {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(OK)'),
            targetPage.locator('button.swal2-confirm'),
            targetPage.locator('::-p-xpath(/html/body/div[5]/div/div[6]/button[1])'),
            targetPage.locator(':scope >>> button.swal2-confirm'),
            targetPage.locator('::-p-text(OK)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 34.0555419921875,
                y: 28.1805419921875,
              },
            });
            console.log('Pass : Contact Preference Changed');
       } catch (err) {
        console.error('Fail: Error While changing Preference');
        process.exit(1);
       }
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[5]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 122.9305419921875,
                y: 19.02777099609375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[5]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) input')
        ])
            .setTimeout(timeout)
            .fill('M');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('m');
    }
    {
      try {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[5]/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) input')
        ])
            .setTimeout(timeout)
            .fill('Malik');
      } catch (err) {
        console.error('Fail: Error while changing the name on certificate');
        process.exit(1);
      }
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Save)'),
            targetPage.locator('div:nth-of-type(5) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/div[2]/div[2]/div/div/div/form/div[5]/div[2]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) button'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.375,
                y: 22.02777099609375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Cancel)'),
            targetPage.locator('button.swal2-cancel'),
            targetPage.locator('::-p-xpath(/html/body/div[5]/div/div[6]/button[3])'),
            targetPage.locator(':scope >>> button.swal2-cancel'),
            targetPage.locator('::-p-text(Cancel)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 40.83331298828125,
                y: 31.51385498046875,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
