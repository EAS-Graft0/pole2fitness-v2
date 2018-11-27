var gulp = require('gulp')
var angularTemplateCache = require('gulp-angular-templatecache');
var mocha = require('gulp-mocha');
var jasmine = require('gulp-jasmine');
var protractor = require('gulp-protractor').protractor;
var watch = require('gulp-watch')
var concat = require('gulp-concat')
var concatCss = require('gulp-concat-css');
var fs = require('fs')
var template = require('gulp-template');
var rename = require('gulp-rename')
var inject = require('gulp-inject')
    // Build Tasks
    /*ang_app*/
gulp.task('buildang:views', function() {
    return gulp.src(['ang_app/scripts/modules/**/*.html']).pipe(angularTemplateCache('templates.js', {
        'module': 'ang-app'
    })).pipe(gulp.dest('ang_app/scripts/'));
});
gulp.task('buildang:scripts', function() {
    return gulp.src(['ang_app/scripts/modules/**/*.js', '!ang_app/scripts/modules/**/*.spec.js']).pipe(concat('scripts.js')).pipe(gulp.dest('ang_app/scripts'));
});
gulp.task('buildang:vendor', function() {
    var target = gulp.src('ang_app/index.html');
    var sources = gulp.src(['bower_components/**/*.min.js', 'bower_components/**/*.css'], {
        read: false,
        cwd: '/checkout/ang_app/'
    });
    return target.pipe(inject(sources), {
        relative: true
    }).pipe(gulp.dest('ang_app/'));
});
gulp.task('buildang:styles', function() {
    return gulp.src('ang_app/scripts/modules/**/*.css').pipe(concatCss("styles.css")).pipe(gulp.dest('ang_app'));
});
gulp.task('buildang:all', ['buildang:views', 'buildang:scripts', 'buildang:styles']);
/*ang_app*/
/*mob_app*/
gulp.task('buildmob:views', function() {
    return gulp.src(['mob_app/scripts/modules/**/*.html']).pipe(angularTemplateCache('templates.js', {
        'module': 'mobApp'
    })).pipe(gulp.dest('mob_app/scripts/'));
});
gulp.task('buildmob:scripts', function() {
    return gulp.src(['mob_app/scripts/modules/**/*.js', '!mob_app/scripts/modules/**/*.spec.js']).pipe(concat('scripts.js')).pipe(gulp.dest('mob_app/scripts'));
});
gulp.task('buildmob:vendor', function() {
    var target = gulp.src('mob_app/index.html');
    var sources = gulp.src(['lib/**/*.min.js', 'lib/**/*.css'], {
        read: false,
        cwd: '/checkout/mob_app/'
    });
    return
});
gulp.task('buildmob:styles', function() {
    return gulp.src('mob_app/scripts/modules/**/*.css').pipe(concatCss("compiled.styles.css")).pipe(gulp.dest('mob_app/css'));
});
gulp.task('buildmob:all', ['buildmob:views', 'buildmob:scripts', 'buildmob:styles']);
/*mob_app*/
gulp.task('build:all', ['buildang:views', 'buildang:scripts', 'buildang:styles', 'buildmob:views', 'buildmob:scripts', 'buildmob:styles']);
// Test Tasks
gulp.task('test:node', function() {
    return gulp.src(['node_app/tests/*.spec.js'], {
        read: false
    }).pipe(mocha({
        "reporter": "mocha-jenkins-reporter",
        "reporterOptions": {
            "junit_report_name": "Tests",
            "junit_report_path": "test_results/mocha_report.xml",
            "junit_report_stack": 1
        },
        globals: {
            should: require('should')
        },
        timeout: 60000
    }));
});
gulp.task('test:protractor', function() {
    return gulp.src('e2e_testing/*.spec.js').pipe(protractor({
        configFile: "protractor.conf.js"
    }));
});
gulp.task('test:all', ['test:node', 'test:angular', 'test:protractor']);
// Helpers
gulp.task('node:route', function() {
    fs.access('node_app/routes/' + process.argv[4] + '.js', function(err) {
        if (err) {
            // file/path is not visible to the calling process
            gulp.src('helper_templates/route_function.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.js')).pipe(gulp.dest('node_app/route_functions/'))
            gulp.src('helper_templates/route.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.js')).pipe(gulp.dest('node_app/routes/'))
            gulp.src('helper_templates/route_function_test.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.spec.js')).pipe(gulp.dest('node_app/tests/'))
        } else {
            console.log('ERROR: Route with the name: ' + process.argv[4] + '.js already exists in this project')
        }
    });
})
gulp.task('angular:view', function() {
    fs.access('ang_app/scripts/modules/' + process.argv[4] + '/' + process.argv[4] + '.html', function(err) {
        if (err) {
            gulp.src('helper_templates/view_template.html').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.html')).pipe(gulp.dest('ang_app/scripts/modules/' + process.argv[4] + '/'))
            gulp.src('helper_templates/view_controller.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.Ctrl.js')).pipe(gulp.dest('ang_app/scripts/modules/' + process.argv[4] + '/'))
            gulp.src('helper_templates/angular_test.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.spec.js')).pipe(gulp.dest('ang_app/scripts/modules/' + process.argv[4] + '/'))
            gulp.src('helper_templates/view_css.css').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.css')).pipe(gulp.dest('ang_app/scripts/modules/' + process.argv[4] + '/'))
            gulp.src('helper_templates/angular.route.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '_route.js')).pipe(gulp.dest('ang_app/scripts/modules/' + process.argv[4] + '/'))
        } else {
            console.log('ERROR: View with the name: ' + process.argv[4] + '.html already exists in this project')
        }
    });
});
gulp.task('mobile:view', function() {
    fs.access('mob_app/scripts/modules/' + process.argv[4] + '/' + process.argv[4] + '.html', function(err) {
        if (err) {
            gulp.src('helper_templates/mob_view_template.html').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.html')).pipe(gulp.dest('mob_app/scripts/modules/' + process.argv[4] + '/'))
            gulp.src('helper_templates/mob_view_controller.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.Ctrl.js')).pipe(gulp.dest('mob_app/scripts/modules/' + process.argv[4] + '/'))
            gulp.src('helper_templates/angular_test.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.spec.js')).pipe(gulp.dest('mob_app/scripts/modules/' + process.argv[4] + '/'))
            gulp.src('helper_templates/view_css.css').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '.css')).pipe(gulp.dest('mob_app/scripts/modules/' + process.argv[4] + '/'))
            gulp.src('helper_templates/ionic.route.js').pipe(template({
                name: process.argv[4]
            })).pipe(rename(process.argv[4] + '_route.js')).pipe(gulp.dest('mob_app/scripts/modules/' + process.argv[4] + '/'))
        } else {
            console.log('ERROR: View with the name: ' + process.argv[4] + '.html already exists in this project')
        }
    });
});
// Watcher
gulp.task('watch', function() {
    /*ang_app*/
    gulp.watch('ang_app/scripts/modules/**/*.html', {
        usePolling: true
    }, ['buildang:views'])
    gulp.watch(['ang_app/scripts/modules/**/*.js', '!ang_app/scripts/modules/**/*.spec.js'], {
        usePolling: true
    }, ['buildang:scripts'])
    gulp.watch('ang_app/scripts/modules/**/*.css', {
        usePolling: true
    }, ['buildang:styles']);
    /*ang_app*/
    /*mob_app*/
    gulp.watch('mob_app/scripts/modules/**/*.html', {
        usePolling: true
    }, ['buildmob:views'])
    gulp.watch(['mob_app/scripts/modules/**/*.js', '!mob_app/scripts/modules/**/*.spec.js'], {
        usePolling: true
    }, ['buildmob:scripts'])
    gulp.watch('mob_app/scripts/modules/**/*.css', {
        usePolling: true
    }, ['buildmob:styles']);
    /*mob_app*/
});