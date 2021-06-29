import { $, ElementFinder } from 'protractor';

export class AddressStep {
  private shippingStep: ElementFinder;

  constructor() {
    this.shippingStep = $('#center_column [type="submit"]');
  }

  public async goToShippingStep(): Promise<void> {
    await this.shippingStep.click();
  }
}
