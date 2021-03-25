const SearchPage = require('../pageobjects/search.page');
const SearchResultPage = require('../pageobjects/search.result.page');
const WebdriverIoMainPage = require('../pageobjects/webdriverio.main.page');

describe('Test google search functionality', () => {
    it('should search some information', async () => {
        const searchText = 'wdio';
        const resultText = 'WebdriverIO';

        await SearchPage.openMainPage();
        await SearchPage.closePopUp();
        await SearchPage.searchText(searchText);
        await SearchPage.chooseFirstSuggestion();
        await expect(SearchResultPage.resultTitle).toHaveTextContaining(resultText);
        await SearchResultPage.openFirstSearchResult();
        await expect(WebdriverIoMainPage.announcement).toHaveTextContaining(resultText);
        await WebdriverIoMainPage.saveCookie();
    });
});
