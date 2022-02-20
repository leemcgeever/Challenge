/// <reference types="cypress" />

// Tests to be run on a separate environemnt to the API Tests initially TO-DO:  Clear data between runs
describe('Verify the GET API Endpoint', () => {
    it('Test GET Request: Verify the body is empty as no data created.  No Seeded data ', () => {
        cy.request('http://localhost:3001/api/sessions')
                 .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.lengthOf(0);
                    expect(response.duration).to.be.lessThan(200)
            })
    });

    it('Test POST Request', () => {
        cy.createUserViaApi()
    });
})