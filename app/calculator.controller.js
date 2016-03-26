angular.module( 'calculatorApp', [] )
    .controller( 'CalculatorController', function CalculatorController( $scope ) {
        $scope.z = 0;
        $scope.sum = function() {
            $scope.z = $scope.x + $scope.y;
        };

        $scope.difference = function() {
            $scope.z = $scope.x - $scope.y;
        };

        $scope.multiply = function() {
            $scope.z = $scope.x * $scope.y;
        };

        $scope.quotient = function() {
            $scope.z = ( $scope.y === 0 ) ? 0 : $scope.x/$scope.y;
        };

        $scope.power = function() {
            $scope.z = Math.pow( $scope.x, $scope.y );
        };
    });