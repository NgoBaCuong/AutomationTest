module.exports = {
    buttonSearchDeparturepoint : '//input[@placeholder="Chọn điểm đi"]',
    searchDeparturepoint :  "//div[contains(text(),'Chọn điểm đi')]/following-sibling::div/span/input",
    searchHaNoi: "Hà Nội",
    btnHaNoi: '//ul[@class="clearfix ul-flight-des collapse fade active in flight_from_domestic"]//li[@value="Hà Nội (HAN)"]',
    btnDestination: '//label[@class="btn_flight_icon"]//parent::div[@class="search-form__content__des__input search-form__content__des__flight_to"]',
    searchDestination: "//div[contains(text(),'Chọn điểm đến')]/following-sibling::div/span/input",
    searchHoChiMinh: "Hồ Chí Minh",
    btnHoChiMinh: '//ul[@class="clearfix ul-flight-des collapse fade active in flight_to_domestic"]//li[@value="Hồ Chí Minh (SGN)"]',
    btnCustomer: '//input[@id="flight_passenger"]',
    btnPlus: "//div[contains(@class,'pop-flight-passenger')]//div[contains(@class,'btn-plus') and @data-field='nb_children' ]",
    btnSearch: '//button[@id="search_button"]//parent::div[@class="search-form__content__button"]',
    btndatego: '//input[@id="departure_date_flight"]',
    btndate : "//div[contains(@class,'ui-datepicker-group-first')]//tbody//span[@class='ui-datepicker-day '  and text()='30']",
    btnReturnDate :'//input[@id="returning_date_flight"]',
    returnDate : "//div[contains(@class,'ui-datepicker-group-last')]//tbody//span[@class='ui-datepicker-day '  and text()='2']",
    statusreturnDate : '//span[@class="date date-return"]//parent::span[@class="hidden-xs date-text-change-return"]'
}