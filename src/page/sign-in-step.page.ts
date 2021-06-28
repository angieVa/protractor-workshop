import { $, ElementFinder } from 'protractor';

export class SignInStep {
  private addressStep: ElementFinder;

  private email: ElementFinder;

  private password: ElementFinder;

  constructor() {
    this.email = $('#email');
    this.password = $('#passwd');
    this.addressStep = $('#SubmitLogin > span');
  }

  public async login(email: string, password: string): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    await this.addressStep.click();
  }
}
