const { Builder, By, until, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
let o = new chrome.Options();
o.addArguments('disable-infobars');
o.addArguments('--window-size=1920,1080')
o.setUserPreferences({ credential_enable_service: false });

var Page = function () {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function (theUrl) {
        return await this.driver.get(theUrl);
    };

    this.refresh = async function () {
        return await this.driver.navigate().refresh()
    }

    // quit current session
    this.quit = async function () {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function (id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function (name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    this.findByClass = async function (name) {
        await this.driver.wait(until.elementLocated(By.className(name)), 15000, 'Looking for element');
        return await this.driver.findElements(By.className(name));
    }

    this.sendKeyById = async function (id, txt) { 
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id)).sendKeys(txt);
    }

    this.sendKeyDown = async function (id, txt) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id)).sendKeys(txt, Keys.DOWN);
    }
    // fill input web elements
    this.write = async function (el, txt) {
        await el.clear();
        await el.click();
        return await el.sendKeys(txt);
    };


    this.writeAndEnter = async function (el, txt) {
        await el.clear();
        await el.click();
        return await el.sendKeys(txt, Key.RETURN);
    };

    this.findByXpath = async function (xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath(xpath));
    };

    this.getText = async function (xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath(xpath)).getText();
    };

    this.sendKeyByXpath = async function (xpath, txt) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(xpath)).sendKeys(txt);
    }

    this.delay = async function (timeMs) {
        return await this.driver.sleep(timeMs)
    }

};

module.exports = Page;