/// <reference types = "Cypress" />
import {baseUrl} from "../../cypress.json"

describe('Funcionalidade: Login/Logout', () => {
    it('Sucesso no login', () => {
        cy.visit(baseUrl)
    })
})
