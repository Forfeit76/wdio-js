const fs = require('fs')

class WebdriverIoMainPage {
    
    get announcement () { return $(".//div[contains(@class,'announcementBarContent')]") }

    saveCookie() {
        const cookie = browser.getCookies();
        fs.writeFile('cookie.txt', JSON.stringify(cookie), function (err) {
        });
    }
}

module.exports = new WebdriverIoMainPage();
