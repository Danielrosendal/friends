var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var LiveServer = require('gulp-live-server');
var server =  LiveServer.static();

gulp.task('live-server',function() {
    var server = new LiveServer('server/main.js');
    server.start();
})

gulp.task('bundle',['copy'],function(){
    return browserify({
        entries:'app/main.jsx',
        debug:true,
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
})

gulp.task('process-styles', function() {
	return gulp.src('./app/public/less/*.less')
	.pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }).on('error', function(err) {
		this.emit('end');
	}))
    .pipe(gulp.dest('./app/public/css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifyCss())
	.pipe(gulp.dest('./app/public/css'));
})

gulp.task('copy', ['process-styles'],function(){
    gulp.src(['app/public/css/*.css', 'bower_components/skeleton/css/*.css'])
    .pipe(gulp.dest('./.tmp'));
})

gulp.task('serve',['bundle','live-server'],function() {
    browserSync.init(null,{
        proxy:"http://localhost:7777",
        port: 9001
    })
})

// How to get watch on less & jsx?
gulp.task('serveCssW', function() {
    gulp.watch('./app/public/less/*.less', ['copy']);
})

gulp.task('serveJsxW', ['serve'], function() {
    gulp.watch(['./app/components/*.jsx'], ['bundle']);
})