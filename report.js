const reporter = require('cucumber-html-reporter')


const options={
    //themes
    // 1) Bootsrap
    // 2) hierarchy
    // 3) foundation
    // 4) simple

    theme: "bootstrap",
    jsonFile:"cucumber_report.json",
    output:"cucumber_report.html",
    reportSuiteAsScenarios:true,
    launchReport:false
}

reporter.generate(options)