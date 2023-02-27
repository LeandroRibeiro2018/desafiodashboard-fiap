//const path = require('path');
const express = require('express');
const  methodOverride = require('method-override')
const app = express();

var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var open = require('gulp-open');

var Paths = {
    HERE: './',
    DIST: 'dist/',
    EJS: './views/.ejs',
    CSS: './assets/css/',
    SCSS_TOOLKIT_SOURCES: './assets/scss/material-dashboard.scss',
    SCSS: './assets/scss/**/**'
  };
  
  gulp.task('compile-scss', function() {
    return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write(Paths.HERE))
      .pipe(gulp.dest(Paths.CSS));
  });
  
  gulp.task('watch', function() {
    gulp.watch(Paths.SCSS, ('compile-scss'));
  });
  
  gulp.task('open', function() {
    gulp.src('examples/dashboard.html')
      .pipe(open());
  });
  
    gulp.task('open-app', gulp.series('open', 'watch'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const DashboardRouter = require("./routers/DashboardRouter");


app.use(DashboardRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
});


/*
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Rota padrão</h1>
                <a href="/exemplo/dashboard">Home</a>
            </body>
        </html>
    `);
});**/