export class WomenPage {

    static openWomenCategory(){
        cy.get('#block_top_menu').contains("Women").click();
    }
    
    static checkIfWomenCategoryIsOpen(){
        cy.get('#center_column > h1').contains('Women');
    }

    static checkIfConfirmationIsOpen(){
        cy.get('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2').contains('Product successfully added to your shopping cart');
    }
    
    static continueShopping() {
        cy.get('.continue > span').contains("Continue shopping").click();
    }
}
