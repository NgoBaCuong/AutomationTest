let Page = require('./basePage');
const locator = require('../utils/locator');

const buttonSearchDeparturepoint = locator.buttonSearchDeparturepoint;
const searchDeparturepoint = locator.searchDeparturepoint
const searchHaNoi = locator.searchHaNoi
const btnHaNoi = locator.btnHaNoi
const btnDestination = locator.btnDestination
const searchDestination = locator.searchDestination
const searchHoChiMinh = locator.searchHoChiMinh
const btnHoChiMinh = locator.btnHoChiMinh
const btnReturnDate =  locator.btnReturnDate 
const btnCustomer = locator.btnCustomer
const btnPlus = locator.btnPlus
const btnfindFight = locator.btnSearch
const returnDate = locator.returnDate
const statusreturnDate = locator.statusreturnDate
const btnDatego = locator.btndatego
const btnDate = locator.btndate


Page.prototype.bookfightTicket = async function() {
    const btnDeparturepoint = await this.findByXpath((buttonSearchDeparturepoint))
    await btnDeparturepoint.click()
    const searchdeparturepoint = await this.findByXpath(searchDeparturepoint)
    await searchdeparturepoint.sendKeys(searchHaNoi)
    const btnhanoi = await this.findByXpath(btnHaNoi)
    await btnhanoi.click()
    const btndestination = await this.findByXpath(btnDestination)
    await btndestination.click()
    const searchdestination = await this.findByXpath(searchDestination)
    await searchdestination.sendKeys(searchHoChiMinh)
    const btnhochiminh = await this.findByXpath(btnHoChiMinh)
    await btnhochiminh.click()
    const btndatego = await this.findByXpath(btnDatego)
    await btndatego.click()
    const btndate = await this.findByXpath(btnDate)
    await btndate.click()
    const btnreturndate = await this.findByXpath(btnReturnDate)
    await btnreturndate.click()
    const returndate = await this.findByXpath(returnDate)
    await returndate.click()
    const btncustomer = await this.findByXpath(btnCustomer)
    await btncustomer.click()
    const btnplus = await this.findByXpath(btnPlus)
    await this.delay(1000)
    await btnplus.click()
    const btnfindfight = await this.findByXpath(btnfindFight)
    await btnfindfight.click()
    const result = await this.findByXpath(statusreturnDate)
    return await result.getText();
}


module.exports = Page;