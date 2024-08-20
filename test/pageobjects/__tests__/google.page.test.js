const assert = require('assert');
const BaseGooglePage = require('../pageobjects/google.page.js');

describe('BaseGooglePage', () => {
    it('should open the main page', () => {
        const baseGooglePage = new BaseGooglePage();
        const mainPageUrl = 'https://www.google.com'; // Replace with the actual main page URL

        browser.url = jest.fn().mockReturnValue(mainPageUrl);

        const result = baseGooglePage.openMainPage();

        assert.strictEqual(result, mainPageUrl);
        assert(browser.url).toHaveBeenCalledWith(mainPageUrl);
    });
});