var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    //seleniumAddress:'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs : ['./tests/testCalculator.js'],
    suites:{
        smoke:['./tests/form_submission_test.js'],
        regression:['./tests/form_submission_test.js','spec.js'],
    },
    onPrepare:function(){
        //maximize browser
        browser.manage().window().maximize();
        //beautiful report
        jasmine.getEnv().addReporter(
            new HtmlReporter({
                baseDirectory: 'reports/screenshots',
                //name of the html report
                docName: 'AutomationReport.html',
                //if below is true takes screensghots for only failed cases
                takeScreenShotsOnlyForFailedSpecs: true,
                //clears the old reports and genetare new
                preserveDirectory: false,
            }).getJasmine2Reporter());
          
    }


};