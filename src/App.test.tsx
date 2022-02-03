import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersonProvider } from './Contexts/Person/PersonProvider'
import App from './App'

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
})
