describe('Database Connection and User Creation Tests', () => {
  it('should connect to the database', () => {
    cy.task('connectToDatabase').then((result) => {
      expect(result).to.equal('Connected');
    });
  });

  it('should create a new user', () => {
    const newUser = {
      username: 'testuser',
      password: 'password123',
    };

    cy.task('createUser', newUser).then((result) => {
      expect(result).to.equal('User Created');
    });
  });
});