const fs = require('fs')

class WebdriverIoMainPage {
    
    get announcement () { return $(".//div[contains(@class,'announcementBarContent')]") }

    saveCookie() {
        const cookie = browser.getCookies();
        console.log(`X = ${JSON.stringify(cookie)}`);
        fs.writeFile('cookie.txt', JSON.stringify(cookie), function (err) {
        });
    }
}

module.exports = new WebdriverIoMainPage();
