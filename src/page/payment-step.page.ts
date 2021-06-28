import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private bankPaymentMenu: ElementFinder;

  constructor() {
    this.bankPaymentMenu = $('a.bankwire');
  }

  public async goToBankPaymentMenu(): Promise<void> {
    await this.bankPaymentMenu.click();
  }
}
