describe('Home Page', () => {
    beforeEach(() => {
        cy.fixture('courses.json').as("coursesJSON");
        cy.server();
        cy.route('/api/courses', "@coursesJSON")
            .as("courses");
        cy.visit('/')
    })
    it('should display list of course', () => {

        cy.contains("All Course");
        cy.wait('@courses');
        cy.get("mat-card").should("have.length", 9);
    });

    it('should display list of advanced course', () => {
        cy.get('.mat-mdc-tab').should("have.length",2);
        cy.get('.mat-mdc-tab').last().click();
        cy.get('.mat-mdc-tab-body-active .mat-mdc-card-title').its('length').should('be.gt',1);
        cy.get('.mat-mdc-tab-body-active .mat-mdc-card-title').first().should('contain', "Angular Security Course")
    });
});