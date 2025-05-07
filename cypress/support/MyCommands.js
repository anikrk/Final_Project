Cypress.Commands.add('login', (mail, password) => {

    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type(mail)
    cy.get('.ipass').type(password)
    cy.get('.avtorization > .input-shablon > .form-button').click()


})
