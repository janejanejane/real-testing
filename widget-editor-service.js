var angular = require( 'angular' );
var _ = require( 'lodash' );

angular.module( 'widgetProject.widgetEditor' ).service( 'widgetEditor', [ '$modal', '$q', '$templateCache', function(
    $modal,
    $q,
    $templateCache ) {
    return function( widgetObject ) {
        var deferred = $q.defer();

        var templateId = _.uniqueId( 'widgetEditorTemplate' );
        $templateCache.put( templateId, require( './widget-editor-template.html' ) );

        var dialog = $modal({
            template: templateId
        });

        dialog.$scope.widget = widgetObject;

        dialog.$scope.save = function() {
            // Do some saving things
            deferred.resolve();
            dialog.destroy();
        };

        dialog.$scope.cancel = function() {
            deferred.reject();
            dialog.destroy();
        };

        return deferred.promise;
    }
} ] );