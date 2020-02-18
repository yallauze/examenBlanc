import { browser, by, element, protractor } from 'protractor';

export class ChaussurePage {

  sleep() {
    browser.driver.sleep(2000);
  }
  completeForm() {
    let nom = element.all(by.id('nom'));
    let marque = element.all(by.css('input[value="nike"]'))[0];
    let type = element.all(by.id('type'));
    let taille = element.all(by.id('taille'));
    nom.sendKeys('testNom');
    marque.click();
    type.sendKeys('Sport');
    taille.sendKeys('38');
  }
}
