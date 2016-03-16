var angular = require( 'angular' );

angular.module( 'widgetProject.widgetViewer' ).directive( 'widgetViewer', [ 'widgetStorage', 'widgetEditor', function(
    widgetStorage,
    widgetEditor
    ) {
    return {
        restrict: 'E',
        template: require( './widget-viewer-template.html' ),
        link: function( $scope, $element, $attributes ) {
            $scope.$watch( function() {
                return widgetStorage.notify;
            }, function( widgets ) {
                $scope.widgets = widgets;
            });

            $scope.edit = function( widget ) {
                widgetEditor( widget );
            };
        }
    }
} ] );