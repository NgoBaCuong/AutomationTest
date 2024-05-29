const { describe, it, after, before } = require('mocha');
const Page = require('../lib/airlineTicketPage');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const { config } = require('dotenv');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe ('Best practice automated testing', async function () {
            this.timeout(50000);
            let driver, page;

            this.beforeAll(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://www.bestprice.vn/ve-may-bay');
            });

            afterEach (async () => {
                await page.quit();
            });

            it ('Ticket Booking', async () => {
                const result = await page.bookfightTicket();
                expect(result).equal("Chủ nhật, 02/06/2024 (26/4 âm lịch)")
            });

        });
    } catch (ex) {
        console.log (new Error(ex.message));
    } finally {

    }
})();