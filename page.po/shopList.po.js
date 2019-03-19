class ShopListPagePO {
    constructor () {
        this.shopBtn = element(by.partialLinkText('Shop'));

        //Products
        this.product = element.all(by.className('btn btn-info'));

        this.checkoutBtn = element(by.className('nav-link btn btn-primary'));

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
    }
}

module.exports = ShopListPagePO