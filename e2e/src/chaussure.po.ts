import { browser, by, element, protractor } from 'protractor';

export class ChaussurePage {

  sleep() {
    browser.driver.sleep(2000);
  }
  completeForm() {
    let nom = element.all(by.id('nom'));
    let marque = element.all(by.css('.form-check-input'));
    let type = element.all(by.id('type'));
    let taille = element.all(by.id('taille'));
    nom.sendKeys('testNom');
    marque.get(0).click();
    type.sendKeys('Sport');
    taille.sendKeys('38');
  }
}
