export default class Navbar {
    static clickOnLogo() {
        cy.get('').click()
    }

    static search(text: string) {
        cy.get('').type('${text} {enter}')
    }

    static clickSignIn() {
        cy.get('').click()
    }
}
