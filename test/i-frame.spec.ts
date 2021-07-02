import { browser } from 'protractor';
import {
  IFramePage,
} from '../src/page';

describe('Given a practice iframe page', () => {
  const iFramePage: IFramePage = new IFramePage();

  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });

  it('Then it should have the title', async () => {
    expect(await iFramePage.getPageTitleText()).toEqual('Frames');
  });

  describe('When the height of an iframe wants to be modify', () => {
    const height = 500;
    beforeAll(async () => {
      await iFramePage.setFormFrameHeight(height);
    });

    it('Then it should have a new height', async () => {
      expect(await iFramePage.getIframeHeight()).toEqual(height);
    });

    describe('When switch to frame 1', () => {
      beforeAll(async () => {
        await iFramePage.switchToFrame();
      });

      it('Then it should have the title', async () => {
        expect(await iFramePage.getPageTitleText()).toEqual('This is a sample page');
      });

      describe('When switch to main page', () => {
        beforeAll(async () => {
          await iFramePage.switchToMainPage();
        });

        it('Then it should have the title', async () => {
          expect(await iFramePage.getPageTitleText()).toEqual('Frames');
        });
      });
    });
  });
});
