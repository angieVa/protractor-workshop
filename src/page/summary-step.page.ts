import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private signInStep: ElementFinder;

  constructor() {
    this.signInStep = $('.cart_navigation span');
  }

  public async goToSignInStep(): Promise<void> {
    await this.signInStep.click();
  }
}
