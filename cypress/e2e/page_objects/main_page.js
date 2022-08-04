export class MainPage {

    static openAutomationPracticePage(){
        cy.visit("http://automationpractice.com/index.php");

    }

    static clickCategory(name){
        cy.get('#block_top_menu').contains(name).click();

    }

    static clickShoppingCart(){
        cy.get('.shopping_cart').contains("Cart").click();
    }
    
    static clickSignButton(){
        cy.get(".login").contains("Sign in").click();
    }

    static addElementToCart(number){
        cy.get(`#homefeatured > :nth-child(${number})`).contains('Add to cart').click();
        cy.get(`#homefeatured > :nth-child(${number}) > div > div.right-block > div.content_price > span`)
        .invoke('text').then(sometext => {
            const cena = sometext;
            cy.log("Cena: ",cena);
            cy.readFile("./cypress/fixtures/prices.json").then((list) => {
                list.push({price: cena.trim()})
                cy.writeFile("./cypress/fixtures/prices.json", list);
            })

      });
    }

    static checkIfConfirmationIsOpen(){
        cy.get('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2').contains('Product successfully added to your shopping cart');
    }
    
    static continueShopping() {
        cy.get('.continue > span').contains("Continue shopping").click();
    }

    static proceedToCheckout(){
        cy.get('.button-medium > span').contains("Proceed to checkout").click();
    }
}