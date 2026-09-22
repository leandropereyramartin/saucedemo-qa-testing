describe('SauceDemo - Shopping Cart & Checkout Tests', () => {

  beforeEach(() => {
    // Visit home and log in with standard user before each test
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('should add an item to cart and complete the checkout process successfully', () => {
    // 1. Add backpack to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Verify badge shows 1 item
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // 2. Go to cart
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // 3. Proceed to checkout
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    // 4. Fill checkout information
    cy.get('[data-test="firstName"]').type('Leandro');
    cy.get('[data-test="lastName"]').type('Pereyra');
    cy.get('[data-test="postalCode"]').type('1900');
    cy.get('[data-test="continue"]').click();

    // 5. Overview page & Finish order
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="finish"]').click();

    // 6. Assert order completion message
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

});