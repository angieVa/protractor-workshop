import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModal, SummaryStep, SignInStep, AddressStep,
  ShippingStep, PaymentStep, BankPayment, OrderSummary,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModal: ProductAddedModal = new ProductAddedModal();
  const summaryStep: SummaryStep = new SummaryStep();
  const signInStep: SignInStep = new SignInStep();
  const addressStep: AddressStep = new AddressStep();
  const shippingStep: ShippingStep = new ShippingStep();
  const paymentStep: PaymentStep = new PaymentStep();
  const bankPayment: BankPayment = new BankPayment();
  const orderSummary: OrderSummary = new OrderSummary();

  it('then should be bought a t-shirt', async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productListPage.goToAddToCardMenu();
    await (browser.sleep(3000));
    await productAddedModal.goToShoppingCartSummary();
    await (browser.sleep(3000));
    await summaryStep.goToSignInStep();
    await (browser.sleep(3000));

    await signInStep.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await (browser.sleep(3000));

    addressStep.goToShippingStep();
    await (browser.sleep(3000));

    await shippingStep.goToPaymentStep();
    await (browser.sleep(3000));
    await paymentStep.goToBankPaymentMenu();
    await (browser.sleep(3000));
    await bankPayment.goToOrderSummary();
    await (browser.sleep(3000));

    await expect(orderSummary.getConfimantionText())
      .toBe('Your order on My Store is complete.');
  });
});
