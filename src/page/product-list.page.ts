import {
  $, ElementFinder, ExpectedConditions, browser,
} from 'protractor';

export class ProductListPage {
  private addToCardMenu: ElementFinder;

  constructor() {
    this.addToCardMenu = $('#center_column [title="Add to cart"]');
  }

  public async goToAddToCardMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCardMenu), 3000);
    this.addToCardMenu.click();
  }
}
