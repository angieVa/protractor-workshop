import { resolve } from 'path';
import {
  readFileSync, existsSync, mkdirSync, writeFileSync,
} from 'fs';

export class DownloadService {
  private tempFolder: string;

  constructor() {
    this.tempFolder = resolve(process.cwd(), 'temp');
  }

  private async createFolder(): Promise<void> {
    if (!existsSync(this.tempFolder)) {
      mkdirSync(this.tempFolder);
    }
  }

  public async downloadFile(link: string, filename): Promise<void> {
    this.createFolder();
    const base64Data = (link.replace(/^data:image\/jpeg;base64,/, ''));

    writeFileSync(resolve(this.tempFolder, filename), base64Data, 'base64');
  }

  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(resolve(this.tempFolder, filename));
  }

}
