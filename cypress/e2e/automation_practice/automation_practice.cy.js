import { LoginPage } from "../page_objects/login_page";
import { MainPage } from "../page_objects/main_page";
import { ShoppingCartPage } from "../page_objects/shopping_cart_page";

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('Logging in', () => {
        before(function() {
            cy.fixture('example.json').then(function(signInData){
                this.signInData = signInData
            })
        })
        it('should log in', function (){
            MainPage.clickSignButton();
            cy.get('#email').type(this.signInData.email);
            cy.get('#passwd').type(this.signInData.password)
            LoginPage.clickLogInButton();
            LoginPage.checkIfMyAccountIsOpen();
        })
    })
})

context('shopping cart', () => {
    beforeEach(() => {
        LoginPage.openAutomationPracticeSignInPage();
        LoginPage.inputAccount();
        LoginPage.clickLogInButton();
    })

    describe('Adding to cart', () => {
        
        it('should add element to cart', () => {
            MainPage.openAutomationPracticePage();
            MainPage.addElementToCart(4);
            MainPage.checkIfConfirmationIsOpen();
            MainPage.continueShopping();
            MainPage.addElementToCart(2);
            MainPage.proceedToCheckout();
            ShoppingCartPage.gettingPrices();
        })
    })
})