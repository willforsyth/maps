module.exports = {
    compile: {
        options: {
            baseUrl: 'dev/_assets/scripts',
            paths: {
                requireLib: '../../../bower_components/requirejs/require',
                jquery: '../../../bower_components/jquery/dist/jquery',
                cycle2: '../../../bower_components/jquery-cycle2/build/jquery.cycle2.min',
                typed: '../../../bower_components/typed.js/dist/typed.min'
            },
            name: 'main',
            out: 'web/scripts/main.js',
            include: ['requireLib'],
        }
    }
};
