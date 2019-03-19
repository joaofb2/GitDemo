const HomePagePO = require('../page.po/home.po.js')

const homePagePO = new HomePagePO()


describe('Home Page', function () {
    var EC = protractor.ExpectedConditions;
    beforeAll(function () {
        browser.get('https://qaclickacademy.github.io/protocommerce/');

    });


    it('Validate Name, Email and Password fields', function () {
        homePagePO.name.click();
        homePagePO.email.click();
        homePagePO.pass.click();

        //name field Errors
        expect(homePagePO.nameError.getText()).toBe('Name is required');
        homePagePO.name.sendKeys("J");
        expect(homePagePO.nameError.getText()).toBe('Name should be at least 2 characters');

        //email field Errors
        expect(homePagePO.emailError.getText()).toBe('Email is required');
        homePagePO.email.sendKeys("Jjjjjjj");

        //name field Correct
        homePagePO.name.sendKeys("Joao");
        expect(homePagePO.nameError.isPresent()).toBe(false);


        //pass field >6 letras numeros e ((???uppercase - PARA FAZER LATER???))
        var passCount;
        homePagePO.pass.sendKeys("asd");
        /* 
        homePagePO.pass.getText().then(function(text){
             passCount = text.length;
         });
         console.log("aaaaaa "+ Integer.parseInt(passCount));
         */
    });

    it('should check the checkbox', () => {
        homePagePO.checkBox1.click();
        expect(homePagePO.checkBox1.isSelected()).toBe(true);
    });

    it('should choose Female Gender', () => {
        homePagePO.gender.click();
        homePagePO.genderFemale.click();
        expect(homePagePO.gender.getAttribute('value')).toBe("Female");
    });


    it('should choose radio', () => {
        homePagePO.employedES.click();
        expect(homePagePO.employedES.isSelected()).toBe(true);
    });

    it('should choose Date birth', () => {
        homePagePO.dateBirth.click();
        homePagePO.dateBirth.sendKeys("30/02/1999");
        //browser.sleep(5000);
    });

    it('should click submit and show success message...', () => {
        homePagePO.submitBtn.click();
        expect(homePagePO.submitBtnMsg.isPresent()).toBe(true);
        homePagePO.submitBtnClose.click();
        expect(homePagePO.submitBtnMsg.isPresent()).toBe(false);

    });

    it('should Two-Way Data Binding example...', () => {
        homePagePO.name.clear();
        homePagePO.name2Binding.clear();
        homePagePO.name2Binding.sendKeys("asd");

        expect(homePagePO.name2Binding.getAttribute('value')).toBe("sasd");
        //browser.wait(EC.textToBePresentInElementValue(homePagePO.name, 'asd'), 2000);

    });


});