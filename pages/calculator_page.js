var calculatorPage = function(){
    this.firstValue = element(by.model('first'));
    this.secondValue = element(by.model('second'));
    this.operation = function(value){
       return element(by.cssContainingText('select[class*=\'ng-valid\'] option', value));
       //element(by.model('operator')).$('[value = "MULTIPLICATION"]')
    }
    //this.goButton = element(by.id('gobutton'));
    this.goButton = element(by.buttonText('Go!'));
    this.result = function(){
        return element(by.css('.ng-binding')).getText();
    }

};

module.exports = new calculatorPage();