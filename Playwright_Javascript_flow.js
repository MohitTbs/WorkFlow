//1. Installing playwright
// npm init -y
// npm init playwright@latest

//2. Run playwright test
// npx playwright test tests/abc.spec.js --headed chrome

//3. USing worker
// npx playwright test tests/abc.spec.js --headed --workers=4 chrome

//4. Use loggers
// npm install log4js
// Create a Logging folder and create two files: log4js.config.js and logger.js

// log4js.config.js-----------------------
// const log4js = require('log4js');
// log4js.configure({
//     appenders: {
//         file: { type: 'file', filename:'testdata.log'},
//         console: { type: 'console' }
//     },
//     categories: {
//         default: { appenders: ['file', 'console'], level: 'info' }
//     }
// });

// module.exports = log4js;


// logger.js ---------------------------
// const log4js = require('./log4js.config');
// const logger = log4js.getLogger();

// module.exports = logger;

//  To use logger in other files-------------------
// import logger from logger.js


//5. Before Suite After Suite -- Code to run before and after all tests
// Create global-setup.js and global-teardown.js
// Mention these two files in playwright.config.js as 
// globalSetup: './tests/global-setup.js',
// globalTeardown: './tests/global-teardown.js',

// code for global  file

// module.exports = async () => {
//     // Your setup/teardown code here
// };

//6. Befor Method After Method, beforeEach and afterEach --- code to run before and after every testcase
// Create a file hook.js -- you can give it any name

//hooks.js

// const { test,events } = require('@playwright/test');
// const logger = require('../Logging/logger');
// //const {allure} = require('allure-playwright')

// test.beforeEach(async ({ page }, testInfo) => {
//   // Perform common setup actions before each test case
//   logger.info(`${String(test.name)} Started`)
//   logger.info(`${String(testInfo.title)} Started`)
// });

// test.afterEach(async ({page}, testInfo) => {
//     logger.info(testInfo.status)
//     if(testInfo.status == 'failed'){
//       let test_name = testInfo.title
//         await page.screenshot({ path: './Screenshots/'+test_name+'.png' });
//         // await allure.attachment("basic-page-screen", await page.screenshot(), {
//         //   contentType: "image/png",})
//     }
// })


// To use this, go to any test file abc.spec.js write down this:
// use(require('./hooks')) --> to import use --> const {test, expect, use} = require('@playwright/test');

//7. To wait for any action we can set time in playwright.config.js
// use {
//     actionTimeout:10000,
//     navigationTimeout:25000

// },
//   timeout: 5*60*1000, -- to set the test case time, if it is 15000 ms, then test cases are not aloowed to exceed it

// 8. viewport, use this inside
// projects:[ {name: 'chromium',
//use: { ...devices['Desktop Chrome'],viewport: { width: 1920, height: 920 },}]

// 9. parameterization:
//  I have a json file named testdata.json:
// [
//     {
//         "username": "sam1",
//         "password": "Test@134"
//     },
//     {
//         "username": "sam2",
//         "password": "Test@134"
//     },
//     {
//         "username": "sam3",
//         "password": "Test@134"
//     }
// ]

// Use this file in a test:

// const { test, expect } = require('@playwright/test');
// const data1 = JSON.parse(JSON.stringify(require('../tests/testdata.json')))

// // test.describe('To test datadriver', () => {

// //     let count = 1
// //     for (const data of data1) {
// //         test('Data Driven' + ' ' + count, async ({ page }) => {

// //             await page.goto('https://apps.timeclockwizard.com/Login?subDomain=qcqae')

// //             console.log(data.username)
// //             console.log(data.password)

// //         })
// //         count++
// //     }

// // })

// let count = 1
// for (const data of data1) {
//     test.skip('Data Driven' + ' ' + count, async ({ page }) => {

//         await page.goto('https://apps.timeclockwizard.com/Login?subDomain=qcqae')

//         console.log(data.username)
//         console.log(data.password)

//     })
//     count++
// }


// I have another file from where I just want to send data / as a properties file: 
//testingdata.json:
// {
//     "loginTest" : {
//         "username":"sa",
//         "password":"123456"
//     },
//     "timesheetTest": {
//         "employee": "As Sa"
//     }
// }

// 10. Setting up environment with .env  files
// first install --> npm install dotenv --save
// create a folder and inside this folder create two files say: .env.development, .env.staging
// These .env file stores the key value pairs such as ENV=staging, URL=staging.pre.com

// Now go to playwright.config.js file
// import dotenv as const dotenv = require('dotenv')
// somewhere on the top write this:

// dotenv.config({
//   path: `./env/.env.${process.env.ENV}`       // You can give any name to ENV
// });

// Before running the test you need to set the environmnet from terminal
// This is the documentation: https://playwright.dev/docs/test-parameterize
// If you are on powershell:
// $env.ENV="staging"   //-- This will take .env.staging file
// and the write: npx playwright test



//11. Run a specific test
// npx playwright test -g "name of the test"

//12. Implement Allure Reports
//We have to install allure-commandline first
// npm install -g allure-commandline --save-dev

// Install playwright-allure
// npm i -D @playwright/test allure-playwright

// Give path to the allure result generation in playwright.config.js file

// After the tests have been executed, we can generate the allure report by the following command
//allure generate allure-results -o allure-report --clean   -->This will generate allure-report folder
//allure open allure-report --> This will open the allure result in a browser
