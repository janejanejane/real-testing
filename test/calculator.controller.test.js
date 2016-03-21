describe( 'calculator', function() {
    beforeEach( module( 'calculatorApp' ) );

    var $controller;

    beforeEach( inject( function( _$controller_ ) {
        $controller = _$controller_;
    }));

    describe( 'sum', function() {
        it( '1 + 2 should equal to 3', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect( $scope.z ).toBe( 3 );
        });

        it( 'z should have default value of zero', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            expect( $scope.z ).toBe( 0 );
        });
    });

    describe( 'quotient', function() {
        it( '10 / 0 should return 0', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 10;
            $scope.y = 0;
            $scope.quotient();
            expect( $scope.z ).toBe( 0 );
        });

        it( '10 / 5 should return 2', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 10;
            $scope.y = 5;
            $scope.quotient();
            expect( $scope.z ).toBe( 2 );
        });        
    });
});