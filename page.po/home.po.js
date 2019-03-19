class HomePagePO {
    constructor () {
        this.name = element.all(by.name('name')).get(0);
        this.email = element(by.name('email'));
        this.pass = element(by.id('exampleInputPassword1'));
        this.nameError = element.all(by.className('alert alert-danger')).get(0);
        this.emailError = element.all(by.className('alert alert-danger')).get(1);
        this.checkBox1 = element(by.id('exampleCheck1'));
        this.gender = element(by.id('exampleFormControlSelect1'));
        this.genderFemale = element(by.css("option:nth-child(2)"));
        this.employedES = element(by.id('inlineRadio2'));
        this.dateBirth = element(by.name('bday'));
        this.submitBtn = element(by.className('btn btn-success'));
        this.submitBtnMsg = element(by.className('alert alert-success alert-dismissible'));
        this.submitBtnClose = element(by.className('close'));
        this.name2Binding = element.all(by.name('name')).get(1);
        
    }
}

module.exports = HomePagePO