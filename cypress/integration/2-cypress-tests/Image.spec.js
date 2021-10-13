import Img from '../../../components/Image';


describe('Image.js component Cypress Test', () => {
    
    it('Should load an Image into a <div> with preloaded specs', () => {
        mount(<Image />);
        cy.get('#relative').contains('');
    });

})
