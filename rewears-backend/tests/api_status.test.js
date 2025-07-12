
const request = require('supertest');
const app = require('../server');

describe('API Status Endpoint', () => {
  it('should return 200 OK for the root endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('ReWear Backend API is running!');
  });
});