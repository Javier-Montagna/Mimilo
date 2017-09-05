"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');

/*
 * Copy node server to dist folder.
 */
gulp.task("server", function () {
    return gulp.src(["index.js", "package.json"], { cwd: "server/**" })
        .pipe(gulp.dest("dist"));
});

/*
 * Copy webconfig file to dist folder.
 */
gulp.task("webconfig", function () {
    return gulp.src(["web.config"], { cwd: "./" })
        .pipe(gulp.dest("dist"));
});

/**
 * Build the project.
 */
gulp.task("default", ['server','webconfig'], function () {
    console.log("Building the project ...");
});