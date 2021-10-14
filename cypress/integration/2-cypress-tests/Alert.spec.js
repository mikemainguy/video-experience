import Alert from '../../../components/Alert';
import React from 'react';
import { mount } from '@cypress/react';


describe('Alert.js component Cypress Test', () => {
    
    it('Should load an Image into a <div> with preloaded specs', () => {
        mount(<FontAwesomeIcon />);
        cy.get('span').contains('Error');
    });

})
