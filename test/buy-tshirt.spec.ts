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
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModal: ProductAddedModal = new ProductAddedModal();
      const summaryStep: SummaryStep = new SummaryStep();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      await productListPage.addToCartMenu();
      await productAddedModal.goToShoppingCartSummary();
      await summaryStep.goToSignInStep();
    });

    describe('Login in the app process', () => {
      beforeAll(async () => {
        const signInStep: SignInStep = new SignInStep();

        await signInStep.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('Select address and shipping process', () => {
        beforeAll(async () => {
          const addressStep: AddressStep = new AddressStep();
          const shippingStep: ShippingStep = new ShippingStep();

          await addressStep.goToShippingStep();
          await shippingStep.goToPaymentStep();
        });

        describe('Bank Payment process', () => {
          const orderSummary: OrderSummary = new OrderSummary();

          beforeAll(async () => {
            const paymentStep: PaymentStep = new PaymentStep();
            const bankPayment: BankPayment = new BankPayment();

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
