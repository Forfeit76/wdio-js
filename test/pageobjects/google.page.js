module.exports = class BaseGooglePage {

    openMainPage () {
        return browser.url(browser.options.baseUrl)
    }
}
