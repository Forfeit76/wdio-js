const fs = require('fs')

class WebdriverIoMainPage {

    constructor(){
        this.announcement = () => ($(".announcementBarContent_2EqR"));
    }

    saveCookie() {
        const cookie = browser.getCookies();
        console.log("COOKIE: " + cookie);
        fs.writeFile('cookie.txt', JSON.stringify(cookie), function (err) {
        });
    }
}

module.exports = new WebdriverIoMainPage();
