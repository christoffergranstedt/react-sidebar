import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersonProvider } from './Contexts/Person/PersonProvider'
import App from './App'
import { server } from './Mocks/Server'
import { rest } from 'msw'

// IN setupTests.ts the mockserver is set up to listen to the api-get-request

describe('Home Page', () => {
  test('should render "Nothing is selected" on page load when no element is selected', () => {
    render(<Router><App /></Router>)
    expect(screen.getByText('Nothing is selected')).toBeVisible()
  })

  test('should render the name "Root" in the sidebar', async () => {
    const { findByText } = render(
      <PersonProvider>
        <Router>
          <App />
        </Router>
      </PersonProvider>
    )
    expect(await findByText('Root')).toBeVisible()
  })

  test('should render the name of the clicked person in side bar', async () => {
    const { findByText, getByText } = render(
      <PersonProvider>
        <Router>
          <App />
        </Router>
      </PersonProvider>
    )

    fireEvent.click(await findByText('Root'))
    expect(getByText('The selected side bar person is "Root"')).toBeVisible()
  })

  test('should NOT render one of the children of root when down arrow havent been clicked', async () => {
    const { findByText } = render(
      <PersonProvider>
        <Router>
          <App />
        </Router>
      </PersonProvider>
    )

    await findByText('Root')
    expect(screen.queryByText('Phyllis Lueilwitz')).not.toBeInTheDocument()
  })

  test('should render one of the children of root when clicking down arrow', async () => {
    const { findByText } = render(
      <PersonProvider>
        <Router>
          <App />
        </Router>
      </PersonProvider>
    )

    await findByText('Root')
    fireEvent.click(await findByText('⋎'))
    expect(screen.queryByText('Phyllis Lueilwitz')).toBeInTheDocument()
  })

  test('should render error alert when error from server', async () => {
    server.use(
      rest.get('https://61f5037b62f1e300173c3f8d.mockapi.io/node', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const { findByRole } = render(
      <PersonProvider>
        <Router>
          <App />
        </Router>
      </PersonProvider>
    )
    expect(await findByRole('alert')).toHaveTextContent('There was an error. Please try again.')
  })
})
