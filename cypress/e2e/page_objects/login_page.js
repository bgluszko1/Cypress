export class LoginPage {


    static openAutomationPracticeSignInPage(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    static inputAccount() {
        cy.fixture('example.json').then(signInData => {
            cy.get('#email').type(signInData[0].email);
            cy.get('#passwd').type(signInData[0].password);
        })
    }

    static clickLogInButton(){
        cy.get('#SubmitLogin').click();
    }

    static checkIfMyAccountIsOpen(){
        cy.get('.page-heading').contains("My account");
    }
    
    static failedLogIn(){
        cy.get('#center_column > :nth-child(2) > p').should('have.text',"There is 1 error");
    }
}