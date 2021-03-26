import axios from 'axios'
const rootURL = 'http://localhost:4420'

describe('Auth API Endpoints', () => {

  beforeAll( async () => {
    //TODO: hit our server and see if it is running, otherwise kick out of tests
    
    //TODO: hit our delete for our test user
  })
  test('POST /api/register', async () => {
    const requestBody = { email: 'test@gmail.com', password: 'test'}
    const response = await axios.post(`${rootURL}/api/register`, requestBody)

    expect(response.status).toBe(201)
  })
})