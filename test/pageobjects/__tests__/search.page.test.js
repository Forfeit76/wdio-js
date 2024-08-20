const assert = require('assert');
const SearchPage = require('../pageobjects/search.page');

describe('SearchPage', () => {
    it('should close the pop-up', () => {
        const searchPage = new SearchPage();

        searchPage.closePopUp();

        // Add assertion here to verify that the pop-up is closed
    });

    it('should enter search text', () => {
        const searchPage = new SearchPage();
        const searchText = 'wdio';

        searchPage.searchText(searchText);

        // Add assertion here to verify that the search text is entered correctly
    });

    it('should choose the first suggestion', () => {
        const searchPage = new SearchPage();

        searchPage.chooseFirstSuggestion();

        // Add assertion here to verify that the first suggestion is chosen
    });
});