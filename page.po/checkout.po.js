class CheckoutPagePO {
    constructor() {
        this.shopBtn = element(by.partialLinkText('Shop'));

        //Products
        this.product = element.all(by.className('btn btn-info'));

        this.checkoutBtn = element(by.className('nav-link btn btn-primary'));

        /////////////////////////////
        //Check Status
        this.status = element.all(by.className("text-success"));

        this.table = element(by.className('table table-hover'));

        //quantity
        this.quantity = element.all(by.id('exampleInputEmail1'));

        //remove btn
        this.removeFirst = element.all(by.css('btn btn-danger')).get(0);

        //total value
        this.total = element(by.className('text-right'));

        //values Price & Total for each Product
        this.values = element.all(by.className('col-sm-1 col-md-1 text-center'));

        this.goToCheckout = element(by.className('btn btn-success'));


        ///////////////////////////////
        //Checkout Page
        this.country = element(by.id('country'));

        this.checkboxTC = element(by.id('checkbox2'));

        this.termsCond = element(by.partialLinkText('& Conditions'));

        this.purchaseBtn = element(by.className('btn btn-success btn-lg'));

        this.buySuccessMsg = element(by.className('alert alert-success alert-dismissible'));

        this.suggetions = element(by.className('suggestions'));

        this.suggetionCountry = element(by.className('suggestions')).all(by.tagName("ul"));
    }
}

module.exports = CheckoutPagePO