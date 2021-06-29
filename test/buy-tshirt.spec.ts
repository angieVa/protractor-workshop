import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModal, SummaryStep, SignInStep, AddressStep,
  ShippingStep, PaymentStep, BankPayment, OrderSummary,
} from '../src/page';

describe('Go to Shopping page', () => {
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
  });

  describe('Buy a t-shirt process', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModal: ProductAddedModal = new ProductAddedModal();
    const summaryStep: SummaryStep = new SummaryStep();

    beforeAll(async () => {
      await menuContentPage.goToTShirtMenu();
      await productListPage.goToAddToCardMenu();
      await productAddedModal.goToShoppingCartSummary();
      await summaryStep.goToSignInStep();
    });

    describe('Login in the app process', () => {
      const signInStep: SignInStep = new SignInStep();

      beforeAll(async () => {
        await signInStep.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('Select address and shipping process', () => {
        const addressStep: AddressStep = new AddressStep();
        const shippingStep: ShippingStep = new ShippingStep();

        beforeAll(async () => {
          await addressStep.goToShippingStep();
          await shippingStep.goToPaymentStep();
        });

        describe('Bank Payment process', () => {
          const paymentStep: PaymentStep = new PaymentStep();
          const bankPayment: BankPayment = new BankPayment();
          const orderSummary: OrderSummary = new OrderSummary();

          beforeAll(async () => {
            await paymentStep.goToBankPaymentMenu();
            await bankPayment.goToOrderSummary();
          });

          it('then should be bought a t-shirt', async () => {
            await expect(orderSummary.getConfimantionText())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
