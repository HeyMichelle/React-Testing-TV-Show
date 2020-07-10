import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, wait } from '@testing-library/react';
import Episodes from './Episodes';


const episodes = [
  {
    id: 1,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    },
    name: 'Chapter One: The Vanishing of Will Byers',
    season: 1,
    number: 1,
    summary: '<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy\'s friends conduct their own search, and meet a mysterious girl in the forest.</p>',
    runtime: 60
  },
  {
    id: 2,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    },
    name: 'Chapter One: The Vanishing of Will Byers',
    season: 1,
    number: 2,
    summary: '<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy\'s friends conduct their own search, and meet a mysterious girl in the forest.</p>',
    runtime: 60
  },
]

test('Episodes component renders empty array, then populated array after rerender', () => {
  const { queryAllByTestId, getByTestId, rerender } = render(<Episodes episodes={[]} />)

  expect(queryAllByTestId(/mapped-episode/)).toHaveLength(0)

  rerender(<Episodes episodes={episodes} />)

  expect(queryAllByTestId(/mapped-episode/i)).toHaveLength(2)
}) 