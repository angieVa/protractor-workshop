import { $, ElementFinder } from 'protractor';

export class OrderSummary {
  private orderConfirmationMenu: ElementFinder;

  constructor() {
    this.orderConfirmationMenu = $('#center_column > div > p > strong');
  }

  public async getConfimantionText(): Promise<string> {
    return this.orderConfirmationMenu.getText();
  }
}
