import { browser } from 'protractor';
import {
  DownloadFile,
} from '../src/page';

describe('Given a practice download page', () => {
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/upload-download');
  });

  describe('When download the file', () => {
    const downloadFile: DownloadFile = new DownloadFile();
    beforeAll(async () => {
      await downloadFile.download();
    });

    it('Then the file should be in the temp folder', async () => {
      expect(downloadFile.readFileFromTemp('picture.jpeg').byteLength).toBeGreaterThanOrEqual(4000);
    });
  });
});
