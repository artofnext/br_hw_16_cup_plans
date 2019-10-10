let gulp = require('gulp');
let sass = require('gulp-sass');


gulp.task("compile", function() {
    return gulp.src("./css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest((file) => {
            return file.base;
        }));
});

gulp.task("watch", () => {
    return gulp.watch("./css/*.scss", gulp.series('compile'));
})

gulp.task("default", gulp.series('compile'));