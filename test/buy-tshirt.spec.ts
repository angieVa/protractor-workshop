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

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
  });

  it('then should be bought a t-shirt', async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productListPage.goToAddToCardMenu();
    await (browser.sleep(3000));
    await productAddedModal.goToShoppingCartSummary();
    await (browser.sleep(3000));
    await summaryStep.goToSignInStep();
    await (browser.sleep(3000));

    await signInStep.goToAddressStep('aperdomobo@gmail.com', 'WorkshopProtractor');
    await (browser.sleep(3000));

    addressStep.goToShippingStep();
    await (browser.sleep(3000));

    await shippingStep.goToPaymentStep();
    await (browser.sleep(3000));
    await paymentStep.goToBankPaymentMenu();
    await (browser.sleep(3000));
    await bankPayment.goToOrderSummary();
    await (browser.sleep(3000));

    await expect(orderSummary.goToOrderConfirmation())
      .toBe('Your order on My Store is complete.');
  });
});
