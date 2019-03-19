const ShopListPagePO = require('../page.po/shopList.po.js')

const shopListPagePO = new ShopListPagePO()


describe('Home Page', function () {

    var EC = protractor.ExpectedConditions;
    beforeAll(function () {
        browser.get('https://qaclickacademy.github.io/protocommerce/');

        shopListPagePO.shopBtn.click();
        browser.wait(EC.visibilityOf(shopListPagePO.checkoutBtn), 2000)

        shopListPagePO.product.each(function (btn, index) {
            if (index == 0 || index == 1) {
                btn.click();
            }
        })

        shopListPagePO.checkoutBtn.click();
    });


    it('Check Status of Products', () => {
        browser.wait(EC.visibilityOf(shopListPagePO.total), 3000)

        shopListPagePO.status.each(function (text) {
            expect(text.getText()).toBe("In Stock");
        })
    });

    it('Should Set values in the Quantity...', () => {

        shopListPagePO.quantity.each(function (quant, index) {
            if (index == 1) {
                quant.getText().then(function () {
                    quant.clear();
                    quant.sendKeys(5);
                })


            } else {
                quant.getText().then(function () {
                    quant.clear();
                    quant.sendKeys(2);
                })
            }
            // browser.sleep("5000")
        })

    })


    it('Check values - Price and Total for each Product', () => {
        shopListPagePO.values.each(function (v, index) {
            switch (index) {
                case 0:
                    expect(v.getText()).toBe("₹. 100000");
                    break;
                case 1:
                    expect(v.getText()).toBe("₹. 200000");
                    break;
                case 2:
                    expect(v.getText()).toBe("₹. 85000");
                    break;
                case 3:
                    expect(v.getText()).toBe("₹. 425000");
                    break;

                default:
                    break;
            }
        })
    });


    it('Check total value of ALL', () => {
        expect(shopListPagePO.total.getText()).toBe("₹. 625000");

    });

});
