var helpers = require( '../test-helper' );
var expect = helpers.expect;
var WidgetsPage = require( './pages/widgets=page' );

describe( 'creating widgets', function() {
    beforeEach( function() {
        this.page = new WidgetsPage();
        this.page.get();
    });

    it( 'should create a new widget', function() {
        expect( this.page.firstWidget ).to.be.undefined;
        expect( this.page.widgetCreateForm.isDisplayed() ).to.eventually.be.true;
        this.page.widgetCreateNameField.sendKeys( 'New Widget' );
        this.page.widgetCreateSubmit.click();
        expect( this.page.firstWidget.getText() ).to.eventually.equal( 'Name: New Widget' );
    });
});