const BaseGooglePage = require('./google.page');

/**
 * Represents the SearchPage class for Search Page in Google.
 * @class
 * @extends BaseGooglePage
 */
class SearchPage extends BaseGooglePage {

     constructor() {
        super();
        this.inputSearch = () => ($("[name='q']"));
        this.suggestion = () => ($(".//span[contains(text(),'wdio')]"));
        this.introAgreeButton = () => ($("#L2AGLb"));
    }

    closePopUp() {
        // browser.pause(5000);
        this.introAgreeButton().click();
    }

    searchText(text) {
        this.inputSearch().setValue(text);
    }

    chooseFirstSuggestion() {
        this.suggestion().click();
    }
}

module.exports = new SearchPage();
