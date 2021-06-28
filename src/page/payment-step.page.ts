import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private bankPaymentMenu: ElementFinder;

  constructor() {
    this.bankPaymentMenu = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPaymentMenu(): Promise<void> {
    await this.bankPaymentMenu.click();
  }
}
