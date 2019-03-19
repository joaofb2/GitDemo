class ShopPagePO {
    constructor () {
        this.shopBtn = element(by.partialLinkText('Shop'));
        this.titleMain = element.all(by.className('navbar-brand')).get(0);
        this.category = element(by.className('list-group'));

        this.category1 = element.all(by.className('list-group-item')).get(0);
        this.category2 = element.all(by.className('list-group-item')).get(1);
        this.category3 = element.all(by.className('list-group-item')).get(2);
        
        //carousel
        this.carouselNext = element(by.className('carousel-control-next'));
        this.carouselPrev = element(by.className('carousel-control-prev'));
        this.Slide1 = element(by.css('img[alt="First slide"]'));
        this.Slide2 = element(by.css('img[alt="Second slide"]'));
        this.Slide3 = element(by.css('img[alt="Third slide"]'));
        
        //Products
        this.product1 = element.all(by.className('btn btn-info')).get(0);
        this.product2 = element.all(by.className('btn btn-info')).get(1);
        this.product3 = element.all(by.className('btn btn-info')).get(2);
        this.product4 = element.all(by.className('btn btn-info')).get(3);
        this.checkoutBtn = element(by.className('nav-link btn btn-primary'));

    }
}

module.exports = ShopPagePO