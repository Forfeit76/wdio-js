const BaseGooglePage = require('./google.page');

class SearchPage extends BaseGooglePage {

    get inputSearch () { return $('.//form//input') }
    get suggestion () { return $(".//span[contains(text(),'wdio')]") }
    get introAgreeButton () { return $(".//*[@id='introAgreeButton']") }

    async closePopUp() {
        //await browser.pause(5000);
        let iframe = await browser.findElement("xpath", ".//iframe");
        await browser.switchToFrame(iframe);
        await (await this.introAgreeButton).click();
    }

    async searchText(text) {
        await (await this.inputSearch).setValue(text);
    }

    async chooseFirstSuggestion() {
        await (await this.suggestion).click();
    }
}

module.exports = new SearchPage();
