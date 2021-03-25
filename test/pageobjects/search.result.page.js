const BaseGooglePage = require('./google.page');

class SearchResultPage extends BaseGooglePage {

    get resultTitle () { return $('#search a>h3') }

    async openFirstSearchResult() {

        await (await this.resultTitle).click();
    }
}

module.exports = new SearchResultPage();
