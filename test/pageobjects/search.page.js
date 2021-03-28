const BaseGooglePage = require('./google.page');

class SearchPage extends BaseGooglePage {

    get inputSearch () { return $('.//form//input') }
    get suggestion () { return $(".//span[contains(text(),'wdio')]") }
    get introAgreeButton () { return $(".//*[@id='introAgreeButton']") }

    closePopUp() {
        //browser.pause(5000);
        let iframe = browser.findElement("xpath", ".//iframe");
        browser.switchToFrame(iframe);
        this.introAgreeButton.click();
    }

    searchText(text) {
        this.inputSearch.setValue(text);
    }

    chooseFirstSuggestion() {
        this.suggestion.click();
    }
}

module.exports = new SearchPage();
