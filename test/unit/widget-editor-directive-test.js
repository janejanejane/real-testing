var angular = require( 'angular' );
var helpers = require( '../test-helper' );
var expect = helpers.expect;

describe( 'widget storage service', function() {
    beforeEach( function() {
        var self = this;

        self.modal = function() {
            return {
                $scope: {},
                destroy: self.sinon.stub()
            }
        };

        angular.mock.module( 'widgetProject.widgetEditor', { $modal: self.modal } );
    });

    it( 'should persist changes when the user saves', function( done ) {
        var self = this;

        angular.mock.inject( [ 'widgetModal', '$rootScope', function( widgetModal, $rootScope ) {
            var widget = { name: 'Widget' };
            var promise = widgetModal( widget );

            self.modal.$scope.save();

            // Somehow test that the widget was saved
            expect( self.modal.destroy ).to.have.been.called;
            expect( promise ).to.be.fulfilled.and.notify( done );

            $rootScope.$digest();
        } ] );

        it( 'should not save when the user cancels', function( done ) {
            var self = this;

            angular.mock.inject( [ 'widgetModal', '$rootScope', function( widgetModal, $rootScope ) {
                var widget = { name: 'Widget' };
                var promise = widgetModal( widget );

                self.modal.$scope.cancel();
                expect( self.modal.destroy ).to.have.been.cancelled;
                expect( promise ).to.be.rejected.and.notify( done );

                $rootScope.$digest();
            } ] );
        });
    });
});