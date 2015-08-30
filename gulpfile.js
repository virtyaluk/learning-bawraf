'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    config = {
        port: 8181,
        devBaseUrl: 'http://localhost',
        paths: {
            html: './src/*.html',
            dist: './dist'
        }
    };

gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
})

gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open('', {
            url: config.devBaseUrl + ':' + config.port + '/'
        }));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['html', 'open', 'watch']);