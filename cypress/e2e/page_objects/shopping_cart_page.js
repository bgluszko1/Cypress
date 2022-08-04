export class ShoppingCartPage {

    static gettingPrices() {
        cy.fixture("prices.json").then(pricesData =>{
            cy.get('#product_price_4_16_725226 > .price').should("have.text", pricesData[0].price);
            cy.get('#product_price_2_7_725226 > .price').should("have.text", pricesData[1].price);
        })
    }
}