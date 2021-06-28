import { $, ElementFinder } from 'protractor';

export class BankPayment {
  private orderSummaryMenu: ElementFinder;

  constructor() {
    this.orderSummaryMenu = $('#cart_navigation > button > span');
  }

  public async goToOrderSummary(): Promise<void> {
    await this.orderSummaryMenu.click();
  }
}
