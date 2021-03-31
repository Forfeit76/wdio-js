const BaseGooglePage = require('./google.page');

class SearchResultPage extends BaseGooglePage {

    // constructor(){
    //     super();
    //     resultTitle = () => ($('#search a>h3'));
    // }

    get resultTitle () { return $('#search a>h3') }

    openFirstSearchResult() {
        this.resultTitle.click();
    }
}

module.exports = new SearchResultPage();
