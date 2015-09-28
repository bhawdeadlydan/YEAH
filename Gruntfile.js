module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),



        // --------------------------------------------------------------------------------
        // MIN (YUI COMPRESSOR)
        //
        min:
        {
            dist:
            {
                options: {
                    'report': 'min'
                },
                src: ['src/docroot/yeah.js'],
                dest: 'dist/YEAH.min.js'
            }
        },



        // --------------------------------------------------------------------------------
        // CLEAN
        //
        clean: {
            build: {
                src: ["build"]
            },
            sasscache: {
                src: [".sass-cache"]
            }
        },


        // --------------------------------------------------------------------------------
        // WATCH
        //
        watch: {
            js: {
                files: ['src/docroot/*.js'],
                tasks: ['min']
            }
        }

    });


    // caricamento dei plugin
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    // registerTask
    grunt.registerTask('default', []);
    grunt.registerTask('build', ['min']);
    grunt.registerTask('dev', ['build','watch']);




};
