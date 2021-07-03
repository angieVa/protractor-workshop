import { $, ElementArrayFinder, ElementFinder,
  element, by, browser, ExpectedConditions } from 'protractor';

interface PersonalInformation{
	firstName: string;
	lastName: string;
	sex: string;
	experience: number;
  profession: Array<string>;
  tools: Array<string>;
	continent: string;
  commands: Array<string>;
  picture: string;
}

const {resolve} = require("path");

export class PersonalInformationPage {
  private submitButton: ElementFinder;
  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private sexInput: ElementArrayFinder;
  private experienceInput: ElementArrayFinder;
 /*  private professionInput: ElementArrayFinder;
  private toolsInput: ElementArrayFinder; */
  private continentSelector: ElementFinder;
  private commandsSelector: ElementFinder;
  private pictureInput: ElementFinder;

  //button y confirmation BORRAR COMMENTS Y CAMBIAR LOCAL CONFIG

  constructor() {
    this.submitButton = element(by.name('submit'));
    this.firstNameInput = element(by.name('firstname'));
    this.lastNameInput = element(by.name('lastname'));
    this.sexInput = element.all(by.name('sex'));
    this.experienceInput = element.all(by.name('exp'));
/*     this.professionInput = element.all(by.name('profession'));
    this.toolsInput = element.all(by.name('tool')); */
    this.continentSelector = element(by.name('continents'));
    this.commandsSelector = element(by.name('selenium_commands'));
    this.pictureInput = element(by.name('photo'));
  }

  private async fillFullName(firstName: string, lastName: string): Promise<void> {
    await this.firstNameInput.sendKeys(firstName);
    await this.lastNameInput.sendKeys(lastName);
  }

  private async fillProfilePicture(photo: string): Promise<void> {
    await this.pictureInput.sendKeys(resolve(photo));
  }

  public async getProfilePictureValue(): Promise<string> {
    return await (await this.pictureInput.getAttribute('value')).split('\\').pop();
  }

  private async fillSex(sex: string): Promise<void> {
    await this.sexInput
        .filter(
            (elem: ElementFinder) =>
                elem
                  .getAttribute('value')
                  .then((val : string) => val === sex))
        .first().click();
  }

  private async fillExperience(experience: number): Promise<void> {
    await this.experienceInput
        .filter(
            (elem: ElementFinder) =>
                elem
                  .getAttribute('value')
                  .then((val : string) => val === experience.toString()))
        .first().click();
  }

  private async fillProfession(profession: string[]): Promise<void> {
    profession.forEach(async (elem) => {
      await $(`[name="profession"][value="${elem}"]`).click();
    });
  }

  private async fillTools(tools: string[]): Promise<void> {
    tools.forEach(async (elem) => {
      await $(`[name="tool"][value="${elem}"]`).click();
    });
  }

  private async fillContinet(continent: string): Promise<void> {
    await this.continentSelector.element(by.cssContainingText('option', continent)).click();
  }

  private async fillCommands(commands: string[]): Promise<void> {
    commands.forEach(async (elem) => {
      await this.commandsSelector.element(by.cssContainingText('option', elem)).click();
    });
  }

  public async submitForm(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.submitButton), 3000);
    await this.submitButton.click();
    await browser.switchTo().alert().accept();
  }

  public async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

  public async fillForm(personalInformation: PersonalInformation): Promise<void> {
    await this.fillFullName(personalInformation.firstName, personalInformation.lastName);
    await this.fillSex(personalInformation.sex);
    await this.fillExperience(personalInformation.experience);
    await this.fillProfession(personalInformation.profession);
    await this.fillProfilePicture(personalInformation.picture);
    await this.fillTools(personalInformation.tools);
    await this.fillContinet(personalInformation.continent);
    await this.fillCommands(personalInformation.commands);
  }
}
