// Karma configuration
// Generated on Wed Apr 27 2016 20:39:25 GMT+0800 (PHT)

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // list of files / patterns to load in the browser
    files: ['src/tests.webpack.js'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		    'src/tests.webpack.js': ['webpack', 'sourcemap']
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

	coverageReporter: {
		dir: 'coverage/',
		reporters: [
			{ type: 'text-summary' },
			{ type: 'html' }
		]
	},

	webpack: require('./webpack.config'),

  webpackMiddleware: {
    noInfo: 'errors-only'
  }

    // port: 9876,
    // colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    // basePath: '',

    // list of files to exclude
    // exclude: [
    // ],

    // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,

    // Concurrency level
    // how many browser should be started simultaneous
    // concurrency: Infinity
  })
}
