module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		responsive_images: {
			dev: {
				files: [{
					expand: true,
					src: ['images/**/*.{jpg,gif,png}'],
					cwd: 'src/',
					dest: 'dist/'
				}]
			}
		},
		jshint: {
			options: {
				"eqeqeq": true
			},
			all:[
				'Gruntfile.js'
			]
		},
	});

	grunt.registerTask('default',[
			'jshint',
			'responsive_images',
		]);
};