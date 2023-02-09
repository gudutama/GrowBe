const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const fileInclude = require("gulp-file-include");

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
  });
  gulp.watch("src/**/*.html").on("change", browserSync.reload);
  gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      rename({
        prefix: "",
        suffix: ".min",
      })
    )
    .pipe(autoprefixer())
    .pipe(
      cleanCss({
        compatibility: "ie8",
      })
    )
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("images", function () {
  return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(fileInclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("fonts", function () {
  return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("js", function () {
  return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));
});

gulp.task("icons", function () {
  return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons"));
});

gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.scss", gulp.parallel("styles"));
  gulp.watch("src/img/**/*", gulp.parallel("images"));
  gulp.watch("src/**/*.html").on("change", gulp.parallel("html"));
  gulp.watch("src/fonts/**/*", gulp.parallel("fonts"));
  gulp.watch("src/js/**/*.js", gulp.parallel("js"));
  gulp.watch("src/icons/**/*", gulp.parallel("icons"));
});

gulp.task(
  "default",
  gulp.parallel(
    "server",
    "styles",
    "watch",
    "images",
    "html",
    "fonts",
    "js",
    "icons"
  )
);
