

describe("Loign test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
       // cy.wait(10000)
    })
    it('Click on login button', () => {
        //cy.get('.nav-link').eq(1).click()
        cy.get("a[href='/login']").click()
    })
    
    it('Login with valid credential', () => {
        cy.get('#email').type('strgulc.andrijana@gmail.com')
        cy.get('#password').type('andrijana93')
        cy.get('button').click()
    
    })

    it('Logout click', () => {
        cy.get("a[role = 'button ']").click()
        //cy.get('nav-link nav-buttons').eq(4)click()
    })

})

