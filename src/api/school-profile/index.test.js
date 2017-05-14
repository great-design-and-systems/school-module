import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { SchoolProfile } from '.'

const app = () => express(routes)

let schoolProfile

beforeEach(async () => {
  schoolProfile = await SchoolProfile.create({})
})

test('POST /school-profiles 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', address: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
})

test('GET /school-profiles 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /school-profiles/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${schoolProfile.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(schoolProfile.id)
})

test('GET /school-profiles/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /school-profiles/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${schoolProfile.id}`)
    .send({ name: 'test', address: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(schoolProfile.id)
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
})

test('PUT /school-profiles/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', address: 'test' })
  expect(status).toBe(404)
})

test('DELETE /school-profiles/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${schoolProfile.id}`)
  expect(status).toBe(204)
})

test('DELETE /school-profiles/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
