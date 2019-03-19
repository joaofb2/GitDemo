const CheckoutPagePO = require('../page.po/checkout.po.js')

const checkoutPagePO = new CheckoutPagePO()


describe('Home Page', function () {

    var EC = protractor.ExpectedConditions;
    beforeAll(function () {
        browser.get('https://qaclickacademy.github.io/protocommerce/');

        checkoutPagePO.shopBtn.click();
        browser.wait(EC.visibilityOf(checkoutPagePO.checkoutBtn), 2000)

        checkoutPagePO.product.each(function (btn, index) {
            if (index == 0 || index == 1) {
                btn.click();
            }
        })

        checkoutPagePO.checkoutBtn.click();
        checkoutPagePO.goToCheckout.click();

        browser.wait(EC.visibilityOf(checkoutPagePO.country), 3000)
    });

    xit('Click Terms & conditions and then close Alert', () => {
        checkoutPagePO.termsCond.click();
        browser.wait(EC.alertIsPresent(), 2000);
        browser.switchTo().alert().accept().then(function ()  // or dismiss()
        {
            browser.sleep(1000);

        });
        browser.wait(EC.elementToBeClickable(checkoutPagePO.purchaseBtn), 3000)
    });

    xit('Check the CheckBox', () => {
        checkoutPagePO.checkboxTC.click();
    });

    it('Search and Select Portugal', () => {
        checkoutPagePO.country.sendKeys("po");
        browser.wait(EC.elementToBeClickable(checkoutPagePO.suggetions), 5000)

        expect(checkoutPagePO.suggetionCountry.get(0).getText()).toBe("Poland");
        checkoutPagePO.suggetionCountry.get(1).click();


    });



    xit('Click to Purchase and Check Message', () => {
        checkoutPagePO.purchaseBtn.click();
        expect(checkoutPagePO.buySuccessMsg.getText()).toBe("Success! Thank you! Your order will be delivered in next few weeks :-).");
    });


});
