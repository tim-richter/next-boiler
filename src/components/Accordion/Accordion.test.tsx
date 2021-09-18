import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from './Accordion.stories';

describe('Primary State', () => {
  const { args }: any = Primary;

  it('renders all accordions', () => {
    render(<Primary {...args} />);
    expect(screen.getAllByRole('button').length).toEqual(4);
  });
});

describe('Edge Cases', () => {
  it('does not render if no image or empty images were given', () => {
    render(<Primary data={[]} defaultValue="default-1" />);
    expect(screen.queryAllByRole('button').length).toEqual(0);
  });
});
