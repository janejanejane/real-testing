var angular = require( 'angular' );
var helpers = require( '../test-helper' );
var expect = helpers.expect;

describe( 'nested widget directive', function() {
    beforeEach( function() {
        var self = this;

        self.widgetStorage = {
            destroy: self.sinon.stub()
        };

        self.widgetEditor = self.sinon.stub();

        angular.mock.module( 'widgetProject.widgetViewer', {
            widgetStorage: self.widgetStorage,
            widgetEditor: self.widgetEditor
        });

        angular.mock.inject( [ '$rootScope', '$compile', '$controller', function(
            $rootScope,
            $compile,
            $controller
            ) { 
            self.parentScope = $rootScope.new();
            self.childScope = $rootScope.new();

            self.compile = function() {
                self.childScope.widget = { id: 1, name: 'widget1' };
                self.parentElement = $compile( '<widget-organizer></widget-organizer>' )( self.parentScope );

                self.parentScope.$digest();

                self.childElement = angular.element( '<nested-widget widget="widget"></nested-widget>' );

                self.parentElement.append( self.childElement );

                self.element = $compile( self.childElement )( self.childScope );
                self.childScope.$digest();
            };
        } ] );

        self.compile();
        self.isolateScope = self.element.isolateScope();
    });

    it( 'edits the widget', function() {
        var self = this;
        self.isolateScope.edit();
        self.rootScope.$digest();
        expect( self.widgetEditor ).to.have.been.calledWith( self.childScope.widget );
    });
});