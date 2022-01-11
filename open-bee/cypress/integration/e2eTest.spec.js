/// <reference types="cypress"/>

import Chance from 'chance'
const chance = new Chance();

describe('Openbee', () =>
{
    const name = "aardappel"
    const username = 'randomuser';
    const price = 20;
    const password = 'testtest';


    beforeEach(() =>
    {
        cy.visit('http://localhost:4200');
    });

    it('Has a title', () =>
    {
        cy.contains('To your online trading market')
        expect(2).to.equal(2)
    })

    it('Routes correctly', () => 
    {
        cy.contains('Sell').click();
        cy.contains('Your inventory')
    })

    it('Adds item', () =>
    {
        cy.contains('Sell').click();
        cy.contains('Add item').click();

        cy.get('input[name=name]').type(name);
        cy.get('input[name=description]').type(username);
        cy.get('input[name=price]').type(price);
        cy.get('option[name=market]').contains('Steam').click;
        cy.get('button[type=submit]').click();
    })
});