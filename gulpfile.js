const { src, dest, parallel } = require('gulp');
//const nunjucks = require('gulp-nunjucks');
//const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
    return src('src/index.html')
//    .pipe(nunjucks.compile())
        .pipe(dest('build'))
}

// function image() {
//     return src('src/img/*.{jpg,png,tiff,bmp}')
//         .pipe(image())
//         .pipe(dest('build/image'))
// }

function css() {
    return src('src/css/*.css')
//    .pipe(less())
        .pipe(minifyCSS())
        .pipe(dest('build/css'))
}

function js() {
    return src('src/js/*.js', { sourcemaps: true })
        .pipe(concat('app.min.js'))
        .pipe(dest('build/js', { sourcemaps: true }))
}

exports.js = js;
//exports.image = image;
exports.css = css;
exports.html = html;

exports.default = parallel(html, css, js);