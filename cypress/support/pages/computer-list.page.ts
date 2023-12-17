export default class ComputerList {
  private _url = '/computers'
  
  private addANewComputerButton = '#add'
  private filterByNameInput = '#searchbox'
  private filterByNameButton = '#searchsubmit'

  load(): void {
    cy.visit(this._url)
    cy.get('body').should('be.visible')
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
}