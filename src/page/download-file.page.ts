import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';
import { DownloadService } from '../service/download.service';

export class DownloadFile {
  private downloadButton: ElementFinder;

  constructor() {
    this.downloadButton = $('#downloadButton');
  }

  public async download(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.downloadButton), 3000);
    const downloadService = new DownloadService();
    await downloadService.downloadFile(await this.downloadButton.getAttribute('href'), 'picture.jpeg');
  }

  public readFileFromTemp(filename: string): Buffer {
    const downloadService = new DownloadService();
    return downloadService.readFileFromTemp(filename);
  }

}
