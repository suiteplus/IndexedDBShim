var idbModules = {  // jshint ignore:line
    util: {
        cleanInterface: false ,
        defaultDbSize : 4 * 1024 * 1024
    }
};

(function () {
    'use strict';

    var testObject = {test: true};
    //Test whether Object.defineProperty really works.
    if (Object.defineProperty) {
        try {
            Object.defineProperty(testObject, 'test', { enumerable: false });
            if (testObject.test) {
                idbModules.util.cleanInterface = true;      // jshint ignore:line
            }
        } catch (e) {
        //Object.defineProperty does not work as intended.
        }
    }
})();
