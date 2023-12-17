import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import ComputerList from '../../support/pages/computer-list.page'
import ComputerNew from '../../support/pages/computer-new.page'

Given('I go to the Computers Database page', function () {
  this.browser = new ComputerList()
  this.browser.load()
})

Given('I see {string} button', function (btnName: string) {
  switch(btnName) {
    case "Add a new computer":
      this.addBtn = this.browser.getAddButton()
      break
    case "Filter by name":
      this.filterBtn = this.browser.getFilterButton()
    default:
      break
  }
})

Given('I click on {string} button', function (btnName: string) {
  switch(btnName) {
    case "Add a new computer":
      this.addBtn.click()
      break
    case "Filter by name":
      this.filterBtn.click()
    default:
      break
  }
})

Given('I am on the "Add a computer" page', function () {
  this.newComputerPage = new ComputerNew()
  this.newComputerPage.checkPageLoaded()
})

When('When I fill out a valid {string}', function (inputValue) {
  this.newComputerPage.fillOutInputWith(inputValue, )
})
