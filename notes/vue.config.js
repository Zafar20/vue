module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/modal/'
    : '/',
    assetsDir: '',
    productionSourceMap:false,
    filenameHashing:  true
}