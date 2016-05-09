(function (window) {
// Classes
var Component = function () {};

Component.prototype.checkType = function (checkingObject) {
    
    function informationAboutError(message, options){
        var options = options || {};

        if (!message && typeof (message) !== 'string') {
            throw new Error('Expected string in function informationAboutError');
        }
        
        if(options.name && typeof (options.name) === 'string') {
            message += ' in ' + options.name;
        }

        if(options.errorHendler && typeof (options.errorHendler) === 'function') {
            options.errorHendler(message);
        } else if (options.name && typeof (options.name) === 'string') {
            console.log(message);
        }
    }

    var tests = {
        object: function (options) {
            var toString = {}.toString;
            if (checkingObject,
                    toString.call(checkingObject) === '[object Object]' &&
                    typeof (checkingObject) !== 'function' &&
                    !checkingObject.length &&
                    checkingObject.nodeType === undefined &&
                    checkingObject.nodeType === undefined &&
                    !checkingObject.nodeName) {
                return true;
            }
            informationAboutError('It not (natural) Object', options);
            return false;
        },
        array: function (options) {
            if(Array.isArray(checkingObject)) {
                return true;
            }
            informationAboutError('It not an Array', options);
            return false;
        },
        string: function (options) {
            if(typeof (checkingObject) === "string") {
                return true;
            }
            informationAboutError('It not a String', options);
            return false;
        },
        nimber: function (options) {
            if(typeof (checkingObject) === "number") {
                return true;
            }
            informationAboutError('It not a Number', options);
            return false;
        },
        null: function (options) {
            if(checkingObject === null) {
                return true;
            }
            informationAboutError('It not a Null value', options);
            return false;
        },
        boolean: function (options) {
            if(typeof (checkingObject) === "boolean") {
                return true;
            }
            informationAboutError('It not a Bulean value', options);
            return false;
        },
        undefined: function (options) {
            if (typeof (checkingObject) === "undefined" &&
                    checkingObject === undefined) {
                return true;
            }
            informationAboutError('It not a Undefined value', options);
            return false;
        },
        domelement: function (options) {

            if (checkingObject && 
                    checkingObject.nodeName &&
                    checkingObject.nodeType !== undefined &&
                    checkingObject.innerHTML !== undefined) {
                return true;
            }
            informationAboutError('It not a DOM element', options);
            return false;
        }
    };

    return {
        is: function (check, options) {
            if(check) {
                check = check.toLowerCase();
            }
            
            if (!tests[check]) {
                throw new Error('Checking type ' + check + ' is uncorrect');
            }
            return tests[check](options);
        }
    };
};

// Example:
//function errorHendler(mes){
//    console.log(mes);
//}
//var component = new Component;
//component.check([]).is('DOMelement', {
//    name: 'Test',
//    errorHendler: errorHendler
//});
//console.log(component.check({}).is('object'));

// Components
    
var MainMenu = function (options) {
    console.log(this.checkType(options).is('object'));
};

MainMenu.prototype = Object.create(Component.prototype);

//MainMenu.prototype.init = function () {};


    var mainMenu = new MainMenu({
        element: document.getElementById('main-menu')
    });
    

})();