const BaseGooglePage = require('./google.page');

class SearchPage extends BaseGooglePage {

     constructor() {
        super();
        this.inputSearch = () => ($("[name='q']"));
        this.suggestion = () => ($(".//span[contains(text(),'wdio')]"));
        this.introAgreeButton = () => ($("#introAgreeButton"));
        this.iframe = () => ($("#cnsw>iframe"));
    };

    // get inputSearch () { return $("[name='q']") }
    // get suggestion () { return $(".//span[contains(text(),'wdio')]") }
    // get introAgreeButton () { return $("#introAgreeButton") }
    // get iframe () { return $("#cnsw>iframe") }

    closePopUp() {
        browser.switchToFrame(this.iframe());
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
