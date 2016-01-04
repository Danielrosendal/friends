var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var LiveServer = require('gulp-live-server');
var server =  LiveServer.static();

//Enables use of plugins without require $ == gulp-
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();


gulp.task('live-server',function() {
    var server = new LiveServer('server/main.js');
    server.start();
})

gulp.task('bundle',['copy'],function(){
    log('bundle')
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
    log('processing styles')
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
    log('copying processed styles')
    return gulp.src(['app/public/css/*.css', 'bower_components/skeleton/css/*.css'])
    .pipe(gulp.dest('./.tmp'));
    // .pipe(browserSync.stream( { stream:true }));
})

gulp.task('serve',['bundle','live-server'],function() {
    //Styles
    gulp.watch('./app/public/less/*.less', ['copy']);
    //Watch jsx files
    gulp.watch(['./app/components/*.jsx'], ['bundle']);
    // gulp.watch('./.tmp').on('change',reload);
    
    browserSync.init(null, {
        proxy:"http://localhost:7777",
        port: 9001
    })
})

/////////

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

function changeEvent(event) {
    var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
    log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}