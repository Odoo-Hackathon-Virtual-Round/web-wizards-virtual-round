// Test suite for user registration endpoint

const request = require('supertest');
const app = require('../server'); 
const User = require('../models/User'); 
const mongoose = require('mongoose');

describe('Auth - Register Endpoint', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/rewear_test_db_auth', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should register a new user successfully', async () => {
    const res = await request(app)
      .post('/api/auth/register') // Assuming your register endpoint is /api/auth/register
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'Password123!',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
    expect(res.body).toHaveProperty('userId');
  });

  it('should return 400 if email already exists', async () => {
    await User.create({ username: 'existing', email: 'test@example.com', passwordHash: 'hashed_pass' }); // Pre-create user

    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'anotheruser',
        email: 'test@example.com',
        password: 'Password123!',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'Email already in use');
  });
});