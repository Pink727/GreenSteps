describe('Server Connection Test', () => {
    it('should connect to the server and return a successful response', () => {
      cy.request('http://localhost:3001') // Adjust the URL to match your server's URL and port
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.include('MongoDB connected successfully'); // Adjust the expected response as needed
        });
    });
  });