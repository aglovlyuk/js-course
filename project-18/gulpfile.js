const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const del = require("del");

const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;

const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");

const imagemin = require("gulp-imagemin");

const options = {
    src: {
        // Source paths
        html: "src/**/*.html",
        js: "src/js/**/*.js",
        style: "src/scss/**/*.scss",
        //img: "src/images/**/*.*",
    },
    dist: {
        // Dist paths
        html: "dist/",
        js: "dist/js/",
        style: "dist/css/",
        //img: "dist/images/",
    },

    imagemin: {
        images: [
            imagemin.gifsicle({
                interlaced: true,
                optimizationLevel: 3,
            }),
            imagemin.mozjpeg({
                quality: 91,
                progressive: true,
            }),
            imagemin.optipng({
                optimizationLevel: 5,
            }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeDimensions: true },
                    { cleanupIDs: false },
                ],
            }),
        ],
    },

    del: ["dist/**"],
};

function browsersync() {
    browserSync.init({
        server: { baseDir: "dist/" },
    });
}

function cleanup() {
    return del(options.del);
}

function scripts() {
    return gulp
        .src(["node_modules/jquery/dist/jquery.min.js", options.src.js])
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest(options.dist.js))
        .pipe(browserSync.stream());
}

function styles() {
    return gulp
        .src(options.src.style)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(gulp.dest(options.dist.style))
        .pipe(browserSync.stream());
}

function startwatch() {
    gulp.watch(["src/**/*.js"], scripts);
    gulp.watch("src/scss/*.scss", styles);
    gulp.watch("src/index.html").on("change", browserSync.reload);
    //gulp.watch("src/images/**/*", images);
}

function buildHtml() {
    return gulp
        .src(["src/index.html"], {
            base: "src",
        })
        .pipe(gulp.dest(options.dist.html));
}

exports.browsersync = browsersync;

//exports.images = images;

exports.default = gulp.parallel(
    buildHtml,
    scripts,
    styles,
    browsersync,
    startwatch
);

exports.build = gulp.series(cleanup, scripts, styles, buildHtml);
