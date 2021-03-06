import { $, ElementFinder } from 'protractor';

export class ShippingStep {
  private paymentStep: ElementFinder;

  private termsOfService: ElementFinder;

  constructor() {
    this.termsOfService = $('#cgv');
    this.paymentStep = $('#center_column [type="submit"]');
  }

  public async goToPaymentStep(): Promise<void> {
    await this.termsOfService.click();
    await this.paymentStep.click();
  }
}
