import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {
  private iframe1: ElementFinder;
  private pageTitle: ElementFinder;

  constructor() {
    this.iframe1 = $('#frame1');
    this.pageTitle = $('.main-header');
  }

  public async getPageTitleText(): Promise<string> {
    return await this.pageTitle.getText();
  }

  public async switchToFrame(): Promise<void> {
    this.pageTitle = $('#sampleHeading');
    await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    this.pageTitle = $('.main-header');
    await browser.switchTo().defaultContent();
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getIframeHeight(): Promise<number> {
    return (await this.iframe1.getSize()).height;
  }
}
