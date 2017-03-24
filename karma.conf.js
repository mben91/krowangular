module.exports = function(config) {
  config.set({
    basePath: 'app/',
    frameworks: ['mocha'],
    files: [
        'tests/**/*.ts'
    ],
    browsers: ["Chrome"],
    // autoWatch: true,
    singleRun: true,
    mime: {
        'text/x-typescript': ['ts','tsx']
    }
  });
};