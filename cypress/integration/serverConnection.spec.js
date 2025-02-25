describe('Server Connection Test', () => {
    it('should connect to the server and return a successful response', () => {
      cy.request('http://localhost:3001') 
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.include('MongoDB connected successfully');
        });
    });

    it('should check the database connection and password', () => {
      cy.request('http://localhost:3001/check-db-connection')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.include('Database connection successful');
          expect(response.body).to.include('Password verified');
        });
    });
});