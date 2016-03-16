var angular = require( 'angular' );
var helpers = require( '../test-helper' );
var expect = helpers.expect;

describe( 'widget viewer directive', function() {
    beforeEach( function() {
        var self = this;

        self.widgetStorage = {
            notify: self.sinon.stub();
        };

        self.widgetEditor = self.sinon.stub();

        angular.mock.module( 'widgetProject.widgetViewer', {
            widgetStorage: self.widgetStorage,
            widgetEditor: self.widgetEditor
        });

        // The rest of the test...
    });
});