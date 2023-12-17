import { faker } from '@faker-js/faker';

export default class ComputerNew {
  private _url = '/new'

  private pageName = '#main > h1'
  private computerNameInput = '#name'
  private introducedInput = '#introduced'
  private discontinuedInput = '#discontinued'
  private companyDropDownMenu = '#company'
  private createThisComputerButton = '#main > form > div > input'
  private createThisComputerButtonText = 'Create this computer'
  private cancelButton = '#main > form > div > a'
  private cancelButtonText = 'Cancel'
  private errorAlert = '#main > form > fieldset > div.clearfix.error > div > span'

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max - 1)) + 1
  }

  checkPageLoaded(): void {
    cy.get('body').should('be.visible')
    cy.get(this.pageName).should('have.text', 'Add a computer')
    cy.get(this.computerNameInput).should('be.visible')
    cy.get(this.introducedInput).should('be.visible')
    cy.get(this.discontinuedInput).should('be.visible')
    cy.get(this.companyDropDownMenu).should('be.visible')
    cy.get(this.createThisComputerButton)
      .should('be.visible')
      .should('have.value', this.createThisComputerButtonText)
    cy.get(this.cancelButton)
      .should('be.visible')
      .should('have.text', this.cancelButtonText)
  }

  checkAlertError(alertMessage: string): void {
    cy.get(this.errorAlert)
      .should('be.visible')
      .should('contain.text', alertMessage)
  }

  load(): void {
    cy.visit(this._url)
    this.checkPageLoaded()
  }

  setNewComputerName(text: string) {
    cy.get(this.computerNameInput)
      .type(text)
      .should('have.value', text)
  }

  setIntroducedDate(text: string) {
    cy.get(this.introducedInput)
      .type(text)
      .should('have.value', text)
  }

  setDiscontinuedDate(text: string) {
    cy.get(this.discontinuedInput)
      .type(text)
      .should('have.value', text)
  }

  setCompanyName(text: string) {
    cy.get(this.companyDropDownMenu)
      .select(text)
      .should('have.value', text)
  }
  
  getCreateButton() {
    const createBtn = cy.get(this.createThisComputerButton)
    createBtn
      .should('be.visible')
      .should('have.value', 'Create this computer')
    return createBtn
  }

  getCancelButton() {
    const cancelBtn = cy.get(this.cancelButton)
    cancelBtn
      .should('be.visible')
      .should('have.text', 'Cancel')
    return cancelBtn
  }
}