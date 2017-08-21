"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');

/*
 * Cpy node server to dist folder.
 */
gulp.task("server", function () {
    return gulp.src(["index.js", "package.json"], { cwd: "server/**" })
        .pipe(gulp.dest("dist"));
});


/**
 * Build the project.
 */
gulp.task("default", ['server'], function () {
    console.log("Building the project ...");
});