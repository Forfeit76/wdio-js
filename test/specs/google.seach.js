const SearchPage = require('../pageobjects/search.page');
const SearchResultPage = require('../pageobjects/search.result.page');
const WebdriverIoMainPage = require('../pageobjects/webdriverio.main.page');

describe('Test google search functionality', () => {
    it('should search some information', () => {
        const searchText = 'wdio';
        const resultText = 'WebdriverIO';

        SearchPage.openMainPage();
        SearchPage.closePopUp();
        SearchPage.searchText(searchText);
        SearchPage.chooseFirstSuggestion();
        expect(SearchResultPage.resultTitle()).toHaveTextContaining(resultText);
        SearchResultPage.openFirstSearchResult();
        expect(WebdriverIoMainPage.announcement()).toHaveTextContaining(resultText);
        WebdriverIoMainPage.saveCookie();
    });
});
