// Copyright 2019, Oath Inc.
// Licensed under the terms of the MIT license. See LICENSE file in project root for terms.

var gulp = require("gulp"),
  consolidate = require("gulp-consolidate"),
  iconfont = require("gulp-iconfont"),
  zip = require("gulp-zip"),
  image = require("gulp-image");

gulp.task("iconfont", function() {
  return gulp
    .src("build/svg/*.svg")
    .pipe(
      iconfont({
        fontName: "denali-icon-font",
        formats: ["ttf", "svg", "eot", "woff"],
        appendCodepoints: true,
        appendUnicode: false,
        normalize: true,
        fontHeight: 1000
      })
    )
    .on("glyphs", function(glyphs, options) {
      gulp
        .src("build/denali-icon-font.css")
        .pipe(
          consolidate("underscore", {
            glyphs: glyphs,
            fontName: options.fontName,
            fontDate: new Date().getTime()
          })
        )
        .pipe(gulp.dest("dist"));

      gulp.src("build/svg/*.svg").pipe(gulp.dest("docs/downloads/svg"));

      gulp
        .src("build/svg/*")
        .pipe(zip("denali-icon-svg.zip"))
        .pipe(gulp.dest("docs/downloads"));

      gulp.src("build/png/*.png").pipe(gulp.dest("docs/downloads/png"));

      gulp
        .src("build/png/*")
        .pipe(zip("denali-icon-png.zip"))
        .pipe(gulp.dest("docs/downloads"));

      gulp
        .src("dist/*")
        .pipe(zip("denali-icon-fonts.zip"))
        .pipe(gulp.dest("docs/downloads"));

      // gulp.src('build/svg/*')
      //     .pipe(image())
      //     .pipe(gulp.dest('docs/downloads/png'));

      // gulp.src('build/denali-icon-names.js')
      //     .pipe(consolidate('underscore', {
      //         glyphs: glyphs,
      //         fontName: options.fontName,
      //         svgCode:
      //     }))
      //     .pipe(gulp.dest('docs/js'));
    })
    .pipe(gulp.dest("dist"));
});
