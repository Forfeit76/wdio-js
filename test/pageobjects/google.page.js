module.exports = class BaseGooglePage {

    openMainPage () {
        //browser.setWindowSize(1600, 900);
        return browser.url(browser.options.baseUrl);
    }
}
