import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCardMenu: ElementFinder;

  constructor() {
    this.addToCardMenu = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAddToCardMenu(): Promise<void> {
    await this.addToCardMenu.click();
  }
}
