/*
TCWCYPRESS
  >cypress
    >downloads
    >e2e
     >tests
    >fixtures
    >pages
    >support
 >node_modules
  cypress.config.js
  package_lock.json
  package.json

*/

//////////----- Installation Part ------------///////////////
//1. Install node on the system

//2. Go to the project folder and open terminal
// npm init
// This step will create package.json

//3. install cypress
// npm install cypress --save-dev
// This will create node_modules package
// package-lock.json will also be created

//4.To open cypress
//npx cypress open
// This will open cypress runner
// Click on Scaffold and this will create e2e, fixtures, support, cypress.config.js folders and files

///-----Creating a Page Object Model ----------////////////////
//1. To pass the URl, go to config file and create an env object
// and pass the URL over there

//2. to export the class, write export before the class name
// export class Login{  }

//3. in order to import the page class in another test class
// import {Login} from "../../pages/registerPage"

//4. Create an object of the imported class right above the test class
// loginObj = new Login()

//5. Import fixture file in the test file


////------- Commands.js -----------///////////////
//1. Create Login Method
// for accessing the URL, go to config.js and inside e2e
// write baseUrl: 'theUrl'
// access this url in command.js by writing cy.visit('') in login method

////--------- Headless Mode ----////////////////
// To run a specific test file:-
// npx cypress run --spec cypress/e2e/LoginTest.cy.js
// To run all files:-
// npx cypress run 

////--------- Headed Mode ----////////////////
// npx cypress run --spec cypress/e2e/LoginTest.cy.js --headed
// with browser option:-
// npx cypress run --spec cypress/e2e/LoginTest.cy.js --browser chrome

///---------Run test cases using cypress script-----////////
//1. go to package.json
// Locate the "scripts" object and write this:
// "test:addTimesheetTest":"npx cypress run --spec cypress/e2e/LoginTest.cy.js --browser chrome"

//2. to run the script
//Go to the terminal and write 
// npm run test:addTimesheetTest


///---------Set Up Report ------///////////////////////
//1. install cypress-mochawesome-reporter
// npm i --save-dev cypress-mochawesome-reporter

//2. edit cypress.config.js
// add this  reporter: 'cypress-mochawesome-reporter', above e2e
// add this require('cypress-mochawesome-reporter/plugin') (on); in setupNodeEvents

//3. Add to cypress/support/e2e.js
//  import 'cypress-mochawesome-reporter/register';

///-----------GitHub Actions ------------////////////
//1. create a folder .github and a subfolder workflows
//2. create different yml files in this folder



// --------------- Other Configurations -----------------------------

//-------Verify Dowloaded files
//  https://www.npmjs.com/package/cy-verify-downloads
// https://elaichenkov.medium.com/cypress-how-to-verify-that-file-is-downloaded-with-cy-verify-downloads-c520b7760a69

// --- Change configuration for a particular cy.js file -- Suite level 
//1. Go to an cy.js file 
//2. At the top, just add this line
// Cypress.config('defaultCommandTimeout', 1000)

// --- Change configuration for a particular test -- it level
/*
  it('hello world', {
    baseUrl: "https://google.com"
    defaultCommandTimeout: 5000,
  }, () => {
    cy.visit('/')
  })

*/

//-----------------------Parallel Execution and mochawesome report Configurations---------------------------
// --> Links For reference
//https://medium.com/@beginners_log/set-up-cypress-reports-for-parallel-run-fb4c3c0c8862
//https://github.com/LironEr/cypress-mochawesome-reporter/tree/master/examples/cypress-parallel
//https://github.com/cypress-io/testing-workshop-cypress/blob/master/slides/09-reporters/PITCHME.md#mochawesome
//https://github.com/tnicola/cypress-parallel/issues/30
//https://www.npmjs.com/package/cypress-parallel
//https://www.youtube.com/watch?v=FLXkI-hvUNA
//https://medium.com/@ivan_xue/how-to-run-tests-in-parallel-without-recording-to-cypress-cloud-from-azure-ci-c88b426b4154
//https://www.youtube.com/watch?v=jvBzNs0pRXU
