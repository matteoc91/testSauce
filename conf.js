// conf.js
var username = "matteoc91",
    accessKey = "ffaa95ec-3252-4543-813e-5a506f3e4740";
exports.config = {
    framework: 'jasmine',

    sauceUser: username,
    sauceKey: accessKey,

     specs: [
        //TODO: add here other suites
        './exercise1/calculator.solution.js',
        './exercise2/todo.solution.js'
    ],

    params: {
        //TODO: add global params here
        exercise1: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex1/'
        },
        exercise2: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex2/'
        }
    }

};
