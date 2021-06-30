import {
  $, $$, ElementArrayFinder, ElementFinder,
  ExpectedConditions, browser,
} from 'protractor';

export class ProductListPage {
  private addToCardBttn: ElementFinder;
  private products: ElementArrayFinder;

  constructor() {
    this.products = $$('.product_list.row');
    this.addToCardBttn = $('#add_to_cart > button');

  }

  private findByProduct(productName: string): ElementFinder {
    return this.products.filter((product: ElementFinder) => product.$('[itemprop="name"]').getText().then((text : string) => text === productName)).first();
  }

  public async selectProduct (productName: string): Promise<void> {
    let product = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(product.$('img')), 3000);
    product.$('img').click();
  }

  public async addToCartMenu (): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCardBttn), 3000);
    this.addToCardBttn.click();
  }
}
