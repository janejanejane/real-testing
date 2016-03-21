angular.module( 'calculatorApp', [] )
    .controller( 'CalculatorController', function CalculatorController( $scope ) {
        $scope.z = 0;
        $scope.sum = function() {
            $scope.z = $scope.x + $scope.y;
        };

        $scope.quotient = function() {
            $scope.z = ( $scope.y === 0 ) ? 0 : $scope.x/$scope.y;
        };
    });