 module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            // 2. Configuration for files goes here.
            uglify: {
                my_target: {
                  files: [{
                    expand: true,
                    cwd: 'js',
                    src: '**/*.js',
                    dest: 'site/js',
                    //ext: '.min.js',
                  }]
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
                        'site/css/main.css': 'css/main.scss'
                    }
                } 
            },

            cssmin: {
              target: {
                files: [{
                  expand: true,
                  cwd: 'css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'site/css',
                  //ext: '.min.css'
                }]
              }
            },

            watch: {
                scripts: {
                    files: ['js/*.js', 'js/vendor/*.js'],
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
                  files: {                                // Dictionary of files
                    'site/index.html': 'index.html',     // 'destination': 'source'
                    'site/404.html': '404.html'
                    // Add more pages here
                  }
                },
              }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'imagemin', 'sass', 'htmlmin', 'cssmin']);

};