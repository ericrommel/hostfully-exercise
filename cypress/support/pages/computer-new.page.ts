export default class ComputerNew {
  private _url = '/new'

  private pageName = '#main.h1'
  private computerNameInput = '#name'
  private introducedInput = '#introduced'
  private discontinuedInput = '#discontinued'
  private companyDropDownMenu = 'company'
  private createThisComputerButton = '//*[@id="main"]/form/div/input'
  private cancelButton = '#main > form > div > a'

  checkPageLoaded(): void {
    cy.get('body').should('be.visible')
    cy.get(this.pageName).should('have.text', 'Add a computer')
    cy.get(this.computerNameInput).should('be.visible')
    cy.get(this.introducedInput).should('be.visible')
    cy.get(this.discontinuedInput).should('be.visible')
    cy.get(this.companyDropDownMenu).should('be.visible')
  }

  load(): void {
    cy.visit(this._url)
    this.checkPageLoaded()
  }

  fillOutInputWith(inputName: string, text: string) {
    switch(inputName) {
      case 'Computer name':
        cy.get(this.computerNameInput).type(text)
        break
      case 'Introduce':
        cy.get(this.introducedInput).type(text)
        break
      case 'Discontinued':
        cy.get(this.discontinuedInput).type(text)
        break
      case 'Company':
      default:
        cy.get(this.companyDropDownMenu).select(0)
        break
    }
  }

  getCreateButton() {
    const createBtn = cy.get(this.createThisComputerButton)
    createBtn.should('be.visible')
    return createBtn
  }

  getCancelButton() {
    const findBtn = cy.get(this.cancelButton)
  }
}