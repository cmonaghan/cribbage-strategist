module.exports = function(grunt) {
  // Do grunt-related things in here

  grunt.initConfig({
    coffeelint: {
      app: ['app/*.coffee']
    }
  });

  // Load the plugin that provides the "coffeelint" task.
  grunt.loadNpmTasks('grunt-coffeelint');

  // Default task(s).
  grunt.registerTask('default', ['coffeelint']);
};