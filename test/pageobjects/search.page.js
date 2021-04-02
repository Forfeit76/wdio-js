const BaseGooglePage = require('./google.page');

class SearchPage extends BaseGooglePage {

     constructor() {
        super();
        this.inputSearch = () => ($("[name='q']"));
        this.suggestion = () => ($(".//span[contains(text(),'wdio')]"));
        this.introAgreeButton = () => ($("#zV9nZe"));
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
