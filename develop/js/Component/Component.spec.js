describe('Component Class: ', function () {

    describe('Testing method .checkType()', function () {

        var types = {
            'object': {},
            'array': [],
            'string': '',
            'nimber': 0,
            'null': null,
            'boolean': false,
            'undefined': undefined,
            'DOMelement': document.createElement('div')
        };

        component = new Component;

        for (var type in types) {

            describe('Create instance with: ' + type, function () {

                it('Method Component.checkType() must return Object', function () {
                    expect(component.checkType(type).toString()).toEqual('[object Object]');
                    expect(component.checkType(type).length).toBeUndefined();
                    expect(component.checkType(type).slice).toBeUndefined();
                });

                it('Component.checkType().is() must be function', function () {
                    expect(typeof (component.checkType(type).is)).toEqual('function');
                });

                it('Component.checkType().is() must return boolean', function () {
                    expect(typeof (component.checkType(type).is())).toEqual('boolean');
                });
            });

        }

        describe('Tests:', function () {
            for (var testingType in types) {

                it('Checing ' + testingType, function () {

                    for (var type in types) {
                        if (type === testingType) {
                            expect(component.checkType(types[type]).is(testingType)).toBeTruthy();
                        } else {
                            expect(component.checkType(types[type]).is(testingType)).toBeFalsy();
                        }
                    }

                });

            }

        });

    });

});

