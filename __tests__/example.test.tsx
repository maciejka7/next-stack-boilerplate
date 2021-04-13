import React from 'react'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { handlers } from '../mocks/handlers'
import { Techs } from '../components'

const server = setupServer(...handlers)

describe('example test', () => {

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('displays components loading state', async () => {
    render(<Techs />)
    const loading = screen.getByText(/loading/i)
    expect(loading).toBeTruthy;
  })

  test('load data from api', async () => {
    render(<Techs />);
    await waitFor(() => screen.getByText(/Reactjs/i), { timeout: 5000 })
  })
});