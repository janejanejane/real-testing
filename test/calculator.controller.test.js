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

    describe( 'difference', function() {
        it( '3 - 1 should equal 2', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 3;
            $scope.y = 1;
            $scope.difference();
            expect( $scope.z ).toBe( 2 );
        });

        it( '1 - 1 should equal 0', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 3;
            $scope.y = 1;
            $scope.difference();
            expect( $scope.z ).toBe( 2 );
        });

        it( '1 - 3 should equal -2', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 3;
            $scope.y = 1;
            $scope.difference();
            expect( $scope.z ).toBe( 2 );
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

    describe( 'multiply', function() {
        it( '2 * 1 should return 2', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 2;
            $scope.y = 1;
            $scope.multiply();
            expect( $scope.z ).toBe( 2 );
        });

        it( '0 * 1 should return 2', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 0;
            $scope.y = 1;
            $scope.multiply();
            expect( $scope.z ).toBe( 0 );
        });
    });

    describe( 'power', function() {
        it( '2 ^ 2 should return 4', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 2;
            $scope.y = 2;
            $scope.power();
            expect( $scope.z ).toBe( 4 );
        });

        it( '2 ^ 3 should return 8', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 2;
            $scope.y = 3;
            $scope.power();
            expect( $scope.z ).toBe( 8 );
        });

        it( '0 ^ 1 should return 0', function() {
            var $scope = {};
            var controller = $controller( 'CalculatorController', { $scope: $scope } );
            $scope.x = 0;
            $scope.y = 1;
            $scope.power();
            expect( $scope.z ).toBe( 0 );
        });
    });
});
