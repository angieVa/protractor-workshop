import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

const firefoxConfig = {
  browserName: 'firefox',
  platform: 'linux',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1,
};

const chromeConfig = {
  browserName: 'chrome',
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1,
};

const multiCapabilities = [chromeConfig, firefoxConfig];

export const config: Config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000,
  },
  multiCapabilities,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  },
};
