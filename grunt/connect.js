module.exports = {
    options: {
        port: 9000,
        open: process.env.USER != 'vagrant',
        livereload: 35729,
        hostname: '0.0.0.0'
    },
    livereload: {
        options: {
            middleware: function(connect) {
                return [
                    connect.static('.tmp'),
                    connect().use('/bower_components', connect.static('./bower_components'))
                ];
            }
        }
    }
};
