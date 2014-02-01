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
    },
    karma: {
      unit: {
        configFile: 'karma-config.js',
        autowatch: true,
        // background: true
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-karma');

  // Default tasks
  grunt.registerTask('default', ['coffeelint', 'browserify', 'jade', 'karma']);
};