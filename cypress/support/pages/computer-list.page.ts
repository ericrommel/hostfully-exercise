export default class ComputerList {
  private _url = '/computers'
  
  private pageName = '#main > h1'
  private alertMessage = '#main > div.alert-message.warning'
  private addANewComputerButton = '#add'
  private addANewComputerButtonText = 'Add a new computer'
  private filterByNameInput = '#searchbox'
  private filterByNamePlaceholder = 'Filter by computer name...'
  private filterByNameButton = '#searchsubmit'
  private filterByNameButtonText = 'Filter by name'
  private firstRegister = '#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'
  private paginationTable = '#pagination'

  getnumberOfComputersRegistered() {
    return cy.get(this.pageName)
    .invoke('text')
    .then( (text) => {
      text = text.trim().split(' ')[0]
    })
    .as('numComputers')
  }

  checkPageLoaded(alertMessageText?: string): void {
    cy.get('body').should('be.visible')
    cy.get(this.pageName)
      .should('be.visible')
      .should('contain.text', 'computers found')
    cy.get(this.filterByNameInput)
      .should('be.visible')
      .should('have.attr', 'placeholder', this.filterByNamePlaceholder)
    cy.get(this.filterByNameButton)
      .should('be.visible')
      .should('have.value', this.filterByNameButtonText)
    cy.get(this.addANewComputerButton)
      .should('be.visible')
      .should('have.text', this.addANewComputerButtonText)
    if (alertMessageText) {
      cy.get(this.alertMessage)
        .should('be.visible')
        .should('contain.text', alertMessageText)
    }
  }

  load(): void {
    cy.visit(this._url)
    this.getnumberOfComputersRegistered()
    // cy.get('@numComputers').should('have.text', 574)
    this.checkPageLoaded()
  }

  fillSearch(text: string): void {
    cy.get(this.filterByNameInput).should('be.visible').type(text)
  }

  search(): void {
    cy.get(this.filterByNameButton).should('be.visible').click()
  }

  getAddButton() {
    const addBtn = cy.get(this.addANewComputerButton)
    addBtn.should('be.visible')
    return addBtn
  }

  getFilterButton() {
    const findBtn = cy.get(this.filterByNameButton)
    findBtn.should('be.visible')
    return findBtn
  }

  searchAComputer(name: string) {
    cy.get(this.filterByNameInput).type(name).should('have.value', name)
  }

  getFirstRegister(text: string) {
    const register = cy.get(this.firstRegister)
    register
      .should('be.be.visible')
      .should('contain.text', text)
    cy.get(this.paginationTable).should('be.visible')
    return register
  }
}
