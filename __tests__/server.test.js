'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

describe('API server', () => {
  beforeAll(async () => {
    await sequelizeDatabase.sync();
  });

  afterAll(async () => {
    await sequelizeDatabase.drop();
  });

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it.skip('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body).toEqual('/bad');
    expect(response.body.message).toEqual('this is a bad route');
  });

  it('handles clothes GET path', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(response.text).toBeTruthy();
  });

  it.skip('handles clothes POST/PUT path', async () => {
    let response = await request.post('/clothes', { type: 'foo', price: 42 });
    expect(response.status).toEqual(200);
    expect(response.text).toBeTruthy();
    let blob = response.json();
    expect(blob.price).toEqual(42);
    response = await request.put(`/clothes/${blob.id}`, { type: 'foo', price: 43 });
    expect(blob.price).toEqual(43);
  });
});
