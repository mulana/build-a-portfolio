module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					sizes: [{
						name: 'small',
						width: 320,
						height: 240
						},{
						name: 'medium',
						width: 500
						},{
						name: 'large',
						width: 800
						},{
						name: "large",
						width: 1600,
						separator: "-",
						suffix: "_x2",
						quality: 50
					}]
				},
				files: [{
					expand: true,
					src: ['*.{jpg,gif,png}'],
					cwd: 'src/images_src/',
					dest: 'src/img'
				}]
			}
		},
	});

	grunt.registerTask('default',['responsive_images']);
};