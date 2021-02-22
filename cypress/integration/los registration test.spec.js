describe("Registration test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
       // cy.wait(10000)
    })
    it('Click on registration button', () => {
        //cy.get('.nav-link').eq(1).click()
        cy.get("a[href='/register']").click()
    })
    
    
    it('Registration with valid credential', () => {
       //cy.get.clear().type
        cy.get('#last-name').type('Strgulc')
        cy.get('#email').type('strgulc1234end@gmail.com')
        cy.get('#password').type('andrijana93')
        cy.get('#password-confirmation').type('andrijana93')
        cy.get('input[type="checkbox"]').click()
        cy.get('button').click()
    
        //cy.get('getter'(zapisi bilo sta)).clear()
      //  cy.get('getter').type('bla bla')

    })
})