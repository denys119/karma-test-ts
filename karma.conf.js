
module.exports = function (config) {
  config.set({
    singleRun: true,
    plugins: [
      'karma-mocha',
      'karma-typescript',
      'karma-chrome-launcher',
      'karma-structured-json-reporter'
    ],
    frameworks: ['mocha', 'karma-typescript'],
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    preprocessors: {
      "**/*.ts": "karma-typescript"
    },
    files: [
      './app/**/*.[tj]s'
    ],
    karmaTypescriptConfig: {
      bundlerOptions: {
        transforms: [
          require("karma-typescript-es6-transform")()
        ]
      },
    },
    browserDisconnectTimeout: 10000,
    browserConsoleLogOptions: { format: "%T: %m", terminal: true, path: './app/results/console.txt' },
    reporters: ['json-result'],
    jsonResultReporter: {
      outputFile: './app/results/karma-result.json',
    }
  });
}
