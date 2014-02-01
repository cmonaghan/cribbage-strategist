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
    },
    jade: {
      compile: {
        files: {
          "public/html/index.html": ["app/templates/*.jade"]
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default tasks
  grunt.registerTask('default', ['coffeelint', 'browserify', 'jade']);
};