exports.config = {
    debug: true,
    execArgv: ['--inspect=127.0.0.1:5859'],
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1600,900'],
            },
        acceptInsecureCerts: true
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    sync: true,
    bail: 0,
    baseUrl: 'http://www.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
//    reporters: [['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.saveScreenshot('./artifacts/error.png');
        }
    }
}
