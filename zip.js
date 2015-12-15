cordova.define("cordova-plugin-zip.Zip", function(require, exports, module) {
    var Zip = function () {
    };

    Zip.prototype.unzip = function (fileName, outputDirectory, callback, progressCallback) {
        var win = function (result) {
            if (result && typeof result.loaded != "undefined") {
                if (progressCallback) {
                    return progressCallback({
                        loaded: result.loaded,
                        total: result.total
                    });
                }
            } else if (callback) {
                callback(0);
            }
        };
        var fail = function (result) {
            if (callback) {
                callback(-1);
            }
        };
        cordova.exec(win, fail, 'Zip', 'unzip', [fileName, outputDirectory]);
    };

    module.exports = Zip;
});