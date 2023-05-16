import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
    static login(username: string, password: string) {
        cy.login(username, password)
    }

    static clickForgotPasswordLink() {
        cy.contains('Forgot Your Password?').click()
    }

    static displayErrorMessage() {
        cy.get('').should('be.visible')
    }
}
