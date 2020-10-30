// Copyright 2019, Oath Inc.
// Licensed under the terms of the MIT license. See LICENSE file in project root for terms.

var gulp = require("gulp"),
  consolidate = require("gulp-consolidate"),
  iconfont = require("gulp-iconfont"),
  zip = require("gulp-zip");

gulp.task("iconfont", function() {
  return gulp
    .src("build/svg/*.svg")
    .pipe(
      iconfont({
        fontName: "denali-icon-font",
        formats: ["ttf", "svg", "eot", "woff"],
        prependUnicode: true,
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

      gulp
        .src("docs/downloads/svg/*")
        .pipe(zip("denali-icon-svg.zip"))
        .pipe(gulp.dest("docs/downloads"));

      gulp
        .src("docs/downloads/png/*")
        .pipe(zip("denali-icon-png.zip"))
        .pipe(gulp.dest("docs/downloads"));

      gulp
        .src("dist/*")
        .pipe(zip("denali-icon-font.zip"))
        .pipe(gulp.dest("docs/downloads"));

    })
    .pipe(gulp.dest("dist"));
});
