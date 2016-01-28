module.exports = {
    dev: {
        files: [{
            expand: true,
			cwd: 'dev/_assets/svg/',
			src: ['*.svg', '!_*.svg'],
			dest: '.tmp/imgs/sprite/',
            rename: function(dest, src) {
                return dest + "icon-sprite.svg.icon__" + src.replace(/\.svg$/, ".png");
            }
        }]
    },
    dist: {
        files: [{
            expand: true,
			cwd: 'dev/_assets/svg/',
			src: ['*.svg', '!_*.svg'],
			dest: 'web/imgs/sprite/',
            rename: function(dest, src) {
                return dest + "icon-sprite.svg.icon__" + src.replace(/\.svg$/, ".png");
            }
        }]
    }
};