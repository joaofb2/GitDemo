var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

    exports.config = {
 
      seleniumAddress: 'http://localhost:4444/wd/hub',
      specs: ['ProtoCommerce/Home.js'],
 
      onPrepare: () => {   
         //in  Angular Sites comment netx line
         browser.waitForAngularEnabled(false);
         //browser.ignoreSynchronization = true    
        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
          })
        );   
    },

    /*suites :
    {
      Smoke : [".js", ".js"], 
      Regression : 'etc.js'
    },
    */

    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },

      capabilities: {        
          browserName: 'firefox',
          //firefox_binary:"C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe"
      }

  }
  

