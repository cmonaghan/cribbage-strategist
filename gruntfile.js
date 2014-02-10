module.exports = function(grunt) {
  // Do grunt-related things in here

  // configure tasks
  grunt.initConfig({

    express: {
      dev: {
        options: {
          script: 'server/server.js'
        }
      }
    },
    coffeelint: {
      app: ['app/coffee/*.coffee']
    },
    browserify: {
      dist: {
        files: {
          'public/scripts/main.js': ['app/coffee/app.coffee']
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
        singleRun: true
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      coffee: {
        files: ['app/coffee/*.coffee'],
        tasks: ['coffeelint', 'browserify', 'karma'],
      },
      jade: {
        files: ['app/templates/*.jade'],
        tasks: ['jade', 'karma'],
      },
      karma: {
        files: ['test/*Spec.js'],
        tasks: ['karma']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  // Default tasks
  grunt.registerTask('default', ['coffeelint', 'browserify', 'jade', 'karma', 'express:dev', 'watch']);
};