// Copyright 2019, Oath Inc.
// Licensed under the terms of the MIT license. See LICENSE file in project root for terms.


var gulp = require('gulp'),
    consolidate = require('gulp-consolidate'),
    iconfont = require('gulp-iconfont'),
    zip = require('gulp-zip'),
    image = require('gulp-image');

gulp.task('iconfont', function () {
   return gulp.src('assets/svg/*.svg')
        .pipe(iconfont({
            fontName: 'denali-icon-font-v1.0.0',
            formats: ['ttf', 'svg', 'eot', 'woff'],
            appendCodepoints: true,
            appendUnicode: false,
            normalize: true,
            fontHeight: 1000
        }))
        .on('glyphs', function (glyphs, options) {
            gulp.src('assets/denali-icon-font-v1.0.0.css')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontDate: new Date().getTime()
                }))
                .pipe(gulp.dest('dist/css'));

            gulp.src('assets/svg/*.svg')
                .pipe(gulp.dest('dist/downloads/svg'));

            gulp.src('assets/svg/*')
                .pipe(zip('denali-icon-svg-v1.0.0.zip'))
                .pipe(gulp.dest('dist/downloads'));

            gulp.src('assets/png/*.png')
                .pipe(gulp.dest('dist/downloads/png'));

            gulp.src('assets/png/*')
                .pipe(zip('denali-icon-png-v1.0.0.zip'))
                .pipe(gulp.dest('dist/downloads'));

            gulp.src('dist/fonts/*')
                .pipe(zip('denali-icon-fonts-v1.0.0.zip'))
                .pipe(gulp.dest('dist/downloads'));

            // gulp.src('assets/svg/*')
            //     .pipe(image())
            //     .pipe(gulp.dest('dist/downloads/png'));

            // gulp.src('assets/denali-icon-names.js')
            //     .pipe(consolidate('underscore', {
            //         glyphs: glyphs,
            //         fontName: options.fontName,
            //         svgCode:
            //     }))
            //     .pipe(gulp.dest('dist/js'));
        })
        .pipe(gulp.dest('dist/fonts'));
});
