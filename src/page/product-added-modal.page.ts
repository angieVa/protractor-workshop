import {
  $, ElementFinder, ExpectedConditions, browser,
} from 'protractor';

export class ProductAddedModal {
  private shoppingCardMenu: ElementFinder;

  constructor() {
    this.shoppingCardMenu = $('#layer_cart [title="Proceed to checkout"]');
  }

  public async goToShoppingCartSummary(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.shoppingCardMenu), 3000);
    await this.shoppingCardMenu.click();
  }
}
