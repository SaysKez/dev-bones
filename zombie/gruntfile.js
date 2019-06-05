 module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            // 2. Configuration for files goes here.
            uglify: {
                build: {
                    src: 'js/main.js',
                    dest: 'site/js/main.min.js'
                }
            },

            imagemin: {
                dynamic: {
                    files: [{
                        expand: true,
                        cwd: 'img/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'site/img/'
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
                    'site/index.html': 'index.html',     // 'destination': 'source'
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