import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private signInStep: ElementFinder;

  constructor() {
    this.signInStep = $('#center_column [title="Proceed to checkout"]');
  }

  public async goToSignInStep(): Promise<void> {
    await this.signInStep.click();
  }
}
