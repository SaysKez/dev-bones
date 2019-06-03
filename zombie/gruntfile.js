/*
module.exports = function(grunt) {

    // Utility to load the different option files
    // based on their names
    function loadConfig(path) {
      var glob = require('glob');
      var object = {};
      var key;
  
      glob.sync('*', {cwd: path}).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + option);
      });
  
      return object;
    }
  
    // Initial config
    var config = {
      pkg: grunt.file.readJSON('package.json')
    }
  
    // Load tasks from the tasks folder
    grunt.loadTasks('tasks');
  
    // Load all the tasks options in tasks/options base on the name:
    // watch.js => watch{}
    grunt.util._.extend(config, loadConfig('./tasks/options/'));
  
    grunt.initConfig(config);
  
    require('load-grunt-tasks')(grunt);
  
    // Default Task is basically a rebuild
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'autoprefixer', 'cssmin']);
  
    // Moved to the tasks folder:
    // grunt.registerTask('dev', ['connect', 'watch']);
  
  };
  */

 module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            // 2. Configuration for files goes here.
            uglify: {
                build: {
                    src: 'js/animation.js',
                    dest: 'js/animation.min.js'
                }
            },

            imagemin: {
                dynamic: {
                    files: [{
                        expand: true,
                        cwd: 'casestudy/images/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'build/casestudy/images/'
                    }]
                }
            },

            sass: {
                dist: {
                    options: {
                        style: 'compressed'
                    },
                    files: {
                        'css/style.css': 'css/style.scss'
                    }
                } 
            },

            jekyll: {
                dist: {
                  options: {
                    config: '_config.yml',
                  }
                }
              },

            watch: {
                scripts: {
                    files: ['js/*.js'],
                    tasks: ['uglify'],
                    options: {
                        spawn: false,
                    }
                },
                css: {
                    files: ['css/*.scss'],
                    tasks: ['sass'],
                    options: {
                        spawn: false,
                    }
                }
            },

            htmlmin: {                                     // Task
                dist: {                                      // Target
                  options: {                                 // Target options
                    removeComments: false,
                    collapseWhitespace: true
                  },
                  files: {                                   // Dictionary of files
                    '_site/index.html': '_site/index.html',     // 'destination': 'source'
                  }
                },
              }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', ['uglify', 'imagemin']);
    grunt.registerTask('default', ['uglify', 'sass', 'jekyll', 'htmlmin']);

};