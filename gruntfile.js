'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			gruntfile: {
				src: 'gruntfile.js',
				options: {
					node: true
				}
			},
			app: {
				src: [
					'src/javascript/**/*.js',
					'!src/javascript/libs/**',
					'!**/bundle.js'
				],
				options: {
					jshintrc: '.jshintrc',
				}
			}
		},
		browserify2: {
			dev: {
				entry: './src/javascript/app2.js',
				compile: './dev-build/javascript/bundle.js',
				debug: true
			},
			release: {
				entry: './src/javascript/app2.js',
				compile: './build/javascript/bundle.js',
				debug: false
			}
		},
		includereplace: {
			options: {
				globals: {
					name: '<%= pkg.name %>',
					version: '<%= pkg.version %>',
					date: '<%= grunt.template.today("dd-mm-yyyy") %>',
					time: '<%= grunt.template.today("HH:MM:ss") %>',
					cachebust: '<%= grunt.template.today("isoUtcDateTime") %>'
				}
			},
			dev: {
				src: 'index.html',
				dest: 'dev-build/',
				expand: true,
				cwd: 'src/'
				
			},
			release: {
				src: 'index.html',
				dest: 'build/',
				expand: true,
				cwd: 'src/'
				
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
			},
			release: {
				files: {
					'<%= browserify2.release.compile %>': ['<%= browserify2.release.compile %>']
				}
			}
		},
		compass: {
			release: {
				options: {
					sassDir: 'src/sass',
					cssDir: 'build/css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'src/sass',
					cssDir: 'dev-build/css'
				}
			}
		},
		copy: {
			dev: {
				expand: true,
				cwd: 'src/',
				src: [
					'**',
					'!index.html',
					'!sass/**',
					'!javascript/**',
					'!templates/**'
				],
				dest: 'dev-build/'
			},
			release: {
				expand: true,
				cwd: 'src/',
				src: [
					'**',
					'!index.html',
					'!sass/**',
					'!javascript/**',
					'!templates/**'
				],
				dest: 'build/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify2');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');


	grunt.registerTask('default', ['jshint', 'browserify2:dev', 'includereplace:dev', 'compass:dev', 'copy:dev']);
	grunt.registerTask('html', ['includereplace:dev']);
	grunt.registerTask('js', ['jshint', 'browserify2:dev']);
	grunt.registerTask('build', ['jshint', 'browserify2:release', 'includereplace:release', 'uglify:release', 'compass:release', 'copy:release']);

};