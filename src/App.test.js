import React from 'react';
import { render, wait } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

test('App Component renders without crashing', () => {
  render(<App />)
})

test('fetching data text shows when no data is loaded yet', () => {
  const { getByText } = render(
    <App />
  )
  getByText(/fetching data/i)
}) 

// i meaning not case sensitive