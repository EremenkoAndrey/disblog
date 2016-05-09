var MainMenu = function (options) {
    console.log(this.checkType(options).is('object'));
};

MainMenu.prototype = Object.create(Component.prototype);

//MainMenu.prototype.init = function () {};

