// Test suite for user login endpoint

const request = require('supertest');
const app = require('../server'); 
const User = require('../models/User'); 
const bcrypt = require('bcryptjs'); 
const mongoose = require('mongoose');

describe('Auth - Login Endpoint', () => {
  let hashedPassword;

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/rewear_test_db_auth', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  beforeEach(async () => {
    await User.deleteMany({});
    hashedPassword = await bcrypt.hash('CorrectPassword123!', 10);
    await User.create({
      username: 'testuser_login',
      email: 'login@example.com',
      passwordHash: hashedPassword,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should login an existing user with correct credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login') // Assuming your login endpoint is /api/auth/login
      .send({
        email: 'login@example.com',
        password: 'CorrectPassword123!',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Login successful');
    expect(res.body).toHaveProperty('token'); // Expect a JWT token
    expect(res.body).toHaveProperty('userId');
  });

  it('should return 401 for incorrect password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'login@example.com',
        password: 'WrongPassword!',
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'Invalid credentials');
  });

  it('should return 401 for non-existent user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'nonexistent@example.com',
        password: 'AnyPassword!',
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'Invalid credentials');
  });
});