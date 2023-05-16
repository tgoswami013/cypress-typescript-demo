import baseUrl from '../../cypress.config'
import Navbar from '../page-objects/components/NavBar'
type Url = string

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit(Cypress.env('baseUrl'))
        Navbar.clickSignIn()
    })
})
