var angular = require( 'angular' );

angular.module( 'widgetSidebar.nestedWidget' ).directive( 'nestedSidebar', [ '$dropdown', 'widgetStorage', 'widgetEditor', function(
    $dropdown,
    widgetStorage,
    widgetEditor
    ) {
    return {
        restrict: 'E',
        template: require( './widget-sidebar-template.html' ),
        scope: {
            widget: '='
        },
        link: function( $scope, $element, $attributes ) {
            $scope.actions = [{
                text: 'Edit',
                click: 'edit()'
            }, {
                text: 'Delete',
                click: 'delete()'
            }];

            $scope.edit = function() {
                widgetEditor( $scope.widget );
            };

            $scope.delete = function() {
                widgetStorage.destroy( $scope.widget );
            };
        }
    }
} ] );