/**
 * BaseGooglePage class representing the base page object for Google pages.
 * @class
 * @exports BaseGooglePage
 */
module.exports = class BaseGooglePage {

    openMainPage () {
        //browser.setWindowSize(1600, 900);
        return browser.url(browser.options.baseUrl);
    }
}
