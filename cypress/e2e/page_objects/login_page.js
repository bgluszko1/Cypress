export class LoginPage {


    static openAutomationPracticeSignInPage(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    static inputAccount() {
        cy.fixture('example.json').then(signInData => {
            cy.get('#email').type(signInData.email);
            cy.get('#passwd').type(signInData.password);
        })
    }

    static clickLogInButton(){
        cy.get('#SubmitLogin').click();
    }

    static checkIfMyAccountIsOpen(){
        cy.get('.page-heading').contains("My account");
    }
}