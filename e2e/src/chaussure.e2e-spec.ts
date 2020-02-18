import {browser, element, logging, by} from 'protractor';
import {ChaussurePage} from './chaussure.po';


describe('test des articles', () => {
  let page: ChaussurePage;
  let nbChaussure: number;
  beforeEach(() => {
    page = new ChaussurePage();
    browser.get('/dashboard');
  });

  it('Recherche le lien ajouter', () => {
    element.all(by.css('.myTr')).then((totalRows) => {
      this.nbChaussure = totalRows.length;
      element(by.id('addChaussureLink')).click();
      page.sleep();
      expect(browser.driver.getCurrentUrl()).toContain('add');
    });
  });

  it('Test le formulaire ADD', () => {
    browser.get('/add');
    page.completeForm();
    page.sleep();
    let submitBtn = element.all(by.id('submitBtn'));
    submitBtn.click().then(() => {
      browser.get('/dashboard');
      element.all(by.css('.myTr')).then(totalRows => {
        this.nbChaussure += 1;
        const compare = this.nbChaussure;
        expect(totalRows.length).toEqual(compare);
        page.sleep();
      });
    });
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
