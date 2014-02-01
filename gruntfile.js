module.exports = function(grunt) {
  // Do grunt-related things in here

  // configure tasks
  grunt.initConfig({
    coffeelint: {
      app: ['app/*.coffee']
    },
    browserify: {
      dist: {
        files: {
          'public/scripts/main.js': ['app/*.coffee']
        },
        options: {
          transform: ['coffeeify']
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-browserify');

  // Default tasks
  grunt.registerTask('default', ['coffeelint', 'browserify']);
};