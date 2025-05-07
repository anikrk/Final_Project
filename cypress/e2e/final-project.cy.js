import UserData from "../fixtures/UserData.json"

describe('final project', () => {
    beforeEach(() => {
        cy.visit('https://testzootopia.loremipsum.ge/ka')

    }

    )

    it('Registration', () => {

        cy.get('.rprof > p').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type(UserData.Name + " " + UserData.LastName)
        cy.get(':nth-child(2) > .imail').type(UserData.Email)
        cy.get('.ipir').type(UserData.ID)
        cy.get(':nth-child(4) > .itel').type(UserData.Number)
        cy.get(':nth-child(5) > .ipass').type(UserData.Password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(UserData.Password)
        cy.get('#Group_15376').click()
        cy.get('.regsub').should('be.visible').should('have.text', 'რეგისტრაცია')
        cy.get('.regsub').click()



    })
   
    it('registration without accepting the terms and conditions', () => {

        cy.get('.rprof > p').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type(UserData.Name + " " + UserData.LastName)
        cy.get(':nth-child(2) > .imail').type(UserData.Email)
        cy.get('.ipir').type(UserData.ID)
        cy.get(':nth-child(4) > .itel').type(UserData.Number)
        cy.get(':nth-child(5) > .ipass').type(UserData.Password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(UserData.Password)
        cy.get('.regsub').should('be.visible').should('have.text', 'რეგისტრაცია')
        cy.get('.regsub').click()

    }
    )


    it('Registration with mismatched passwords',() =>{
        cy.get('.rprof > p').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type(UserData.Name + " " + UserData.LastName)
        cy.get(':nth-child(2) > .imail').type(UserData.Email)
        cy.get('.ipir').type(UserData.ID)
        cy.get(':nth-child(4) > .itel').type(UserData.Number)
        cy.get(':nth-child(5) > .ipass').type(UserData.Password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(UserData.WrongPassword)
        cy.get('#Group_15376').click()
        cy.get('.regsub').should('be.visible').should('have.text', 'რეგისტრაცია')
        cy.get('.regsub').click()
        cy.get(':nth-child(5) > .alert > img').should('be.visible')


    })

    it('Login user with correct data', () => {
        cy.login(UserData.Email, UserData.Password)
        cy.get('.menu-pop > .iprof > p').should('be.visible').should('have.text', 'პროფილი')
        cy.get('.menu-pop > .iprof > p').click()
        cy.get('h1').should('be.visible')

    })

    it('Login user with incorrect data', () => {

        cy.get('.menu-pop > .rprof').click()
        cy.get(':nth-child(5) > .imail').type(UserData.wrongMail)
        cy.get('.ipass').type(UserData.Password)
        cy.get('.avtorization > .input-shablon > .form-button').click()
        cy.get('.input-div.alert > .alert > img').should('be.visible')
        cy.get('.recovery-btn').should('have.text', 'აღდგენა')


    })

    it('password recovery', () => {
        cy.get('.rprof > p').click()
        cy.get(':nth-child(5) > .imail').type(UserData.Email)
        cy.get('.recovery-btn').should('be.visible').should('have.text', 'აღდგენა')
        cy.get('.recovery-btn').click()
        cy.get('#message-title').should('be.visible').should('have.text', 'პაროლის აღდგენა')

    })


    it('check empty basket', () => {
        cy.login(UserData.Email, UserData.Password)
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
        cy.get('.empty').should('contain.text', 'კალათა ცარიელია')




    })

    it('add product in basket', () => {
        cy.login(UserData.Email, UserData.Password)
        cy.get('.pug > .seepro').click()
        cy.get(':nth-child(2) > .price-cart > .product-cart').click()

    })

    it('increase product number in basket', () => {
        cy.login(UserData.Email, UserData.Password)
        cy.get('.pug > .seepro').click()
        cy.get(':nth-child(2) > .price-cart > .product-cart').click()
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > p').click()
        cy.get('.plus').click()
        cy.get('.spinner > input').should('have.value', 2)

    })

    it('delete product from basket',()=>{
        cy.login(UserData.Email, UserData.Password)
        cy.get('.pug > .seepro').click()
        cy.get(':nth-child(2) > .price-cart > .product-cart').click()
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > p').click()
        cy.get('#Group_15624').should('be.visible').click()
        cy.get('.empty > p').should('be.visible').should('have.text','კალათა ცარიელია')

    })

})
