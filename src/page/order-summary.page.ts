import { $, ElementFinder } from 'protractor';

export class OrderSummary {
  private orderConfirmationMenu: ElementFinder;

  constructor() {
    this.orderConfirmationMenu = $('p.cheque-indent');
  }

  public async getConfimantionText(): Promise<string> {
    return this.orderConfirmationMenu.getText();
  }
}
