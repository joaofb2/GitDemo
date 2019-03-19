const ShopPagePO = require('../page.po/shop.po.js')

const shopPagePO = new ShopPagePO()


describe('Home Page', function () {
    var EC = protractor.ExpectedConditions;
    beforeAll(function () {
        browser.get('https://qaclickacademy.github.io/protocommerce/');

    });

    it('Go to Shop Page', () => {
        shopPagePO.shopBtn.click();

        browser.wait(EC.visibilityOf(shopPagePO.titleMain), 2000)
    });


    it('should have 3 Categorys...', () => {
        expect(shopPagePO.category1.getText()).toBe("Category 1");
        expect(shopPagePO.category2.getText()).toBe("Category 2");
        expect(shopPagePO.category3.getText()).toBe("Category 3");
    });


    it('should change to Next in carousel', () => {
        shopPagePO.carouselNext.click();
        browser.wait(EC.visibilityOf(shopPagePO.Slide1), 2000)

    });


    it('Should Add Products to Checkout', () => {
        shopPagePO.product1.click();
        shopPagePO.product2.click();
        expect(shopPagePO.checkoutBtn.getText()).toContain("2");
       
    });


    it('should change to Prev in carousel', () => {
        browser.wait(EC.elementToBeClickable(shopPagePO.carouselPrev), 2000)
        shopPagePO.carouselPrev.click();
        browser.wait(EC.visibilityOf(shopPagePO.Slide3), 3000)

    });


    it('should go to Checkout Page...', () => {
        shopPagePO.checkoutBtn.click();
    });

    
})