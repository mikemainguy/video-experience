

describe('Testing Video App Sign Up', () => {
    //App should be intialized!
    it('Test the Video App doing Sign Up', () => {
      cy.visit("http://localhost:3000/")
      cy.get('#__next > main > div > div > div > a').click()      
    });

})
