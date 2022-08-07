import { LoginPage } from "../page_objects/login_page";
import { MainPage } from "../page_objects/main_page";
import { ShoppingCartPage } from "../page_objects/shopping_cart_page";

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('Logging in', () => {
        beforeEach(function() {
            cy.fixture('example.json').then(function(signInData){
                this.signInData = signInData
            })
        })
        it('should log in', function (){
            MainPage.clickSignButton();
            cy.get('#email').type(this.signInData[0].email);
            cy.get('#passwd').type(this.signInData[0].password);
            LoginPage.clickLogInButton();
            LoginPage.checkIfMyAccountIsOpen();
        })
        it('should not log in', function (){
            MainPage.clickSignButton();
            cy.get('#email').type(this.signInData[1].email);
            cy.get('#passwd').type(this.signInData[1].password)
            LoginPage.clickLogInButton();
            LoginPage.failedLogIn();
        })
    })
})

context('shopping cart', () => {
    beforeEach(() => {
        LoginPage.openAutomationPracticeSignInPage();
        LoginPage.inputAccount();
        LoginPage.clickLogInButton();
        cy.writeFile("./cypress/fixtures/prices.json", []);
    })

    describe('Adding to cart', () => {
        
        it('should add element to cart', () => {
            MainPage.openAutomationPracticePage();
            MainPage.addElementToCart("Faded Short Sleeve T-shirts");
            MainPage.checkIfConfirmationIsOpen();
            MainPage.continueShopping();
            MainPage.addElementToCart("Blouse");
            MainPage.proceedToCheckout();
            ShoppingCartPage.gettingPrices();
        })
    })
})