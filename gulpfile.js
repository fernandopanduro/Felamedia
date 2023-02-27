const { src, dest, parallel } = require('gulp')

// Imagnes
const cache    = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp     = require('gulp-webp');
const avif     = require('gulp-avif')

function imageMin(done) {

    const options = {
        optimizationLevel: 3,
    };

    src('./Assets/Img/*{png,jpg}')      //Buscar 
        .pipe(cache(imagemin(options))) //Minificar
        .pipe(dest('./Assets/Img'))     //Guardar

    done();
};

function versionWebp(done) {
    
    const options = {
        quality: 50,
    };

    src('./Assets/Img/*{png,jpg}') //Buscar 
        .pipe(webp(options))       //Webp
        .pipe(dest('./Assets/Img'))//Guardar

    done()
};

function versionAvif(done) {
    
    const options = {
        quality: 50,
    };

    src('./Assets/Img/*{png,jpg}')  //Buscar
        .pipe(avif(options))        //Avif
        .pipe(dest('./Assets/Img')) //Guardar

    done()
}


exports.imageMin    = imageMin;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev         = parallel(versionAvif, versionWebp, imageMin);